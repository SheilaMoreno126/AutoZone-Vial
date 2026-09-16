# AutoZone (A.Z) — Educación Vial Digital e Interactiva 🚗📱

> **Ayudamos y educamos a las personas para un tránsito más seguro** [1-4].

---

## 📌 Introducción y Descripción del Proyecto

**AutoZone (A.Z)** es una plataforma educativa multiplataforma orientada a la concienciación y enseñanza de las normas y señales de tránsito en Argentina [5-8]. El proyecto nace para responder a la siniestralidad vial urbana y sustituir los manuales teóricos tradicionales por una herramienta accesible, dinámica y gamificada [6, 7, 9, 10].

Desarrollado como **Proyecto Integrador** en la **Escuela Técnica N° 29 D.E. 6 "DELEPIANE"** (6to 6ta T.N.), AutoZone facilita la comprensión de la normativa de tránsito tanto para aspirantes a obtener la licencia de conducir como para peatones, ciclistas y estudiantes [5, 6, 11-13].

---

## 🎯 Objetivos

### Objetivo General
Desarrollar e implementar una plataforma educativa multiplataforma (Android y Web) orientada a la concienciación e instrucción en seguridad vial, fundamentada en las normativas vigentes de Argentina [14-16].

### Objetivos Específicos
* **Diseñar una base de datos centralizada e interactiva** de señales viales argentinas (reglamentarias, preventivas e informativas) [15-18].
* **Implementar mecánicas de gamificación** (trivias cronometradas, puntajes y niveles de logro) para incentivar el aprendizaje [15, 16, 19-21].
* **Integrar funciones de accesibilidad universal** mediante síntesis de voz (audio-explicación) para personas con dificultades lectoras o visuales [15, 16, 22-24].
* **Proporcionar un panel de administración (Backoffice)** para el monitoreo del rendimiento de los usuarios, gestión de contenidos y copias de seguridad [24-28].

---

## ✨ Funcionalidades Principales

1. **Gestión de Usuarios y Perfiles (Auth Manager):**
   * Registro, inicio y cierre de sesión (Login/Logout) [26, 29, 30].
   * Control de acceso y permisos según el rol asignado (Administrador, Alumno, Preceptor, Profesor, Pariente) [26, 29, 30].

2. **Catálogo Interactivo de Señales:**
   * Búsqueda inteligente y filtrado por categorías oficiales: *Reglamentarias*, *Preventivas* e *Informativas* [17, 18, 31-33].
   * Visualización de imágenes representativas con nombres y explicaciones contextuales de cada señal [17, 22, 34, 35].

3. **Función Auditiva de Accesibilidad:**
   * Reproducción en voz alta del nombre y la descripción de cada señal mediante síntesis de voz [16, 22-24, 36].

4. **Modo Práctico / Cuestionarios Gamificados:**
   * Trivias interactivas con preguntas aleatorias, control de tiempo límite y cálculo de puntajes [19, 21, 29, 37, 38].
   * Registro del avance individual y tableros de puntuación [19, 39-41].

5. **Panel de Control Administrador:**
   * Gestión de altas, bajas y modificaciones (CRUD) de usuarios y material pedagógico [24, 28, 42, 43].
   * Generación de reportes de progreso y ejecución de copias de seguridad (*Backup*) [24, 26, 28, 36].

---

## 🛠️ Tecnologías Utilizadas

| Capa / Módulo | Tecnología Seleccionada | Descripción y Uso |
| :--- | :--- | :--- |
| **App Móvil Nativa** | **Kotlin** | Lenguaje oficial recomendado por Google para el desarrollo nativo en Android [25, 27, 44, 45]. |
| **Plataforma Web** | **HTML5 / CSS3 / JavaScript** | Portal informativo y versión web interactiva [25, 27, 46, 47]. |
| **Backend & Lógica IA** | **Python** | Generación adaptativa de cuestionarios y procesamiento de datos [25, 27, 45, 48]. |
| **Base de Datos & Auth** | **Firebase Realtime Database** | Almacenamiento en tiempo real, autenticación de usuarios y persistencia [25, 27, 49, 50]. |
| **Métricas & Analytics** | **Firebase Analytics** | Monitoreo anónimo de estadísticas de uso y pantallas más consultadas [25, 27, 49, 51]. |
| **Control de Versiones** | **Git & GitHub** | Gestión del código fuente y trabajo colaborativo del equipo [25, 27, 51, 52]. |

---

## 🏗️ Estructura del Repositorio

```text
AutoZone-Vial/
├── index.html              # Interfaz web interactiva del catálogo y cuestionarios [52]
├── señales_de_transito.sql # Esquema SQL con los datos iniciales de señales viales [52]
├── usuario.sql             # Esquema SQL con la estructura y roles de usuarios [52]
├── Josias.jpg              # Recurso de imagen / foto de integrante [52]
└── README.md               # Documentación principal del proyecto [52]
🚀 Instalación y Configuración
1. Requisitos Previos
Navegador web moderno (Google Chrome recomendado)
.
Servidor MySQL / MariaDB (para entornos SQL locales) o consola de Firebase Realtime Database
.
Entorno Android Studio para la compilación de la app móvil en Kotlin
.
2. Pasos para la Ejecución Web Local
Clonar el repositorio desde GitHub:
git clone https://github.com/SheilaMoreno126/AutoZone-Vial.git
Ingresar al directorio del proyecto:
cd AutoZone-Vial
Abrir el archivo index.html en tu navegador o mediante un servidor de desarrollo local (ej. Live Server en VS Code)
.
3. Configuración de Base de Datos
Modo Local (SQL): Importar los archivos señales_de_transito.sql y usuario.sql en tu gestor MySQL
.
Modo Producción (Firebase): Migrar la estructura de los archivos .sql a nodos JSON dentro de Firebase Realtime Database y vincular las claves en la app
.
💡 Modo de Uso
Navegación por Catálogo: Accede al catálogo para explorar las señales reglamentarias, preventivas e informativas con sus descripciones oficiales
.
Activación de Audio: Haz clic en el ícono de audio integrado para escuchar la lectura explicativa de la señal
.
Evaluación de Conocimientos: Ingresa a la sección de cuestionarios/trivias para responder las preguntas cronometradas y medir tu puntaje
.
👥 Equipo y Créditos
Institución: Escuela Técnica N° 29 D.E. 6 "DELEPIANE" (6to 6ta T.N.)

Docentes Responsables: Prof. Patricia Figueroa y Prof. Fabián Lapuchevsky
Integrante
Rol Asignado
Área de Responsabilidad Técnica
Sheila Moreno
Líder de Proyecto
Coordinación general, control de tiempos y alcance del proyecto
.
Josías Giménez
Dev Lead Full-Stack
Arquitectura Android (Kotlin), scripts Python y lógica de backend
.
Ester Cruz
Diseñadora UX/UI & Dev
Diseño de interfaz visual, prototipado de pantallas y paleta de colores
.
Samuel García Mamani
Administrador y Operaciones
Gestión de requerimientos, administración de base de datos y documentación
.
Kiara Cortez
Analista de Calidad (QA)
Pruebas funcionales, testing y validación de la normativa legal vial
.
Lautaro Olivera
Desarrollador Frontend / Web
Maquetación web complementaria y soporte técnico multicanal
.
📜 Licencia
© 2026 AutoZone (A.Z)
. Desarrollado con fines educativos e informativos dentro del marco del proyecto integrador escolar
. Todos los derechos reservados.
