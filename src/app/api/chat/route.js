import { NextResponse } from 'next/server'

// The OpenAI key stays on the server. The old Vite app shipped it to every
// visitor's browser as VITE_OPENAI_API_KEY, where anyone could copy it.

const MAX_MESSAGES = 12
const MAX_CHARS = 2000

const LANGUAGE_NAMES = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  ar: 'Arabic',
  zh: 'Simplified Chinese',
  ht: 'Haitian Creole',
}

function systemPrompt(language) {
  const today = new Date().toISOString().slice(0, 10)
  return `You are the Immigo assistant on a free educational website for immigrants in the United States. Today is ${today}.

Answer in ${LANGUAGE_NAMES[language] || 'the same language the user writes in'}, in plain words a 6th–8th grader can follow. Keep answers short (under ~200 words) and use bullet points for steps.

Rules:
- You give general information, not legal advice. For anything about a specific case, tell the person to talk to a licensed immigration attorney or a DOJ-accredited representative at a recognized nonprofit, and point them to the Resources page (immigrationlawhelp.org lists free and low-cost help).
- Warn people about "notarios" and immigration consultants: they cannot give legal advice in the U.S.
- Immigration law and enforcement policy change often. When something may have changed recently (fees, DACA, TPS, enforcement policies), say so and tell the person to check uscis.gov, a trusted legal nonprofit, or a lawyer.
- Core rights you can explain: everyone in the U.S. has the right to remain silent; do not open the door to immigration agents unless they show a warrant signed by a judge (an ICE administrative warrant, Form I-200 or I-205, does not let them enter a home without consent); you can refuse consent to searches; do not sign papers you do not understand without a lawyer; do not lie or show false documents; you can ask "Am I free to go?".
- If someone describes an emergency or danger, tell them to call 911. If someone is in detention or a family member was detained, point them to the ICE Online Detainee Locator (locator.ice.gov) and the Resources page hotlines.
- Never help anyone make false documents, lie to officials, or commit fraud.
- Never claim to be a lawyer. Never invent phone numbers, forms, fees or laws — if you are not sure, say so.

The site has these pages you can point to: Know Your Rights (/rights), Resources and hotlines (/resources), Take Action (/take-action), Paperwork Help with USCIS forms (/help).`
}

export async function POST(request) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'unavailable' }, { status: 503 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 })
  }

  const messages = Array.isArray(body?.messages) ? body.messages : []
  const cleaned = messages
    .filter((m) => (m?.role === 'user' || m?.role === 'assistant') && typeof m.content === 'string')
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }))

  if (cleaned.length === 0 || cleaned[cleaned.length - 1].role !== 'user') {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 })
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.3,
        max_tokens: 600,
        messages: [{ role: 'system', content: systemPrompt(body?.language) }, ...cleaned],
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      console.error('OpenAI request failed', response.status, data?.error?.type)
      return NextResponse.json({ error: 'upstream' }, { status: 502 })
    }

    const reply = data.choices?.[0]?.message?.content?.trim()
    if (!reply) return NextResponse.json({ error: 'upstream' }, { status: 502 })
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('OpenAI request error', error?.name)
    return NextResponse.json({ error: 'upstream' }, { status: 502 })
  }
}
