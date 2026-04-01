import logo from '../assets/skoncu.png'
import { navItems } from '../data/siteData'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-stone-100">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <img src={logo} alt="Grupo Skoncu" className="h-14 w-auto" />
          <p className="mt-4 max-w-xs leading-7 text-zinc-600">
            Bordados, escudos y parches para instituciones, equipos y pedidos
            personalizados.
          </p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
            139 Nro. 1169 e/ 56 y 57 - La Plata
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-950">Informacion</h3>
          <div className="mt-4 flex flex-col gap-3 text-zinc-600">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-red-600">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="md:justify-self-end">
          <h3 className="text-lg font-semibold text-zinc-950">Redes</h3>
          <div className="mt-4">
            <SocialLinks />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
            Lun a vie 9:30 a 13:00 y 15:00 a 18:00 hs. Sab 10:00 a 13:00 hs.
          </p>
        </div>
      </div>
    </footer>
  )
}
