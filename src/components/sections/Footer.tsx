import { PERSONAL_INFO } from '@/constants/data';

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[var(--foreground)] border-t border-[rgba(74,144,226,0.3)]">
      <div className="max-w-7xl mx-auto text-center text-[var(--background)]">
        <p>© 2026 {PERSONAL_INFO.name}. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Desenvolvido com Next.js, React, TypeScript e Tailwind CSS</p>
      </div>
    </footer>
  );
}
