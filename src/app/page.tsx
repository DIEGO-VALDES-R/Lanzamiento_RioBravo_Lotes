'use client';

import { loteConfig } from '@/data/loteConfig';

export default function Home() {
  const handleWhatsAppClick = (phoneNumber: string, country: string, interest?: string) => {
    let message = loteConfig.whatsappMessages.default;
    if (interest) {
      message += ` Me interesa: ${interest}.`;
    }
    const encodedMessage = encodeURIComponent(message);
    const url = country === 'co' 
      ? `https://wa.me/57${phoneNumber}?text=${encodedMessage}`
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

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
              <span className="text-xl font-bold">{loteConfig.contact.companyName}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-gray-600">WhatsApp:</span>
                {loteConfig.contact.whatsappNumbers.slice(0, 2).map((phone, index) => (
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
        <div className="absolute inset-0 z-0">
          <img 
            src="/riobravo-location.jpg" 
            alt="Finca Rio Bravo - Fondo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <span>🚀</span>
              <span>{loteConfig.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {loteConfig.hero.title}
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 drop-shadow">
              {loteConfig.hero.subtitle}
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
              <div className="text-4xl font-bold text-white mb-6">
                Desde {loteConfig.hero.price} por lote
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">{loteConfig.hero.surface}</div>
                  <div className="text-gray-200">Superficie</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-300 mb-1">{loteConfig.hero.availableLots}</div>
                  <div className="text-gray-200">Lotes disponibles</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-green-300 mb-1">📍</div>
                  <div className="text-gray-200">{loteConfig.hero.location}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 shadow-lg"
                onClick={() => handleWhatsAppClick(
                  loteConfig.contact.whatsappNumbers[0].number, 
                  loteConfig.contact.whatsappNumbers[0].country
                )}
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
            {loteConfig.benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
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
            {loteConfig.locationBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{benefit.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
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
            {loteConfig.plans.map((plan) => (
              <div 
                key={plan.id}
                className={`bg-white rounded-lg shadow-xl p-6 border-2 ${plan.borderClass} relative`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
                    {plan.badgeText}
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{plan.emoji}</div>
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-center mb-3">
                    <div className="text-sm text-gray-600">Precio total</div>
                    <div className="text-2xl font-bold text-green-600">{plan.total}</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pago inicial:</span>
                      <span className="font-medium">{plan.initial}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saldo a financiar:</span>
                      <span className="font-medium">{plan.balance}</span>
                    </div>
                    {plan.quotas && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cuotas:</span>
                        <span className="font-medium">{plan.quotas}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`${plan.benefitBg} ${plan.benefitText} p-3 rounded-lg text-sm mb-4`}>
                  {plan.benefit}
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">📱️ Contáctanos por WhatsApp:</p>
                  <div className="space-y-2">
                    {loteConfig.contact.whatsappNumbers.map((phone, index) => (
                      <button
                        key={index}
                        onClick={() => handleWhatsAppClick(phone.number, phone.country, plan.title)}
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
            ))}
          </div>
        </div>
      </section>

      {/* QUINTO BLOQUE - Cabin Models */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium mb-8 shadow-lg">
              <span className="text-2xl">🌲</span>
              <span className="text-lg">{loteConfig.cabins.heroTitle}</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto whitespace-pre-line">
              {loteConfig.cabins.heroSubtitle}
            </p>
            
            <div className="bg-gray-50 rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Valores de Referencia</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-center mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-xl font-bold text-green-600 mb-1">Lote ({loteConfig.cabins.loteSize})</div>
                  <div className="text-gray-700">{loteConfig.cabins.lotePrice}</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-xl font-bold text-green-600 mb-1">Cabaña prefabricada</div>
                  <div className="text-gray-700">{loteConfig.cabins.cabinPrice}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-900 mb-2">{loteConfig.cabins.totalNote}</div>
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
            {loteConfig.cabins.models.map((cabin) => (
              <div 
                key={cabin.id}
                className={`${cabin.isSpecial ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300' : 'bg-white border border-gray-200'} rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow`}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{cabin.emoji}</div>
                  <h3 className={`text-xl font-bold ${cabin.isSpecial ? 'text-green-800' : ''}`}>
                    {cabin.title}
                  </h3>
                  <p className={cabin.isSpecial ? 'text-gray-700' : 'text-gray-600'}>
                    {cabin.description}
                  </p>
                </div>
                <p className={`text-sm ${cabin.isSpecial ? 'text-gray-700' : 'text-gray-700'} text-center mb-4`}>
                  {cabin.detail}
                </p>
                <button 
                  className={`w-full ${cabin.isSpecial ? 'bg-green-700 hover:bg-green-800' : 'bg-green-600 hover:bg-green-700'} text-white py-2 rounded-lg`}
                  onClick={() => handleWhatsAppClick(
                    loteConfig.contact.whatsappNumbers[0].number, 
                    loteConfig.contact.whatsappNumbers[0].country, 
                    cabin.title
                  )}
                >
                  {cabin.isSpecial ? 'Diseñar mi cabaña' : 'Solicitar información'}
                </button>
              </div>
            ))}
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
              {loteConfig.contact.whatsappNumbers.map((phone, index) => (
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{loteConfig.location.name}</h3>
                  <p className="text-gray-600">
                    {loteConfig.location.sector}, a {loteConfig.location.distance}. Ubicación privilegiada con fácil acceso.
                  </p>
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

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Visítanos</h3>
                <p className="text-gray-600 mb-4">
                  {loteConfig.location.name}<br />
                  {loteConfig.location.sector}, {loteConfig.location.municipality}<br />
                  {loteConfig.location.department}, {loteConfig.location.country}
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
                    <p className="text-gray-600">{loteConfig.location.name}, {loteConfig.location.sector}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Visítanos para conocer los terrenos</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contacto</h3>
                <p className="mb-4">
                  {loteConfig.contact.companyName} - Vendedor exclusivo de lotes desde 1,000 m² en {loteConfig.location.name}. Tu oportunidad de invertir en terrenos con excelente potencial.
                </p>
                <div className="space-y-2">
                  {loteConfig.contact.whatsappNumbers.map((phone, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-2">📞</span>
                      <span>📱 {phone.display}</span>
                    </div>
                  ))}
                  <div className="flex items-center mt-3">
                    <span className="mr-2">📍</span>
                    <span>{loteConfig.location.name}, {loteConfig.location.sector}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Horario de Atención</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">🕐</span>
                    <span>{loteConfig.contact.hours.weekdays}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🕐</span>
                    <span>{loteConfig.contact.hours.saturday}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🕐</span>
                    <span>{loteConfig.contact.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-white/20">
              <p className="text-sm">© {loteConfig.contact.year} {loteConfig.contact.companyName}. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile WhatsApp Float */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => handleWhatsAppClick(
            loteConfig.contact.whatsappNumbers[0].number, 
            loteConfig.contact.whatsappNumbers[0].country
          )}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg text-white"
        >
          📱
        </button>
      </div>
    </div>
  );
}