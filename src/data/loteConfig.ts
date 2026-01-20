// src/data/loteConfig.ts

const formatCOP = (valor: number) =>
  valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

export const loteConfig = {
  hero: {
    surface: "1000 m²",
    price: formatCOP(60_000_000), // Precio de lanzamiento / Contado
    availableLots: 3,
    location: "Finca Rio Bravo",
  },

  plans: [
    {
      id: "contado",
      title: "Pago de Contado (100%)",
      description: "Descuento especial por pago inmediato",
      total: formatCOP(60_000_000),
      initial: "100% - $60.000.000",
      balance: "$0",
      quotas: null, // No aplica cuotas para contado
      benefit: "✅ Mejor precio por pago total inmediato",
      benefitBg: "bg-green-50",
      benefitText: "text-green-800",
      borderClass: "border-green-500",
      isPopular: true,
      badgeText: "Más Popular",
    },
    {
      id: "plan50",
      title: "50% inicial + 4 cuotas",
      description: "Plazo corto",
      total: formatCOP(63_000_000),
      initial: "50% - $31.500.000",
      balance: "$31.500.000",
      quotas: "4 de $7.875.000",
      benefit: "✅ Descuento especial. Plazo máximo 4 meses",
      benefitBg: "bg-green-50",
      benefitText: "text-green-800",
      borderClass: "border-gray-200",
      isPopular: false,
    },
    {
      id: "plan25",
      title: "25% inicial + 6 cuotas",
      description: "Plazo medio",
      total: formatCOP(65_000_000),
      initial: "25% - $16.250.000",
      balance: "$48.750.000",
      quotas: "6 de $8.125.000",
      benefit: "📋 Plazo máximo 6 meses",
      benefitBg: "bg-blue-50",
      benefitText: "text-blue-800",
      borderClass: "border-gray-200",
      isPopular: false,
    },
  ],
};