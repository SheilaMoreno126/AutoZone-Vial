-- Crear base de datos
CREATE DATABASE IF NOT EXISTS senales_transito;
USE senales_transito;

-- Tabla de categorías 
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);
 
-- Tabla de señales de tránsito
CREATE TABLE senales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    categoria_id INT NOT NULL,
    imagen VARCHAR(255),
    CONSTRAINT fk_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
        
);


-- Insertar categorías (agregar mas categorias)
INSERT INTO categorias (nombre) VALUES
('Preventiva'),
('Reglamentaria'),
('Informativa');

-- Insertar señales (agregar mas señales de trancito y buscar imagenes porfavor :D )
INSERT INTO senales (nombre, descripcion, categoria_id, imagen) VALUES
('Curva peligrosa', 'Indica una curva pronunciada en la vía.', 1, 'imagenes/curva_peligrosa'),
('Pare', 'Indica que el conductor debe detenerse completamente.', 2, 'imagenes/pare'),
('Hospital cercano', 'Indica la proximidad de un hospital.', 3, 'imagenes/hospital');
