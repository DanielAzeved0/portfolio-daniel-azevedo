'use client';

import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import type { Certification } from '@/types/portfolio';

interface CertificateCarouselProps {
  certifications: Certification[];
}

export default function CertificateCarousel({ certifications }: CertificateCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, dragging: false, startX: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  const dragThreshold = 8;
  const maxIndex = Math.max(certifications.length - 1, 0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateActiveSlide = () => {
      const slides = Array.from(track.querySelectorAll<HTMLElement>('[data-carousel-slide]'));
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      const closestIndex = slides.reduce((closest, slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const currentDistance = Math.abs(slideCenter - trackCenter);
        const closestSlide = slides[closest];
        const closestCenter = closestSlide.offsetLeft + closestSlide.offsetWidth / 2;

        return currentDistance < Math.abs(closestCenter - trackCenter) ? index : closest;
      }, 0);

      setActiveIndex(closestIndex);
    };

    updateActiveSlide();
    track.addEventListener('scroll', updateActiveSlide, { passive: true });
    window.addEventListener('resize', updateActiveSlide);

    return () => {
      track.removeEventListener('scroll', updateActiveSlide);
      window.removeEventListener('resize', updateActiveSlide);
    };
  }, []);

  const scrollToSlide = (index: number) => {
    const track = trackRef.current;
    const slide = track?.querySelectorAll<HTMLElement>('[data-carousel-slide]')[index];
    if (!track || !slide) return;

    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: 'smooth',
    });
  };

  const moveBy = (direction: -1 | 1) => {
    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), maxIndex);
    scrollToSlide(nextIndex);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || (event.pointerType === 'mouse' && event.button !== 0)) return;
    if ((event.target as HTMLElement).closest('a, button')) return;

    dragState.current = {
      active: true,
      dragging: false,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.active) return;

    const deltaX = event.clientX - dragState.current.startX;
    if (!dragState.current.dragging && Math.abs(deltaX) < dragThreshold) return;

    dragState.current.dragging = true;
    event.preventDefault();
    track.scrollLeft = dragState.current.scrollLeft - deltaX;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    dragState.current.active = false;
    dragState.current.dragging = false;
  };

  return (
    <div className="relative overflow-hidden">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[rgba(51,51,51,0.7)]">
          {activeIndex + 1} de {certifications.length}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => moveBy(-1)}
            disabled={activeIndex === 0}
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(74,144,226,0.4)] bg-white text-[var(--foreground)] transition-all hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Certificado anterior"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => moveBy(1)}
            disabled={activeIndex === maxIndex}
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(74,144,226,0.4)] bg-white text-[var(--foreground)] transition-all hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Próximo certificado"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            data-carousel-slide
            className="w-[86%] flex-none snap-center sm:w-[58%] lg:w-[38%]"
            aria-current={activeIndex === index ? 'true' : undefined}
          >
            <article className="flex h-full min-h-64 flex-col justify-between bg-white p-6 rounded-xl border-2 border-[rgba(51,51,51,0.2)] transition-all hover:border-[var(--accent-secondary)] hover:shadow-lg">
              <div>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-[var(--background)] text-3xl">
                    {cert.icon}
                  </div>
                  <span className="rounded-full bg-[rgba(0,176,255,0.1)] px-3 py-1 text-xs font-bold text-[var(--accent-primary)]">
                    {cert.duration ?? cert.institution}
                  </span>
                </div>
                <h4 className="mb-4 text-xl font-bold leading-tight text-[var(--foreground)]">
                  {cert.title}
                </h4>
              </div>

              <div>
                <p className="mb-1 font-semibold text-[var(--accent-primary)]">{cert.institution}</p>
                {cert.date && (
                  <p className="text-sm text-[rgba(51,51,51,0.75)]">Finalizado em {cert.date}</p>
                )}
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-secondary)] transition-colors hover:text-[var(--accent-primary)]"
                  >
                    Ver certificado
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {certifications.map((cert, index) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => scrollToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? 'w-9 bg-[var(--accent-secondary)]' : 'w-2.5 bg-[rgba(51,51,51,0.25)] hover:bg-[rgba(74,144,226,0.6)]'
            }`}
            aria-label={`Ir para certificado ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
