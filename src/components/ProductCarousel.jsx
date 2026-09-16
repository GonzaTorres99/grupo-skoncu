import { useState } from 'react'

export default function ProductCarousel({ id, number, title, description, images, dark = false, cropImages = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const activeImage = images[currentIndex]

  function goTo(index) {
    setCurrentIndex((index + images.length) % images.length)
  }

  return (
    <section
      aria-labelledby={`${id}-title`}
      className={dark ? 'bg-zinc-900 text-white' : 'border-t border-zinc-200 bg-stone-100 text-zinc-950'}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:py-24">
        <div className="max-w-lg">
          <p className={`font-mono text-xs uppercase tracking-[0.32em] ${dark ? 'text-red-400' : 'text-red-600'}`}>
            Catálogo / {number}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] sm:text-6xl"
          >
            {title}
          </h2>
          <p className={`mt-6 text-base leading-8 sm:text-lg ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            {description}
          </p>
          <div className={`mt-8 h-px w-20 ${dark ? 'bg-red-500' : 'bg-red-600'}`} />
          <p className={`mt-5 font-mono text-xs uppercase tracking-[0.24em] ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {images.length} imágenes para recorrer
          </p>
        </div>

        <div className={`min-w-0 overflow-hidden rounded-[2rem] border shadow-[0_20px_60px_rgba(24,24,27,0.12)] ${dark ? 'border-white/15 bg-zinc-800' : 'border-zinc-200 bg-white'}`}>
          <div
            id={`${id}-slide`}
            className={`flex items-center justify-center overflow-hidden p-3 sm:p-5 ${cropImages ? 'h-[420px] sm:h-[600px]' : 'h-[540px] sm:h-[680px]'} ${dark ? 'bg-zinc-800' : 'bg-stone-200'}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <img
              key={activeImage.id}
              src={activeImage.image}
              alt={`${activeImage.title ?? title}, imagen ${currentIndex + 1} de ${images.length}`}
              className={`h-full w-full ${cropImages ? 'object-cover' : 'object-contain'}`}
            />
          </div>

          <div className={`flex flex-wrap items-center justify-between gap-4 border-t px-4 py-4 sm:px-6 ${dark ? 'border-white/10' : 'border-zinc-200'}`}>
            <div>
              {activeImage.title && (
                <p className="mb-1 text-base font-semibold">{activeImage.title}</p>
              )}
              <p className="font-mono text-sm tabular-nums" aria-live="polite">
                <span className={dark ? 'text-red-400' : 'text-red-600'}>
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className={dark ? 'text-zinc-400' : 'text-zinc-500'}>
                  {' '} / {String(images.length).padStart(2, '0')}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(currentIndex - 1)}
                aria-label={`Imagen anterior de ${title}`}
                aria-controls={`${id}-slide`}
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${dark ? 'border-white/25 hover:border-red-400 hover:text-red-400' : 'border-zinc-300 hover:border-red-600 hover:text-red-600'}`}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => goTo(currentIndex + 1)}
                aria-label={`Imagen siguiente de ${title}`}
                aria-controls={`${id}-slide`}
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${dark ? 'border-white/25 hover:border-red-400 hover:text-red-400' : 'border-zinc-300 hover:border-red-600 hover:text-red-600'}`}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
