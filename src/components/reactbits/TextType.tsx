'use client';

import { useEffect, useRef, useState } from 'react';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  startDelay?: number;
}

type Phase = 'waiting' | 'typing' | 'pausing' | 'deleting';

/**
 * TextType — estilo ReactBits: máquina de escribir que rota frases.
 * Hidratación segura: el primer render siempre muestra el índice 0 vacío.
 */
export default function TextType({
  text,
  typingSpeed = 70,
  pauseDuration = 1800,
  deletingSpeed = 40,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
  startDelay = 600,
}: TextTypeProps) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [phase, setPhase] = useState<Phase>('waiting');

  // Arranca tras el retardo inicial
  useEffect(() => {
    const t = setTimeout(() => setPhase('typing'), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (phase === 'waiting') return;
    const current = text[index % text.length];
    let t: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      t = setTimeout(() => {
        if (sub + 1 >= current.length) {
          setSub(current.length);
          setPhase('pausing');
        } else {
          setSub((s) => s + 1);
        }
      }, typingSpeed);
    } else if (phase === 'pausing') {
      t = setTimeout(() => setPhase('deleting'), pauseDuration);
    } else {
      t = setTimeout(() => {
        if (sub - 1 <= 0) {
          setSub(0);
          setIndex((i) => (i + 1) % text.length);
          setPhase('typing');
        } else {
          setSub((s) => s - 1);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(t);
  }, [phase, sub, index, text, typingSpeed, pauseDuration, deletingSpeed]);

  const shown = text[index % text.length].substring(0, sub);

  return (
    <span className={className}>
      <span aria-live="polite">{shown || '\u00A0'}</span>
      {showCursor && (
        <span className="text-type-cursor" aria-hidden="true">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
