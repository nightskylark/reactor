import React, { useState } from 'react';
import { render, act } from '@testing-library/react';
import FocusTrap from '../FocusTrap';

describe('FocusTrap', () => {
  it('keeps focus inside the container', () => {
    const { getByText } = render(
      <div>
        <button>outside</button>
        <FocusTrap>
          <button>inside</button>
        </FocusTrap>
      </div>
    );
    const outside = getByText('outside') as HTMLButtonElement;
    const inside = getByText('inside') as HTMLButtonElement;

    outside.focus();
    expect(document.activeElement).toBe(inside);
  });

  it('restores focus on unmount', () => {
    const Wrapper = () => {
      const [open, setOpen] = useState(true);
      return (
        <div>
          <button>trigger</button>
          {open && (
            <FocusTrap>
              <button>inside</button>
            </FocusTrap>
          )}
          <button onClick={() => setOpen(false)}>close</button>
        </div>
      );
    };

    const { getByText } = render(<Wrapper />);
    const trigger = getByText('trigger') as HTMLButtonElement;
    const close = getByText('close') as HTMLButtonElement;
    const inside = getByText('inside') as HTMLButtonElement;

    trigger.focus();
    expect(document.activeElement).toBe(inside);

    act(() => {
      close.click();
    });

    expect(document.activeElement).toBe(trigger);
  });
});
