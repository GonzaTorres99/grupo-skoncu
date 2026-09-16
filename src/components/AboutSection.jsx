export default function AboutSection() {
  return (
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
            Grupo Skoncu trabaja con un enfoque claro: piezas sobrias, legibles y
            duraderas para clientes que necesitan representar pertenencia,
            jerarquia y profesionalismo. Nuestro foco esta en fuerzas de
            seguridad, aunque tambien realizamos pedidos especiales y desarrollos
            personalizados.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.6rem] border border-zinc-300 bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold text-red-600">01</p>
              <h3 className="mt-3 text-xl font-semibold">Trabajo a medida</h3>
              <p className="mt-2 leading-7 text-zinc-600">
                Adaptamos diseno, formato, color y cantidad segun cada necesidad.
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-zinc-300 bg-zinc-950 p-6 text-white shadow-sm">
              <p className="text-3xl font-semibold text-red-400">02</p>
              <h3 className="mt-3 text-xl font-semibold">Pedidos online</h3>
              <p className="mt-2 leading-7 text-zinc-300">
                Conversemos por mensaje sobre el producto o la idea que querés
                encargar.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
