import SocialLinks from './SocialLinks'

export default function ContactSection() {
  return (
    <section id="contacto" className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="rounded-[2.2rem] border border-zinc-300 bg-zinc-900 p-6 text-white shadow-[0_28px_80px_rgba(24,24,27,0.24)] sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-red-400">
              Consultas y pedidos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-[-0.04em] sm:text-5xl">
              ¿Te gustó algún producto? Hablemos de tu pedido.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Enviá la foto o el nombre del producto que elegiste. Podés consultar,
              pedir información y realizar tu encargo por WhatsApp o Instagram.
            </p>
          </div>
          <SocialLinks expanded />
        </div>
      </div>
    </section>
  )
}
