import type { ReactNode } from 'react';
import { SECTION_STYLES } from '@/constants/theme';
import { classNames } from './classNames';

type SectionTone = 'light' | 'white' | 'dark' | 'hero';
type SectionWidth = 'md' | 'lg' | 'xl';

const toneClasses: Record<SectionTone, string> = {
  light: 'bg-[var(--background)]',
  white: 'bg-white',
  dark: 'bg-[var(--foreground)]',
  hero: 'bg-gradient-to-br from-[var(--foreground)] to-[var(--accent-primary)]/20',
};

const widthClasses: Record<SectionWidth, string> = {
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
};

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  spacing?: 'default' | 'none';
  tone?: SectionTone;
  width?: SectionWidth;
};

export default function Section({
  id,
  children,
  className,
  contentClassName,
  spacing = 'default',
  tone = 'light',
  width = 'lg',
}: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(spacing === 'default' && SECTION_STYLES.container, toneClasses[tone], className)}
    >
      <div className={classNames('mx-auto', widthClasses[width], contentClassName)}>
        {children}
      </div>
    </section>
  );
}
