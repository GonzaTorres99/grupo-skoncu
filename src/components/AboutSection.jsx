import featuredShield from '../assets/images/Escudos Personalizados/WhatsApp Image 2026-09-15 at 7.03.53 PM.jpeg'
import featuredNameTags from '../assets/images/Gafetes Personalizados/WhatsApp Image 2026-09-15 at 7.01.52 PM.jpeg'

const identityNotes = [
  {
    title: 'Hecho para representar',
    description: 'Nombres, símbolos e ideas que hablan de cada grupo, institución o persona.',
  },
  {
    title: 'Distintas formas, una identidad',
    description: 'Escudos, gafetes y rangos pensados para que cada pedido se sienta propio.',
  },
  {
    title: 'Pedido a tu manera',
    description: 'Nos contás qué buscás y conversamos directamente por WhatsApp o Instagram.',
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-24 overflow-hidden bg-stone-100">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16">
        <div className="relative min-h-[410px] sm:min-h-[500px]">
          <div className="absolute inset-y-0 left-0 right-8 overflow-hidden rounded-[2rem] bg-zinc-900 shadow-[0_24px_60px_rgba(24,24,27,0.22)] sm:right-16">
            <img
              src={featuredShield}
              alt="Escudo personalizado bordado junto a otros trabajos de Grupo Skoncu"
              width="963"
              height="1280"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-zinc-950/15" />
            <p className="absolute left-5 top-5 rounded-full border border-white/20 bg-zinc-950/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-white backdrop-blur sm:left-6 sm:top-6">
              Trabajos por encargo
            </p>
            <p className="absolute bottom-6 left-6 max-w-[12rem] text-xl font-semibold leading-tight text-white sm:text-2xl">
              Cada detalle cuenta una historia.
            </p>
          </div>

          <div className="absolute bottom-7 right-0 w-[42%] overflow-hidden rounded-[1.5rem] border-4 border-stone-100 bg-zinc-900 shadow-[0_18px_40px_rgba(24,24,27,0.28)] sm:bottom-10 sm:w-[40%]">
            <img
              src={featuredNameTags}
              alt="Selección de gafetes personalizados bordados"
              width="720"
              height="1280"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <p className="border-t border-white/10 bg-zinc-950 px-3 py-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-300 sm:px-4 sm:text-[10px]">
              Identidad en cada pieza
            </p>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-red-600">
            Sobre Grupo Skoncu
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.02] tracking-[-0.04em] text-zinc-950 sm:text-6xl">
            Una identidad, llevada al bordado.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
            Creamos escudos, gafetes, rangos y otros trabajos personalizados para
            representar aquello que identifica a cada pedido.
          </p>

          <ol className="mt-8 border-b border-zinc-300">
            {identityNotes.map((note, index) => (
              <li key={note.title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-zinc-300 py-4 sm:grid-cols-[3.5rem_1fr] sm:gap-4 sm:py-5">
                <span aria-hidden="true" className="pt-1 font-mono text-xs tracking-[0.18em] text-red-600">
                  0{index + 1}
                </span>
                <div className="sm:grid sm:grid-cols-[0.85fr_1.15fr] sm:gap-5">
                  <h3 className="text-base font-semibold text-zinc-950 sm:text-lg">{note.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 sm:mt-0">{note.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
