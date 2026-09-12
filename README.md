# JMAT Portfolio

SPA estática de portafolio personal construida con Astro. La portada está organizada como una edición editorial: papel texturizado, tipografía redondeada para lectura, display serif con carácter, titulares de prensa, reglas, sellos, ticker y una paleta tinta / rojo / ocre.

## Incluye

- Portada en español y traducción inglesa (`/es/` y `/en/`).
- Navegación por anclas: trabajo, trayectoria, perfil y contacto.
- Reveal on-scroll con `IntersectionObserver`, barra de progreso y scroll suave entre secciones.
- Hover con elevación, sombra editorial, rotación sutil y spotlight de puntero en proyectos, sin alterar padding ni dimensiones.
- Carrusel continuo de tecnologías y consola visual interactiva para consultar contexto de cada una.
- Respeto de `prefers-reduced-motion`.
- Layout responsive comprobado a escritorio y 390×844.
- Fuentes Google Fonts: Manrope, Fraunces y DM Mono.

## Desarrollo

```sh
npm install
npm run dev
```

## Validación

```sh
npx tsc --noEmit
npm run build
```

LinkedIn apunta a [juanmadator](https://www.linkedin.com/in/juanmadator/) y el CTA de email abre `juanmadametor@gmail.com` mediante `mailto:`. Para enviar desde un formulario real habrá que conectar más adelante una cuenta y un proveedor de correo.
