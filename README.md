
# Estructura del Proyecto

```plaintext

Biblioteca Frontend
Este es el frontend de un sistema de gestión de biblioteca desarrollado en Angular. La aplicación consume la API RESTful del backend para gestionar libros, autores y préstamos.

Características
Gestión de Libros:
Agregar, editar y eliminar libros.
Listar libros con paginación.

Gestión de Autores:
Agregar, editar y eliminar autores.
Listar autores.
Gestión de Préstamos:
Registrar nuevos préstamos.
Listar todos los préstamos.

Dashboard:
Resumen del total de libros, autores y préstamos.
Interfaz moderna y responsiva con Bootstrap.

Requisitos Previos
Node.js v16 o superior
Angular CLI v16 o superior

Backend de Biblioteca en ejecución (consulta el README del backend para configurarlo).

Instalación y Configuración

1. Clonar el Repositorio
bash
Copiar
git clone https://github.com/ralejotuanama/reto-growby-frontend.git

2. Instalar Dependencias
bash
Copiar
npm install

3. Configurar el Archivo environment.ts
Edita el archivo src/environments/environment.ts para configurar la URL del backend:


export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080/api' // Cambia según la URL del backend
};

Ejecución
1. Modo de Desarrollo
bash
Copiar
ng serve
Accede a la aplicación en: http://localhost:4200.

2. Generar una Build para Producción
bash
Copiar
ng build --prod
Los archivos compilados estarán en la carpeta dist/biblioteca-frontend.

Estructura del Proyecto
ruby
Copiar
src/
├── app/
│   ├── components/
│   │   ├── libros/        # Componentes relacionados con libros
│   │   ├── autores/       # Componentes relacionados con autores
│   │   ├── prestamos/     # Componentes relacionados con préstamos
│   │   └── dashboard/     # Componentes del dashboard
│   ├── services/          # Servicios para consumir la API REST
│   ├── app-routing.module.ts  # Configuración de rutas
│   ├── app.module.ts          # Módulo principal de la aplicación
│   └── ...
├── assets/                 # Recursos estáticos (imágenes, CSS, etc.)
├── environments/           # Configuración de entornos (desarrollo y producción)
└── index.html              # Punto de entrada de la aplicación

Componentes Principales
Libros
Ruta: /libros
Funcionalidades:
Listar libros con paginación.
Agregar, editar y eliminar libros.

Autores
Ruta: /autores
Funcionalidades:
Listar autores.
Agregar, editar y eliminar autores.

Préstamos
Ruta: /prestamos
Funcionalidades:
Registrar un préstamo seleccionando un libro.
Listar todos los préstamos.

Dashboard
Ruta: /dashboard
Funcionalidades:
Mostrar el total de libros, autores y préstamos.
Comandos Útiles

Ejecutar la aplicación:

bash
Copiar
ng serve
Generar build para producción:

bash
Copiar
ng build --prod
Linter para el código:

bash
Copiar
ng lint
Estilos
Esta aplicación utiliza Bootstrap 5 para la interfaz. Si deseas personalizar los estilos:

Edita los archivos CSS en src/styles.css.
Asegúrate de tener cargado Bootstrap en angular.json:
json
Copiar
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]

Contribuir

Crea una rama nueva:
bash
Copiar
git checkout -b feature/nueva-funcionalidad

Realiza tus cambios y haz un commit:
bash


git commit -m "Agrega nueva funcionalidad"
Haz un push a la rama:


git push origin feature/nueva-funcionalidad
Abre un Pull Request en GitHub.
Autor
Ronald Alejo Tuanama
