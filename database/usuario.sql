-- Crear base de datos
CREATE DATABASE IF NOT EXISTS usuarios_senales;
USE usuarios_senales;

-- Tabla de roles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    passwords VARCHAR(255) NOT NULL,
    fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    rol_id INT NOT NULL,
    CONSTRAINT fk_usuario_rol
        FOREIGN KEY (rol_id)
        REFERENCES roles(id)
        
);

-- Insertar roles
INSERT INTO roles (nombre) VALUES
('usuario'),
('administrador');

-- Insertar usuarios 
INSERT INTO usuarios (nombre, apellido, email, passwords, rol_id) VALUES
('josias', 'gimenez', 'josiasg@gmail.com', 'password123', 1),
('Admin', 'Sistema', 'admin@gmail.com', 'admin123', 2);
