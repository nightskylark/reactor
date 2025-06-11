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
});
