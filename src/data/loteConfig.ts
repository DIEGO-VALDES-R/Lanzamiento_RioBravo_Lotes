// src/data/loteConfig.ts

const formatCOP = (valor: number) =>
  valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

export const loteConfig = {
  // Información del Hero
  hero: {
    surface: "1000 m²",
    price: formatCOP(100_000_000), // Precio base desde
    availableLots: 3,
    location: "Finca Rio Bravo",
    badge: "PRECIO DE LANZAMIENTO",
    title: "Molino Campestre - Lotes Exclusivos de 1000 m²",
    subtitle: "Tu oportunidad de invertir en el futuro con terrenos premium en Molino Campestre - Finca Rio Bravo",
  },

  // Planes de financiamiento CORREGIDOS
plans: [
  {
    id: "contado",
    emoji: "💰",
    title: "Pago de Contado (100%)",
    description: "Descuento especial",
    total: formatCOP(70_000_000),
    initial: "$70.000.000,00",
    balance: "$0",
    quotas: null,
    benefit: "✅ Descuento de $30,000,000 por pago total inmediato",
    benefitBg: "bg-green-50",
    benefitText: "text-green-800",
    borderClass: "border-green-500",
    isPopular: true,
    badgeText: "Más Popular",
  },
  {
    id: "plan60", // Cambié de plan50 a plan60 para mejor claridad
    emoji: "💸",
    title: "60% Inicial + 4 Cuotas",
    description: "Plazo corto",
    total: formatCOP(73_000_000),
    initial: "$43.800.000,00", // 60% de 73,000,000
    balance: "$29.200.000,00", // 40% de 73,000,000
    quotas: "4 de $7.300.000,00", // 29,200,000 ÷ 4
    benefit: "✅ Descuento de $27,000,000. Plazo a convenir",
    benefitBg: "bg-green-50",
    benefitText: "text-green-800",
    borderClass: "border-gray-200",
    isPopular: false,
  },
  {
    id: "plan25",
    emoji: "🧾",
    title: "25% Inicial + 6 Cuotas",
    description: "Plazo medio",
    total: formatCOP(75_000_000), // Cambié de 65 a 75
    initial: "$18.750.000,00", // 25% de 75,000,000
    balance: "$56.250.000,00", // 75% de 75,000,000
    quotas: "6 de $9.375.000,00", // 56,250,000 ÷ 6
    benefit: "✅ Descuento de $25,000,000. Plazo a convenir",
    benefitBg: "bg-green-50", // Cambié a verde ya que también tiene descuento
    benefitText: "text-green-800",
    borderClass: "border-gray-200",
    isPopular: false,
  },
  {
    id: "personalizado",
    emoji: "⚙️",
    title: "Opción Personalizada",
    description: "Más del 50% inicial",
    total: "A convenir",
    initial: "Más del 50%",
    balance: "Saldo restante",
    quotas: "A definir",
    benefit: "✨ Descuento proporcional según pago y plazo",
    benefitBg: "bg-purple-50",
    benefitText: "text-purple-800",
    borderClass: "border-gray-200",
    isPopular: false,
  },
],

  // Opciones de cabañas
  cabins: {
    heroTitle: "Lote + Cabaña Prefabricada: el espacio perfecto para tu estilo de vida",
    heroSubtitle: "Imagina tu lugar ideal: un terreno de 1000 m² y una cabaña diseñada a tu medida.\nTú eliges el diseño, los acabados y el tamaño. Nosotros hacemos realidad tu proyecto.",
    lotePrice: "Desde $65.000.000",
    loteSize: "1000 m²",
    cabinPrice: "Valor según diseño y acabados",
    totalNote: "Total: a convenir según tu proyecto personalizado",
    models: [
      {
        id: "moderna",
        emoji: "🏠",
        title: "Cabaña Moderna",
        description: "Diseño contemporáneo, funcional y lleno de luz natural.",
        detail: "Perfecta para quienes buscan comodidad y estilo.",
      },
      {
        id: "familiar",
        emoji: "🏡",
        title: "Cabaña Familiar",
        description: "Amplia y acogedora, ideal para disfrutar con la familia o amigos.",
        detail: "Pensada para quienes valoran el confort y la convivencia.",
      },
      {
        id: "acogedora",
        emoji: "🏚️",
        title: "Cabaña Acogedora",
        description: "Compacta, práctica y cálida.",
        detail: "Ideal como refugio de descanso o inversión vacacional.",
      },
      {
        id: "compacta",
        emoji: "🏘️",
        title: "Cabaña Compacta",
        description: "Diseño eficiente y funcional.",
        detail: "Perfecta para quienes buscan un espacio inteligente y económico.",
      },
      {
        id: "premium",
        emoji: "🏰",
        title: "Cabaña Premium",
        description: "Lujo y elegancia en cada detalle.",
        detail: "Creada para quienes quieren una experiencia exclusiva en la naturaleza.",
      },
      {
        id: "personalizado",
        emoji: "✨",
        title: "Proyecto Personalizado",
        description: "Diseña la cabaña de tus sueños.",
        detail: "Creamos espacios únicos, sostenibles y listos para habitar o rentar.",
        isSpecial: true,
      },
    ],
  },

  // Beneficios de los lotes
  benefits: [
    {
      emoji: "🌳",
      title: "Área Verde",
      description: "Lotes por metro cuadrado más económico del sector",
    },
    {
      emoji: "🚗",
      title: "Acceso Vial",
      description: "Vías de acceso",
    },
    {
      emoji: "📈",
      title: "Plusvalía",
      description: "Excelente potencial de revalorización",
    },
    {
      emoji: "🏠",
      title: "Servicios",
      description: " ",
    },
  ],

  // Beneficios de ubicación
  locationBenefits: [
    {
      emoji: "💧",
      title: "Fuentes Hídricas",
      description: "Fuentes hídricas cercanas",
      bgColor: "bg-blue-100",
    },
    {
      emoji: "🏔️",
      title: "Paisajes Naturales",
      description: "Paisajes de montaña y aire puro",
      bgColor: "bg-green-100",
    },
    {
      emoji: "🤫",
      title: "Tranquilidad",
      description: "Silencio y conexión con la naturaleza",
      bgColor: "bg-purple-100",
    },
    {
      emoji: "🚗",
      title: "Acceso Fácil",
      description: "A pocos minutos del casco urbano, con vías de fácil acceso",
      bgColor: "bg-orange-100",
    },
  ],

  // Información de ubicación
  location: {
    name: "Finca Rio Bravo",
    sector: "Sector Román",
    municipality: "Cucutilla",
    department: "Norte de Santander",
    country: "Colombia",
    distance: "a menos de 10 minutos del casco urbano del municipio de Arboledas",
    fullAddress: "Finca Rio Bravo, Sector Román, Cucutilla, Norte de Santander, Colombia",
  },

  // Información de contacto
  contact: {
    whatsappNumbers: [
      { number: "3124915127", display: "312 491 5127", country: "co" },
      { number: "3125123639", display: "312 512 3639", country: "co" },
      { number: "19549315153", display: "+1 (954) 931-5153", country: "us" },
    ],
    hours: {
      weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
      saturday: "Sábados: 9:00 AM - 2:00 PM",
      sunday: "Domingos: Cerrado",
    },
    companyName: "Riobravo",
    year: "2026",
  },

  // Mensajes de WhatsApp
  whatsappMessages: {
    default: "Hola, estoy interesado en obtener información sobre los lotes en Finca Rio Bravo.",
  },
};