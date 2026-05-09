import { PERSONAL_INFO } from '@/constants/data';

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[#333333] border-t border-[#4A90E2]/30">
      <div className="max-w-7xl mx-auto text-center text-[#E0E0E0]">
        <p>© 2026 {PERSONAL_INFO.name}. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Desenvolvido com Next.js, React, TypeScript e Tailwind CSS</p>
      </div>
    </footer>
  );
}
