import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

export type Messages = Record<string, string>;

interface LocaleContextValue {
  locale: string;
  messages: Messages;
  setLocale: (locale: string) => void;
  register: (locale: string, messages: Messages) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  messages: {},
  setLocale: () => {},
  register: () => {},
  t: (k: string) => k,
});

export interface LocaleProviderProps {
  initialLocale?: string;
  messages?: Record<string, Messages>;
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  initialLocale = 'en',
  messages = {},
  children,
}) => {
  const [locale, setLocaleState] = useState(initialLocale);
  const [allMessages, setAllMessages] =
    useState<Record<string, Messages>>(messages);

  const setLocale = useCallback(
    (next: string) => {
      if (!allMessages[next]) {
        setAllMessages((prev) => ({ ...prev, [next]: {} }));
      }
      setLocaleState(next);
    },
    [allMessages]
  );

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  const register = useCallback((loc: string, msgs: Messages) => {
    setAllMessages((prev) => ({ ...prev, [loc]: { ...prev[loc], ...msgs } }));
  }, []);

  const t = useCallback(
    (key: string) => {
      return allMessages[locale]?.[key] ?? key;
    },
    [allMessages, locale]
  );

  return (
    <LocaleContext.Provider
      value={{
        locale,
        messages: allMessages[locale] ?? {},
        setLocale,
        register,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
