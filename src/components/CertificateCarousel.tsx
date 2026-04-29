'use client';

import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';

interface Certification {
  id: string;
  title: string;
  institution: string;
  date: string;
  duration?: string;
  icon: string;
  certificateUrl?: string;
}

interface CertificateCarouselProps {
  certifications: Certification[];
}

export default function CertificateCarousel({ certifications }: CertificateCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0, dragging: false });
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);

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

  useEffect(() => {
    if (!selectedCertificate) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedCertificate]);

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

    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    track.setPointerCapture(event.pointerId);
    setCursor((current) => ({ ...current, dragging: true }));
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursor({
      visible: event.pointerType === 'mouse',
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      dragging: dragState.current.active,
    });

    const track = trackRef.current;
    if (!track || !dragState.current.active) return;

    event.preventDefault();
    const deltaX = event.clientX - dragState.current.startX;
    track.scrollLeft = dragState.current.scrollLeft - deltaX;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    dragState.current.active = false;
    setCursor((current) => ({ ...current, dragging: false }));
  };

  return (
    <div
      className="relative overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setCursor((current) => ({ ...current, visible: false, dragging: false }))}
    >
      <div
        className="pointer-events-none absolute z-20 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#00B0FF]/60 bg-[#333333]/90 text-xs font-bold uppercase tracking-wide text-white shadow-xl shadow-[#00B0FF]/20 backdrop-blur md:grid"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: cursor.visible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${cursor.dragging ? 0.88 : 1})`,
        }}
      >
        {cursor.dragging ? 'Solte' : 'Arraste'}
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-[#333333]/70">
          {activeIndex + 1} de {certifications.length}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => moveBy(-1)}
            disabled={activeIndex === 0}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#4A90E2]/40 bg-white text-[#333333] transition-all hover:border-[#00B0FF] hover:text-[#00B0FF] disabled:cursor-not-allowed disabled:opacity-40"
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
            className="grid h-11 w-11 place-items-center rounded-full border border-[#4A90E2]/40 bg-white text-[#333333] transition-all hover:border-[#00B0FF] hover:text-[#00B0FF] disabled:cursor-not-allowed disabled:opacity-40"
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
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        {certifications.map((cert, index) => {
          const content = (
            <article className="flex h-full min-h-64 flex-col justify-between bg-white p-6 rounded-xl border-2 border-[#333333]/20 transition-all hover:border-[#00B0FF] hover:shadow-lg">
              <div>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-xl bg-[#E0E0E0] text-3xl">
                    {cert.icon}
                  </div>
                  <span className="rounded-full bg-[#00B0FF]/10 px-3 py-1 text-xs font-bold text-[#4A90E2]">
                    {cert.duration ?? cert.institution}
                  </span>
                </div>
                <h4 className="mb-4 text-xl font-bold leading-tight text-[#333333]">
                  {cert.title}
                </h4>
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4A90E2]">{cert.institution}</p>
                <p className="text-sm text-[#333333]/75">Finalizado em {cert.date}</p>
                {cert.certificateUrl && (
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(cert)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#00B0FF] transition-colors hover:text-[#4A90E2]"
                  >
                    Ver certificado
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </button>
                )}
              </div>
            </article>
          );

          return (
            <div
              key={cert.id}
              data-carousel-slide
              className="w-[86%] flex-none snap-center sm:w-[58%] lg:w-[38%]"
              aria-current={activeIndex === index ? 'true' : undefined}
            >
              {content}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-2">
        {certifications.map((cert, index) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => scrollToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeIndex === index ? 'w-9 bg-[#00B0FF]' : 'w-2.5 bg-[#333333]/25 hover:bg-[#4A90E2]/60'
            }`}
            aria-label={`Ir para certificado ${index + 1}`}
          />
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#333333]/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[#333333]/10 p-5">
              <div>
                <p className="mb-1 text-sm font-bold uppercase text-[#4A90E2]">
                  Certificado digital
                </p>
                <h4 id="certificate-modal-title" className="text-xl font-bold leading-tight text-[#333333]">
                  {selectedCertificate.title}
                </h4>
                <p className="mt-1 text-sm text-[#333333]/70">
                  {selectedCertificate.institution} · {selectedCertificate.date}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-[#333333]/20 text-[#333333] transition-all hover:border-[#00B0FF] hover:text-[#00B0FF]"
                aria-label="Fechar certificado"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-[70vh] bg-[#E0E0E0]">
              <iframe
                src={selectedCertificate.certificateUrl}
                title={`Certificado ${selectedCertificate.title}`}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#333333]/10 p-5">
              <p className="text-sm text-[#333333]/70">
                Se a visualização não carregar, abra o certificado diretamente na Alura.
              </p>
              <a
                href={selectedCertificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#00B0FF] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#4A90E2]"
              >
                Abrir na Alura
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
