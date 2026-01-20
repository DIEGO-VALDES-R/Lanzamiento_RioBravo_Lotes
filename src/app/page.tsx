'use client';

export default function Home() {
  const handleWhatsAppClick = (phoneNumber: string, country: string, interest?: string) => {
    let message = 'Hola, estoy interesado en obtener información sobre los lotes en Finca Rio Bravo.';
    if (interest) {
      message += ` Me interesa: ${interest}.`;
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

      {/* PRIMER BLOQUE - Hero Section */}
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
              Riobravo - Lotes Exclusivos desde 1000 m²
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 drop-shadow">
              Tu oportunidad de invertir en el futuro con terrenos premium en Finca Rio Bravo
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
              <div className="text-4xl font-bold text-white mb-6">
                Desde $65.000.000,00 por lote
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">1000 m²</div>
                  <div className="text-gray-200">Superficie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-300 mb-1">3</div>
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

      {/* SEGUNDO BLOQUE - Benefits */}
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

      {/* TERCER BLOQUE - Location Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🌄 Ubicación privilegiada
            </h2>
            <p className="text-xl text-gray-600">
              Nuestros lotes están en una zona rodeada de naturaleza, tranquilidad y belleza natural.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fuentes Hídricas</h3>
              <p className="text-gray-600">Fuentes hídricas cercanas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Paisajes Naturales</h3>
              <p className="text-gray-600">Paisajes de montaña y aire puro</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tranquilidad</h3>
              <p className="text-gray-600">Silencio y conexión con la naturaleza</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acceso Fácil</h3>
              <p className="text-gray-600">A pocos minutos del casco urbano, con vías de fácil acceso</p>
            </div>
          </div>
        </div>
      </section>

      {/* CUARTO BLOQUE - Financing Options */}
      <section className="py-16 bg-white">
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
                  <div className="text-2xl font-bold text-green-600">$60.000.000,00</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pago inicial:</span>
                    <span className="font-medium">$60.000.000,00</span>
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
                  <div className="text-2xl font-bold text-green-600">$63.000.000,00</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pago inicial:</span>
                    <span className="font-medium">$31.500.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saldo a financiar:</span>
                    <span className="font-medium">$31.500.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cuotas:</span>
                    <span className="font-medium">4 de $7.875.000,00</span>
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
                  <div className="text-2xl font-bold text-green-600">$65.000.000,00</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pago inicial:</span>
                    <span className="font-medium">$16.250.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saldo a financiar:</span>
                    <span className="font-medium">$48.750.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cuotas:</span>
                    <span className="font-medium">6 de $8.125.000,00</span>
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

              <div className="bg-purple-50 text-purple-800 p-3 rounded-lg text-sm mb-4">
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

      {/* QUINTO BLOQUE - Cabin Models */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section para Cabañas */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium mb-8 shadow-lg">
              <span className="text-2xl">🌲</span>
              <span className="text-lg">Lote + Cabaña Prefabricada: el espacio perfecto para tu estilo de vida</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Imagina tu lugar ideal: un terreno de 1500 m² y una cabaña diseñada a tu medida.
              <br />Tú eliges el diseño, los acabados y el tamaño. Nosotros hacemos realidad tu proyecto.
            </p>
            
            {/* Valores de Referencia */}
            <div className="bg-gray-50 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Valores de Referencia</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-center mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-xl font-bold text-green-600 mb-1">Lote (1500 m²)</div>
                  <div className="text-gray-700">Desde $67 millones</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-xl font-bold text-green-600 mb-1">Cabaña prefabricada</div>
                  <div className="text-gray-700">Valor según diseño y acabados</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900 mb-2">Total: a convenir según tu proyecto personalizado</div>
                <div className="text-sm text-gray-600">✨ Tú imaginas, nosotros lo construimos</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🏡 Opciones disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Cada modelo es personalizable según tus gustos, presupuesto y necesidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cabaña Moderna */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-xl font-bold">Cabaña Moderna</h3>
                <p className="text-gray-600">Diseño contemporáneo, funcional y lleno de luz natural.</p>
              </div>
              <p className="text-sm text-gray-700 text-center mb-4">
                Perfecta para quienes buscan comodidad y estilo.
              </p>
              <button 
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country, 'Cabaña Moderna')}
              >
                Solicitar información
              </button>
            </div>

            {/* Cabaña Familiar */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🏡</div>
                <h3 className="text-xl font-bold">Cabaña Familiar</h3>
                <p className="text-gray-600">Amplia y acogedora, ideal para disfrutar con la familia o amigos.</p>
              </div>
              <p className="text-sm text-gray-700 text-center mb-4">
                Pensada para quienes valoran el confort y la convivencia.
              </p>
              <button 
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country, 'Cabaña Familiar')}
              >
                Solicitar información
              </button>
            </div>

            {/* Cabaña Acogedora */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🏚️</div>
                <h3 className="text-xl font-bold">Cabaña Acogedora</h3>
                <p className="text-gray-600">Compacta, práctica y cálida.</p>
              </div>
              <p className="text-sm text-gray-700 text-center mb-4">
                Ideal como refugio de descanso o inversión vacacional.
              </p>
              <button 
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country, 'Cabaña Acogedora')}
              >
                Solicitar información
              </button>
            </div>

            {/* Cabaña Compacta */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🏘️</div>
                <h3 className="text-xl font-bold">Cabaña Compacta</h3>
                <p className="text-gray-600">Diseño eficiente y funcional.</p>
              </div>
              <p className="text-sm text-gray-700 text-center mb-4">
                Perfecta para quienes buscan un espacio inteligente y económico.
              </p>
              <button 
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country, 'Cabaña Compacta')}
              >
                Solicitar información
              </button>
            </div>

            {/* Cabaña Premium */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🏰</div>
                <h3 className="text-xl font-bold">Cabaña Premium</h3>
                <p className="text-gray-600">Lujo y elegancia en cada detalle.</p>
              </div>
              <p className="text-sm text-gray-700 text-center mb-4">
                Creada para quienes quieren una experiencia exclusiva en la naturaleza.
              </p>
              <button 
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country, 'Cabaña Premium')}
              >
                Solicitar información
              </button>
            </div>

            {/* Proyecto Personalizado */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-6 border-2 border-green-300 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-xl font-bold text-green-800">Proyecto Personalizado</h3>
                <p className="text-gray-700">Diseña la cabaña de tus sueños.</p>
              </div>
              <p className="text-sm text-gray-700 text-center mb-4">
                Creamos espacios únicos, sostenibles y listos para habitar o rentar.
              </p>
              <button 
                className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
                onClick={() => handleWhatsAppClick(whatsappNumbers[0].number, whatsappNumbers[0].country, 'Proyecto Personalizado')}
              >
                Diseñar mi cabaña
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEXTO BLOQUE - Investment Opportunity */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <div className="text-4xl mb-4">💼</div>
            <h2 className="text-3xl font-bold mb-4">
              ¿Buscas invertir? Esta oportunidad es para ti
            </h2>
            <p className="text-xl mb-8">
              Si sueñas con emprender tu propio glamping, desarrollar cabañas turísticas o simplemente invertir en un lugar con alta proyección, este es el momento.
              <br />Despega tus sueños e invierte en un proyecto con ubicación, belleza y rentabilidad.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">💬 Asesoría personalizada</h3>
              <p className="mb-4">
                Te acompañamos desde la elección del terreno hasta el diseño final de tu cabaña.
                <br />Creamos espacios únicos, sostenibles y listos para habitar o rentar.
              </p>
              <p className="text-lg font-medium">
                ✨ Tú imaginas, nosotros lo construimos
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {whatsappNumbers.map((phone, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(phone.number, phone.country, 'Asesoría de inversión')}
                  className="bg-white text-green-700 px-6 py-3 rounded-lg hover:bg-gray-100 font-medium"
                >
                  📱 {phone.display}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SÉPTIMO BLOQUE - Strategic Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ubicación Estratégica
            </h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Location Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Finca Rio Bravo</h3>
                  <p className="text-gray-600">Sector Román, a 10 minutos del casco urbano del municipio de Arboledas. Ubicación privilegiada con fácil acceso.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Zona en Crecimiento</h4>
                    <p className="text-gray-600">Área con alto potencial de desarrollo y revalorización. Invierte en el futuro hoy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Visítanos</h3>
                <p className="text-gray-600 mb-4">
                  Finca Rio Bravo<br />
                  Sector Román, Arboledas<br />
                  Norte de Santander, Colombia
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                  🗺️ Abrir en Google Maps
                </button>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ubicación Premium</h4>
                    <p className="text-gray-600">Finca Rio Bravo, Sector Román</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Visítanos para conocer los terrenos</p>
              </div>
            </div>
          </div>

          {/* Contact Footer */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contacto</h3>
                <p className="mb-4">
                  Riobravo - Vendedor exclusivo de lotes desde 1,000 m² en Finca Rio Bravo. Tu oportunidad de invertir en terrenos con excelente potencial.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>📱 312 491 5127</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>📱 312 512 3639</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📞</span>
                    <span>📱 +1 (954) 931-5153</span>
                  </div>
                  <div className="flex items-center mt-3">
                    <span className="mr-2">📍</span>
                    <span>Finca Rio Bravo, Sector Román</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Horario de Atención</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">🕐</span>
                    <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🕐</span>
                    <span>Sábados: 9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🕐</span>
                    <span>Domingos: Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-white/20">
              <p className="text-sm">© 2025 Riobravo. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </section>

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
