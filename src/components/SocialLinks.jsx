import { contactChannels } from '../data/siteData'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
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

const icons = { instagram: InstagramIcon, whatsapp: WhatsAppIcon }

export default function SocialLinks({ expanded = false }) {
  const baseClass = expanded
    ? 'group flex items-start gap-4 rounded-[1.6rem] border border-white/20 bg-white/5 p-5 text-white transition-colors hover:border-red-400 hover:bg-white/10 sm:p-6'
    : 'inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300/70 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-red-500 hover:text-red-600'
  return (
    <div className={expanded ? 'grid gap-4' : 'flex flex-wrap items-center gap-3'}>
      {contactChannels.filter((channel) => channel.href).map((channel) => {
        const Icon = icons[channel.id]
        return (
          <a
            key={channel.id}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500`}
          >
            <Icon aria-hidden="true" className={expanded ? 'mt-1 h-6 w-6 shrink-0 text-red-300' : 'h-5 w-5 shrink-0'} />
            {expanded ? (
              <span className="min-w-0">
                <span className="block text-lg font-semibold">{channel.action}</span>
                <span className="mt-2 block text-sm leading-7 text-zinc-300">{channel.description}</span>
              </span>
            ) : channel.label}
          </a>
        )
      })}
    </div>
  )
}
