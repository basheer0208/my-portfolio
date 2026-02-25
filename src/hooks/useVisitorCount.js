import { useState, useEffect } from 'react';

const GOATCOUNTER_SITE = 'basheer-portfolio';
const BASE_COUNT = 15;

const useVisitorCount = () => {
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    const fetchCount = async () => {
      // Try multiple possible paths GoatCounter may have tracked
      const paths = ['/my-portfolio/', '/my-portfolio', '/'];

      for (const path of paths) {
        try {
          const res = await fetch(
            `https://${GOATCOUNTER_SITE}.goatcounter.com/counter/${encodeURIComponent(path)}.json`
          );
          if (res.ok) {
            const data = await res.json();
            const realCount = parseInt(data.count, 10) || 0;
            if (realCount > 0) {
              setCount(BASE_COUNT + realCount);
              return;
            }
          }
        } catch {
          // Try next path
        }
      }
    };

    fetchCount();
  }, []);

  return count;
};

export default useVisitorCount;
