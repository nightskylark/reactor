import React from 'react';
import { render, act } from '@testing-library/react';
import { LocaleProvider, useLocale } from '../LocaleProvider';

const messages = {
  en: { hello: 'Hello' },
  es: { hello: 'Hola' },
};

describe('LocaleProvider', () => {
  it('provides translations and can switch locale', () => {
    const Test = () => {
      const { t, setLocale } = useLocale();
      return (
        <>
          <span>{t('hello')}</span>
          <button onClick={() => setLocale('es')}>es</button>
        </>
      );
    };
    const { getByText } = render(
      <LocaleProvider initialLocale="en" messages={messages}>
        <Test />
      </LocaleProvider>
    );
    expect(getByText('Hello')).toBeInTheDocument();
    act(() => {
      getByText('es').click();
    });
    expect(getByText('Hola')).toBeInTheDocument();
  });

  it('sets the lang attribute on the document element', () => {
    render(
      <LocaleProvider initialLocale="en" messages={messages}>
        <div />
      </LocaleProvider>
    );
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });

  it('applies text direction from props', () => {
    render(
      <LocaleProvider
        initialLocale="ar"
        messages={{ ar: { hello: 'مرحبا' } }}
        directions={{ ar: 'rtl' }}
      >
        <div />
      </LocaleProvider>
    );
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });
});
