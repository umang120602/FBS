using DataAccess.Data;
using Microsoft.EntityFrameworkCore;
using Repository;
using System.Collections.Generic;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddScoped<IUser, UserService>();
builder.Services.AddControllers();
builder.Services.AddDbContext<FieldBookingSystemContext>(option => option.UseSqlServer(builder.Configuration.GetConnectionString("SqlConnectionString")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddControllers().AddNewtonsoftJson().AddJsonOptions(opt =>
{
    opt.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
}).ConfigureApiBehaviorOptions(options => { options.SuppressModelStateInvalidFilter = true; }); ;

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("AllowOrigin");


app.Run();
