const steps = [
  {
    title: 'Explorá el catálogo',
    description: 'Recorré las fotos de escudos, gafetes y rangos para encontrar lo que buscás.',
  },
  {
    title: 'Elegí tu referencia',
    description: 'Guardá una imagen o tené a mano el nombre del producto que te interesa.',
  },
  {
    title: 'Escribinos para encargar',
    description: 'Contactanos por WhatsApp o Instagram con tu referencia para consultar y realizar el pedido.',
  },
]

export default function HowToOrderSection() {
  return (
    <section id="como-pedir" aria-labelledby="como-pedir-title" className="scroll-mt-24 border-b border-zinc-200 bg-stone-100">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-red-600">Del catálogo a tu pedido</p>
        <h2 id="como-pedir-title" className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-zinc-950 sm:text-5xl">
          Cómo hacer tu pedido
        </h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-[1.6rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-7">
              <span aria-hidden="true" className="font-mono text-sm tracking-[0.18em] text-red-600">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-semibold text-zinc-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{step.description}</p>
            </li>
          ))}
        </ol>
        <a href="#contacto" className="mt-8 inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-red-600 hover:text-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
          Elegir cómo contactarnos <span className="ml-3" aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
