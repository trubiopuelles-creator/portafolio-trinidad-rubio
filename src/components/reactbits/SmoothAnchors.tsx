'use client';

import { useEffect } from 'react';

/**
 * Intercepta los clics en anclas internas (#seccion) y realiza un
 * desplazamiento suave controlado, evitando que el cierre del menú móvil
 * u otras mutaciones del DOM cancelen el scroll del navegador.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      // Pequeño retardo para que cualquier cierre de menú empiece sin abortar el scroll
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      history.pushState(null, '', href);
    };

    document.addEventListener('click', onClick, { passive: false });
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
