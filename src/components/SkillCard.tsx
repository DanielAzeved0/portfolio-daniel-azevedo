interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-[#E0E0E0] p-6 rounded-xl border border-[#333333]/20 hover:border-[#00B0FF] hover:shadow-lg transition-all">
      <h3 className="text-xl font-bold text-[#333333] mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 bg-white text-[#333333] rounded-full text-sm border border-[#4A90E2]/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
