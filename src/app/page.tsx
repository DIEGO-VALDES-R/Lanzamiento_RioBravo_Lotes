'use client';

export default function Home() {
  const handleWhatsAppClick = (phoneNumber: string, country: string, plan?: string) => {
    let message = 'Hola, estoy interesado en obtener información sobre los lotes en Finca Rio Bravo.';
    if (plan) {
      message += ` Me interesa la opción de financiamiento: ${plan}.`;
    }
    const encodedMessage = encodeURIComponent(message);
    const url = country === 'co' 
      ? `https://wa.me/57${phoneNumber}?text=${encodedMessage}`
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const whatsappNumbers = [
    { number: '3124915127', display: '312 491 5127', country: 'co' },
    { number: '3125123639', display: '312 512 3639', country: 'co' },
    { number: '19549315153', display: '+1 (954) 931-5153', country: 'us' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RB</span>
              </div>
              <span className="text-xl font-bold">Riobravo</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-gray-600">WhatsApp:</span>
                {whatsappNumbers.slice(0, 2).map((phone, index) => (
                  <button
                    key={index}
                    onClick={() => handleWhatsAppClick(phone.number, phone.country)}
                    className="text-sm font-medium text-green-600 hover:text-green-800"
                  >
                    {phone.display}
                  </button>
                ))}
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Contactar ahora
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/riobravo-location.jpg" 
            alt="Finca Rio Bravo - Fondo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <span>🚀</span>
              <span>PRECIO DE LANZAMIENTO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Riobravo - Lotes Exclusivos de 1500 m²
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 drop-shadow">
              Tu oportunidad de invertir en el futuro con terrenos premium en Finca Rio Bravo
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
              <div className="text-4xl font-bold text-white mb-6">
                Desde $107.000.000,00 por lote
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">1500 m²</div>
                  <div className="text-gray-200">Superficie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-300 mb-1">10</div>
                  <div className="text-gray-200">Lotes disponibles</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-300 mb-1">📍</div>
                  <div className="text-gray-200">Finca Rio Bravo</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 shadow-lg"
                onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country)}
              >
                📱 Contactar por WhatsApp
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-800 shadow-lg backdrop-blur-sm">
                Ver opciones de financiamiento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestros lotes?
            </h2>
            <p className="text-xl text-gray-600">
              Descubre todas las ventajas que ofrecemos con nuestros terrenos premium
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Área Verde</h3>
              <p className="text-gray-600">Lotes por metro cuadrado más económico del sector</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acceso Vial</h3>
              <p className="text-gray-600">Vías de acceso</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plusvalía</h3>
              <p className="text-gray-600">Excelente potencial de revalorización</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Servicios</h3>
              <p className="text-gray-600">Agua</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Opciones de Financiación
            </h2>
            <p className="text-xl text-gray-600">
              Planes flexibles adaptados a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plan 1: Contado - Más Popular */}
            <div className="bg-white rounded-lg shadow-xl p-6 border-2 border-green-500 relative">
              <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                Más Popular
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="text-xl font-bold">Pago de Contado (100%)</h3>
                <p className="text-gray-600">Descuento especial</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="text-sm text-gray-600">Precio total</div>
                  <div className="text-2xl font-bold text-green-600">$100.000.000,00</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pago inicial:</span>
                    <span className="font-medium">$100.000.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saldo a financiar:</span>
                    <span className="font-medium">$0</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm mb-4">
                ✅ Descuento de $7,000,000 por pago total inmediato
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">📱️ Contáctanos por WhatsApp:</p>
                <div className="space-y-2">
                  {whatsappNumbers.map((phone, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsAppClick(phone.number, phone.country, 'Pago de Contado (100%)')}
                      className="w-full text-left p-2 border rounded text-xs hover:bg-green-50"
                    >
                      💬 📱 {phone.display}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                Seleccionar
              </button>
            </div>

            {/* Plan 2: 50% Inicial */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">💸</div>
                <h3 className="text-xl font-bold">50% Inicial + 4 Cuotas</h3>
                <p className="text-gray-600">Plazo corto</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="text-sm text-gray-600">Precio total</div>
                  <div className="text-2xl font-bold text-green-600">$105.000.000,00</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pago inicial:</span>
                    <span className="font-medium">$52.500.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saldo a financiar:</span>
                    <span className="font-medium">$52.500.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cuotas:</span>
                    <span className="font-medium">4 de $13.125.000,00</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm mb-4">
                ✅ Descuento de $2,000,000. Plazo máximo 4 meses
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">📱️ Contáctanos por WhatsApp:</p>
                <div className="space-y-2">
                  {whatsappNumbers.map((phone, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsAppClick(phone.number, phone.country, '50% Inicial + 4 Cuotas')}
                      className="w-full text-left p-2 border rounded text-xs hover:bg-green-50"
                    >
                      💬 📱 {phone.display}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                Seleccionar
              </button>
            </div>

            {/* Plan 3: 25% Inicial */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🧾</div>
                <h3 className="text-xl font-bold">25% Inicial + 6 Cuotas</h3>
                <p className="text-gray-600">Plazo medio</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="text-sm text-gray-600">Precio total</div>
                  <div className="text-2xl font-bold text-green-600">$107.000.000,00</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pago inicial:</span>
                    <span className="font-medium">$26.750.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saldo a financiar:</span>
                    <span className="font-medium">$80.250.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cuotas:</span>
                    <span className="font-medium">6 de $13.375.000,00</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm mb-4">
                📋 Sin descuento. Plazo máximo 6 meses
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">📱️ Contáctanos por WhatsApp:</p>
                <div className="space-y-2">
                  {whatsappNumbers.map((phone, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsAppClick(phone.number, phone.country, '25% Inicial + 6 Cuotas')}
                      className="w-full text-left p-2 border rounded text-xs hover:bg-green-50"
                    >
                      💬 📱 {phone.display}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                Seleccionar
              </button>
            </div>

            {/* Plan 4: Personalizada */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="text-xl font-bold">Opción Personalizada</h3>
                <p className="text-gray-600">Más del 50% inicial</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-center mb-3">
                  <div className="text-sm text-gray-600">Precio total</div>
                  <div className="text-2xl font-bold text-green-600">A convenir</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pago inicial:</span>
                    <span className="font-medium">Más del 50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saldo a financiar:</span>
                    <span className="font-medium">Saldo restante</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cuotas:</span>
                    <span className="font-medium">A definir</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm mb-4">
                ✨ Descuento proporcional según pago y plazo
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">📱️ Contáctanos por WhatsApp:</p>
                <div className="space-y-2">
                  {whatsappNumbers.map((phone, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsAppClick(phone.number, phone.country, 'Opción Personalizada')}
                      className="w-full text-left p-2 border rounded text-xs hover:bg-green-50"
                    >
                      💬 📱 {phone.display}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
                Seleccionar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ubicación Estratégica
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                📍 Finca Rio Bravo
              </h3>
              <p className="text-gray-600 mb-6">
                Sector Román, a 10 minutos del casco urbano del municipio de Arboledas. 
                Ubicación privilegiada con fácil acceso.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">🚗</span>
                  <div>
                    <h4 className="font-semibold mb-1">Vías de Acceso</h4>
                    <p className="text-gray-600 text-sm">
                      Acceso directo por carreteras principales. Caminos en buen estado 
                      que conectan fácilmente con el municipio.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-xl">📈</span>
                  <div>
                    <h4 className="font-semibold mb-1">Zona en Crecimiento</h4>
                    <p className="text-gray-600 text-sm">
                      Área con alto potencial de desarrollo y revalorización. 
                      Invierte en el futuro hoy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold mb-3">📍 Visítanos</h4>
                <p className="text-gray-700 mb-3">
                  Finca Rio Bravo<br />
                  Sector Román, Arboledas<br />
                  Norte de Santander, Colombia
                </p>
                <button 
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                  onClick={() => window.open('https://maps.app.goo.gl/bdgdd7jRECK7b1Lz7', '_blank')}
                >
                  🗺️ Abrir en Google Maps
                </button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <span className="text-4xl">📍</span>
                <p className="text-lg font-semibold">Ubicación Premium</p>
                <p className="text-sm">Finca Rio Bravo, Sector Román</p>
                <p className="text-xs mt-2">Visítanos para conocer los terrenos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-xl text-gray-600 mb-8">
            Riobravo - Vendedor exclusivo de lotes de 1,500 m² en Finca Rio Bravo. 
            Tu oportunidad de invertir en terrenos con excelente potencial.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {whatsappNumbers.map((phone, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-3xl mb-3">📞</div>
                <button
                  onClick={() => handleWhatsAppClick(phone.number, phone.country)}
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  📱 {phone.display}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span>📍</span>
              <span className="text-gray-700">Finca Rio Bravo, Sector Román</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div>🕐 Lunes a Viernes: 8:00 AM - 6:00 PM</div>
              <div>🕐 Sábados: 9:00 AM - 2:00 PM</div>
              <div>🕐 Domingos: Cerrado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RB</span>
            </div>
            <span className="text-xl font-bold">Riobravo</span>
          </div>
          <p className="text-gray-400 mb-4">
            Vendedor exclusivo de lotes de 1,500 m² en Finca Rio Bravo. 
            Tu oportunidad de invertir en terrenos con excelente potencial.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {whatsappNumbers.map((phone, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(phone.number, phone.country)}
                className="text-gray-400 hover:text-white"
              >
                📱 {phone.display}
              </button>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Riobravo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile WhatsApp Float */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg text-white"
        >
          📱
        </button>
      </div>
    </div>
  );
}