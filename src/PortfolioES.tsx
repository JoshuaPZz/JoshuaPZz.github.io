import React from 'react';

export function PortfolioES() {
  return (
    <>

    
    

    
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <img
            src="profile.jpg"
            alt="Joshua Prieto Zambrano"
            className="hero-avatar"
          />
          <h1><span>Joshua Prieto Zambrano</span></h1>
          <p className="hero-subtitle">
            Backend Software Engineer · Node.js / TypeScript · AWS Serverless · Microservicios
          </p>
          <p className="hero-location">
            <i className="fas fa-map-marker-alt"></i> Bogotá, Colombia
          </p>
          <div className="hero-actions">
            <a href="CV_Joshua_Prieto.pdf" className="btn btn-primary" download>
              <i className="fas fa-download"></i> Descargar CV
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-envelope"></i> Contáctame
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://linkedin.com/in/joshua-prieto-zambrano-1b68592aa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/JoshuaPZz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/jpz.pdf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:joshuaprieto8@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <main>
      
      <section className="section" id="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title">Perfil <span>Profesional</span></h2>
          </div>
          <div className="about-content reveal">
            <p className="about-text">
              <strong>Ingeniero de Sistemas</strong> (último año, promedio <strong>4.1/5.0</strong>) especializado en
              <strong>desarrollo backend</strong>, <strong>microservicios</strong> y <strong>cloud</strong>.
              Experiencia construyendo soluciones escalables con
              <strong>TypeScript (Node.js, NestJS)</strong> y <strong>Python</strong>,
              APIs RESTful, bases de datos relacionales, NoSQL y vectoriales
              (<strong>PostgreSQL, MongoDB, Pinecone</strong>),
              <strong>Docker</strong> y
              <strong>AWS Serverless (Lambda, API Gateway, Step Functions, EventBridge)</strong>,
              con formación en ciberseguridad (<strong>OWASP</strong>).
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">+2</div>
                <div className="stat-label">Años Exp.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4.1</div>
                <div className="stat-label">GPA / 5.0</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">40%</div>
                <div className="stat-label">↓ Tiempos</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30%</div>
                <div className="stat-label">↓ Costos AWS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section" id="experience">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Trayectoria</span>
            <h2 className="section-title">Experiencia <span>Profesional</span></h2>
          </div>
          <div className="timeline">
            
            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Junior Full Stack Developer (Backend Focus)</div>
                  <div className="timeline-company">Vexstack</div>
                </div>
                <span className="timeline-date">Abr 2026 — Presente</span>
              </div>
              <div className="timeline-location">
                <i className="fas fa-map-marker-alt"></i> Bogotá, Colombia
              </div>
              <ul>
                <li>Lideré de forma independiente la <strong>arquitectura backend</strong>, desarrollo e implementación de una aplicación web analítica de negocio.</li>
                <li>Diseñé e implementé <strong>APIs RESTful</strong> y lógica de negocio modular con <strong>NestJS</strong>, integrando la capa de backend con interfaces interactivas en <strong>React / Vite</strong>.</li>
                <li>Gestioné la persistencia y extracción de datos en <strong>Supabase</strong> y <strong>PostgreSQL</strong>, optimizando consultas para soportar reportes analíticos y métricas en tiempo real.</li>
              </ul>
            </div>

            
            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Software Developer (Backend & Cloud)</div>
                  <div className="timeline-company">Bucks</div>
                </div>
                <span className="timeline-date">Oct 2024 — Oct 2025</span>
              </div>
              <div className="timeline-location">
                <i className="fas fa-map-marker-alt"></i> Bogotá, Colombia
              </div>
              <ul>
                <li>Diseñé e implementé <strong>microservicios backend en TypeScript y Node.js</strong> bajo arquitecturas modulares <strong>event-driven</strong>, reduciendo el acoplamiento del sistema.</li>
                <li>Desarrollé <strong>APIs RESTful</strong> integradas con <strong>MongoDB</strong> y <strong>Pinecone (Vector DB)</strong>, logrando una <strong>reducción del 40% en tiempos de respuesta</strong> en endpoints críticos.</li>
                <li>Desplegué aplicaciones <strong>AWS Serverless (Lambda, App Runner, API Gateway, Step Functions, EventBridge)</strong>, optimizando <strong>costos operativos en un 30%</strong>, y estandaricé entornos con <strong>Docker</strong> para un equipo de +5 desarrolladores.</li>
                <li>Automaticé procesos con scripts en <strong>Python</strong> y participé activamente en decisiones de arquitectura y revisión de código.</li>
              </ul>
            </div>

            
            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Webmaster | Desarrollador y Administrador Web</div>
                  <div className="timeline-company">IEEE — Pontificia Universidad Javeriana</div>
                </div>
                <span className="timeline-date">Ene 2025 — Sep 2025</span>
              </div>
              <div className="timeline-location">
                <i className="fas fa-map-marker-alt"></i> Bogotá, Colombia
              </div>
              <ul>
                <li>Lideré el desarrollo, mantenimiento y gestión técnica del sitio web oficial del capítulo estudiantil, garantizando alta disponibilidad para más de <strong>500 visitas mensuales</strong>.</li>
              </ul>
            </div>

            
            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Monitor Académico — Comunicaciones y Redes</div>
                  <div className="timeline-company">Pontificia Universidad Javeriana</div>
                </div>
                <span className="timeline-date">Jul 2024 — Nov 2024</span>
              </div>
              <div className="timeline-location">
                <i className="fas fa-map-marker-alt"></i> Bogotá, Colombia
              </div>
              <ul>
                <li>Impartí soporte técnico y mentoría a <strong>+30 estudiantes</strong> en fundamentos de redes (<strong>OSI/TCP-IP</strong>, NAT, enrutamiento) y ciberseguridad, guiando laboratorios con <strong>Wireshark</strong> que contribuyeron a incrementar el rendimiento académico del grupo en un <strong>25%</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section" id="skills">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Tecnologías</span>
            <h2 className="section-title">Competencias <span>Técnicas</span></h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category reveal">
              <div className="skill-category-title">
                <i className="fas fa-server"></i> Lenguajes & Backend
              </div>
              <div className="skill-tags">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">NestJS</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">APIs RESTful</span>
                <span className="skill-tag">Microservicios</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <div className="skill-category-title">
                <i className="fas fa-database"></i> Bases de Datos
              </div>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Pinecone (Vector DB)</span>
                <span className="skill-tag">Supabase</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <div className="skill-category-title">
                <i className="fab fa-aws"></i> Cloud, DevOps & Serverless
              </div>
              <div className="skill-tags">
                <span className="skill-tag">AWS Lambda</span>
                <span className="skill-tag">API Gateway</span>
                <span className="skill-tag">Step Functions</span>
                <span className="skill-tag">EventBridge</span>
                <span className="skill-tag">App Runner</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">GitHub Actions</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <div className="skill-category-title">
                <i className="fas fa-shield-alt"></i> Arquitectura & Ciberseguridad
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Event-Driven</span>
                <span className="skill-tag">SOLID</span>
                <span className="skill-tag">Design Patterns</span>
                <span className="skill-tag">OWASP Top 10</span>
                <span className="skill-tag">OAuth</span>
                <span className="skill-tag">TCP/IP</span>
                <span className="skill-tag">MQTT</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <div className="skill-category-title">
                <i className="fas fa-palette"></i> Herramientas & Frontend
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Wireshark</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Angular</span>
              </div>
            </div>
            <div className="skill-category reveal">
              <div className="skill-category-title">
                <i className="fas fa-globe"></i> Idiomas
              </div>
              <div className="skill-tags">
                <span className="skill-tag">Español (Nativo)</span>
                <span className="skill-tag">Inglés (B2, en certificación)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Portafolio</span>
            <h2 className="section-title">Proyectos <span>Destacados</span></h2>
          </div>
          <div className="projects-grid">
            <div className="project-card reveal">
              <img src="microservices.png" alt="Marketplace Microservices Platform" />
              <div className="project-body">
                <h3>Marketplace Microservices Platform</h3>
                <p>
                  Plataforma distribuida para servicios turísticos. Arquitectura modular con Spring Cloud Gateway, Eureka, RabbitMQ, OAuth2 (Keycloak) y bases de datos relacionales/vectoriales (PostgreSQL, Pinecone), exponiendo APIs REST y GraphQL.
                </p>
                <div className="project-tech">
                  <span>Spring Boot</span>
                  <span>Microservicios</span>
                  <span>RabbitMQ</span>
                  <span>Keycloak</span>
                  <span>GraphQL</span>
                </div>
                <a
                  href="https://github.com/PurosBrothers/Proyecto-Microservicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> Ver en GitHub
                  <i className="fas fa-external-link-alt" style={{ fontSize: "0.7rem" }}></i>
                </a>
              </div>
            </div>
            <div className="project-card reveal">
              <img src="mqtt.png" alt="Solución IoT con MQTT" />
              <div className="project-body">
                <h3>Solución IoT Distribuida con MQTT</h3>
                <p>
                  Arquitectura de sistema distribuido para monitoreo de sensores IoT con MQTT sobre brokers Mosquitto, implementando productores y consumidores en Java y Python con tolerancia a fallos.
                </p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>Python</span>
                  <span>MQTT</span>
                  <span>Mosquitto</span>
                </div>
                <a
                  href="https://github.com/JoshuaPZz/Solucion_IoT_MQTT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> Ver en GitHub
                  <i className="fas fa-external-link-alt" style={{ fontSize: "0.7rem" }}></i>
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <img
                src="firebaseChart.png"
                alt="Generador de Gráficos Analíticos Serverless"
              />
              <div className="project-body">
                <h3>Generador de Gráficos Analíticos Serverless</h3>
                <p>
                  Microservicios serverless en Firebase (Cloud Functions) y Python para procesamiento y agregación de métricas, con arquitectura desacoplada y auto-escalable.
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Firebase</span>
                  <span>Cloud Functions</span>
                  <span>Serverless</span>
                </div>
                <a
                  href="https://github.com/JoshuaPZz/firebase-python-chart-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> Ver en GitHub
                  <i className="fas fa-external-link-alt" style={{ fontSize: "0.7rem" }}></i>
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <img src="firebaseFCM.png" alt="Firebase Cloud Messaging" />
              <div className="project-body">
                <h3>Microservicios Firebase — FCM</h3>
                <p>
                  Implementación de microservicios usando Firebase para generar notificaciones push a usuarios cuando son invitados a actividades o eventos.
                </p>
                <div className="project-tech">
                  <span>Node.js</span>
                  <span>Firebase</span>
                  <span>FCM</span>
                  <span>Firestore</span>
                </div>
                <a
                  href="https://github.com/JoshuaPZz/cloud-function-notifications-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> Ver en GitHub
                  <i className="fas fa-external-link-alt" style={{ fontSize: "0.7rem" }}></i>
                </a>
              </div>
            </div>

            <div className="project-card reveal">
              <img src="sockets.jpeg" alt="Comunicación con Sockets" />
              <div className="project-body">
                <h3>Comunicación con Sockets Distribuidos</h3>
                <p>
                  Sistema cliente-servidor usando Java y TCP/IP para comunicación en tiempo real entre aplicaciones distribuidas con programación concurrente.
                </p>
                <div className="project-tech">
                  <span>Java</span>
                  <span>TCP/IP</span>
                  <span>Sockets</span>
                  <span>Concurrencia</span>
                </div>
                <a
                  href="https://github.com/JoshuaPZz/Comunicacion-Sockets-Distribuidos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <i className="fab fa-github"></i> Ver en GitHub
                  <i className="fas fa-external-link-alt" style={{ fontSize: "0.7rem" }}></i>
                </a>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }} className="reveal">
            <a
              href="https://github.com/JoshuaPZz"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> Ver todos mis proyectos en GitHub
            </a>
          </div>
        </div>
      </section>

      
      <section className="section" id="education">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Formación</span>
            <h2 className="section-title">Educación y <span>Certificaciones</span></h2>
          </div>
          <div className="edu-grid">
            <div className="edu-card reveal">
              <h3>🎓 Pontificia Universidad Javeriana</h3>
              <p className="edu-detail"><strong>Pregrado en Ingeniería de Sistemas</strong></p>
              <p className="edu-detail" style={{ color: "var(--accent-3)" }}>GPA: 4.1 / 5.0</p>
              <p className="edu-detail">
                <i className="fas fa-calendar-alt" style={{ color: "var(--text-muted)", marginRight: "0.25rem" }}></i>
                Junio 2023 — Diciembre 2026 (Esperado)
              </p>
              <p className="edu-detail">
                <i className="fas fa-map-marker-alt" style={{ color: "var(--text-muted)", marginRight: "0.25rem" }}></i>
                Bogotá, Colombia
              </p>
            </div>

            <div className="edu-card reveal">
              <h3>📜 Certificaciones Técnicas</h3>
              <ul>
                <li><strong>Google IT Support Professional Certificate</strong> — Coursera</li>
                <li><strong>Python for Everybody</strong> — U. Michigan (Coursera)</li>
                <li><strong>Git and GitHub</strong> — Google (Coursera)</li>
                <li>Redes Avanzadas — Platzi</li>
                <li>Bases de Datos — Platzi</li>
                <li>Java SE Orientado a Objetos — Platzi</li>
              </ul>
              <div style={{ marginTop: "1.25rem" }}>
                <a
                  href="https://drive.google.com/drive/folders/1k1c8jK7Axvet7V5YBHrQ0gdFBG8nv_OP?usp=sharing"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.85rem" }}
                >
                  <i className="fas fa-certificate"></i> Ver todos los certificados
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section" id="leadership">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Más allá del código</span>
            <h2 className="section-title">Liderazgo y <span>Voluntariado</span></h2>
          </div>
          <div className="leadership-tags reveal">
            <div className="leadership-tag">
              <i className="fas fa-chalkboard-teacher"></i>
              <span><strong>Facilitador</strong> — Liderazgo Fabro</span>
            </div>
            <div className="leadership-tag">
              <i className="fas fa-users"></i>
              <span><strong>Coordinador</strong> — Grupo de Inductores, PUJ</span>
            </div>
            <div className="leadership-tag">
              <i className="fas fa-hands-helping"></i>
              <span><strong>Misionero</strong> — Misión País Colombia</span>
            </div>
            <div className="leadership-tag">
              <i className="fas fa-heart"></i>
              <span><strong>Acompañante</strong> — Pastoral PUJ</span>
            </div>
            <div className="leadership-tag">
              <i className="fas fa-globe"></i>
              <span><strong>Webmaster</strong> — IEEE Javeriana</span>
            </div>
            <div className="leadership-tag">
              <i className="fas fa-graduation-cap"></i>
              <span><strong>Monitor Académico</strong> — Redes y Comunicaciones</span>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section" id="personal">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Personal</span>
            <h2 className="section-title">Mi Vida Más Allá <span>del Código</span></h2>
          </div>
          <div className="hobbies-grid reveal">
            <div className="hobby-card">
              <i className="fas fa-book"></i>
              <h3>Filosofía</h3>
              <p>Apasionado por la filosofía existencialista</p>
            </div>
            <div className="hobby-card">
              <i className="fas fa-music"></i>
              <h3>Música</h3>
              <p>Amante del rap y la música en general</p>
            </div>
            <div className="hobby-card">
              <i className="fas fa-dumbbell"></i>
              <h3>Fitness</h3>
              <p>Entrenamiento constante y nutrición consciente</p>
            </div>
            <div className="hobby-card">
              <i className="fas fa-gamepad"></i>
              <h3>Gaming</h3>
              <p>Fanático de Souls-like y narrativas profundas</p>
            </div>
          </div>
          <div className="spotify-container reveal">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/3DK6m7It6Pw857FcQftMds?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameborder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Conectemos</span>
            <h2 className="section-title">Ponte en <span>Contacto</span></h2>
          </div>
          <div className="contact-grid reveal">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <h4>Teléfono</h4>
                  <a href="tel:+573118468556">+57 311 846 8556</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:joshuaprieto8@gmail.com">joshuaprieto8@gmail.com</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fab fa-whatsapp"></i></div>
                <div>
                  <h4>WhatsApp</h4>
                  <a
                    href="https://wa.me/573118468556"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar mensaje <i className="fas fa-external-link-alt" style={{ fontSize: "0.7rem" }}></i>
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon"><i className="fab fa-linkedin-in"></i></div>
                <div>
                  <h4>LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/joshua-prieto-zambrano-1b68592aa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    joshua-prieto <i className="fas fa-external-link-alt" style={{ fontSize: "0.7rem" }}></i>
                  </a>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formspree.io/f/xrgjlqpk"
              method="POST"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tu mensaje..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                <i className="fas fa-paper-plane"></i> Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    
    <footer className="footer">
      <div className="container">
        <p>
          Diseñado y desarrollado por <strong>Joshua Prieto Zambrano</strong> ·
          &copy; 2026
        </p>
      </div>
    </footer>

    
    <script>
      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      });

      // Mobile nav toggle
      const navToggle = document.getElementById('navToggle');
      const navLinks = document.getElementById('navLinks');

      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      });

      // Close mobile nav on link click
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          const icon = navToggle.querySelector('i');
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        });
      });

      // Scroll reveal animations
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
      });

      // Active nav link on scroll (scroll spy)
      const sections = document.querySelectorAll('.section[id]');
      const navItems = document.querySelectorAll('.nav-links a');

      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          const id = section.getAttribute('id');

          if (scrollY >= top && scrollY < top + height) {
            navItems.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + id) {
                link.classList.add('active');
              }
            });
          }
        });
      });
    </script>
  
    </>
  );
}
