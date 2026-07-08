'use client';

import { useState } from 'react';
import CertificateCarousel from '@/components/CertificateCarousel';
import type { Certification } from '@/types/portfolio';

interface CertificateGroupsProps {
  certifications: Certification[];
}

export default function CertificateGroups({ certifications }: CertificateGroupsProps) {
  const categories = Array.from(
    new Set(certifications.map((cert) => cert.category ?? 'Outros')),
  );
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? 'Outros');
  const activeCertifications = certifications.filter(
    (cert) => cert.category === activeCategory,
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3" role="tablist" aria-label="Categorias de certificados">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const categoryId = `cert-category-tab-${category.replace(/\s+/g, '-').toLowerCase()}`;
          return (
            <button
              key={category}
              id={categoryId}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] ${
                isActive
                  ? 'border-[var(--accent-secondary)] bg-[var(--accent-secondary)] text-white'
                  : 'border-[rgba(51,51,51,0.15)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div
        className="mt-6"
        role="tabpanel"
        aria-labelledby={`cert-category-tab-${activeCategory.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {activeCertifications.length > 0 ? (
          <CertificateCarousel certifications={activeCertifications} />
        ) : (
          <p className="rounded-3xl border border-[rgba(51,51,51,0.12)] bg-white p-6 text-[var(--foreground)] shadow-sm">
            Nenhum certificado encontrado para esta categoria.
          </p>
        )}
      </div>
    </div>
  );
}
