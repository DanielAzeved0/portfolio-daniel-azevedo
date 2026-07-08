'use client';

import { useState } from 'react';
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
          return (
            <button
              key={category}
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

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {activeCertifications.map((cert) => (
          <article
            key={cert.id}
            className="group flex min-h-[220px] flex-col justify-between rounded-3xl border border-[rgba(51,51,51,0.12)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--background)] text-3xl">
                  {cert.icon}
                </div>
                <span className="rounded-full bg-[rgba(74,144,226,0.1)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--accent-primary)]">
                  {cert.category}
                </span>
              </div>

              <h4 className="mb-3 text-lg font-bold leading-tight text-[var(--foreground)]">
                {cert.title}
              </h4>
              <p className="mb-2 text-sm font-semibold text-[var(--accent-primary)]">{cert.institution}</p>
              {cert.date && <p className="text-sm text-[rgba(51,51,51,0.75)]">Finalizado em {cert.date}</p>}
            </div>

            {cert.certificateUrl ? (
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                aria-label={`Abrir certificado ${cert.title}`}
              >
                Ver certificado
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            ) : (
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[rgba(51,51,51,0.7)]">
                Certificado disponível internamente
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
