import { featuredProducts } from '../data/siteData'

export default function ProductsSection() {
  return (
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
            presentacion mas editorial para que despues puedas sumar fotos reales
            sin rehacer toda la pagina.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-stone-50 shadow-[0_14px_40px_rgba(24,24,27,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(24,24,27,0.12)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[linear-gradient(180deg,#f5f5f4_0%,#e7e5e4_100%)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-white/10" />
                <div className="relative flex h-full flex-col justify-between p-4">
                  <span className="inline-flex w-fit rounded-full border border-white/40 bg-white/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-800">
                    {product.category}
                  </span>
                  <span className="self-end text-5xl font-display tracking-[-0.08em] text-white/80 sm:text-6xl">
                    0{index + 1}
                  </span>
                </div>
              </div>
              <div className="border-t border-zinc-200 bg-zinc-100 px-4 py-4">
                <h3 className="text-lg font-semibold text-zinc-950">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
