export default function Home() {
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
              <a href="#inicio" className="hover:text-gray-300 transition">Inicio</a>
              <a href="#nosotros" className="hover:text-gray-300 transition">Nosotros</a>
              <a href="#actividades" className="hover:text-gray-300 transition">Disciplinas</a>
              <a href="/horarios" className="hover:text-gray-300 transition">Horarios</a>
              <a href="#video-instalaciones" className="hover:text-gray-300 transition">Video</a>
              <a href="#galeria" className="hover:text-gray-300 transition">Galería</a>
              <a href="#contacto" className="hover:text-gray-300 transition">Contacto</a>
            </nav>
            <button className="md:hidden mobile-menu-toggle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav id="mobile-menu" className="hidden md:hidden mt-4 space-y-2">
            <a href="#inicio" className="block hover:text-gray-300 transition">Inicio</a>
            <a href="#nosotros" className="block hover:text-gray-300 transition">Nosotros</a>
            <a href="#actividades" className="block hover:text-gray-300 transition">Disciplinas</a>
            <a href="/horarios" className="block hover:text-gray-300 transition">Horarios</a>
            <a href="#video-instalaciones" className="block hover:text-gray-300 transition">Video</a>
            <a href="#galeria" className="block hover:text-gray-300 transition">Galería</a>
            <a href="#contacto" className="block hover:text-gray-300 transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gray-800 text-white min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-background.jpg" 
            alt="Artes marciales mixtas - Entrenamiento" 
            className="w-full h-full object-cover"
          />
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Bienvenidos al Club de Lucha Massanassa
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 drop-shadow-md">
              Descubre las artes marciales más completas: Jiujitsu Brasileno, Capoeira, Kick Boxing, MMA y Grappling. 
              Además, contamos con una sala de musculación y fitness completa. Entrena en un ambiente profesional y seguro para todas las edades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg">
                Únete Ahora
              </a>
              <a href="#nosotros" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg">
                Conoce Más
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Con más de 20 años de experiencia, formamos atletas de alto nivel en las mejores disciplinas de combate con valores de disciplina y respeto
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/club-facility.jpg" 
                alt="Nuestras Instalaciones" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Historia</h3>
              <p className="text-gray-600 mb-4">
                El Club de Lucha Massanassa nació en 2003 con la misión de promover las artes marciales y deportes de combate en nuestra comunidad. 
                Desde entonces, hemos formado a cientos de atletas que han competido a nivel nacional e internacional.
              </p>
              <p className="text-gray-600 mb-4">
                Contamos con instalaciones modernas y entrenadores certificados en cada disciplina: Jiujitsu Brasileno, Capoeira, Kick Boxing, MMA y Grappling. 
                Además, disponemos de una sala de musculación y fitness completamente equipada con las mejores máquinas y pesas libres.
                Garantizamos un aprendizaje seguro y efectivo para todos nuestros miembros, desde principiantes hasta competidores avanzados.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-gray-600">Alumnos Formados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">20+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="actividades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Disciplinas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos programas para todas las edades y niveles de experiencia en las mejores artes marciales
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/jiujitsu-brasileno.jpg" 
                alt="Jiujitsu Brasileno" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jiujitsu Brasileno</h3>
                <p className="text-gray-600 mb-4">
                  Arte marcial enfocado en la lucha en el suelo, técnicas de sumisión y defensa personal. Ideal para todas las edades.
                </p>
                <div className="text-red-600 font-bold">Lunes a Viernes</div>
                <div className="text-gray-600">9:00 - 14:00 y 19:00 - 22:00</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/capoeira.jpg" 
                alt="Capoeira" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Capoeira</h3>
                <p className="text-gray-600 mb-4">
                  Arte marcial brasileña que combina danza, música y acrobacias. Desarrolla flexibilidad y ritmo.
                </p>
                <div className="text-red-600 font-bold">Martes y Jueves</div>
                <div className="text-gray-600">17:00 - 19:00</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/kick-boxing.jpg" 
                alt="Kick Boxing" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kick Boxing</h3>
                <p className="text-gray-600 mb-4">
                  Combina técnicas de boxeo con patadas. Excelente para mejorar condición física y coordinación.
                </p>
                <div className="text-red-600 font-bold">Martes y Jueves</div>
                <div className="text-gray-600">19:00 - 21:00</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/mma.jpg" 
                alt="MMA" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">MMA</h3>
                <p className="text-gray-600 mb-4">
                  Artes Marciales Mixtas. Combina lo mejor de diferentes disciplinas para combate completo.
                </p>
                <div className="text-red-600 font-bold">Martes, Jueves y Viernes</div>
                <div className="text-gray-600">20:00 - 22:00</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/grappling.jpg" 
                alt="Grappling" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BJJ Infantil</h3>
                <p className="text-gray-600 mb-4">
                  Brazilian Jiu-Jitsu para niños de 3 a 12 años. Clases divididas por edades: 3-7 años y 8-12 años. También tenemos clase exclusiva para chicas.
                </p>
                <div className="text-red-600 font-bold">Lunes, Miércoles y Viernes</div>
                <div className="text-gray-600">17:00 - 19:00</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/musculacion.jpg" 
                alt="Sala de Musculación" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sala de Musculación</h3>
                <p className="text-gray-600 mb-4">
                  Área completamente equipada con máquinas de última generación, pesas libres y espacio para cardio. Ideal para complementar tu entrenamiento.
                </p>
                <div className="text-red-600 font-bold">Lunes a Viernes</div>
                <div className="text-gray-600">10:00 - 12:00</div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/infantil.jpg" 
                alt="Clases Infantiles" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Entren. 3ª Edad</h3>
                <p className="text-gray-600 mb-4">
                  Clases específicas para personas mayores. Ejercicios de movilidad, fuerza y coordinación adaptados a las necesidades de la tercera edad.
                </p>
                <div className="text-red-600 font-bold">Lunes a Viernes</div>
                <div className="text-gray-600">9:00 - 10:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-instalaciones" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conoce Nuestras Instalaciones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Te invitamos a recorrer nuestras instalaciones a través de este video grabado con dron. 
              Descubre nuestras salas de entrenamiento, área de musculación y todas las comodidades que ofrecemos.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                <img 
                  src="/images/video-thumbnail.jpg" 
                  alt="Video de instalaciones del Club de Lucha Massanassa" 
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-6 cursor-pointer transform hover:scale-110 transition">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tour Virtual por Nuestro Club</h3>
                <p className="text-gray-600 mb-4">
                  Un recorrido completo por todas nuestras áreas: salas de artes marciales, zona de musculación, 
                  vestuarios y áreas comunes. Conoce por qué somos el mejor centro de artes marciales y fitness de Massanassa.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Duración: 3:45 minutos</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
                  </svg>
                  <span>Grabado en 4K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galería</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Momentos destacados de nuestro club
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="/images/gallery-1.jpg" 
              alt="Entrenamiento 1" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img 
              src="/images/gallery-2.jpg" 
              alt="Competición 1" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img 
              src="/images/gallery-3.jpg" 
              alt="Entrenamiento 2" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img 
              src="/images/gallery-4.jpg" 
              alt="Competición 2" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img 
              src="/images/gallery-5.jpg" 
              alt="Equipo 1" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img 
              src="/images/gallery-6.jpg" 
              alt="Equipo 2" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img 
              src="/images/gallery-7.jpg" 
              alt="Medallas 1" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
            <img 
              src="/images/gallery-8.jpg" 
              alt="Medallas 2" 
              className="w-full h-32 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ¡Únete a nuestra familia! Estamos aquí para responder todas tus preguntas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Dirección</div>
                    <div className="text-gray-600">C/ FONT CABILDA 6C Y 10, 46470 Massanassa, Valencia</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-gray-600">+34 681 30 63 14</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">hola@clubdeluchamassanassa.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Horario</div>
                    <div className="text-gray-600">Lunes a Viernes: 8:00 - 22:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea 
                    id="mensaje" 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Club de Lucha Massanassa</h4>
              <p className="text-gray-400">
                Formando campeones en Jiujitsu Brasileno, Capoeira, Kick Boxing, MMA, Grappling y Musculación con disciplina, respeto y pasión desde 2003.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Disciplinas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#actividades" className="hover:text-white transition">Jiujitsu Brasileno</a></li>
                <li><a href="#actividades" className="hover:text-white transition">Capoeira</a></li>
                <li><a href="#actividades" className="hover:text-white transition">Kick Boxing</a></li>
                <li><a href="#actividades" className="hover:text-white transition">MMA</a></li>
                <li><a href="#actividades" className="hover:text-white transition">Grappling</a></li>
                <li><a href="#actividades" className="hover:text-white transition">Musculación</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-white transition">Nosotros</a></li>
                <li><a href="#actividades" className="hover:text-white transition">Disciplinas</a></li>
                <li><a href="#video-instalaciones" className="hover:text-white transition">Video Instalaciones</a></li>
                <li><a href="#galeria" className="hover:text-white transition">Galería</a></li>
                <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
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