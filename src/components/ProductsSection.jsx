import ProductCarousel from './ProductCarousel'
import { shields, nameTags, ranks } from '../data/catalogData'

export default function ProductsSection() {
  return (
    <section id="productos" className="border-y border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-6 border-b border-zinc-200 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-red-600">
              Catálogo / 01
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl">
              Escudos personalizados
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-zinc-600 sm:text-lg">
            Explorá una selección de escudos realizados para distintas identidades
            y equipos. Cada imagen muestra un trabajo de nuestro catálogo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shields.map((product, index) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[1.8rem] border border-zinc-200 bg-stone-50 shadow-[0_14px_40px_rgba(24,24,27,0.06)] transition-shadow hover:shadow-[0_18px_50px_rgba(24,24,27,0.12)]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <img
                  src={product.image}
                  alt={`Escudo personalizado, muestra ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.025]"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-zinc-200 px-5 py-4">
                <h3 className="text-sm font-semibold text-zinc-900">Escudo personalizado</h3>
                <span className="font-mono text-xs tracking-[0.18em] text-red-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProductCarousel
        id="gafetes-personalizados"
        number="02"
        title="Gafetes personalizados"
        description="Nombres e identidades en primer plano. Recorré algunos de los trabajos personalizados que forman parte de esta categoría."
        images={nameTags}
      />
      <ProductCarousel
        id="rangos-oficiales"
        number="03"
        title="Rangos oficiales"
        description="Una selección visual de rangos oficiales para conocer los distintos diseños disponibles en el catálogo."
        images={ranks}
        dark
        cropImages
      />
    </section>
  )
}
