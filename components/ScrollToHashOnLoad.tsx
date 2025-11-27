'use client';

import { useEffect } from 'react';

export default function ScrollToHashOnLoad() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const el = document.querySelector(hash) as HTMLElement | null;
    if (!el) return;

    if (window.scrollY === 0) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return null;
}
