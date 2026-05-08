import { useState, useEffect, useRef } from 'react'

const CONTACTS = [
  { name: 'Yamar FARALAHY',  phone: '261374671845' },
  { name: 'Joma Alfred',     phone: '261329590839' },
  { name: 'Stéphano Kevin',  phone: '261379110668' },
]

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.528 5.845L.057 23.885a.5.5 0 0 0 .612.612l6.04-1.471A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.695-.504-5.241-1.383l-.376-.218-3.894.947.964-3.898-.235-.384A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="whatsapp-wrap" ref={ref}>
      {open && (
        <div className="whatsapp-menu">
          <p className="whatsapp-menu-label">Contacter via WhatsApp</p>
          {CONTACTS.map(c => (
            <a
              key={c.phone}
              href={`https://wa.me/${c.phone}`}
              className="whatsapp-menu-item"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <WaIcon />
              <span>{c.name}</span>
            </a>
          ))}
        </div>
      )}
      <button
        className={`whatsapp-btn${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Contacter sur WhatsApp"
      >
        <WaIcon />
      </button>
    </div>
  )
}
