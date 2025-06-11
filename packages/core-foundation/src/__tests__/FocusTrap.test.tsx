import React from 'react';
import { render } from '@testing-library/react';
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
});
