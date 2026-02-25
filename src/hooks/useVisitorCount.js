import { useState, useEffect } from 'react';

const GOATCOUNTER_SITE = 'basheer-portfolio';
const BASE_COUNT = 15;

const useVisitorCount = () => {
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch(
          `https://${GOATCOUNTER_SITE}.goatcounter.com/counter//index.html.json`
        );
        if (res.ok) {
          const data = await res.json();
          setCount(BASE_COUNT + (data.count_unique || data.count || 0));
        }
      } catch {
        // API not available — show base count
      }
    };

    fetchCount();
  }, []);

  return count;
};

export default useVisitorCount;
