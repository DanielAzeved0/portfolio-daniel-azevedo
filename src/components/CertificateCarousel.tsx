'use client';

import { useEffect, useRef, useState } from 'react';
import type { PointerEvent, KeyboardEvent } from 'react';
import { FOCUS_STYLES } from '@/constants/theme';
import type { Certification } from '@/types/portfolio';

interface CertificateCarouselProps {
  certifications: Certification[];
}

export default function CertificateCarousel({ certifications }: CertificateCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef({ active: false, dragging: false, startX: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const dragThreshold = 8;
  const maxIndex = Math.max(certifications.length - 1, 0);

  useEffect(() => {
    setActiveIndex(0);
  }, [certifications]);

  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateActive = () => {
      const slides = Array.from(track.querySelectorAll<HTMLElement>('[data-carousel-slide]'));
      if (!slides.length) return;
      const center = track.scrollLeft + track.clientWidth / 2;
      const closest = slides.reduce((best, slide, i) => {
        const sc = slide.offsetLeft + slide.offsetWidth / 2;
        return Math.abs(sc - center) < Math.abs((slides[best].offsetLeft + slides[best].offsetWidth / 2) - center) ? i : best;
      }, 0);
      setActiveIndex(closest);
    };

    updateActive();
    track.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      track.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  const scrollToSlide = (index: number) => {
    const track = trackRef.current;
    const slide = track?.querySelectorAll<HTMLElement>('[data-carousel-slide]')[index];
    if (!track || !slide) return;
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
    track.scrollTo({ left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2, behavior });
  };

  const moveBy = (dir: -1 | 1) => scrollToSlide(Math.min(Math.max(activeIndex + dir, 0), maxIndex));

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || (e.pointerType === 'mouse' && e.button !== 0)) return;
    if ((e.target as HTMLElement).closest('a,button')) return;
    dragState.current = { active: true, dragging: false, startX: e.clientX, scrollLeft: track.scrollLeft };
    try { track.setPointerCapture((e as any).pointerId); } catch {};
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    if (!dragState.current.dragging && Math.abs(dx) < dragThreshold) return;
    dragState.current.dragging = true;
    e.preventDefault();
    track.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const stopDragging = (e: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    try { if (track && (e as any).pointerId && track.hasPointerCapture((e as any).pointerId)) track.releasePointerCapture((e as any).pointerId); } catch {}
    dragState.current.active = false;
    dragState.current.dragging = false;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); moveBy(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); moveBy(-1); }
  };

  return (
    <div className="relative overflow-visible">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[rgba(51,51,51,0.7)]" aria-live="polite">{activeIndex + 1} de {certifications.length}</p>
        <div className="flex gap-3">
          <button type="button" onClick={() => moveBy(-1)} disabled={activeIndex === 0} aria-label="Certificado anterior" className={`grid h-11 w-11 place-items-center rounded-full border bg-white disabled:cursor-not-allowed disabled:opacity-45 ${FOCUS_STYLES}`}>◀</button>
          <button type="button" onClick={() => moveBy(1)} disabled={activeIndex === maxIndex} aria-label="Próximo certificado" className={`grid h-11 w-11 place-items-center rounded-full border bg-white disabled:cursor-not-allowed disabled:opacity-45 ${FOCUS_STYLES}`}>▶</button>
        </div>
      </div>

      <div ref={trackRef}
        className={`flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${FOCUS_STYLES}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onKeyDown={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        aria-label="Carrossel de certificados"
        tabIndex={0}
      >
        {certifications.map((cert, index) => {
          const isActive = activeIndex === index;
          const slideLabel = 'Slide ' + (index + 1) + ' de ' + certifications.length + ': ' + cert.title;
          const slideClasses = 'w-[86%] flex-none snap-center sm:w-[58%] lg:w-[38%] ' + (isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95');
          return (
            <div key={cert.id} data-carousel-slide aria-current={isActive ? 'true' : undefined}
              aria-label={slideLabel}
              className={slideClasses}
              style={{ transition: 'transform 500ms ease, opacity 500ms ease' }}
            >
              <article className="flex h-full min-h-64 flex-col justify-between bg-white p-6 rounded-xl border-2">
                <div>
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--background)] text-3xl">{cert.icon}</div>
                    <span className="rounded-full bg-[rgba(0,176,255,0.1)] px-3 py-1 text-xs font-bold text-[var(--accent-primary)]">{cert.duration ?? cert.institution}</span>
                  </div>
                  <h4 className="mb-4 text-xl font-bold leading-tight text-[var(--foreground)]">{cert.title}</h4>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[var(--accent-primary)]">{cert.institution}</p>
                  {cert.date && <p className="text-sm text-[rgba(51,51,51,0.75)]">Finalizado em {cert.date}</p>}
                  {cert.certificateUrl && (
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-[var(--accent-secondary)] ${FOCUS_STYLES}`}>
                      Ver certificado
                    </a>
                  )}
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2">
        {certifications.map((cert, index) => (
          <button key={cert.id} type="button" onClick={() => scrollToSlide(index)} aria-label={`Ir para certificado ${index + 1}`} className={`h-3 rounded-full transition-all ${FOCUS_STYLES} ${activeIndex === index ? 'w-9 bg-[var(--accent-secondary)]' : 'w-3 bg-[rgba(51,51,51,0.25)]'}`} />
        ))}
      </div>
    </div>
  );
}
