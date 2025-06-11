import React, { useEffect, useRef } from 'react';

export interface FocusTrapProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  children: React.ReactNode;
}

export const FocusTrap: React.FC<FocusTrapProps> = ({
  active = true,
  children,
  tabIndex = -1,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || !ref.current) return;
    const container = ref.current;

    const focusFirst = () => {
      const focusable =
        container.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) || container;
      focusable?.focus();
    };

    if (!container.contains(document.activeElement)) {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
      focusFirst();
    }

    const handleFocus = (event: FocusEvent) => {
      if (!container.contains(event.target as Node)) {
        previouslyFocused.current = event.target as HTMLElement;
        focusFirst();
      }
    };

    document.addEventListener('focusin', handleFocus);
    return () => {
      document.removeEventListener('focusin', handleFocus);
      const prev = previouslyFocused.current;
      if (prev && document.contains(prev)) {
        prev.focus();
      }
    };
  }, [active]);

  return (
    <div ref={ref} tabIndex={tabIndex} {...rest}>
      {children}
    </div>
  );
};

export default FocusTrap;
