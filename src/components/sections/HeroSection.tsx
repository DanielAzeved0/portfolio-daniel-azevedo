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
      contentClassName="min-w-0"
    >
      <div className="animate-fade-in min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7 text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4">
              Olá, eu sou
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="mx-auto md:mx-0 max-w-3xl text-base sm:text-xl md:text-2xl leading-relaxed text-[var(--background)] mb-6">
              {PERSONAL_INFO.title} | {PERSONAL_INFO.subtitle}
            </p>

            <div className="mx-auto md:mx-0 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-start sm:gap-4">
              <LinkButton href="#projects" className="inline-flex w-full justify-center text-center sm:w-auto" aria-label="Ver projetos">
                Ver Projetos
              </LinkButton>
              <LinkButton href="#contact" variant="outline" className="inline-flex w-full justify-center text-center sm:w-auto" aria-label="Entrar em contato">
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

          <div className="md:col-span-5 hidden md:flex items-center justify-center">
            <svg aria-hidden="true" width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
              <rect x="8" y="8" width="304" height="224" rx="20" fill="var(--background)" opacity="0.9" />
              <circle cx="240" cy="64" r="36" fill="var(--accent-secondary)" opacity="0.15" />
              <circle cx="200" cy="120" r="28" fill="var(--accent-primary)" opacity="0.12" />
              <path d="M56 160c24-32 72-40 104-24" stroke="var(--accent-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
              <path d="M72 96c12-18 36-28 56-20" stroke="var(--accent-secondary)" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
              <g transform="translate(36,36)" opacity="0.95">
                <rect x="0" y="0" width="64" height="40" rx="6" fill="white" />
                <text x="10" y="25" fill="var(--foreground)" fontSize="12" fontWeight="600">full-stack</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
}
