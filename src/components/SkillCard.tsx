import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import type { SkillCategory } from '@/types/portfolio';

export default function SkillCard({ category, skills }: SkillCategory) {
  return (
    <Card variant="muted">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="bg-white text-sm font-normal text-[var(--foreground)]">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
