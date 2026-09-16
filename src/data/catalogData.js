function catalogImages(modules) {
  return Object.entries(modules)
    .sort(([first], [second]) => first.localeCompare(second, 'es', { numeric: true }))
    .map(([id, image]) => ({ id, image }))
}

export const shields = catalogImages(
  import.meta.glob('../assets/images/Escudos Personalizados/*.jpeg', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)

export const nameTags = catalogImages(
  import.meta.glob('../assets/images/Gafetes Personalizados/*.jpeg', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)

const rankOrder = [
  'adjutor',
  'subalcaide',
  'alcaide',
  'alcaidemayor',
  'subprefecto',
  'prefecto',
]

function rankFileName(rank) {
  return rank.id.split('/').at(-1).replace(/\.jpeg$/i, '')
}

function rankPosition(rank) {
  const index = rankOrder.indexOf(rankFileName(rank))
  return index === -1 ? rankOrder.length : index
}

export const ranks = catalogImages(
  import.meta.glob('../assets/images/Rangos oficiales/*.jpeg', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
).sort((first, second) => rankPosition(first) - rankPosition(second)).map((rank) => {
  const fileName = rankFileName(rank)
  const title = fileName === 'alcaidemayor'
    ? 'Alcaide Mayor'
    : fileName.charAt(0).toUpperCase() + fileName.slice(1)

  return { ...rank, title }
})
