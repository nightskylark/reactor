import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

export type Messages = Record<string, string>;

export type TextDirection = 'ltr' | 'rtl';

interface LocaleContextValue {
  locale: string;
  messages: Messages;
  direction: TextDirection;
  setLocale: (locale: string) => void;
  register: (
    locale: string,
    messages: Messages,
    direction?: TextDirection
  ) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  messages: {},
  direction: 'ltr',
  setLocale: () => {},
  register: () => {},
  t: (k: string) => k,
});

export interface LocaleProviderProps {
  initialLocale?: string;
  messages?: Record<string, Messages>;
  directions?: Record<string, TextDirection>;
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
  initialLocale = 'en',
  messages = {},
  directions = {},
  children,
}) => {
  const [locale, setLocaleState] = useState(initialLocale);
  const [allMessages, setAllMessages] =
    useState<Record<string, Messages>>(messages);
  const [dirs, setDirs] = useState<Record<string, TextDirection>>(directions);

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
    document.documentElement.setAttribute('dir', dirs[locale] ?? 'ltr');
  }, [locale, dirs]);

  const register = useCallback(
    (loc: string, msgs: Messages, dir?: TextDirection) => {
      setAllMessages((prev) => ({ ...prev, [loc]: { ...prev[loc], ...msgs } }));
      if (dir) {
        setDirs((prev) => ({ ...prev, [loc]: dir }));
      }
    },
    []
  );

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
        direction: dirs[locale] ?? 'ltr',
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
