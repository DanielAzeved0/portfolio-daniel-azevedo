import SkillCard from '@/components/SkillCard';
import Section from '@/components/ui/Section';
import { SKILLS } from '@/constants/data';
import { SECTION_STYLES } from '@/constants/theme';

export default function SkillsSection() {
  return (
    <Section id="skills" tone="white">
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
    </Section>
  );
}
