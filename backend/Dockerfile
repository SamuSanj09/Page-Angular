    # Usa una imagen oficial de Node.js, versión LTS por estabilidad
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia únicamente los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias de manera eficiente
RUN npm install --production

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que usa tu backend
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
