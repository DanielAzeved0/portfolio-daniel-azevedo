import type { ReactNode } from 'react';
import { classNames } from './classNames';

type BadgeVariant = 'primary' | 'soft' | 'tag' | 'outline';

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'inline-block rounded-full bg-[#00B0FF] px-3 py-1 text-xs font-bold text-white',
  soft: 'inline-block rounded-full bg-[#00B0FF]/10 px-3 py-1 text-xs font-bold text-[#4A90E2]',
  tag: 'rounded-full border border-[#4A90E2]/30 bg-[#E0E0E0] px-4 py-2 text-sm font-medium text-[#333333]',
  outline: 'inline-flex rounded-full border border-[#4A90E2]/30 px-3 py-1 text-xs font-bold text-[#4A90E2]',
};

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

export default function Badge({ children, className, variant = 'tag' }: BadgeProps) {
  return <span className={classNames(variantClasses[variant], className)}>{children}</span>;
}
