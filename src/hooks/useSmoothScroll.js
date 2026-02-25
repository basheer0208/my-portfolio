import { useCallback } from 'react';

const useSmoothScroll = () => {
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return scrollTo;
};

export default useSmoothScroll;
