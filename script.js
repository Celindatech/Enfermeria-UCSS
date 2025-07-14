const cursos = [
  // Formato: { codigo, nombre, ciclo, tipo, creditos, requisitos: [], estado: "", creditosTotalesRequisito: opcional }
  { codigo: "170001", nombre: "Antropología religiosa", ciclo: 1, tipo: "O", creditos: 4, requisitos: [] },
  { codigo: "360001", nombre: "Introducción a la enfermería", ciclo: 1, tipo: "O", creditos: 3, requisitos: [] },
  { codigo: "150283", nombre: "Comunicación escrita académica", ciclo: 1, tipo: "O", creditos: 5, requisitos: [] },
  { codigo: "310003", nombre: "Biología", ciclo: 1, tipo: "O", creditos: 3, requisitos: [] },
  { codigo: "310004", nombre: "Química y bioquímica", ciclo: 1, tipo: "O", creditos: 3, requisitos: [] },
  { codigo: "132103", nombre: "Conceptos matemáticos", ciclo: 1, tipo: "O", creditos: 3, requisitos: [] },
  { codigo: "150286", nombre: "Actividades I", ciclo: 1, tipo: "O", creditos: 1, requisitos: [] },
  { codigo: "150285", nombre: "Inglés I", ciclo: 1, tipo: "O", creditos: 1, requisitos: [] },

  { codigo: "170009", nombre: "Teología I", ciclo: 2, tipo: "O", creditos: 4, requisitos: ["170001"] },
  { codigo: "360017", nombre: "Psicología en la atención de Enfermería", ciclo: 2, tipo: "O", creditos: 2, requisitos: ["360001"] },
  { codigo: "150284", nombre: "Redacción académica", ciclo: 2, tipo: "O", creditos: 5, requisitos: ["150283"] },
  { codigo: "360016", nombre: "Microbiología y parasitología", ciclo: 2, tipo: "O", creditos: 3, requisitos: ["310003"] },
  { codigo: "350001", nombre: "Anatomía", ciclo: 2, tipo: "O", creditos: 4, requisitos: ["310003"] },
  { codigo: "350097", nombre: "Física aplicada a la salud", ciclo: 2, tipo: "O", creditos: 3, requisitos: ["132103"] },
  { codigo: "150288", nombre: "Inglés II", ciclo: 2, tipo: "O", creditos: 1, requisitos: [] },

  // Puedes continuar con los demás ramos aquí...
  // Para los que tienen requisitos como "Crédito Mínimo: 90", usa: creditosTotalesRequisito: 90
  // Para los electivos, pon tipo: "E"
];

let aprobados = new Set();
let electivosAprobados = 0;
let creditosAcumulados = 0;

function crearMalla() {
  const contenedor = document.getElementById("malla");
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso");
    div.dataset.codigo = curso.codigo;

    if (curso.requisitos.length > 0 || curso.creditosTotalesRequisito) {
      div.classList.add("bloqueado");
    }

    div.innerHTML = `
      <h3>${curso.nombre}</h3>
      <div class="info">
        Código: ${curso.codigo}<br>
        Tipo: ${curso.tipo === "E" ? "Electiva" : "Obligatoria"}<br>
        Créditos: ${curso.creditos}
      </div>
    `;

    div.addEventListener("click", () => intentarAprobar(div, curso));
    contenedor.appendChild(div);
  });
}

function intentarAprobar(div, curso) {
  if (aprobados.has(curso.codigo)) return;

  if (curso.requisitos && curso.requisitos.some(req => !aprobados.has(req))) {
    alert("Este curso está bloqueado. Revisa los requisitos.");
    return;
  }

  if (curso.creditosTotalesRequisito && creditosAcumulados < curso.creditosTotalesRequisito) {
    alert(`Necesitas mínimo ${curso.creditosTotalesRequisito} créditos aprobados.`);
    return;
  }

  aprobarCurso(div, curso);
}

function aprobarCurso(div, curso) {
  div.classList.remove("bloqueado");
  div.classList.add("aprobado");
  aprobados.add(curso.codigo);
  creditosAcumulados += curso.creditos;

  if (curso.tipo === "E") {
    electivosAprobados++;
  }

  desbloquearCursos();
  verificarEgreso();
}

function desbloquearCursos() {
  document.querySelectorAll(".curso").forEach(div => {
    const codigo = div.dataset.codigo;
    const curso = cursos.find(c => c.codigo === codigo);
    if (!aprobados.has(codigo)) {
      const cumpleRequisitos = !curso.requisitos || curso.requisitos.every(r => aprobados.has(r));
      const cumpleCreditos = !curso.creditosTotalesRequisito || creditosAcumulados >= curso.creditosTotalesRequisito;
      if (cumpleRequisitos && cumpleCreditos) {
        div.classList.remove("bloqueado");
      }
    }
  });
}

function verificarEgreso() {
  const totalCursos = cursos.filter(c => c.tipo === "O").length;
  const totalAprobados = Array.from(aprobados).filter(cod => {
    const curso = cursos.find(c => c.codigo === cod);
    return curso && curso.tipo === "O";
  }).length;

  if (totalAprobados === totalCursos && electivosAprobados >= 2) {
    document.getElementById("mensaje-egreso").classList.remove("oculto");
  }
}

crearMalla();
