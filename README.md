# E-commerce de Productos Veganos

Este proyecto es un front-end para una tienda en línea especializada en productos veganos, diseñado para proporcionar a los usuarios una experiencia de navegación fluida, moderna y accesible.

## Tecnologías principales utilizadas

- **React**: Para la construcción de una interfaz dinámica y modular.
- **Redux Toolkit**: Gestión del estado global eficiente y escalable.
- **React Router DOM**: Para la navegación entre las páginas de la aplicación.
- **Axios**: Manejo de peticiones HTTP para la comunicación con el backend.
- **Styled Components**: Estilización de componentes con CSS-in-JS.
- **Swiper**: Creación de sliders interactivos y atractivos para destacar productos o promociones.

## Arquitectura de Datos

### 1. Modelo basado en API RESTful

- Los datos del backend son consumidos mediante solicitudes HTTP utilizando Axios.
- Las respuestas de la API son procesadas en loaders o hooks personalizados (`customFetch`) para separar la lógica de datos del componente visual.

### 2. Gestión del estado global

- **Slices de Redux**:
  - **UserSlice**: Maneja los datos relacionados con la autenticación y la información del usuario, como el perfil o el historial de compras.
  - **CartSlice**: Gestiona los datos del carrito de compras, incluyendo los productos agregados, cantidades y cálculos totales.
- Se utiliza la estructura de acciones y reducers para mantener la consistencia y escalabilidad del estado global.

### 3. Tipado de datos con TypeScript

- Uso de interfaces como `ProductsResponse` para garantizar la integridad de los datos recibidos desde el backend.
- Evita errores en tiempo de desarrollo y facilita el mantenimiento del código.

### 4. Normalización y desacoplamiento de datos

- Los datos obtenidos de la API son procesados y normalizados antes de ser almacenados en el estado global.
- Esto asegura que los componentes interactúen con una estructura de datos uniforme y predecible.

### 5. Estrategia de cacheado

- Los loaders utilizan mecanismos para prevenir llamadas innecesarias al servidor, asegurando una experiencia de usuario rápida y eficiente.

## Características principales

### 1. Carga de datos dinámica

- Implementación de loaders para obtener datos desde el servidor de manera eficiente.
- Módulos personalizados como `customFetch` para manejar peticiones HTTP.

### 2. Componentización optimizada

- Componentes reutilizables como `Banner`, `ProductsSection` y `Wrapper` que aseguran una estructura ordenada y consistente en la interfaz.

### 3. Diseño centrado en el usuario

- Navegación fácil y estructura visual intuitiva gracias a `styled-components`.
- Compatibilidad con dispositivos móviles para una experiencia de compra óptima.

### 4. Integración modular

- Funcionalidades como un carrito de compras y la gestión de usuarios a través de slices en Redux.

## Objetivo del proyecto

Proporcionar un espacio digital amigable y funcional donde los usuarios puedan explorar y adquirir productos veganos de alta calidad, promoviendo un estilo de vida sostenible y saludable.
