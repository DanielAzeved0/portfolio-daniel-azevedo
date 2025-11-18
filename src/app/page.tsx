'use client';

import Navigation from '@/components/Navigation';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import { PERSONAL_INFO, ABOUT_TEXT, SKILLS, PROJECTS, EDUCATION, CERTIFICATIONS } from '@/constants/data';
import { BUTTON_STYLES, SECTION_STYLES } from '@/constants/theme';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E0E0E0]">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#333333] to-[#4A90E2]/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Olá, eu sou
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#00B0FF]">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#E0E0E0] mb-8">
              {PERSONAL_INFO.title} | {PERSONAL_INFO.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#projects" className={BUTTON_STYLES.primary}>
                Ver Projetos
              </a>
              <a href="#contact" className={BUTTON_STYLES.outline}>
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${SECTION_STYLES.container} bg-[#E0E0E0]`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={SECTION_STYLES.title}>Sobre Mim</h2>
          <div className={SECTION_STYLES.card}>
            <p className="text-[#333333] text-lg leading-relaxed mb-6">
              {ABOUT_TEXT.paragraph1}
            </p>
            <p className="text-[#333333] text-lg leading-relaxed">
              {ABOUT_TEXT.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${SECTION_STYLES.container} bg-white`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={SECTION_STYLES.title}>Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((item, idx) => (
              <SkillCard
                key={idx}
                category={item.category}
                skills={item.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${SECTION_STYLES.container} bg-[#E0E0E0]`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={SECTION_STYLES.title}>Projetos</h2>
          <div className="mb-12">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                badge={project.badge}
                description={project.description}
                features={project.features}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`${SECTION_STYLES.container} bg-white`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={SECTION_STYLES.title}>Formação e Certificações</h2>
          
          {/* Formação Acadêmica */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">Formação Acadêmica</h3>
            <div className="bg-[#E0E0E0] p-8 rounded-2xl border border-[#333333]/20 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">
                    {EDUCATION.degree}
                  </h4>
                  <p className="text-[#4A90E2] mb-2">{EDUCATION.period}</p>
                  <p className="text-[#333333]">{EDUCATION.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div>
            <h3 className="text-2xl font-bold text-[#333333] mb-6">Certificações</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white p-6 rounded-xl border-2 border-[#333333]/20 hover:border-[#00B0FF] transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#333333] mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-[#4A90E2] font-semibold mb-1">
                        {cert.institution}
                      </p>
                      <p className="text-[#333333] text-sm">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${SECTION_STYLES.container} bg-[#333333]`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#E0E0E0]">
            Entre em Contato
          </h2>
          <p className="text-[#E0E0E0] text-lg mb-8">
            Estou disponível para oportunidades de estágio, projetos freelance ou apenas para conversar sobre tecnologia!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className={BUTTON_STYLES.ghost}
              aria-label="Enviar email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON_STYLES.ghost}
              aria-label="Visitar GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a 
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON_STYLES.ghost}
              aria-label="Visitar LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-[#00B0FF] text-white rounded-full font-semibold hover:bg-[#4A90E2] transition-all"
              aria-label="Enviar mensagem"
            >
              💬 Enviar Mensagem
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#333333] border-t border-[#4A90E2]/30">
        <div className="max-w-7xl mx-auto text-center text-[#E0E0E0]">
          <p>© 2025 {PERSONAL_INFO.name}. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Desenvolvido com Next.js e Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
