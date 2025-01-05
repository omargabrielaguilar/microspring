# Usar la imagen oficial de .NET SDK para construir y publicar
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copiar los archivos de proyecto y restaurar las dependencias
COPY *.csproj ./
RUN dotnet restore

# Copiar el resto del código fuente
COPY . ./
RUN dotnet publish -c Release -o /out

# Usar una imagen más ligera para producción
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /out .

# Exponer el puerto por defecto de .NET
EXPOSE 5000

# Ejecutar la aplicación
ENTRYPOINT ["dotnet", "netboil.dll"]
