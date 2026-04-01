import logo from '../assets/skoncu.png'
import { navItems } from '../data/siteData'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-800/95 text-white backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Grupo Skoncu" className="h-10 w-auto sm:h-12" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-red-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-red-500 hover:bg-red-500 hover:text-white"
        >
          Pedir presupuesto
        </a>
      </div>
    </header>
  )
}
