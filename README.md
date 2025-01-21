# Aplicación de tareas - ATOM

## Descripción

Este proyecto es una aplicación backend construida con Node.js y TypeScript. Está diseñada para proporcionar una API robusta y escalable, utilizando Express para manejar las solicitudes HTTP y Firestore como base de datos para almacenar y recuperar datos.

## Características

- **Framework**: Utiliza Express para el manejo de las rutas y la lógica del servidor.
- **Lenguaje de Programación**: Desarrollado con TypeScript, proporcionando tipado fuerte para un desarrollo más seguro y mantenible.
- **Base de Datos**: Integración con Firestore para operaciones de base de datos en tiempo real.
- **Estructura del Proyecto**: Organización del proyecto sigue el patron MVC en base a capas por la dimensión del proyecto, no se uso una estructura en base a funciones ya que el alcance del proyecto es corto.

## Requisitos

- Node.js versión 20.10.0
- npm (Node Package Manager)

## Instalación

Crear un archivo .env en la raiz del proyecto con las siguientes credenciales de prueba
```bash
FIREBASE_APIKEY="AIzaSyB_3AA7tvDvD8a2xCwJZmfoO3ruJHuGsn4"
FIREBASE_AUTHDOMAIN="atom-tasks-cb1ec.firebaseapp.com"
FIREBASE_PROJECTID="atom-tasks-cb1ec"
FIREBASE_STORAGEBUCKET="atom-tasks-cb1ec.firebasestorage.app"
FIREBASE_MESSAGINGSENDERID="716189266425"
FIREBASE_APPID="1:716189266425:web:a8941e958fca677f8e4d2"
```

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

Para correr el proyecto en local:

```bash
npm run dev
```
