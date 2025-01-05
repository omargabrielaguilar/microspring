# Dockerfile (frontend)

# Usar la imagen oficial de Node.js para construir la aplicación Angular
FROM node:22 AS build

# Definir el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json (si existen)
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente de la aplicación Angular al contenedor
COPY . .

# Construir la aplicación Angular para producción
RUN npm run build --prod

# Usar un servidor Nginx para servir la aplicación construida
FROM nginx:alpine

# Copiar los archivos construidos a la carpeta de Nginx
COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
