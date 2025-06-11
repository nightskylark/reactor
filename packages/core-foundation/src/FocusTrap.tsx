import React, { useEffect, useRef } from 'react';

export interface FocusTrapProps {
  active?: boolean;
  children: React.ReactNode;
}

export const FocusTrap: React.FC<FocusTrapProps> = ({
  active = true,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !ref.current) return;
    const container = ref.current;
    const handleFocus = (event: FocusEvent) => {
      if (!container.contains(event.target as Node)) {
        const focusable = container.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusable?.focus();
      }
    };
    document.addEventListener('focusin', handleFocus);
    return () => document.removeEventListener('focusin', handleFocus);
  }, [active]);

  return <div ref={ref}>{children}</div>;
};

export default FocusTrap;
