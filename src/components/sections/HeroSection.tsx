import LinkButton from '@/components/ui/LinkButton';
import Section from '@/components/ui/Section';
import { PERSONAL_INFO } from '@/constants/data';

export default function HeroSection() {
  return (
    <Section
      id="home"
      tone="hero"
      width="xl"
      spacing="none"
      className="pt-28 pb-14 px-4 sm:pt-32 sm:pb-16 sm:px-6 lg:pb-20 lg:px-8"
      contentClassName="min-w-0 text-center"
    >
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
          <LinkButton href="#projects" className="inline-flex w-full justify-center text-center sm:w-auto">
            Ver Projetos
          </LinkButton>
          <LinkButton href="#contact" variant="outline" className="inline-flex w-full justify-center text-center sm:w-auto">
            Entre em Contato
          </LinkButton>
          {PERSONAL_INFO.resumeUrl && (
            <LinkButton
              href={PERSONAL_INFO.resumeUrl}
              variant="outline"
              className="inline-flex w-full justify-center text-center sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar Currículo
            </LinkButton>
          )}
        </div>
      </div>
    </Section>
  );
}
