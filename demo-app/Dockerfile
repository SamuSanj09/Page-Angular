# STAGE 1
FROM node:20-alpine AS build

WORKDIR /usr/local/app

# Copiar solo los archivos necesarios para npm install
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos
COPY . .
RUN npm run build

# STAGE 2
FROM nginx:alpine

COPY --from=build /usr/local/app/dist/demo-app/browser /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80