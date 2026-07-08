import type { ReactNode } from 'react';
import { classNames } from './classNames';

type CardVariant = 'default' | 'muted' | 'project';

const variantClasses: Record<CardVariant, string> = {
  default: 'rounded-2xl border border-[#333333]/15 bg-white p-8 shadow-lg',
  muted: 'rounded-xl border border-[#333333]/20 bg-[#E0E0E0] p-6 transition-all hover:border-[#00B0FF] hover:shadow-lg',
  project: 'rounded-2xl border-2 border-[#333333]/20 bg-white p-8 transition-all hover:border-[#00B0FF] hover:shadow-2xl hover:shadow-[#00B0FF]/20',
};

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

export default function Card({ children, className, variant = 'default' }: CardProps) {
  return <article className={classNames(variantClasses[variant], className)}>{children}</article>;
}
