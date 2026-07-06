import { PERSONAL_INFO } from '@/constants/data';
import { BUTTON_STYLES } from '@/constants/theme';

export default function HeroSection() {
  return (
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
            {PERSONAL_INFO.resumeUrl && (
              <a href={PERSONAL_INFO.resumeUrl} className={BUTTON_STYLES.outline} target="_blank" rel="noopener noreferrer">
                Baixar Currículo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
