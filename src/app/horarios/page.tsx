export default function HorariosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/images/club-logo.png" 
                alt="Club de Lucha Massanassa Logo" 
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-xl font-bold">Club de Lucha Massanassa</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-gray-300 transition">Inicio</a>
              <a href="/#nosotros" className="hover:text-gray-300 transition">Nosotros</a>
              <a href="/#actividades" className="hover:text-gray-300 transition">Disciplinas</a>
              <a href="/horarios" className="hover:text-gray-300 transition font-bold text-red-400">Horarios</a>
              <a href="/#video-instalaciones" className="hover:text-gray-300 transition">Video</a>
              <a href="/#galeria" className="hover:text-gray-300 transition">Galería</a>
              <a href="/#contacto" className="hover:text-gray-300 transition">Contacto</a>
            </nav>
            <button className="md:hidden mobile-menu-toggle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav id="mobile-menu" className="hidden md:hidden mt-4 space-y-2">
            <a href="/" className="block hover:text-gray-300 transition">Inicio</a>
            <a href="/#nosotros" className="block hover:text-gray-300 transition">Nosotros</a>
            <a href="/#actividades" className="block hover:text-gray-300 transition">Disciplinas</a>
            <a href="/horarios" className="block hover:text-gray-300 transition font-bold text-red-400">Horarios</a>
            <a href="/#video-instalaciones" className="block hover:text-gray-300 transition">Video</a>
            <a href="/#galeria" className="block hover:text-gray-300 transition">Galería</a>
            <a href="/#contacto" className="block hover:text-gray-300 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Horarios de Clases
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-100 drop-shadow-md">
              Consulta nuestro horario completo de clases de artes marciales y fitness. 
              Entrena con nosotros de lunes a sábado en los horarios que mejor se adapten a ti.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Table Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Horario Semanal</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro horario de clases de lunes a sábado. Todas las clases están dirigidas por entrenadores certificados.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium">Hora</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Lunes</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Martes</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Miércoles</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Jueves</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Viernes</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Sábado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Morning classes */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">09:00 - 10:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Entren. 3ª edad</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Entren. 3ª edad</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Entren. 3ª edad</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Entren. 3ª edad</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Entren. 3ª edad</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-yellow-50">Entren. especial competidor@s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">10:00 - 11:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-yellow-50">Entren. especial competidor@s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">11:00 - 12:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-red-50">Multifuncional</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-yellow-50">Entren. especial competidor@s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">12:00 - 13:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde las 9:00h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-yellow-50">Entren. especial competidor@s</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">13:00 - 14:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde las 9:00h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos (desde 9h)</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-yellow-50">Entren. especial competidor@s</td>
                  </tr>
                  
                  {/* Afternoon classes */}
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">17:00 - 18:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">BJJ 3 a 7 años</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Capoeira</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Entrenamiento libre</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Capoeira</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">BJJ 3 a 7 años</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">18:00 - 19:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">BJJ 8 a 12 años</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Capoeira</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">BJJ Sólo chicas</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Capoeira</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">BJJ 8 a 12 años</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">19:00 - 20:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Kick-boxing</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Kick-boxing</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">20:00 - 21:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">MMA</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">MMA</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">-</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">21:00 - 22:00</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600 bg-blue-50">BJJ adultos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">MMA</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">Bailes Latinos</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">MMA</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">-</td>
                    <td className="px-4 py-3 text-sm text-center text-gray-600">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Class Descriptions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Descripción de Clases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce en detalle cada una de nuestras disciplinas y sus beneficios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entren. 3ª Edad</h3>
              <p className="text-gray-600">
                Clases específicas para personas mayores. Ejercicios de movilidad, fuerza y coordinación adaptados a las necesidades de la tercera edad.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multifuncional</h3>
              <p className="text-gray-600">
                Entrenamiento funcional que trabaja todos los grupos musculares. Ideal para mejorar condición física general y fuerza.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">BJJ Adultos</h3>
              <p className="text-gray-600">
                Brazilian Jiu-Jitsu para adultos. Técnicas de lucha en el suelo, defensa personal y sumisiones. Horario extendido desde las 9:00h.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">BJJ 3 a 7 años</h3>
              <p className="text-gray-600">
                Iniciación al Brazilian Jiu-Jitsu para niños pequeños. Enfoque lúdico con disciplina y respeto.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">BJJ 8 a 12 años</h3>
              <p className="text-gray-600">
                Brazilian Jiu-Jitsu para niños mayores. Técnicas básicas y desarrollo de habilidades motoras.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">BJJ Sólo chicas</h3>
              <p className="text-gray-600">
                Clase exclusiva para mujeres de Brazilian Jiu-Jitsu. Entorno seguro y empoderador para aprender técnicas de defensa personal.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capoeira</h3>
              <p className="text-gray-600">
                Arte marcial brasileña que combina danza, música y acrobacias. Desarrolla flexibilidad y ritmo.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entrenamiento libre</h3>
              <p className="text-gray-600">
                Tiempo libre para practicar técnicas, hacer preguntas y entrenar con otros compañeros de forma supervisada.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kick-boxing</h3>
              <p className="text-gray-600">
                Combina técnicas de boxeo con patadas. Excelente para mejorar condición física y coordinación.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">MMA</h3>
              <p className="text-gray-600">
                Artes Marciales Mixtas. Combina lo mejor de diferentes disciplinas para combate completo.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bailes Latinos</h3>
              <p className="text-gray-600">
                Clases de baile latino para mejorar ritmo, coordinación y condición física de forma divertida.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entren. especial competidor@s</h3>
              <p className="text-gray-600">
                <strong>ENTRENAMIENTO ESPECIAL PARA COMPETIDOR@S</strong><br />
                Preparación intensiva para competiciones con técnicas avanzadas y condición física específica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Información Importante</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Se recomienda llegar 15 minutos antes del inicio de cada clase</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Las clases de Entren. especial competidor@s requieren nivel avanzado y autorización del entrenador</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>El BJJ para adultos tiene horario extendido desde las 9:00h hasta las 14:00h y de 19:00h a 22:00h</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Los sábados solo hay clases de Entren. especial competidor@s de 9:00 a 14:00</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Los horarios pueden sufrir modificaciones en festivos y vacaciones. Consulta nuestra web o redes sociales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Club de Lucha Massanassa</h4>
              <p className="text-gray-400">
                Formando campeones en Jiujitsu Brasileno, Capoeira, Kick Boxing, MMA, Grappling y Musculación con disciplina, respeto y pasión desde 2003.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Disciplinas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#actividades" className="hover:text-white transition">Jiujitsu Brasileno</a></li>
                <li><a href="/#actividades" className="hover:text-white transition">Capoeira</a></li>
                <li><a href="/#actividades" className="hover:text-white transition">Kick Boxing</a></li>
                <li><a href="/#actividades" className="hover:text-white transition">MMA</a></li>
                <li><a href="/#actividades" className="hover:text-white transition">Grappling</a></li>
                <li><a href="/#actividades" className="hover:text-white transition">Musculación</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition">Inicio</a></li>
                <li><a href="/#nosotros" className="hover:text-white transition">Nosotros</a></li>
                <li><a href="/#actividades" className="hover:text-white transition">Disciplinas</a></li>
                <li><a href="/horarios" className="hover:text-white transition font-bold text-red-400">Horarios</a></li>
                <li><a href="/#video-instalaciones" className="hover:text-white transition">Video Instalaciones</a></li>
                <li><a href="/#galeria" className="hover:text-white transition">Galería</a></li>
                <li><a href="/#contacto" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/club_de_lucha_massanassa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/p/Club-de-lucha-Massanassa-Mestre-Stanly-100063572770580/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@clubdeluchamassanassa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Club de Lucha Massanassa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}