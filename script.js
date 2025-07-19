function toggleAprobado(element) {
  element.classList.toggle("aprobado");
  guardarEstado();
}

function guardarEstado() {
  const estados = Array.from(document.querySelectorAll('.ramo')).map(div =>
    div.classList.contains('aprobado')
  );
  localStorage.setItem('estadoRamos', JSON.stringify(estados));
}

function cargarEstado() {
  const estados = JSON.parse(localStorage.getItem('estadoRamos') || '[]');
  document.querySelectorAll('.ramo').forEach((div, i) => {
    if (estados[i]) div.classList.add('aprobado');
  });
}

cargarEstado();
