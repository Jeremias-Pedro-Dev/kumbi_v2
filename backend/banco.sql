CREATE DATABASE kumbi_db;
USE kumbi_db;

CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empresa_nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE localizacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE motorista (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    online BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE corrida (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    motorista_id INT NULL,
    origem_lat FLOAT,
    origem_lng FLOAT,
    destino_lat FLOAT,
    destino_lng FLOAT,
    status VARCHAR(30) DEFAULT 'pendente',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    corrida_id INT,
    valor DECIMAL(10,2),
    metodo VARCHAR(30),
    status VARCHAR(30) DEFAULT 'pendente',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
