'use client';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

/**
 * ShinyText — estilo ReactBits: texto con un brillo que lo recorre.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = '',
}: ShinyTextProps) {
  return (
    <span
      className={`shiny-text ${disabled ? 'shiny-disabled' : ''} ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
}
