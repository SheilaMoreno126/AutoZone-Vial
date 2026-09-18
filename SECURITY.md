<div align="center">
    <h1>🛡️ Política de Seguridad de AutoZone</h1>
    <b>Privacidad desde el diseño, infraestructura segura en la nube y control de acceso.</b>
</div>

<br>

<div align="center">

[![Privacy First - Static](https://img.shields.io/badge/Privacy-First?style=for-the-badge&logo=Shield&label=Data&labelColor=101418&color=00AAA6)](#)
[![Firebase - Static](https://img.shields.io/badge/Firebase-Security?style=for-the-badge&logo=Firebase&label=Auth&labelColor=101418&color=2ECC71)](#)

</div>

> **AutoZone** trata la privacidad de los datos de sus usuarios como una prioridad absoluta. Diseñado como una plataforma educativa integral, nuestro modelo de seguridad garantiza la protección de la información de los ciudadanos y estudiantes mientras aprenden sobre normativas viales. No recopilamos ni distribuimos información personal sin consentimiento explícito.

<br>

## 🏗️ Arquitectura de Seguridad y Privacidad de Datos

Nuestra seguridad se apoya en una arquitectura descentralizada en la nube mediante **Firebase**[cite: 6]. Este ecosistema garantiza un control estricto sobre quién accede a la información y cómo se transfiere entre la aplicación móvil y la web.

### 🔐 Autenticación y Control Granular (Firebase Auth)
Para proteger los perfiles y el progreso educativo, AutoZone implementa validación estricta de credenciales[cite: 6].
* El sistema cuenta con un control granular de acceso segmentado para 5 tipos de usuario distintos (Administrador, Alumno, Preceptor, Profesor, Pariente)[cite: 6].
* **Zero-Knowledge Passwords:** Las contraseñas de los usuarios están encriptadas mediante los algoritmos internos de Firebase. El equipo de desarrollo nunca tiene acceso al texto plano de tus credenciales.

### 📦 Reglas de Base de Datos (Realtime DB)
Toda la información del sistema se centraliza en **Firebase Realtime Database**[cite: 6].
* **Reglas de Seguridad (Security Rules):** Implementamos reglas estrictas a nivel de servidor que bloquean cualquier intento de lectura o escritura no autorizada. Un usuario solo puede acceder a sus propios datos de progreso y trivias.
* **Métricas Anónimas:** Para el monitoreo continuo del comportamiento del usuario y el rendimiento técnico de la plataforma, utilizamos **Firebase Analytics**[cite: 6]. Estos datos se procesan de forma estadística y completamente anónima para iterar en base a datos reales sin comprometer la privacidad[cite: 6].

<br>
<hr>
<br>

## 📢 Reporte de Vulnerabilidades

Si descubres una vulnerabilidad de seguridad en AutoZone (por ejemplo, una brecha en las reglas de Firebase, acceso indebido a perfiles de otros roles, o una fuga de datos inesperada), por favor **NO** abras un *Issue* público.

En su lugar, repórtalo de manera privada a nuestro equipo para que podamos solucionarlo de forma responsable:

1. Envía tus hallazgos por correo a: **[autozone.dev@gmail.com](mailto:autozone.dev@gmail.com)**
2. Incluye una descripción detallada de la vulnerabilidad.
3. Proporciona los pasos para reproducir el problema (capturas de pantalla, logs o el rol de usuario afectado son de gran ayuda).

Tomamos todos los reportes de seguridad con extrema seriedad y responderemos lo antes posible para coordinar un parche antes de su divulgación pública.

<br>

### 🗃️ Versiones Soportadas
Actualmente, dado que AutoZone se encuentra en sus fases iniciales de desarrollo e iteración para el Proyecto Integrador 2026, solo la rama `main` y las últimas versiones preliminares reciben actualizaciones de seguridad.

<div align=center>

| Versión | Soporte            |
| ------- | ------------------ |
| 1.0.x   | ✅ Activo          |
| < 1.0   | ❌ Sin Soporte     |

</div>
