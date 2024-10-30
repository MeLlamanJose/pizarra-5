#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Iniciando instalación de Pizarra Virtual...${NC}"

# Verificar Docker
if ! command -v docker &> /dev/null; then
    echo "Docker no está instalado. Por favor, instala Docker primero."
    exit 1
fi

# Verificar Docker Compose
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose no está instalado. Por favor, instala Docker Compose primero."
    exit 1
fi

# Crear directorios necesarios
echo -e "${GREEN}Creando estructura de directorios...${NC}"
mkdir -p docker/mysql/data
mkdir -p docker/mysql/init

# Copiar archivo de inicialización de base de datos
cp init.sql docker/mysql/init/

# Construir y levantar contenedores
echo -e "${GREEN}Construyendo contenedores Docker...${NC}"
docker-compose build

echo -e "${GREEN}Levantando servicios...${NC}"
docker-compose up -d

echo -e "${GREEN}Instalando dependencias de Node.js...${NC}"
docker-compose exec app npm install

echo -e "${BLUE}Instalación completada!${NC}"
echo -e "Puedes acceder a la aplicación en: http://localhost:3000"