# Entregable #4: Servidor con Express

## Consigna

Desarrollo de un servidor basado en Express para realizar consultas a un archivo de productos, utilizando la clase `ProductManager` con persistencia de archivos.

## Estructura del Proyecto  

Clase-4/  
│  
├── src/  
│ ├── app.js # Archivo principal del servidor Express  
│ └── ProductManager.js # Clase para manejar la lógica de productos  
│  
├── data/  
│ └── products.json # Archivo JSON para almacenar los productos  
│  
├── node_modules/ # Dependencias del proyecto (ignorado en .gitignore)  
│  
├── .gitignore # Archivo para ignorar archivos no deseados en Git  
├── package.json # Archivo de configuración de Node.js  
└── package-lock.json # Control de versiones exactas para las dependencias  
  
## Aspectos a Incluir

- Uso de la clase `ProductManager` con métodos asíncronos y promesas.
- Implementación de endpoints en Express para consultar productos.

## Formato del Entregable

- Código fuente alojado en un repositorio de GitHub.
- Incluir `src` con `app.js` y `ProductManager.js`.
- Incluir `data` con `products.json`.
- No incluir `node_modules` (asegurado con `.gitignore`).

## Testing

- Iniciar el servidor y comprobar su funcionamiento en el puerto 8080.
- Probar los endpoints:
  - `GET /products`
  - `GET /products?limit=5`
  - `GET /products/:pid`
  - Probar con un ID inexistente para verificar el manejo de errores.

## Sugerencias

- Utilizar Postman o un navegador para probar los endpoints.
- Asegurarse de que `products.json` contenga al menos 10 productos para las pruebas.

## Licencia

[MIT License](LICENSE.md)