const cursos = [{
  año: 1,
  ciclos: [{
      nombre: "I semestre",
      cursos: [
        { nombre: "Antropología religiosa", tipo: "O", creditos: 4 },
        { nombre: "Introducción a la enfermería", tipo: "O", creditos: 3 },
        { nombre: "Lengua: Comunicación escrita académica", tipo: "O", creditos: 5 },
        { nombre: "Biología", tipo: "O", creditos: 3 },
        { nombre: "Química y bioquímica", tipo: "O", creditos: 3 },
        { nombre: "Conceptos matemáticos", tipo: "O", creditos: 3 },
        { nombre: "Actividades I", tipo: "O", creditos: 1 },
        { nombre: "Inglés I", tipo: "O", creditos: 1 }]},
    {nombre: "II semestre",
      cursos: [
        { nombre: "Teología I", tipo: "O", creditos: 3, prerequisitos: ["Antropología religiosa"] },
        { nombre: "Psicología en la atención de Enfermería", tipo: "O", creditos: 2, prerequisitos: ["Introducción a la enfermería"] },
        { nombre: "Redacción académica", tipo: "O", creditos: 5, prerequisitos: ["Lengua: Comunicación escrita académica"] },
        { nombre: "Microbiología y parasitología", tipo: "O", creditos: 3, prerequisitos: ["Biología"] },
        { nombre: "Anatomía", tipo: "O", creditos: 4, prerequisitos: ["Biología"] },
        { nombre: "Física aplicada a ciencias de la salud", tipo: "O", creditos: 3, prerequisitos: ["Conceptos matemáticos"] },
        { nombre: "Inglés II", tipo: "O", creditos: 1 }]}]},
{ año: 2,
  ciclos: [
    {nombre: "III semestre",
      cursos: [
        { nombre: "Teología II", tipo: "O", creditos: 4, prerequisitos: ["Teología I"] },
        { nombre: "Proceso de cuidados en Enfermería", tipo: "O", creditos: 3, prerequisitos: ["Psicología en la atención de Enfermería"] },
        { nombre: "Estrategias de prevención y promoción de la salud", tipo: "O", creditos: 3, prerequisitos: ["Psicología en la atención de Enfermería"] },
        { nombre: "Nutrición y dietética", tipo: "O", creditos: 3, prerequisitos: ["Microbiología y parasitología"] },
        { nombre: "Fisiología", tipo: "O", creditos: 4, prerequisitos: ["Anatomía"] },
        { nombre: "Estadística aplicada", tipo: "O", creditos: 3, prerequisitos: ["Física aplicada a ciencias de la salud"] },
        { nombre: "Inglés III", tipo: "O", creditos: 1 }
      ]
    },
    {
      nombre: "IV semestre",
      cursos: [
        { nombre: "Ética, deontología y bioética", tipo: "O", creditos: 4, prerequisitos: ["Teología II"] },
        { nombre: "Metodología de la atención en enfermería", tipo: "O", creditos: 6, prerequisitos: ["Proceso de cuidados en Enfermería"] },
        { nombre: "Fisiopatología general", tipo: "O", creditos: 4, prerequisitos: ["Fisiología"] },
        { nombre: "Enfermería en salud familiar y comunitaria", tipo: "O", creditos: 6, prerequisitos: ["Estrategias de prevención y promoción de la salud"] },
        { nombre: "Epidemiología", tipo: "O", creditos: 3, prerequisitos: ["Estadística aplicada"] },
        { nombre: "Inglés IV", tipo: "O", creditos: 1 }
      ]
    }
  ]
},
{
  año: 3,
  ciclos: [
    {
      nombre: "V semestre",
      cursos: [
        { nombre: "Enfermería en salud del adulto", tipo: "O", creditos: 7, prerequisitos: ["Metodología de la atención en enfermería"] },
        { nombre: "Farmacología y Terapéutica", tipo: "O", creditos: 3, prerequisitos: ["Fisiopatología general"] },
        { nombre: "Lengua nativa I", tipo: "O", creditos: 3, prerequisitos: ["acumular mínimo 90 créditos"] },
        { nombre: "Metodología de la investigación", tipo: "O", creditos: 4, prerequisitos: ["Epidemiología"] },
        { nombre: "Inglés V", tipo: "O", creditos: 1 }
      ]
    },
    {
      nombre: "VI semestre",
      cursos: [
        { nombre: "Enfermería en salud de la mujer y neonato", tipo: "O", creditos: 7, prerequisitos: ["Enfermería en salud del adulto"] },
        { nombre: "Enfermería en salud del adulto mayor", tipo: "O", creditos: 7, prerequisitos: ["Enfermería en salud del adulto"] },
        { nombre: "Seminario de investigación I", tipo: "O", creditos: 4, prerequisitos: ["Metodología de la investigación"] },
        { nombre: "Enfermería quirúrgica", tipo: "E", creditos: 3, prerequisitos: ["Enfermería en salud del adulto", "acumular mínimo 108 créditos"] },
        { nombre: "Tecnología de la información y la comunicación en salud", tipo: "E", creditos: 3, prerequisitos: ["acumular mínimo 108 créditos"] },
        { nombre: "Inglés VI", tipo: "O", creditos: 1 }
      ]
    }
  ]
},
{
  año: 4,
  ciclos: [
    {
      nombre: "VII semestre",
      cursos: [
        { nombre: "Enfermería en salud del niño y adolescente", tipo: "O", creditos: 7, prerequisitos: ["Enfermería en salud de la mujer y neonato"] },
        { nombre: "Gerencia en los servicios de salud", tipo: "O", creditos: 3, prerequisitos: ["Enfermería en salud del adulto mayor"] },
        { nombre: "Enfermería en salud mental y psiquiátrica", tipo: "O", creditos: 7, prerequisitos: ["Enfermería en salud del adulto mayor"] },
        { nombre: "Lengua nativa II", tipo: "O", creditos: 3, prerequisitos: ["Lengua nativa I"] },
        { nombre: "Inglés VII", tipo: "O", creditos: 1 }
      ]
    },
    {
      nombre: "VIII semestre",
      cursos: [
        { nombre: "Cuidados paliativos", tipo: "O", creditos: 6, prerequisitos: ["Enfermería en salud del niño y adolescente"] },
        { nombre: "Enfermería en emergencias, urgencias y desastres", tipo: "O", creditos: 6, prerequisitos: ["Enfermería en salud mental y psiquiátrica"] },
        { nombre: "Seminario de investigación II", tipo: "O", creditos: 6, prerequisitos: ["Seminario de investigación I"] },
        { nombre: "Docencia en Salud", tipo: "E", creditos: 3, prerequisitos: ["acumular mínimo 151 créditos"] },
        { nombre: "Marketing Empresarial en salud", tipo: "E", creditos: 3, prerequisitos: ["acumular mínimo 151 créditos"] },
        { nombre: "Inglés VIII", tipo: "O", creditos: 1 }
      ]
    }
  ]
},
{
  año: 5,
  ciclos: [
    {
      nombre: "IX semestre",
      cursos: [
        { nombre: "Internado I", tipo: "O", creditos: 22, prerequisitos: ["acumular mínimo 173 créditos"] },
        { nombre: "Inglés IX", tipo: "O", creditos: 1 }
      ]
    },
    {
      nombre: "X semestre",
      cursos: [
        { nombre: "Internado II", tipo: "O", creditos: 22, prerequisitos: ["Internado I"] },
        { nombre: "Curso de Trabajo de Investigación – Taller de sustentación de tesis", tipo: "O", creditos: 2, prerequisitos: ["Seminario de investigación II"] },
        { nombre: "Inglés X", tipo: "O", creditos: 1 }
      ]
    }
  ]
}];
const estado = {};

function guardarEstado() {
  localStorage.setItem('estadoCursos', JSON.stringify(estado));
}

function cargarEstado() {
  const datos = localStorage.getItem('estadoCursos');
  if (datos) Object.assign(estado, JSON.parse(datos));
}

function requisitosCumplidos(curso) {
  if (curso.requisitos) {
    for (const req of curso.requisitos) {
      if (!estado[req]) return false;
    }
  }
  return true;
}

function todosLosCursos() {
  return cursos.flatMap(a => a.ciclos.flatMap(c => c.cursos));
}

function contarElectivosAprobados() {
  return todosLosCursos().filter(c => c.tipo === 'E' && estado[c.nombre]).length;
}

function contarCreditosAprobados() {
  return todosLosCursos().reduce((total, c) => total + (estado[c.nombre] ? c.creditos : 0), 0);
}

function crearCajaCurso(curso) {
  const div = document.createElement('div');
  div.className = 'curso';
  if (curso.tipo === 'E') div.classList.add('electivo');

  div.innerHTML = `<strong>${curso.nombre}</strong>`;

  if (estado[curso.nombre]) {
    div.classList.add('aprobado');
  } else if (!requisitosCumplidos(curso)) {
    div.classList.add('bloqueado');
  }

  div.addEventListener('click', () => {
    if (!requisitosCumplidos(curso)) return;
    estado[curso.nombre] = !estado[curso.nombre];
    guardarEstado();
    renderizarCursos();
  });

  return div;
}

function lanzarConfeti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function renderizarCursos() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  for (const año of cursos) {
    const bloqueAño = document.createElement('div');
    bloqueAño.className = 'año';

    for (const ciclo of año.ciclos) {
      const columna = document.createElement('div');
      columna.className = 'ciclo';
      const titulo = document.createElement('h3');
      titulo.textContent = ciclo.nombre;
      columna.appendChild(titulo);

      for (const curso of ciclo.cursos) {
        const caja = crearCajaCurso(curso);
        columna.appendChild(caja);
      }

      bloqueAño.appendChild(columna);
    }

    contenedor.appendChild(bloqueAño);
  }

  const creditos = contarCreditosAprobados();
  const electivos = contarElectivosAprobados();
  const egreso = document.getElementById('egreso');
  const yaEgresaste = egreso.classList.contains('animado');

  if (creditos >= 221 && electivos >= 2) {
    egreso.textContent = '🎓 ¡Puedes egresar!';
    if (!yaEgresaste) {
      egreso.classList.add('animado');
      lanzarConfeti();
    }
  } else {
    egreso.textContent = '';
    egreso.classList.remove('animado');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  renderizarCursos();
  document.getElementById('reiniciar').addEventListener('click', () => {
    if (confirm('¿Deseas reiniciar la malla? Se borrará tu progreso.')) {
      localStorage.removeItem('estadoCursos');
      location.reload();
    }
  });
});
