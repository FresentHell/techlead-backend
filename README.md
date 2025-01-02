<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# TechLead Backend

TechLead Backend es una aplicación construida con NestJS para gestionar usuarios y tareas, diseñada para ser escalable y eficiente.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/FresentHell/techlead-backend.git
   ```

2. Cambia al directorio del proyecto:
   ```bash
   cd techlead-backend
   ```

3. Crea un archivo `.env` con las siguientes características:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=clavepostgres
   DB_NAME=PruebaT
   ```

4. Instala las dependencias:
   ```bash
   npm install
   ```

5. Inicia el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```

   El servidor estará disponible en `http://localhost:3000`.

## Endpoints de la API

### **Users**

| Método | Endpoint         | Descripción                            |
|--------|------------------|----------------------------------------|
| POST   | `/users`         | Crear un nuevo usuario.               |
| GET    | `/users`         | Obtener todos los usuarios.           |
| GET    | `/users/:id`     | Obtener un usuario por su ID.         |
| PUT    | `/users/:id`     | Actualizar un usuario por su ID.      |
| DELETE | `/users/:id`     | Eliminar un usuario por su ID.        |

#### Ejemplos para **Users**

1. **Crear un usuario** (POST):
   ```bash
   curl -X POST http://localhost:3000/users \
   -H "Content-Type: application/json" \
   -d '{"name": "Juan Pérez", "email": "juan@example.com", "password": "12345"}'
   ```

2. **Obtener todos los usuarios** (GET):
   ```bash
   curl -X GET http://localhost:3000/users
   ```

3. **Obtener un usuario por ID** (GET):
   ```bash
   curl -X GET http://localhost:3000/users/1
   ```

4. **Actualizar un usuario por ID** (PUT):
   ```bash
   curl -X PUT http://localhost:3000/users/1 \
   -H "Content-Type: application/json" \
   -d '{"name": "Juan Actualizado", "email": "juan_actualizado@example.com"}'
   ```

5. **Eliminar un usuario por ID** (DELETE):
   ```bash
   curl -X DELETE http://localhost:3000/users/1
   ```

### **Tasks**

| Método | Endpoint         | Descripción                            |
|--------|------------------|----------------------------------------|
| POST   | `/tasks`         | Crear una nueva tarea.                |
| GET    | `/tasks`         | Obtener todas las tareas.             |
| GET    | `/tasks/:id`     | Obtener una tarea por su ID.          |
| PUT    | `/tasks/:id`     | Actualizar una tarea por su ID.       |
| DELETE | `/tasks/:id`     | Eliminar una tarea por su ID.         |

#### Ejemplos para **Tasks**

1. **Crear una tarea** (POST):
   ```bash
   curl -X POST http://localhost:3000/tasks \
   -H "Content-Type: application/json" \
   -d '{"title": "Tarea 1", "description": "Descripción de la tarea 1", "status": "pendiente"}'
   ```

2. **Obtener todas las tareas** (GET):
   ```bash
   curl -X GET http://localhost:3000/tasks
   ```

3. **Obtener una tarea por ID** (GET):
   ```bash
   curl -X GET http://localhost:3000/tasks/1
   ```

4. **Actualizar una tarea por ID** (PUT):
   ```bash
   curl -X PUT http://localhost:3000/tasks/1 \
   -H "Content-Type: application/json" \
   -d '{"title": "Tarea Actualizada", "description": "Descripción actualizada", "status": "completada"}'
   ```

5. **Eliminar una tarea por ID** (DELETE):
   ```bash
   curl -X DELETE http://localhost:3000/tasks/1
   ```

## Uso con Postman

1. Importa los endpoints manualmente en Postman o crea una colección.
2. Usa las URLs y métodos mencionados anteriormente.
3. Asegúrate de configurar correctamente los headers y el body (cuando sea necesario).

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad o corrección: `git checkout -b feature/nueva-funcionalidad`.
3. Haz un commit de tus cambios: `git commit -m "Agrega nueva funcionalidad"`.
4. Haz un push a tu rama: `git push origin feature/nueva-funcionalidad`.
5. Crea un Pull Request.


