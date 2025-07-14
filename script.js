const cursos = [{"codigo": "170001","nombre": "Antropología religiosa","ciclo": 1,"tipo": "O","creditos": 4},
{"codigo": "360001","nombre": "Introducción a la enfermería","ciclo": 1,"tipo": "O","creditos": 3},
{"codigo": "150283","nombre": "Comunicación escrita académica","ciclo": 1,"tipo": "O","creditos": 5},
{"codigo": "310003","nombre": "Biología","ciclo": 1,"tipo": "O","creditos": 3},
{"codigo": "310004","nombre": "Química y bioquímica","ciclo": 1,"tipo": "O","creditos": 3},
{"codigo": "132103","nombre": "Conceptos matemáticos","ciclo": 1,"tipo": "O","creditos": 3},
{"codigo": "150286","nombre": "Actividades I","ciclo": 1,"tipo": "O","creditos": 1},
{"codigo": "150285","nombre": "Inglés I","ciclo": 1,"tipo": "O","creditos": 1},
{"codigo": "170009","nombre": "Teología I","ciclo": 2,"tipo": "O","creditos": 4,"requisitos": ["170001"]},
{"codigo": "360017","nombre": "Psicología en la atención de Enfermería","ciclo": 2,"tipo": "O","creditos": 2,"requisitos": ["360001"]},
{"codigo": "150284","nombre": "Redacción académica","ciclo": 2,"tipo": "O","creditos": 5,"requisitos": ["150283"]},
{"codigo": "360016","nombre": "Microbiología y parasitología","ciclo": 2,"tipo": "O","creditos": 3,"requisitos": ["310003"]},
{"codigo": "350001","nombre": "Anatomía","ciclo": 2,"tipo": "O","creditos": 4,"requisitos": ["310003"]},
{"codigo": "350097","nombre": "Física aplicada a la salud","ciclo": 2,"tipo": "O","creditos": 3,"requisitos": ["132103"]},
{"codigo": "150288","nombre": "Inglés II","ciclo": 2,"tipo": "O","creditos": 1},
{"codigo": "170010","nombre": "Teología II","ciclo": 3,"tipo": "O","creditos": 4,"requisitos": ["170009"]},
{"codigo": "360018","nombre": "Proceso de cuidados en Enfermería","ciclo": 3,"tipo": "O","creditos": 3,"requisitos": ["360017"]},
{"codigo": "350005","nombre": "Estrategias de prevención y promoción de la salud","ciclo": 3,"tipo": "O","creditos": 3,"requisitos": ["360017"]},
{"codigo": "370001","nombre": "Nutrición y dietética","ciclo": 3,"tipo": "O","creditos": 3,"requisitos": ["360016"]},
{"codigo": "350076","nombre": "Fisiología","ciclo": 3,"tipo": "O","creditos": 4,"requisitos": ["350001"]},
{"codigo": "370024","nombre": "Estadística aplicada","ciclo": 3,"tipo": "O","creditos": 3,"requisitos": ["350097"]},
{"codigo": "150289","nombre": "Inglés III","ciclo": 3,"tipo": "O","creditos": 1},
{"codigo": "170031","nombre": "Ética, deontología y bioética","ciclo": 4,"tipo": "O","creditos": 4,"requisitos": ["170010"]},
{"codigo": "360002","nombre": "Metodología de la atención en enfermería","ciclo": 4,"tipo": "O","creditos": 6,"requisitos": ["360018"]},
{"codigo": "360084","nombre": "Fisiopatología general","ciclo": 4,"tipo": "O","creditos": 4,"requisitos": ["350076"]},
{"codigo": "360083","nombre": "Enfermería en salud familiar y comunitaria","ciclo": 4,"tipo": "O","creditos": 6,"requisitos": ["350005"]},
{"codigo": "350004","nombre": "Epidemiología","ciclo": 4,"tipo": "O","creditos": 3,"requisitos": ["370024"]},
{"codigo": "150290","nombre": "Inglés IV","ciclo": 4,"tipo": "O","creditos": 1},
{"codigo": "360085","nombre": "Enfermería en salud del adulto","ciclo": 5,"tipo": "O","creditos": 7,"requisitos": ["360002"]},
{"codigo": "360086","nombre": "Farmacología y Terapéutica","ciclo": 5,"tipo": "O","creditos": 3,"requisitos": ["360084"]},
{"codigo": "350095","nombre": "Lengua nativa I","ciclo": 5,"tipo": "O","creditos": 3,"creditosTotalesRequisito": 90},
{"codigo": "370025","nombre": "Metodología de la investigación","ciclo": 5,"tipo": "O","creditos": 4,"requisitos": ["350004"]},
{"codigo": "150291","nombre": "Inglés V","ciclo": 5,"tipo": "O","creditos": 1},
{"codigo": "360087","nombre": "Enfermería en salud de la mujer y neonato","ciclo": 6,"tipo":"O","creditos": 7,"requisitos": ["360085"]},
{"codigo": "360088","nombre": "Enfermería en salud del adulto mayor","ciclo": 6,"tipo": "O","creditos": 7,"requisitos": ["360085"]},
{"codigo": "370026","nombre": "Seminario de investigación I","ciclo": 6,"tipo": "O","creditos": 4,"requisitos": ["370025"]},
{"codigo": "360089","nombre": "Enfermería quirúrgica","ciclo": 6,"tipo": "E","creditos": 3,"requisitos": ["360085"],"creditosTotalesRequisito": 108},
{"codigo": "350102","nombre": "Tecnología de la información en salud","ciclo": 6,"tipo": "E","creditos": 3,"creditosTotalesRequisito": 108},
{"codigo": "150294","nombre": "Inglés VI","ciclo": 6,"tipo": "O","creditos": 1},
{"codigo": "360090","nombre": "Enfermería en salud del niño y adolescente", "ciclo": 7,"tipo": "O","creditos": 7,"requisitos": ["360087"]},
{"codigo": "360093","nombre": "Gerencia en los servicios de salud","ciclo": 7,"tipo": "O","creditos": 3,"requisitos": ["360088"]},
{"codigo": "360091","nombre": "Enfermería en salud mental y psiquiátrica","ciclo": 7,"tipo": "O","creditos": 7,"requisitos": ["360088"]},
{"codigo": "350096","nombre": "Lengua nativa II","ciclo": 7,"tipo": "O","creditos": 3,"requisitos": ["350095"]},
{"codigo": "150297","nombre": "Inglés VII","ciclo": 7,"tipo": "O","creditos": 1},
{"codigo": "350008","nombre": "Cuidados paliativos","ciclo": 8,"tipo": "O","creditos": 6,"requisitos": ["360090"]},
{"codigo": "360092","nombre": "Enfermería en emergencias, urgencias y desastres","ciclo": 8,"tipo": "O","creditos": 6,"requisitos": ["360091"]},
{"codigo": "350109","nombre": "Seminario de investigación II","ciclo": 8,"tipo": "O","creditos": 6,"requisitos": ["370026"]},
{"codigo": "350101","nombre": "Docencia en Salud","ciclo": 8,"tipo": "E","creditos": 3,"creditosTotalesRequisito": 151},
{"codigo": "350100","nombre": "Marketing Empresarial en salud","ciclo": 8,"tipo": "E","creditos": 3,"creditosTotalesRequisito": 151},
{"codigo": "150298","nombre": "Inglés VIII","ciclo": 8,"tipo": "O","creditos": 1},
{"codigo": "350111","nombre": "Internado I","ciclo": 9,"tipo": "O","creditos": 22,"creditosTotalesRequisito": 173},
{"codigo": "150300","nombre": "Inglés IX","ciclo": 9,"tipo": "O","creditos": 1},
{"codigo": "350112","nombre": "Internado II","ciclo": 10,"tipo": "O","creditos": 22,"requisitos": ["350111"]},
{"codigo": "350110","nombre": "Curso de Trabajo de Investigación – Taller de sustentación de tesis","ciclo": 10,"tipo": "O","creditos": 2,"requisitos": ["350109"]},
{"codigo": "150303","nombre": "Inglés X","ciclo": 10,"tipo": "O","creditos": 1}];
const estado = {};

function guardarEstado() {
  localStorage.setItem('estadoCursos', JSON.stringify(estado));
}

function cargarEstado() {
  const datos = localStorage.getItem('estadoCursos');
  if (datos) {
    Object.assign(estado, JSON.parse(datos));
  }
}

function requisitosCumplidos(curso) {
  if (curso.requisitos) {
    for (const req of curso.requisitos) {
      if (!estado[req]) return false;
    }
  }
  if (curso.creditosTotalesRequisito) {
    let total = 0;
    for (const c of cursos) {
      if (estado[c.codigo]) {
        total += c.creditos;
      }
    }
    if (total < curso.creditosTotalesRequisito) return false;
  }
  return true;
}

function contarElectivosAprobados() {
  return cursos.filter(c => c.tipo === 'E' && estado[c.codigo]).length;
}

function contarCreditosAprobados() {
  return cursos.reduce((acc, c) => acc + (estado[c.codigo] ? c.creditos : 0), 0);
}

function crearCajaCurso(curso) {
  const div = document.createElement('div');
  div.className = 'curso';
  div.dataset.codigo = curso.codigo;
  div.innerHTML = `<strong>${curso.codigo}</strong><br>${curso.nombre}`;

  if (estado[curso.codigo]) {
    div.classList.add('aprobado');
  } else if (!requisitosCumplidos(curso)) {
    div.classList.add('bloqueado');
  }

  div.addEventListener('click', () => {
    if (!requisitosCumplidos(curso)) return;
    estado[curso.codigo] = !estado[curso.codigo];
    guardarEstado();
    renderizarCursos();
  });

  return div;
}

function renderizarCursos() {function lanzarConfeti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
}

  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';
  const ciclos = [...new Set(cursos.map(c => c.ciclo))].sort((a, b) => a - b);

  for (const ciclo of ciclos) {
    const columna = document.createElement('div');
    columna.className = 'ciclo';
    const titulo = document.createElement('h3');
    titulo.textContent = `Semestre ${ciclo}`;
    columna.appendChild(titulo);

    const cursosCiclo = cursos.filter(c => c.ciclo === ciclo);
    for (const curso of cursosCiclo) {
      const caja = crearCajaCurso(curso);
      columna.appendChild(caja);
    }

    contenedor.appendChild(columna);
  }

  const creditos = contarCreditosAprobados();
  const electivos = contarElectivosAprobados();
  const yaEgresaste = egreso.classList.contains('animado');

if (creditos >= 260 && electivos >= 2) {
  egreso.textContent = '🎓 ¡Puedes egresar!';
  if (!yaEgresaste) {
    egreso.classList.add('animado');
    lanzarConfeti();
  }
} else {
  egreso.textContent = '';
  egreso.classList.remove('animado');
}


// Este bloque va FUERA de la función `renderizarCursos`
window.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  renderizarCursos();
});
