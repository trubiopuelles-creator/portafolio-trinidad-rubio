# Portafolio — M. Trinidad Rubio Puelles

Portafolio profesional de **María Trinidad Rubio Puelles**, estudiante de Grado Medio en Sistemas Microinformáticos y Redes (SMR) en Digitech FP.

**Sitio en vivo:** https://trubiopuelles-creator.github.io/portafolio-trinidad-rubio/

## Características

- Diseño editorial inspirado en el template **Powder** de Framer (paleta crema / azul / rosa, tipografías Inter + Fragment Mono)
- **15 componentes animados estilo ReactBits** implementados con framer-motion:
  `BlurText`, `SplitText`, `TextType`, `CountUp`, `SpotlightCard`, `TiltedCard`, `Particles`, `Magnet`, `StarBorder`, `ShinyText`, `GradientText`, `AnimatedContent`, `LogoLoop`, `Dock`, `ScrollProgress`
- Navegación fija con blur, menú móvil animado y anclas con scroll suave
- Timeline con línea que se dibuja al hacer scroll
- Totalmente responsive y con soporte de `prefers-reduced-motion`

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS 4
- framer-motion
- lucide-react

## Desarrollo

```bash
bun install
bun run dev
```

## Despliegue en GitHub Pages

El sitio se genera como export estático (`output: 'export'`) con `basePath` apuntando al nombre del repositorio:

```bash
bun install
bunx next build   # genera ./out
```

Publica el contenido de `out/` en la rama `gh-pages` (incluye `.nojekyll` para que GitHub sirva la carpeta `_next/`).

---

© 2026 María Trinidad Rubio Puelles · Sistemas Microinformáticos y Redes
