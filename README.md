# Proyecto Node.js - MVC con Express y Base de Datos en JSON

Este proyecto implementa un servidor utilizando **Express** con la arquitectura **MVC** (Modelo-Vista-Controlador), donde los datos de los **superhéroes** se gestionan desde un archivo `.txt` en formato **JSON**. Las consultas y pruebas se realizaron utilizando **POSTMan** para verificar la correcta interacción con el servidor y los datos.

## Estructura del Proyecto

- **Model**: Define la estructura de los datos y cómo interactuar con el archivo `.txt` en formato JSON.
- **View**: Controla la presentación de la información (en este caso, se podría hacer uso de plantillas).
- **Controller**: Maneja la lógica de las rutas, interactúa con los modelos y devuelve la respuesta adecuada.
- **Service**: Contiene la lógica de negocio, donde se realizan las operaciones necesarias sobre los datos de los superhéroes.
- **Repository**: Lee y escribe los datos en el archivo `.txt` en formato JSON, realizando consultas y operaciones CRUD.
