const STARS = ['✨', '⭐', '✦', '✧', '★', '☆', '✶', '✷', '✸', '✹', '✺', '✻']

// Decorative background: 24 twinkling stars and 3 shooting stars (positions live in App.css).
export default function Stars() {
  return (
    <div aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <div key={i} className={`star star-${i + 1}`}>
          {STARS[i % STARS.length]}
        </div>
      ))}
      {[1, 2, 3].map((n) => (
        <div key={`shoot-${n}`} className={`shooting-star shooting-star-${n}`} />
      ))}
    </div>
  )
}
