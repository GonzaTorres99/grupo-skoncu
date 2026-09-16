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
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-950">Información</h3>
          <div className="mt-4 flex flex-col gap-3 text-zinc-600">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-red-600">
                {item.label}
              </a>
            ))}
            <a href="#como-pedir" className="hover:text-red-600">Cómo hacer tu pedido</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <h3 className="text-lg font-semibold text-zinc-950">Consultas y pedidos</h3>
          <div className="mt-4">
            <SocialLinks />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
            Elegí tu canal y escribinos. Te ayudamos a darle forma a tu pedido.
          </p>
        </div>
      </div>
    </footer>
  )
}
