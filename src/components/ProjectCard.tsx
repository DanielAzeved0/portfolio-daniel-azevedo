interface ProjectCardProps {
  title: string;
  badge: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
}

export default function ProjectCard({ 
  title, 
  badge, 
  description, 
  features, 
  technologies, 
  githubUrl 
}: ProjectCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-[#333333]/20 hover:border-[#00B0FF] transition-all hover:shadow-2xl hover:shadow-[#00B0FF]/20">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="inline-block px-3 py-1 bg-[#00B0FF] text-white text-xs font-bold rounded-full mb-3">
            {badge}
          </span>
          <h3 className="text-3xl font-bold text-[#333333] mb-3">
            📱 {title}
          </h3>
        </div>
      </div>
      
      <p className="text-[#333333] text-lg mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="text-[#4A90E2] font-semibold mb-3 text-lg">✨ Funcionalidades:</h4>
        <ul className="grid md:grid-cols-2 gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[#333333]">
              <svg className="w-5 h-5 text-[#00B0FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-[#4A90E2] font-semibold mb-3">🛠️ Tecnologias:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-[#E0E0E0] text-[#333333] rounded-full text-sm font-medium border border-[#4A90E2]/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-[#00B0FF] text-white rounded-full font-semibold hover:bg-[#4A90E2] hover:shadow-lg hover:shadow-[#00B0FF]/50 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          Ver no GitHub
        </a>
      </div>
    </div>
  );
}
