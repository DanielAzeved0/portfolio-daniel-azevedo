import SkillCard from '@/components/SkillCard';
import { SKILLS } from '@/constants/data';
import { SECTION_STYLES } from '@/constants/theme';

export default function SkillsSection() {
  return (
    <section id="skills" className={`${SECTION_STYLES.container} bg-white`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={SECTION_STYLES.title}>Habilidades</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.category}
              category={item.category}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
