'use client'

import { useId, useState } from 'react'

// Expandable panel, modeled on the "Click here for info ⌄" buttons from the
// original sociology-project mockups.
export default function Accordion({ title, hint, icon, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <div className={`accordion ${open ? 'open' : ''}`}>
      <h3 className="accordion-heading">
        <button
          type="button"
          className="accordion-trigger"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
        >
          {icon && (
            <span className="accordion-icon" aria-hidden="true">
              {icon}
            </span>
          )}
          <span className="accordion-text">
            <span className="accordion-title">{title}</span>
            {hint && <span className="accordion-hint">{hint}</span>}
          </span>
          <span className="accordion-chevron" aria-hidden="true">
            ⌄
          </span>
        </button>
      </h3>
      <div id={id} className="accordion-panel" hidden={!open}>
        {children}
      </div>
    </div>
  )
}
