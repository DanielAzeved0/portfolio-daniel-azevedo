import { PERSONAL_INFO } from '@/constants/data';
import { BUTTON_STYLES } from '@/constants/theme';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#333333] to-[#4A90E2]/20">
      <div className="max-w-7xl mx-auto min-w-0 text-center">
        <div className="animate-fade-in min-w-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-6 break-words">
            Olá, eu sou
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#00B0FF]">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-xl md:text-2xl leading-relaxed text-[#E0E0E0] mb-8">
            {PERSONAL_INFO.title} | {PERSONAL_INFO.subtitle}
          </p>
          <div className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href="#projects" className={`${BUTTON_STYLES.primary} inline-flex w-full justify-center text-center sm:w-auto`}>
              Ver Projetos
            </a>
            <a href="#contact" className={`${BUTTON_STYLES.outline} inline-flex w-full justify-center text-center sm:w-auto`}>
              Entre em Contato
            </a>
            {PERSONAL_INFO.resumeUrl && (
              <a
                href={PERSONAL_INFO.resumeUrl}
                className={`${BUTTON_STYLES.outline} inline-flex w-full justify-center text-center sm:w-auto`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar Currículo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
