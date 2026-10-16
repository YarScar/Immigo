// Language-independent facts: phone numbers, URLs, video IDs.
// Every entry was checked on 2026-10-16. The words shown for each entry live in
// src/i18n/locales/*.json under the same id.

// Know-your-rights videos. The playlists are Immigo's own, built from ACLU and
// partner videos. Haitian Creole has no playlist yet, so it uses one ACLU video.
export const PLAYLISTS = {
  en: { list: 'PLtv4Zwto6R31UTw5ymlLzQEQaQu4vDPSI', source: 'ACLU & The Advocates for Human Rights' },
  es: { list: 'PLtv4Zwto6R33EQeWboaCqDK0m03CFP4Zz', source: 'ACLU & NILC' },
  ar: { list: 'PLtv4Zwto6R31YQyGOEUL1XFDydJRm9jA4', source: 'ACLU, Vermont Language Justice Project & African Communities Together' },
  fr: { list: 'PLtv4Zwto6R30xYio3yDfqWgdtSPSXWxx6', source: 'ACLU & Hello Neighbor' },
  zh: { list: 'PLtv4Zwto6R328Cyqm4_FuzfgSQJ7sTh5i', source: 'ACLU' },
  ht: { video: 'I0LTGWSqlVc', source: 'ACLU & Brooklyn Defender Services' },
}

// `phone` becomes a tap-to-call link; `dial` is shown as-is (e.g. a code dialed from a detention phone).
export const HOTLINES = [
  { id: 'detentionHotline', dial: '9233#', url: 'https://www.freedomforimmigrants.org/hotline' },
  { id: 'migraWatch', phone: '1-844-363-1423', url: 'https://unitedwedream.org/our-work/deportation-defense/migrawatch-hotline/' },
  { id: 'rapidResponse', url: 'https://www.cliniclegal.org/resources/state-and-local/50-states-rapid-response-numbers' },
  { id: 'iceDril', phone: '1-888-351-4024', url: 'https://www.ice.gov/contact' },
  { id: 'domesticViolence', phone: '1-800-799-7233', url: 'https://www.thehotline.org' },
  { id: 'trafficking', phone: '1-888-373-7888', url: 'https://humantraffickinghotline.org' },
  { id: 'twoOneOne', phone: '211', url: 'https://211.org' },
]

export const DETENTION_TOOLS = [
  { id: 'locator', url: 'https://locator.ice.gov/odls/' },
  { id: 'eoirCase', phone: '1-800-898-7180', url: 'https://acis.eoir.justice.gov/en/' },
  { id: 'proBono', url: 'https://www.justice.gov/eoir/list-pro-bono-legal-service-providers' },
  { id: 'nijc', url: 'https://immigrantjustice.org/for-immigrants/services/legal-services-for-detained-immigrants/' },
]

export const LEGAL_HELP = [
  { id: 'immigrationLawHelp', url: 'https://www.immigrationlawhelp.org' },
  { id: 'ianDirectory', url: 'https://www.immigrationadvocates.org/legaldirectory/' },
  { id: 'clinic', url: 'https://www.cliniclegal.org/find-legal-help/affiliates/directory' },
  { id: 'eoirRoster', url: 'https://www.justice.gov/eoir/recognition-accreditation-roster-reports' },
  { id: 'aila', url: 'https://www.ailalawyer.com' },
  { id: 'scams', url: 'https://reportfraud.ftc.gov', phone: '1-877-382-4357' },
]

export const COMMUNITY = [
  { id: 'unitedWeDream', url: 'https://unitedwedream.org' },
  { id: 'raices', url: 'https://www.raicestexas.org' },
  { id: 'makeTheRoad', url: 'https://maketheroadny.org' },
  { id: 'informedImmigrant', url: 'https://www.informedimmigrant.com' },
  { id: 'ilrc', url: 'https://www.ilrc.org/redcards' },
  { id: 'nilc', url: 'https://www.nilc.org' },
  { id: 'aclu', url: 'https://www.aclu.org/know-your-rights/immigrants-rights' },
]

// From the sociology project's "Reliable News" screen, plus two immigration-focused newsrooms.
export const NEWS = [
  { label: 'AP News', url: 'https://apnews.com' },
  { label: 'Reuters', url: 'https://www.reuters.com' },
  { label: 'NPR', url: 'https://www.npr.org' },
  { label: 'ProPublica', url: 'https://www.propublica.org' },
  { label: 'Documented', url: 'https://documentedny.com' },
  { label: 'The Marshall Project', url: 'https://www.themarshallproject.org' },
]

export const FACT_CHECKERS = [
  { label: 'FactCheck.org', url: 'https://www.factcheck.org' },
  { label: 'Snopes', url: 'https://www.snopes.com' },
  { label: 'Media Bias/Fact Check', url: 'https://mediabiasfactcheck.com' },
  { label: 'AllSides', url: 'https://www.allsides.com' },
]

export const ACTION_LINKS = {
  support: [
    { id: 'uwd', name: 'United We Dream', url: 'https://unitedwedream.org' },
    { id: 'raices', name: 'RAICES', url: 'https://www.raicestexas.org' },
    { id: 'makeTheRoad', name: 'Make the Road New York', url: 'https://maketheroadny.org' },
  ],
  speakOut: [{ id: 'findReps', name: 'USA.gov — Find your elected officials', url: 'https://www.usa.gov/elected-officials' }],
  educate: [],
  contact: [
    { id: 'findReps', name: 'USA.gov — Find your elected officials', url: 'https://www.usa.gov/elected-officials' },
    { id: 'fiveCalls', name: '5 Calls', url: 'https://5calls.org' },
    { id: 'resistbot', name: 'Resistbot', url: 'https://resist.bot' },
    { id: 'indivisible', name: 'Indivisible', url: 'https://indivisible.org' },
  ],
  petitions: [
    { id: 'uwd', name: 'United We Dream', url: 'https://unitedwedream.org' },
    { id: 'aclu', name: 'ACLU', url: 'https://action.aclu.org' },
    { id: 'change', name: 'Change.org', url: 'https://www.change.org' },
    { id: 'moveon', name: 'MoveOn', url: 'https://front.moveon.org' },
  ],
}

// Fees from the USCIS G-1055 fee schedule, edition 10/16/26. Wording per form in help.forms.<id>.
export const FORMS = [
  { id: 'i485', form: 'I-485', url: 'https://www.uscis.gov/i-485', fee: true },
  { id: 'i130', form: 'I-130', url: 'https://www.uscis.gov/i-130', fee: true },
  { id: 'i765', form: 'I-765', url: 'https://www.uscis.gov/i-765', fee: true },
  { id: 'n400', form: 'N-400', url: 'https://www.uscis.gov/n-400', fee: true },
  { id: 'i90', form: 'I-90', url: 'https://www.uscis.gov/i-90', fee: true },
  { id: 'i589', form: 'I-589', url: 'https://www.uscis.gov/i-589', fee: true },
  { id: 'i821d', form: 'I-821D', url: 'https://www.uscis.gov/i-821d', fee: true },
  { id: 'i821', form: 'I-821', url: 'https://www.uscis.gov/i-821', fee: true },
  { id: 'i912', form: 'I-912', url: 'https://www.uscis.gov/i-912', fee: false },
  { id: 'g325r', form: 'G-325R', url: 'https://www.uscis.gov/g-325r', fee: true },
]

export const USCIS_FEES_URL = 'https://www.uscis.gov/g-1055'

export const RED_CARDS_URL = 'https://www.ilrc.org/redcards'

export const RIGHTS_SOURCES = [
  { name: 'ACLU — Immigrants’ Rights (updated Aug 2026)', url: 'https://www.aclu.org/know-your-rights/immigrants-rights' },
  { name: 'ACLU — Rights in the 100-mile border zone', url: 'https://www.aclu.org/know-your-rights/border-zone' },
  { name: 'ACLU — Filming ICE interactions safely (Mar 2026)', url: 'https://www.aclu.org/news/immigrants-rights/your-questions-answered-filming-ice-interactions-safely' },
  { name: 'ILRC — Red cards in 59 languages', url: 'https://www.ilrc.org/redcards' },
  { name: 'American Immigration Council — ICE warrantless home-entry memo', url: 'https://www.americanimmigrationcouncil.org/blog/ices-secret-warrantless-home-entry-policy/' },
  { name: 'D.C. Circuit — Make the Road NY v. Mullin (expedited removal, June 2026)', url: 'https://media.cadc.uscourts.gov/opinions/docs/2026/06/25-5320-2179963.pdf' },
  { name: 'NILC — Bond eligibility update', url: 'https://www.nilc.org/resources/rapid-response-update-on-bond-eligibility-for-undocumented-immigrants/' },
  { name: 'USCIS — Alien registration requirement', url: 'https://www.uscis.gov/alienregistration' },
  { name: 'USCIS — DACA (Form I-821D)', url: 'https://www.uscis.gov/i-821d' },
  { name: 'USCIS — Temporary Protected Status', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' },
  { name: 'ICE — 287(g) program', url: 'https://www.ice.gov/identify-and-arrest/287g' },
  { name: 'ICE — Online Detainee Locator', url: 'https://locator.ice.gov/odls/' },
  { name: 'Immigration Policy Tracking Project — Protected areas rescinded', url: 'https://immpolicytracking.org/policies/dhs-rescinds-guidelines-for-enforcement-actions-in-or-near-protected-areas/' },
  { name: 'American Immigration Council — Plyler v. Doe', url: 'https://www.americanimmigrationcouncil.org/fact-sheet/plyler-v-doe-public-education-noncitizen-students/' },
  { name: 'Brookings — Immigration enforcement and U.S. schools (Apr 2026)', url: 'https://www.brookings.edu/articles/how-immigration-enforcement-is-harming-us-schools-and-students/' },
  { name: 'American Economic Review — Immigration enforcement and crime reporting (2026)', url: 'https://www.aeaweb.org/articles?id=10.1257%2Faer.20250305' },
  { name: 'EOIR — Recognized organizations & accredited representatives', url: 'https://www.justice.gov/eoir/recognition-accreditation-roster-reports' },
  { name: 'FTC — Avoid immigration scams', url: 'https://consumer.ftc.gov/articles/how-avoid-immigration-scams-and-get-real-help' },
]
