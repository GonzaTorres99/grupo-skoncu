import { contactInfo } from '../data/siteData'

export default function ContactSection() {
  return (
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
              Si ya tenes referencia, escudo, nombre, unidad o idea general, este
              diseno ya esta listo para conectar con un formulario o boton real de
              WhatsApp cuando quieras.
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
  )
}
