import type { ReactNode } from 'react';
import { classNames } from './classNames';

type BadgeVariant = 'primary' | 'soft' | 'tag' | 'outline';

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'inline-block rounded-full bg-[var(--accent-secondary)] px-3 py-1 text-xs font-bold text-white',
  soft: 'inline-block rounded-full bg-[rgba(0,176,255,0.1)] px-3 py-1 text-xs font-bold text-[var(--accent-primary)]',
  tag: 'rounded-full border border-[rgba(74,144,226,0.3)] bg-[var(--background)] px-4 py-2 text-sm font-medium text-[var(--foreground)]',
  outline: 'inline-flex rounded-full border border-[rgba(74,144,226,0.3)] px-3 py-1 text-xs font-bold text-[var(--accent-primary)]',
};

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

export default function Badge({ children, className, variant = 'tag' }: BadgeProps) {
  return <span className={classNames(variantClasses[variant], className)}>{children}</span>;
}
