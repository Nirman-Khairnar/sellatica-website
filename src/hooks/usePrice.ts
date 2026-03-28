import { useGeo } from '@/context/GeoContext';

export const usePrice = () => {
  const { country, loading } = useGeo();
  const isIndia = country === 'IN';
  return {
    loading,
    display: isIndia ? 'Rs. 7,999' : '$97',
    sub: isIndia ? 'INR · $5,000 guarantee' : 'USD · $5,000 guarantee',
    footer: isIndia
      ? 'If we don\'t find at least $5k in annual savings, we refund the fee.'
      : 'If we don\'t find at least $5,000 in annual savings, we refund the fee.',
  };
};
