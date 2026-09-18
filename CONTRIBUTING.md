<div align="center">
    <h1>🛠️ Contribuyendo a AutoZone</h1>
    <b>Únete a nosotros para construir la plataforma definitiva de educación vial.</b>
</div>

<br>

<div align="center">

[![PRs Welcome - Static](https://img.shields.io/badge/PRs-Welcome?style=for-the-badge&logo=GitHub&label=PRs&labelColor=101418&color=00AAA6)](#)
[![Code Style - Static](https://img.shields.io/badge/Code-Clean?style=for-the-badge&logo=Codeigniter&label=Style&labelColor=101418&color=2ECC71)](#)

</div>

> Antes que nada, ¡gracias por considerar contribuir a **AutoZone**! Son los desarrolladores, educadores, diseñadores y ciudadanos comprometidos como tú quienes hacen de la comunidad de código abierto un lugar increíble para aprender y construir un futuro más seguro en las calles.

<br>

## 🚀 ¿Cómo puedes contribuir?

* **Reportar Errores (Bugs):** ¿Encontraste un problema en la lógica de los cuestionarios, un error visual en el catálogo o un fallo en el reproductor de audio? Abre un *Issue* y proporciona todo el contexto posible (capturas de pantalla, navegador, dispositivo).
* **Sugerir Funcionalidades:** ¿Tienes ideas para mejorar la gamificación, añadir nuevas señales de tránsito o mejorar la accesibilidad? Abre una discusión o un *Issue* con la etiqueta `enhancement`.
* **Enviar Código:** Toma cualquier *Issue* abierto etiquetado como `good first issue` o `help wanted`, haz un fork del repositorio y comienza a programar.

## 🛠️ Configuración del Entorno de Desarrollo

AutoZone es una plataforma modular. Para ejecutar la versión web y el entorno de pruebas localmente, asegúrate de respetar nuestra arquitectura basada en **HTML/CSS/JS, Python y Firebase**:

1. Haz un fork y clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto y abre los archivos de la plataforma web (`index.html`, `styles.css`, `app.js`).
3. Para el backend o scripts de Python, crea un entorno virtual (`python -m venv env`), actívalo e instala las dependencias (`pip install -r requirements.txt`).
4. Configura tus variables de entorno locales para conectar de forma segura con tu propia instancia de Firebase de prueba.

## 🌿 Proceso de Pull Request (PR)

* **Crear una Rama (Branch):** Crea una rama a partir de `main` con un nombre descriptivo (ej. `feature/filtro-señales` o `fix/audio-accesibilidad`).
* **Entender el Núcleo:** Lee nuestra documentación técnica para comprender la lógica de gamificación, las pautas de accesibilidad universal (WCAG) y la estructura de la base de datos antes de escribir código.
* **Commits Limpios:** Escribe mensajes de commit claros y concisos que expliquen *qué* se cambió y *por qué*.
* **Abrir el PR:** Describe los cambios realizados, el problema que resuelve y enlaza cualquier *Issue* relacionado. Espera a que los mantenedores (Equipo de AutoZone) lo revisen.

## 🎨 Guías de Estilo y Convenciones

* **Estética UI/UX:** Cualquier adición visual debe respetar el *Dark Mode* nativo (fondo `#101418`) y los acentos de color Teal (`#00AAA6`) y Verde (`#2ECC71`). La navegación debe ser intuitiva, con flujos de un máximo de tres pasos.
* **Accesibilidad (Inclusión Radical):** Todo el contenido nuevo, especialmente en el catálogo, debe ser compatible con la síntesis de voz y mantener un alto contraste.
* **Integridad de Datos (Firebase):** Las imágenes pesadas de las señales deben optimizarse antes de subirse. No satures la base de datos en tiempo real con peticiones innecesarias; utiliza almacenamiento local temporal cuando sea posible.
* **Calidad del Código:** Mantén las funciones modulares, comenta tus decisiones estructurales y mantén una indentación limpia.
