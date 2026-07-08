import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { BUTTON_STYLES } from '@/constants/theme';
import { classNames } from './classNames';

type LinkButtonVariant = 'primary' | 'outline' | 'dark' | 'ghost';

const variantClasses: Record<LinkButtonVariant, string> = {
  primary: BUTTON_STYLES.primary,
  outline: BUTTON_STYLES.outline,
  ghost: BUTTON_STYLES.ghost,
  dark: 'px-6 py-3 bg-[var(--foreground)] text-white rounded-full font-semibold hover:bg-[var(--accent-primary)] transition-all',
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: LinkButtonVariant;
};

export default function LinkButton({
  children,
  className,
  variant = 'primary',
  ...props
}: LinkButtonProps) {
  return (
    <a className={classNames(variantClasses[variant], className)} {...props}>
      {children}
    </a>
  );
}
