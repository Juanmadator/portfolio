# JMAT Portfolio

SPA de portafolio personal construida con Astro. La portada está organizada como una edición editorial: papel texturizado, tipografía redondeada para lectura, display serif con carácter, titulares de prensa, reglas, sellos, ticker y una paleta tinta / rojo / ocre.

## Incluye

- Portada en español y traducción inglesa (`/es/` y `/en/`).
- Navegación por anclas: trabajo, trayectoria, perfil y contacto.
- Reveal on-scroll con `IntersectionObserver`, barra de progreso y scroll suave entre secciones.
- Transición entre secciones inspirada en el paso de página de un periódico, con entrada del contenido según la dirección del scroll.
- Hover con elevación, sombra editorial, rotación sutil y spotlight de puntero en proyectos, sin alterar padding ni dimensiones.
- Carrusel continuo de tecnologías y consola visual interactiva para consultar contexto de cada una.
- Experiencia profesional basada en el CV: ESG Innova Group / Isotools y Coderit S.R.L.
- Formulario de contacto con email, asunto y cuerpo, preparado para envío SMTP desde servidor.
- Uso de IA declarado como herramienta de apoyo para agilizar, analizar y desarrollar con revisión propia.
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

## Envío de correo

El formulario usa una ruta server-side (`/api/contact`) y Nodemailer. Copia `.env.example` a `.env`, completa la nueva contraseña de aplicación de Gmail y arranca el servidor:

```powershell
Copy-Item .env.example .env
npm run dev
```

La contraseña SMTP no debe entrar en Git ni en el navegador. El `.env` local ya está ignorado por Git. LinkedIn apunta a [juanmadator](https://www.linkedin.com/in/juanmadator/) y el botón secundario conserva un acceso directo a `mailto:juanmadametor@gmail.com`.

El envío necesita un runtime Node para Astro; un hosting puramente estático como GitHub Pages puede servir la portada, pero no ejecutar `/api/contact`.
