import { quickFacts } from '../data/siteData'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
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
            Realizamos bordados, parches, escudos e indumentaria operativa para
            fuerzas de seguridad argentinas, con produccion personalizada y envios
            a todo el pais.
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
                139 Nro. 1169 e/ 56 y 57 - La Plata
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
                        Esta area puede reemplazarse despues por una foto del local
                        o del proceso de bordado.
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
  )
}
