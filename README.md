# Enfermeria-UCSS
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Malla Curricular Interactiva</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background: #f0f2f5;
      margin: 0;
      padding: 2em;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    .ciclo {
      margin-bottom: 2em;
    }
    .titulo-ciclo {
      background: #2196f3;
      color: white;
      padding: 10px;
      border-radius: 8px 8px 0 0;
    }
    .contenedor-cursos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1em;
      background: white;
      padding: 1em;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .curso {
      border-left: 5px solid #ccc;
      padding: 10px;
      background: #f9f9f9;
      border-radius: 5px;
      transition: 0.3s;
      cursor: pointer;
    }
    .curso:hover {
      background: #e3f2fd;
    }
    .aprobado { border-color: #4caf50; }
    .pendiente { border-color: #f44336; }
    .detalle {
      display: none;
      font-size: 0.9em;
      color: #555;
      margin-top: 5px;
    }
  </style>
</head>
<body>

<h1>Malla Curricular - Ingeniería</h1>

<div class="ciclo">
  <div class="titulo-ciclo">1er Ciclo</div>
  <div class="contenedor-cursos">
    <div class="curso aprobado" onclick="toggleDetalle(this)">
      <strong>Matemática I</strong>
      <div class="detalle">Créditos: 4<br>Sin prerequisitos</div>
    </div>
    <div class="curso pendiente" onclick="toggleDetalle(this)">
      <strong>Comunicación</strong>
      <div class="detalle">Créditos: 3<br>Sin prerequisitos</div>
    </div>
    <div class="curso pendiente" onclick="toggleDetalle(this)">
      <strong>Introducción a la Ingeniería</strong>
      <div class="detalle">Créditos: 2<br>Sin prerequisitos</div>
    </div>
  </div>
</div>

<div class="ciclo">
  <div class="titulo-ciclo">2do Ciclo</div>
  <div class="contenedor-cursos">
    <div class="curso pendiente" onclick="toggleDetalle(this)">
      <strong>Física I</strong>
      <div class="detalle">Créditos: 4<br>Requiere Matemática I</div>
    </div>
    <div class="curso pendiente" onclick="toggleDetalle(this)">
      <strong>Programación Básica</strong>
      <div class="detalle">Créditos: 3<br>Sin prerequisitos</div>
    </div>
  </div>
</div>

<script>
  function toggleDetalle(el) {
    const detalle = el.querySelector(".detalle");
    detalle.style.display = (detalle.style.display === "block") ? "none" : "block";
  }
</script>

</body>
</html>
