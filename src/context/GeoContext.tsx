import React, { createContext, useContext, useEffect, useState } from 'react';

interface GeoContextType {
  country: string | null;
  loading: boolean;
}

const GeoContext = createContext<GeoContextType>({ country: null, loading: true });

export const GeoProvider = ({ children }: { children: React.ReactNode }) => {
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ipapi.co/country/')
      .then(res => res.text())
      .then(code => setCountry(code.trim()))
      .catch(() => setCountry('US'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <GeoContext.Provider value={{ country, loading }}>
      {children}
    </GeoContext.Provider>
  );
};

export const useGeo = () => useContext(GeoContext);
