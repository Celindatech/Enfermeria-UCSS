const cursos = [
  {
    año: 1,
    ciclos: [
      {
        nombre: "I semestre",
        cursos: [
          { nombre: "Antropología religiosa", tipo: "O", creditos: 4 },
          { nombre: "Introducción a la enfermería", tipo: "O", creditos: 3 },
          { nombre: "Lengua: Comunicación escrita académica", tipo: "O", creditos: 5 },
          { nombre: "Biología", tipo: "O", creditos: 3 },
          { nombre: "Química y bioquímica", tipo: "O", creditos: 3 },
          { nombre: "Conceptos matemáticos", tipo: "O", creditos: 3 },
          { nombre: "Actividades I", tipo: "O", creditos: 1 },
          { nombre: "Inglés I", tipo: "O", creditos: 1 }
        ]
      },
      {
        nombre: "II semestre",
        cursos: [
          { nombre: "Teología I", tipo: "O", creditos: 4, requisitos: ["Antropología religiosa"] },
          { nombre: "Psicología en la atención de Enfermería", tipo: "O", creditos: 2, requisitos: ["Introducción a la enfermería"] },
          { nombre: "Redacción académica", tipo: "O", creditos: 5, requisitos: ["Lengua: Comunicación escrita académica"] },
          { nombre: "Microbiología y parasitología", tipo: "O", creditos: 3, requisitos: ["Biología"] },
          { nombre: "Anatomía", tipo: "O", creditos: 4, requisitos: ["Biología"] },
          { nombre: "Física aplicada a ciencias de la salud", tipo: "O", creditos: 3, requisitos: ["Conceptos matemáticos"] },
          { nombre: "Inglés II", tipo: "O", creditos: 1 }
        ]
      }
    ]
  },
  {
    año: 2,
    ciclos: [
      {
        nombre: "III semestre",
        cursos: [
          { nombre: "Teología II", tipo: "O", creditos: 4, requisitos: ["Teología I"] },
          { nombre: "Proceso de cuidados en Enfermería", tipo: "O", creditos: 3, requisitos: ["Psicología en la atención de Enfermería"] },
          { nombre: "Estrategias de prevención y promoción de la salud", tipo: "O", creditos: 3, requisitos: ["Psicología en la atención de Enfermería"] },
          { nombre: "Nutrición y dietética", tipo: "O", creditos: 3, requisitos: ["Microbiología y parasitología"] },
          { nombre: "Fisiología", tipo: "O", creditos: 4, requisitos: ["Anatomía"] },
          { nombre: "Estadística aplicada", tipo: "O", creditos: 3, requisitos: ["Física aplicada a ciencias de la salud"] },
          { nombre: "Inglés III", tipo: "O", creditos: 1 }
        ]
      },
      {
        nombre: "IV semestre",
        cursos: [
          { nombre: "Ética, deontología y bioética", tipo: "O", creditos: 4, requisitos: ["Teología II"] },
          { nombre: "Metodología de la atención en enfermería", tipo: "O", creditos: 6, requisitos: ["Proceso de cuidados en Enfermería"] },
          { nombre: "Fisiopatología general", tipo: "O", creditos: 4, requisitos: ["Fisiología"] },
          { nombre: "Enfermería en salud familiar y comunitaria", tipo: "O", creditos: 6, requisitos: ["Estrategias de prevención y promoción de la salud"] },
          { nombre: "Epidemiología", tipo: "O", creditos: 3, requisitos: ["Estadística aplicada"] },
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
          { nombre: "Enfermería en salud del adulto", tipo: "O", creditos: 7, requisitos: ["Metodología de la atención en enfermería"] },
          { nombre: "Farmacología y Terapéutica", tipo: "O", creditos: 3, requisitos: ["Fisiopatología general"] },
          { nombre: "Lengua nativa I", tipo: "O", creditos: 3, requisitos: ["acumular mínimo 90 créditos"] },
          { nombre: "Metodología de la investigación", tipo: "O", creditos: 4, requisitos: ["Epidemiología"] },
          { nombre: "Inglés V", tipo: "O", creditos: 1 }
        ]
      },
      {
        nombre: "VI semestre",
        cursos: [
          { nombre: "Enfermería en salud de la mujer y neonato", tipo: "O", creditos: 7, requisitos: ["Enfermería en salud del adulto"] },
          { nombre: "Enfermería en salud del adulto mayor", tipo: "O", creditos: 7, requisitos: ["Enfermería en salud del adulto"] },
          { nombre: "Seminario de investigación I", tipo: "O", creditos: 4, requisitos: ["Metodología de la investigación"] },
          { nombre: "Enfermería quirúrgica", tipo: "E", creditos: 3, requisitos: ["Enfermería en salud del adulto", "acumular mínimo 108 créditos"] },
          { nombre: "Tecnología de la información y la comunicación en salud", tipo: "E", creditos: 3, requisitos: ["acumular mínimo 108 créditos"] },
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
          { nombre: "Enfermería en salud del niño y adolescente", tipo: "O", creditos: 7, requisitos: ["Enfermería en salud de la mujer y neonato"] },
          { nombre: "Gerencia en los servicios de salud", tipo: "O", creditos: 3, requisitos: ["Enfermería en salud del adulto mayor"] },
          { nombre: "Enfermería en salud mental y psiquiátrica", tipo: "O", creditos: 7, requisitos: ["Enfermería en salud del adulto mayor"] },
          { nombre: "Lengua nativa II", tipo: "O", creditos: 3, requisitos: ["Lengua nativa I"] },
          { nombre: "Inglés VII", tipo: "O", creditos: 1 }
        ]
      },
      {
        nombre: "VIII semestre",
        cursos: [
          { nombre: "Cuidados paliativos", tipo: "O", creditos: 6, requisitos: ["Enfermería en salud del niño y adolescente"] },
          { nombre: "Enfermería en emergencias, urgencias y desastres", tipo: "O", creditos: 6, requisitos: ["Enfermería en salud mental y psiquiátrica"] },
          { nombre: "Seminario de investigación II", tipo: "O", creditos: 6, requisitos: ["Seminario de investigación I"] },
          { nombre: "Docencia en Salud", tipo: "E", creditos: 3, requisitos: ["acumular mínimo 151 créditos"] },
          { nombre: "Marketing Empresarial en salud", tipo: "E", creditos: 3, requisitos: ["acumular mínimo 151 créditos"] },
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
          { nombre: "Internado I", tipo: "O", creditos: 22, requisitos: ["acumular mínimo 173 créditos"] },
          { nombre: "Inglés IX", tipo: "O", creditos: 1 }
        ]
      },
      {
        nombre: "X semestre",
        cursos: [
          { nombre: "Internado II", tipo: "O", creditos: 22, requisitos: ["Internado I"] },
          { nombre: "Curso de Trabajo de Investigación – Taller de sustentación de tesis", tipo: "O", creditos: 2, requisitos: ["Seminario de investigación II"] },
          { nombre: "Inglés X", tipo: "O", creditos: 1 }
        ]
      }
    ]
  }
];

const estado = {};

function guardarEstado() {
  localStorage.setItem('estadoCursos', JSON.stringify(estado));
}

function cargarEstado() {
  const datos = localStorage.getItem('estadoCursos');
  if (datos) Object.assign(estado, JSON.parse(datos));
}

function verificarRequisitoEspecial(req) {
  const creditos = contarCreditosAprobados();
  const electivos = contarElectivosAprobados();

  let cumple = true;

  const matchesCreditos = req.match(/mínimo (\d+) créditos/);
  const matchesElectivos = req.match(/(\d+) electivos/);

  if (matchesCreditos) {
    const necesarios = parseInt(matchesCreditos[1]);
    if (creditos < necesarios) cumple = false;
  }

  if (matchesElectivos) {
    const necesarios = parseInt(matchesElectivos[1]);
    if (electivos < necesarios) cumple = false;
  }

  return cumple;
}

function requisitosCumplidos(curso) {
  if (curso.requisitos) {
    for (const req of curso.requisitos) {
      if (typeof req === 'string') {
        if (req.includes('crédito') || req.includes('electivo')) {
          if (!verificarRequisitoEspecial(req)) return false;
        } else {
          if (!estado[req]) return false;
        }
      }
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

  // Muestra nombre + cantidad de créditos abajo
  div.innerHTML = `
    <strong>${curso.nombre}</strong>
    <span class="curso-creditos">${curso.creditos} crédito${curso.creditos > 1 ? 's' : ''}</span>
  `;

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

  // Actualiza los textos de la barra de resumen
  const elCreditos = document.getElementById('creditos-acumulados');
  const elElectivos = document.getElementById('electivos-acumulados');
  if (elCreditos) elCreditos.textContent = creditos;
  if (elElectivos) elElectivos.textContent = electivos;

  const egreso = document.getElementById('egreso');
  if (egreso) {
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
}

window.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  renderizarCursos();
  
  const btnReiniciar = document.getElementById('reiniciar');
  if (btnReiniciar) {
    btnReiniciar.addEventListener('click', () => {
      if (confirm('¿Deseas reiniciar la malla? Se borrará tu progreso.')) {
        localStorage.removeItem('estadoCursos');
        location.reload();
      }
    });
  }
});
