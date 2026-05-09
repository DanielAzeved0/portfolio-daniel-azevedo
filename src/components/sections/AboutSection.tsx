import { ABOUT_TEXT } from '@/constants/data';
import { SECTION_STYLES } from '@/constants/theme';

export default function AboutSection() {
  return (
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
  );
}
