# 🤖 Contexto para Agentes de IA (AGENTS.md)
**Reglas arquitectónicas, contexto del proyecto y directrices de desarrollo para asistentes de IA.**

> **IMPORTANTE PARA EL AGENTE DE IA:** Lee este documento en su totalidad antes de proponer cambios, generar código o modificar la estructura del directorio. Este archivo define los límites operativos y técnicos del proyecto **AutoZone**.

## 📌 1. Resumen del Proyecto (AutoZone)
**AutoZone** es una plataforma educativa integral (Web y Móvil) orientada a la enseñanza de leyes de tránsito y señalética en Argentina. Su objetivo es reducir la siniestralidad vial mediante el aprendizaje gamificado y la accesibilidad universal (síntesis de voz y alto contraste).

## 🛠️ 2. Stack Tecnológico Estricto
Al generar código para este proyecto, limítate exclusivamente a las siguientes tecnologías aprobadas:
*   **Web Frontend (Carpeta `website/`):** HTML5 Semántico, Vanilla CSS3 (usando variables y Flexbox/Grid) y Vanilla JavaScript. **NO** utilizar frameworks como React, Angular, Tailwind o Bootstrap a menos que el usuario lo solicite explícitamente.
*   **Mobile App:** Kotlin (Nativo de Android).
*   **Backend / Scripts:** Python 3.x.
*   **Base de Datos & Auth:** Firebase (Realtime Database y Firebase Auth). 

## 📂 3. Estructura del Repositorio
El repositorio cuenta con una estructura limpia que debe ser respetada en cada operación de lectura/escritura:
*   `/website/`: Contiene todo el código frontend (ej. `index.html`, `styles.css`, `app.js`). Todo el desarrollo web ocurre aquí.
*   `/database/`: Reservado para reglas de seguridad de Firebase, esquemas JSON y scripts de migración.
*   `/backup/`: Reservado para respaldos periódicos.
*   Archivos raíz: Documentación base (`README.md`, `LICENSE.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`, `AGENTS.md`).

## 🎨 4. Sistema de Diseño (UI/UX)
Toda interfaz generada debe adherirse estrictamente a esta guía visual:
*   **Estética General:** *Dark Mode* nativo, moderno, limpio y enfocado en la legibilidad.
*   **Fondo Principal:** `#101418` (Oscuro/Tech).
*   **Texto Principal:** `#ffffff` (Blanco).
*   **Texto Secundario/Muted:** `#a0aab2` (Gris claro).
*   **Acento Primario (Teal/Turquesa):** `#00AAA6` (Usado para botones principales, enlaces activos y bordes destacados).
*   **Acento Secundario (Verde Éxito):** `#2ECC71` (Usado para estados positivos, respuestas correctas en trivias y métricas de progreso).
*   **Accesibilidad (WCAG):** Todo el texto debe tener un alto contraste. Los elementos interactivos deben ser grandes y fácilmente clickeables. Preparar el HTML para soportar lectura por síntesis de voz (atributos `aria`).

## 🧠 5. Directrices de Comportamiento para la IA
1.  **Código Modular:** No generes archivos monolíticos masivos. Separa la lógica (JS), los estilos (CSS) y la estructura (HTML).
2.  **Rendimiento y Tokens:** Al proponer código, entrega únicamente los bloques modificados o archivos esenciales para la tarea actual, optimizando el uso de tokens.
3.  **Seguridad por Defecto:** Al interactuar con Firebase, asume siempre que el lado del cliente está comprometido. No hardcodees credenciales ni lógicas de validación sensibles en el frontend de `website/`.
4.  **Cero Imágenes Pesadas:** No codifiques imágenes en Base64 en el CSS o HTML. Usa referencias a rutas relativas (ej. `./assets/images/señal_stop.png`).
