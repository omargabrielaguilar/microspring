using Application.Services;
using Core.Interfaces;
using Infrastructure.Repositories;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    EnvironmentName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"
});

builder.Configuration.AddEnvironmentVariables();


// Configuración de MongoDB
string mongoConnectionString = Environment.GetEnvironmentVariable("MongoDb__ConnectionString")
    ?? throw new Exception("MongoDb__ConnectionString environment variable not set");
string mongoDatabaseName = Environment.GetEnvironmentVariable("MongoDb__DatabaseName")
    ?? throw new Exception("MongoDb__DatabaseName environment variable not set");


// Registrar servicios
builder.Services.AddSingleton<IMongoClient>(new MongoClient(mongoConnectionString));
builder.Services.AddScoped<IUserRepository, UserRepository>(sp =>
    new UserRepository(sp.GetRequiredService<IMongoClient>(), mongoDatabaseName));
builder.Services.AddScoped<UserService>();

// Añadir controladores
builder.Services.AddControllers();

var app = builder.Build();

// Configurar la aplicación
app.UseAuthorization();
app.MapControllers();

// Asegúrate de que escuche en todas las interfaces en el puerto 5000
app.Urls.Add("http://0.0.0.0:5000");

app.Run();
