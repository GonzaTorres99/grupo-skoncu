function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.4 21v-7.7h2.6l.4-3h-3V8.4c0-.9.2-1.5 1.5-1.5H16V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.2H7.4v3h2.5V21h3.5Z" />
    </svg>
  )
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M20 11.7a8 8 0 0 1-11.8 7l-3.2 1 1.1-3A8 8 0 1 1 20 11.7Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.8c.2-.4.5-.4.7-.4h.6c.2 0 .5 0 .7.5l.6 1.4c.2.4 0 .6-.1.8l-.5.7c-.1.1-.2.3 0 .5.4.7 1.2 1.6 2.4 2.1.2.1.4.1.5 0l.8-.9c.2-.2.5-.3.8-.2l1.5.5c.4.2.5.4.4.7v.8c-.1.3-.2.6-.6.8-.4.2-1 .4-1.7.2-1.1-.3-2.4-.9-4-2.4-1.8-1.7-2.5-3.3-2.7-4.4-.2-.8 0-1.5.2-1.9Z"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function SocialLinks() {
  const baseClass =
    'flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white text-zinc-700 transition hover:-translate-y-1 hover:border-red-500 hover:text-red-600'

  return (
    <div className="flex items-center gap-3">
      <a className={baseClass} href="#contacto" aria-label="Instagram">
        <InstagramIcon className="h-5 w-5" />
      </a>
      <a className={baseClass} href="#contacto" aria-label="Facebook">
        <FacebookIcon className="h-5 w-5" />
      </a>
      <a className={baseClass} href="#contacto" aria-label="WhatsApp">
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  )
}
