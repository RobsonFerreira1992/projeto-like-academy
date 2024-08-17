using MediatR;
using PhotoLikeApp.Handlers;
using PhotoLikeApp.Services;
using Swashbuckle.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// Adicionar serviços ao contêiner.
builder.Services.AddControllers();

// Configurar CORS para permitir todas as origens, métodos e cabeçalhos
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

// Configurar MediatR
builder.Services.AddMediatR(typeof(Program));

// Adicionar MemoryCache
builder.Services.AddMemoryCache();

// Registrar o ActionHistoryService
builder.Services.AddSingleton<ActionHistoryService>();

// Configurar Swagger para documentação da API
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configurar o pipeline de solicitações HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

    // Ativar Swagger no ambiente de desenvolvimento
    app.UseSwagger();

    // Ativar Swagger UI com a interface de documentação
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "MatchLikeApp API V1");
        c.RoutePrefix = string.Empty; // Serve a UI na raiz (http://localhost:7262)
    });
}

// Configurar o uso de roteamento e aplicar CORS
app.UseRouting();
app.UseCors("AllowAllOrigins");

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

// Iniciar a aplicação
app.Run();