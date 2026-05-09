import CertificateCarousel from '@/components/CertificateCarousel';
import { CERTIFICATIONS, EDUCATION } from '@/constants/data';
import { SECTION_STYLES } from '@/constants/theme';

export default function EducationSection() {
  return (
    <section className={`${SECTION_STYLES.container} bg-white`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={SECTION_STYLES.title}>Formação e Certificações</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#333333] mb-6">Formação Acadêmica</h3>
          <div className="bg-[#E0E0E0] p-8 rounded-2xl border border-[#333333]/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#333333] mb-2">
                  {EDUCATION.degree}
                </h4>
                <p className="text-[#4A90E2] mb-2">{EDUCATION.period}</p>
                <p className="text-[#333333]">{EDUCATION.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#333333] mb-6">Certificações</h3>
          <CertificateCarousel certifications={CERTIFICATIONS} />
        </div>
      </div>
    </section>
  );
}
