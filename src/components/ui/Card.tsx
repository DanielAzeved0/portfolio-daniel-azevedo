import type { ReactNode } from 'react';
import { classNames } from './classNames';

type CardVariant = 'default' | 'muted' | 'project';

const variantClasses: Record<CardVariant, string> = {
  default: 'rounded-2xl border border-[rgba(51,51,51,0.15)] bg-white p-8 shadow-lg',
  muted: 'rounded-xl border border-[rgba(51,51,51,0.2)] bg-[var(--background)] p-6 transition-all hover:border-[var(--accent-secondary)] hover:shadow-lg',
  project: 'rounded-2xl border-2 border-[rgba(51,51,51,0.2)] bg-white p-8 transition-all hover:border-[var(--accent-secondary)] hover:shadow-2xl',
};

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

export default function Card({ children, className, variant = 'default' }: CardProps) {
  return <article className={classNames(variantClasses[variant], className)}>{children}</article>;
}
