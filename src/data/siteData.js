export const quickFacts = [
  'Bordados para fuerzas de seguridad argentinas',
  'Producción personalizada y por volumen',
  'Pedidos online por mensaje',
]

export const whatsappNumber = '5492216744775'
export const whatsappInitialMessage = 'Hola, vengo desde la web y quiero consultar por un pedido de:'
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappInitialMessage)}`

export const contactChannels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    action: 'Consultar por WhatsApp',
    description: 'Contanos qué producto te interesa y conversemos sobre tu pedido.',
    href: whatsappUrl,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    action: 'Escribinos por Instagram',
    description: 'Encontranos como @gruposkoncu y escribinos por el producto que elegiste.',
    href: 'https://www.instagram.com/gruposkoncu/',
  },
]

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
]
