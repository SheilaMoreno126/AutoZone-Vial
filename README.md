AutoZone (A.Z) — Educación Vial Digital e Interactiva 🚗📱
Aprende · Maneja · Avanza

Ayudamos y educamos a las personas para un tránsito más seguro.
📌 Introducción y Descripción del Proyecto
AutoZone (A.Z) es una plataforma educativa multiplataforma orientada a la concienciación y enseñanza de las normas y señales de tránsito en Argentina
. El proyecto nace para responder a la alta siniestralidad vial urbana y sustituir los manuales teóricos tradicionales por una herramienta accesible, dinámica y gamificada
.
Desarrollado como Proyecto Integrador en la Escuela Técnica N° 29 D.E. 6 "DELEPIANE" (6to 6ta T.N.)
, AutoZone facilita la comprensión de la normativa de tránsito tanto para aspirantes a obtener la licencia de conducir como para peatones, ciclistas y estudiantes
.
🎯 Objetivos
Objetivo General
Desarrollar e implementar una plataforma educativa accesible (Android y Web) para la formación en seguridad vial basada en la normativa oficial de tránsito de Argentina
.
Objetivos Específicos
Estructurar un catálogo digital interactivo con señales reglamentarias, preventivas e informativas
.
Implementar mecánicas de gamificación (trivias, cuestionarios cronometrados y registro de progreso) para motivar el aprendizaje
.
Garantizar accesibilidad mediante la lectura auditiva de las explicaciones para usuarios con dificultades lectoras o visuales
.
Proporcionar un panel de administración para gestionar usuarios, contenidos y consultar reportes de rendimiento
.
✨ Funcionalidades Principales
Gestión de Usuarios y Perfiles (Auth Manager):
Registro, inicio y cierre de sesión (Login/Logout)
.
Control de accesos y funciones según el rol asignado (Administrador, Alumno, Preceptor, Profesor, Pariente)
.
Catálogo Interactivo de Señales:
Búsqueda inteligente y filtrado por categorías oficiales: Reglamentarias, Preventivas e Informativas
.
Visualización de imágenes en alta resolución con nombres y descripciones detalladas de cada señal
.
Función Auditiva de Accesibilidad:
Reproducción en audio con síntesis de voz del nombre y la explicación de cada señal de tránsito
.
Modo Práctico / Cuestionarios Gamificados:
Trivias interactivas con preguntas aleatorias, tiempo límite por respuesta y cálculo de puntajes
.
Medición del avance del usuario y registro de puntuaciones máximas
.
Panel de Control y Backoffice Administrador:
Alta, baja y modificación de datos de usuarios y material pedagógico
.
Generación de reportes de rendimiento y ejecución de copias de seguridad (Backup)
.
🛠️ Tecnologías Utilizadas
Capa / Módulo
Tecnología / Herramienta
Descripción y Uso
App Móvil Nativa
Kotlin
Lenguaje recomendado por Google para el desarrollo nativo en Android
.
Plataforma Web
HTML5 / CSS3 / JavaScript
Portal estático e interactivo para consulta web en navegadores
.
Backend & Lógica IA
Python
Generación adaptativa de cuestionarios y lógica de procesamiento
.
Base de Datos & Auth
Firebase Realtime Database
Persistencia de datos en tiempo real, autenticación y almacenamiento
.
Analytics
Firebase Analytics
Monitoreo anónimo del comportamiento y estadísticas de uso de la app
.
Control de Versiones
Git & GitHub
Gestión del código fuente y trabajo colaborativo del equipo
.
🏗️ Estructura del Repositorio
El proyecto mantiene una estructura limpia de archivos estáticos y scripts de base de datos relacionales para su posterior integración:
AutoZone-Vial/
├── index.html              # Interfaz web interactiva del catálogo y trivias
├── señales_de_transito.sql # Esquema SQL con los datos iniciales de señales viales
├── usuario.sql             # Esquema SQL con la estructura y roles de usuarios
├── Josias.jpg              # Recurso multimedia / foto de integrante del proyecto
└── README.md               # Documentación principal del repositorio
🚀 Instalación y Configuración
1. Requisitos Previos
Navegador web moderno (Google Chrome recomendado)
.
Servidor MySQL / MariaDB (para entornos relacionales locales) o consola de Firebase Realtime Database
.
Entorno Android Studio para la compilación de la app móvil en Kotlin
.
2. Pasos para la Ejecución Web Local
Clonar el repositorio desde GitHub:
git clone https://github.com/SheilaMoreno126/AutoZone-Vial.git
Ingresar al directorio del proyecto:
cd AutoZone-Vial
Abrir el archivo index.html en tu navegador predeterminado o mediante una extensión de servidor local (ej. Live Server en VS Code)
.
3. Configuración de la Base de Datos
Opción Local (SQL): Importar los archivos señales_de_transito.sql y usuario.sql en tu gestor de base de datos MySQL
.
Opción Producción (Firebase): Migrar la estructura de los archivos .sql a colecciones JSON en Firebase Realtime Database y vincular las credenciales en la aplicación Android / Web
.
💡 Cómo Usarlo
Navegación del Catálogo: Selecciona la pestaña Galería o Catálogo para explorar las señales reglamentarias, preventivas e informativas
. Utiliza el buscador para encontrar señales específicas
.
Uso de la Función Auditiva: Presiona el ícono de audio integrado en la ficha de cada señal para escuchar la síntesis de voz con su nombre y explicación
.
Poner a Prueba tus Conocimientos: Accede a la sección Quiz o Cuestionario, responde las 10 preguntas con tiempo y revisa tu puntaje final al terminar
.
🗺️ Roadmap y Estado del Proyecto
Actualmente, el proyecto se encuentra en etapa de construcción estructural y migración de datos
.
[x] Levantamiento de requerimientos y especificación de Casos de Uso (V.1.1 - V.1.3)
.
[x] Maquetado de interfaz web (index.html) y diseño de esquema SQL inicial
.
[/] Migración de datos relacionales a Firebase Realtime Database y vinculación con la app Android
.
[ ] Implementación completa del módulo de autenticación de usuarios por roles
.
[ ] Integración del motor de cuestionarios adaptativos con Python
.
[ ] Expansión Futura: Desarrollo de versión para PC (Steam), portabilidad a iOS mediante Flutter y reconocimiento de señales con IA
.
👥 Equipo y Créditos
Institución: Escuela Técnica N° 29 D.E. 6 "DELEPIANE" (6to 6ta T.N.)

Docentes Responsables: Prof. Patricia Figueroa y Prof. Fabián Lapuchevsky
Integrante
Rol Asignado
Responsabilidad Técnica
Sheila Moreno
Líder de Proyecto
Coordinación general, seguimiento y control de tiempos
.
Josías Giménez
Dev Lead Full-Stack
Arquitectura Android (Kotlin), backend y scripts Python
.
Ester Cruz
Diseñadora UX/UI & Dev
Diseño de interfaz visual, prototipado de pantallas y paleta de colores
.
Samuel García Mamani
Administrador y Ops
Gestión de requerimientos, base de datos y documentación
.
Kiara Cortez
Analista QA
Pruebas funcionales, testing y validación de normativa legal vial
.
Lautaro Olivera
Dev Frontend / Web
Maquetación web complementaria y soporte multicanal
.
📜 Licencia
© 2026 AutoZone (A.Z). Desarrollado con fines educativos e informativos dentro del marco del proyecto integrador escolar
. Todos los derechos reservados.
