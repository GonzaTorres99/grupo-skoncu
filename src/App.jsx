import logo from './assets/skoncu.png'

const featuredProducts = [
  {
    title: 'Parches Bordados',
    category: 'Identificacion',
    description:
      'Parches personalizados para uniformes, chalecos y equipamiento institucional.',
  },
  {
    title: 'Escudos Tacticos',
    category: 'Fuerzas de seguridad',
    description:
      'Escudos con presencia visual fuerte, costura precisa y terminaciones durables.',
  },
  {
    title: 'Ropa Operativa',
    category: 'Indumentaria',
    description:
      'Bordamos camperas, chombas, gorras y prendas listas para uso diario.',
  },
  {
    title: 'Insignias',
    category: 'Personalizado',
    description:
      'Series por unidad o volumen para unidades, escuelas y organismos de todo el pais.',
  },
  {
    title: 'Nombres y Jerarquias',
    category: 'Detalles',
    description:
      'Combinamos legibilidad, resistencia y prolijidad en cada pieza bordada.',
  },
  {
    title: 'Pedidos Especiales',
    category: 'A medida',
    description:
      'Desarrollamos piezas unicas segun referencia, necesidad operativa o identidad visual.',
  },
]

const quickFacts = [
  'Bordados para fuerzas de seguridad argentinas',
  'Produccion personalizada y por volumen',
  'Envios a todo el pais',
]

const contactInfo = [
  {
    label: 'Direccion',
    value: '139 N° 1169 e/ 56 y 57 - La Plata',
  },
  {
    label: 'Horario semanal',
    value: 'Lunes a viernes de 9:30 a 13:00 y de 15:00 a 18:00 hs',
  },
  {
    label: 'Horario sabados',
    value: 'Sabados de 10:00 a 13:00 hs',
  },
]

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
]

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

function SocialLinks() {
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

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-zinc-950">
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

      <main>
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-zinc-200 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.14),_transparent_28%),linear-gradient(180deg,_#f7f4ef_0%,_#f1ede7_100%)]"
        >
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-full border border-red-200 bg-white/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-red-700">
                Bordados con identidad
              </p>
              <h1 className="max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-8xl">
                Somos Grupo <span className="text-red-600">Skoncu</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700 sm:text-xl">
                Realizamos bordados, parches, escudos e indumentaria operativa
                para fuerzas de seguridad argentinas, con produccion
                personalizada y envios a todo el pais.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Contactanos por WhatsApp
                </a>
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-950"
                >
                  Ver productos
                </a>
              </div>

              <ul className="mt-10 grid gap-3 text-sm text-zinc-700 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-2xl border border-zinc-200 bg-white/75 px-4 py-4 shadow-sm"
                  >
                    {fact}
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-zinc-200 bg-white/80 px-5 py-4 shadow-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-red-600">
                    Donde estamos
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-700">
                    139 N° 1169 e/ 56 y 57 - La Plata
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-zinc-200 bg-white/80 px-5 py-4 shadow-sm">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-red-600">
                    Horarios
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-700">
                    Lun a vie 9:30 a 13:00 y 15:00 a 18:00. Sab 10:00 a 13:00.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-10 hidden h-36 w-36 rounded-[2rem] border border-red-300/50 bg-red-600/10 lg:block" />
              <div className="absolute -right-2 -top-3 h-24 w-24 rounded-full border border-zinc-300 bg-white/70 blur-[1px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-zinc-300 bg-zinc-900 p-4 text-white shadow-[0_30px_80px_rgba(24,24,27,0.24)]">
                <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                        Taller Skoncu
                      </p>
                      <p className="mt-2 text-xl font-semibold">
                        Bordado tecnico y personalizado
                      </p>
                    </div>
                    <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-300">
                      Abierto a pedidos
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="min-h-[320px] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(160deg,#4b5563_0%,#18181b_48%,#09090b_100%)] p-6">
                      <div className="flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-zinc-200">
                            Mockup del local
                          </span>
                          <span className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.75)]" />
                        </div>
                        <div>
                          <p className="max-w-[15rem] text-3xl font-semibold leading-tight">
                            Produccion prolija para uso real.
                          </p>
                          <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-300">
                            Esta area puede reemplazarse despues por una foto
                            del local o del proceso de bordado.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                          Especialidad
                        </p>
                        <p className="mt-3 text-2xl font-semibold">Parches y escudos</p>
                        <p className="mt-2 text-sm leading-6 text-zinc-300">
                          Visual sobrio, alta lectura y terminacion resistente.
                        </p>
                      </div>
                      <div className="rounded-[1.4rem] border border-white/10 bg-white p-5 text-zinc-950">
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                          Cobertura
                        </p>
                        <p className="mt-3 text-4xl font-semibold text-red-600">
                          Todo el pais
                        </p>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                          Coordinamos pedidos y envios para clientes de distintas
                          provincias.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end">
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[420px]">
              <div className="absolute left-0 top-0 w-[52%] rounded-[2rem] border border-zinc-300 bg-zinc-200 p-6 shadow-lg">
                <div className="flex h-56 items-end rounded-[1.5rem] bg-[linear-gradient(135deg,#d6d3d1,#a8a29e)] p-5">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-700">
                    Imagenes de productos
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-[68%] rounded-[2rem] border border-zinc-900 bg-zinc-900 p-6 text-white shadow-[0_22px_60px_rgba(24,24,27,0.32)]">
                <div className="flex h-56 items-end rounded-[1.5rem] bg-[linear-gradient(135deg,#27272a,#52525b)] p-5">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-300">
                    Galeria de bordados
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-red-600">
                Sobre nosotros
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl">
                Bordamos identidad institucional con precision y presencia.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
                Grupo Skoncu trabaja con un enfoque claro: piezas sobrias,
                legibles y duraderas para clientes que necesitan representar
                pertenencia, jerarquia y profesionalismo. Nuestro foco esta en
                fuerzas de seguridad, aunque tambien realizamos pedidos
                especiales y desarrollos personalizados.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.6rem] border border-zinc-300 bg-white p-6 shadow-sm">
                  <p className="text-3xl font-semibold text-red-600">01</p>
                  <h3 className="mt-3 text-xl font-semibold">Trabajo a medida</h3>
                  <p className="mt-2 leading-7 text-zinc-600">
                    Adaptamos diseno, formato, color y cantidad segun cada
                    necesidad.
                  </p>
                </article>
                <article className="rounded-[1.6rem] border border-zinc-300 bg-zinc-950 p-6 text-white shadow-sm">
                  <p className="text-3xl font-semibold text-red-400">02</p>
                  <h3 className="mt-3 text-xl font-semibold">Envios nacionales</h3>
                  <p className="mt-2 leading-7 text-zinc-300">
                    Atendemos consultas y entregas para clientes en todo el
                    territorio argentino.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="border-y border-zinc-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-red-600">
                  Productos
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-zinc-950 sm:text-6xl">
                  Catalogo inicial
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                Este bloque sigue la estructura del wireframe, pero con una
                presentacion mas editorial para que despues puedas sumar fotos
                reales sin rehacer toda la pagina.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((product, index) => (
                <article
                  key={product.title}
                  className="group overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-stone-50 shadow-[0_14px_40px_rgba(24,24,27,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(24,24,27,0.12)]"
                >
                  <div className="relative h-64 overflow-hidden bg-[linear-gradient(135deg,#e7e5e4_0%,#d4d4d8_45%,#a1a1aa_100%)] p-5">
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(45deg,transparent_0,transparent_48%,rgba(255,255,255,0.9)_50%,transparent_52%,transparent_100%)] [background-size:22px_22px]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <span className="inline-flex w-fit rounded-full border border-zinc-600/20 bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-700">
                        {product.category}
                      </span>
                      <span className="text-7xl font-display tracking-[-0.08em] text-white/80">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-zinc-200 bg-zinc-100 px-5 py-5">
                    <h3 className="text-xl font-semibold text-zinc-950">
                      {product.title}
                    </h3>
                    <p className="mt-2 leading-7 text-zinc-600">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <div className="rounded-[2.2rem] border border-zinc-300 bg-zinc-900 p-8 text-white shadow-[0_28px_80px_rgba(24,24,27,0.24)] sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.32em] text-red-400">
                  Contacto
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
                  Contanos que necesitas y te armamos una propuesta.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                  Si ya tenes referencia, escudo, nombre, unidad o idea general,
                  este diseno ya esta listo para conectar con un formulario o
                  boton real de WhatsApp cuando quieras.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                    Datos del local
                  </p>
                  <div className="mt-5 space-y-4">
                    {contactInfo.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                      >
                        <p className="text-xs uppercase tracking-[0.24em] text-red-300">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-zinc-100">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-400">
                    Siguiente paso
                  </p>
                  <div className="mt-5 space-y-3 text-sm text-zinc-200">
                    <p>1. Nos escribis con tu idea o referencia.</p>
                    <p>2. Te respondemos con opciones y presupuesto.</p>
                    <p>3. Coordinamos produccion y envio.</p>
                  </div>
                  <a
                    href="#inicio"
                    className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Volver al inicio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-stone-100">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div>
            <img src={logo} alt="Grupo Skoncu" className="h-14 w-auto" />
            <p className="mt-4 max-w-xs leading-7 text-zinc-600">
              Bordados, escudos y parches para instituciones, equipos y pedidos
              personalizados.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-500">
              139 N° 1169 e/ 56 y 57 - La Plata
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
    </div>
  )
}

export default App
