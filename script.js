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
{
  "codigo": "170010",
  "nombre": "Teología II",
  "ciclo": 3,
  "tipo": "O",
  "creditos": 4,
  "requisitos": ["170009"]
},
{
  "codigo": "360018",
  "nombre": "Proceso de cuidados en Enfermería",
  "ciclo": 3,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["360017"]
},
{
  "codigo": "350005",
  "nombre": "Estrategias de prevención y promoción de la salud",
  "ciclo": 3,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["360017"]
},
{
  "codigo": "370001",
  "nombre": "Nutrición y dietética",
  "ciclo": 3,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["360016"]
},
{
  "codigo": "350076",
  "nombre": "Fisiología",
  "ciclo": 3,
  "tipo": "O",
  "creditos": 4,
  "requisitos": ["350001"]
},
{
  "codigo": "370024",
  "nombre": "Estadística aplicada",
  "ciclo": 3,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["350097"]
},
{
  "codigo": "150289",
  "nombre": "Inglés III",
  "ciclo": 3,
  "tipo": "O",
  "creditos": 1
},
{
  "codigo": "170031",
  "nombre": "Ética, deontología y bioética",
  "ciclo": 4,
  "tipo": "O",
  "creditos": 4,
  "requisitos": ["170010"]
},
{
  "codigo": "360002",
  "nombre": "Metodología de la atención en enfermería",
  "ciclo": 4,
  "tipo": "O",
  "creditos": 6,
  "requisitos": ["360018"]
},
{
  "codigo": "360084",
  "nombre": "Fisiopatología general",
  "ciclo": 4,
  "tipo": "O",
  "creditos": 4,
  "requisitos": ["350076"]
},
{
  "codigo": "360083",
  "nombre": "Enfermería en salud familiar y comunitaria",
  "ciclo": 4,
  "tipo": "O",
  "creditos": 6,
  "requisitos": ["350005"]
},
{
  "codigo": "350004",
  "nombre": "Epidemiología",
  "ciclo": 4,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["370024"]
},
{
  "codigo": "150290",
  "nombre": "Inglés IV",
  "ciclo": 4,
  "tipo": "O",
  "creditos": 1
},
{
  "codigo": "360085",
  "nombre": "Enfermería en salud del adulto",
  "ciclo": 5,
  "tipo": "O",
  "creditos": 7,
  "requisitos": ["360002"]
},
{
  "codigo": "360086",
  "nombre": "Farmacología y Terapéutica",
  "ciclo": 5,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["360084"]
},
{
  "codigo": "350095",
  "nombre": "Lengua nativa I",
  "ciclo": 5,
  "tipo": "O",
  "creditos": 3,
  "creditosTotalesRequisito": 90
},
{
  "codigo": "370025",
  "nombre": "Metodología de la investigación",
  "ciclo": 5,
  "tipo": "O",
  "creditos": 4,
  "requisitos": ["350004"]
},
{
  "codigo": "150291",
  "nombre": "Inglés V",
  "ciclo": 5,
  "tipo": "O",
  "creditos": 1
},
{
  "codigo": "360087",
  "nombre": "Enfermería en salud de la mujer y neonato",
  "ciclo": 6,
  "tipo": "O",
  "creditos": 7,
  "requisitos": ["360085"]
},
{
  "codigo": "360088",
  "nombre": "Enfermería en salud del adulto mayor",
  "ciclo": 6,
  "tipo": "O",
  "creditos": 7,
  "requisitos": ["360085"]
},
{
  "codigo": "370026",
  "nombre": "Seminario de investigación I",
  "ciclo": 6,
  "tipo": "O",
  "creditos": 4,
  "requisitos": ["370025"]
},
{
  "codigo": "360089",
  "nombre": "Enfermería quirúrgica",
  "ciclo": 6,
  "tipo": "E",
  "creditos": 3,
  "requisitos": ["360085"],
  "creditosTotalesRequisito": 108
},
{
  "codigo": "350102",
  "nombre": "Tecnología de la información en salud",
  "ciclo": 6,
  "tipo": "E",
  "creditos": 3,
  "creditosTotalesRequisito": 108
},
{
  "codigo": "150294",
  "nombre": "Inglés VI",
  "ciclo": 6,
  "tipo": "O",
  "creditos": 1
},
{
  "codigo": "360090",
  "nombre": "Enfermería en salud del niño y adolescente",
  "ciclo": 7,
  "tipo": "O",
  "creditos": 7,
  "requisitos": ["360087"]
},
{
  "codigo": "360093",
  "nombre": "Gerencia en los servicios de salud",
  "ciclo": 7,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["360088"]
},
{
  "codigo": "360091",
  "nombre": "Enfermería en salud mental y psiquiátrica",
  "ciclo": 7,
  "tipo": "O",
  "creditos": 7,
  "requisitos": ["360088"]
},
{
  "codigo": "350096",
  "nombre": "Lengua nativa II",
  "ciclo": 7,
  "tipo": "O",
  "creditos": 3,
  "requisitos": ["350095"]
},
{
  "codigo": "150297",
  "nombre": "Inglés VII",
  "ciclo": 7,
  "tipo": "O",
  "creditos": 1
},
{
  "codigo": "350008",
  "nombre": "Cuidados paliativos",
  "ciclo": 8,
  "tipo": "O",
  "creditos": 6,
  "requisitos": ["360090"]
},
{
  "codigo": "360092",
  "nombre": "Enfermería en emergencias, urgencias y desastres",
  "ciclo": 8,
  "tipo": "O",
  "creditos": 6,
  "requisitos": ["360091"]
},
{
  "codigo": "350109",
  "nombre": "Seminario de investigación II",
  "ciclo": 8,
  "tipo": "O",
  "creditos": 6,
  "requisitos": ["370026"]
},
{
  "codigo": "350101",
  "nombre": "Docencia en Salud",
  "ciclo": 8,
  "tipo": "E",
  "creditos": 3,
  "creditosTotalesRequisito": 151
},
{
  "codigo": "350100",
  "nombre": "Marketing Empresarial en salud",
  "ciclo": 8,
  "tipo": "E",
  "creditos": 3,
  "creditosTotalesRequisito": 151
},
{
  "codigo": "150298",
  "nombre": "Inglés VIII",
  "ciclo": 8,
  "tipo": "O",
  "creditos": 1
},
{
  "codigo": "350111",
  "nombre": "Internado I",
  "ciclo": 9,
  "tipo": "O",
  "creditos": 22,
  "creditosTotalesRequisito": 173
},
{
  "codigo": "150300",
  "nombre": "Inglés IX",
  "ciclo": 9,
  "tipo": "O",
  "creditos": 1
},
{
  "codigo": "350112",
  "nombre": "Internado II",
  "ciclo": 10,
  "tipo": "O",
  "creditos": 22,
  "requisitos": ["350111"]
},
{
  "codigo": "350110",
  "nombre": "Curso de Trabajo de Investigación – Taller de sustentación de tesis",
  "ciclo": 10,
  "tipo": "O",
  "creditos": 2,
  "requisitos": ["350109"]
},
{
  "codigo": "150303",
  "nombre": "Inglés X",
  "ciclo": 10,
  "tipo": "O",
  "creditos": 1
},
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
