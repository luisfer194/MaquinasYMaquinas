const maquinasDB = [
  {
    id: 1,
    nombre: 'Singer 4423 Heavy Duty',
    marca: 'singer',
    tipo: 'domestica',
    categoria: 'Doméstica',
    imagen: 'images/maquinas/Singer_4423.png',
    precio: 850000,
    descripcion: 'Máquina mecánica de alta velocidad y rendimiento',
    badge: 'POPULAR',
    badgeClass: '',
    caracteristicas: [
      '23 puntadas incluidas',
      'Motor de 60% más potencia',
      'Marco de metal resistente',
      'Enhebrador automático de aguja',
      'Velocidad 1100 puntadas/min',
    ],
    especificaciones: {
      'Tipo de máquina': 'Mecánica doméstica',
      Puntadas: '23 incorporadas',
      Velocidad: '1100 ppm',
      Material: 'Marco de metal',
      Garantía: '2 años',
    },
  },
  {
    id: 2,
    nombre: 'Jack A5E',
    marca: 'jack',
    tipo: 'industrial',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Jack A5E.png',
    precio: 2850000,
    descripcion: 'Recta electrónica industrial de última generación',
    badge: 'NUEVO',
    badgeClass: 'badge-nuevo',
    caracteristicas: [
      'Motor directo silencioso',
      'Corte automático de hilo',
      'Panel táctil digital',
      'Bajo consumo energético',
      'Sistema de lubricación automática',
    ],
    especificaciones: {
      'Tipo de máquina': 'Recta industrial electrónica',
      Motor: 'Servo directo',
      Velocidad: '5000 ppm',
      Funciones: 'Corte automático',
      Garantía: '1 año',
    },
  },
  {
    id: 3,
    nombre: 'Kingter KT-D3',
    marca: 'kingter',
    tipo: 'industrial',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Kingter KT-D3.png',
    precio: 2200000,
    descripcion: 'Plana mecatrónica de alta velocidad',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Motor directo integrado',
      'Puntada de alta precisión',
      'Ideal telas livianas y medianas',
      'Bajo mantenimiento',
      'Consumo energético reducido',
    ],
    especificaciones: {
      'Tipo de máquina': 'Plana mecatrónica',
      Motor: 'Directo',
      Velocidad: '4500 ppm',
      Aplicación: 'Telas livianas/medianas',
      Garantía: '1 año',
    },
  },
  {
    id: 4,
    nombre: 'Singer Simple 3223',
    marca: 'singer',
    tipo: 'domestica',
    categoria: 'Doméstica',
    imagen: 'images/maquinas/Singer_4423.png',
    precio: 650000,
    descripcion: 'Perfecta para principiantes',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      '23 puntadas decorativas',
      'Muy fácil de usar',
      'Ligera y portátil',
      'Enhebrador integrado',
      'Garantía de 2 años',
    ],
    especificaciones: {
      'Tipo de máquina': 'Mecánica doméstica',
      Puntadas: '23',
      Peso: '6 kg',
      'Ideal para': 'Principiantes',
      Garantía: '2 años',
    },
  },
  {
    id: 5,
    nombre: 'Juki DDL-8700',
    marca: 'juki',
    tipo: 'industrial',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Jack A5E.png',
    precio: 3200000,
    descripcion: 'Recta industrial de precisión japonesa',
    badge: 'OFERTA',
    badgeClass: 'badge-oferta',
    caracteristicas: [
      'Alta velocidad 5500 rpm',
      'Bajo nivel de ruido',
      'Sistema de lubricación automática',
      'Calidad japonesa certificada',
      'Motor servo eficiente',
    ],
    especificaciones: {
      'Tipo de máquina': 'Recta industrial',
      Velocidad: '5500 ppm',
      Motor: 'Servo',
      Origen: 'Japón',
      Garantía: '1 año',
    },
  },
  {
    id: 6,
    nombre: 'Jack JK-798DI',
    marca: 'jack',
    tipo: 'industrial',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Kingter KT-D3.png',
    precio: 2650000,
    descripcion: 'Overlock 4 hilos industrial',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      '4 hilos de alta resistencia',
      'Motor servo silencioso',
      'Ajuste diferencial preciso',
      'Corte perfecto de tela',
      'Ideal para confección',
    ],
    especificaciones: {
      'Tipo de máquina': 'Overlock industrial',
      Hilos: '4 hilos',
      Velocidad: '6000 ppm',
      Motor: 'Servo',
      Garantía: '1 año',
    },
  },
  {
    id: 7,
    nombre: 'Brother GX37',
    marca: 'brother',
    tipo: 'domestica',
    categoria: 'Doméstica',
    imagen: 'images/maquinas/Singer_4423.png',
    precio: 750000,
    descripcion: 'Versátil y confiable para el hogar',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      '37 puntadas integradas',
      'Ojal automático en 1 paso',
      'Mesa de trabajo ampliada',
      'Brazo libre para mangas',
      'Iluminación LED',
    ],
    especificaciones: {
      'Tipo de máquina': 'Mecánica doméstica',
      Puntadas: '37',
      Ojales: 'Automático 1 paso',
      Iluminación: 'LED',
      Garantía: '2 años',
    },
  },
  {
    id: 8,
    nombre: 'Singer Confidence 7463',
    marca: 'singer',
    tipo: 'domestica',
    categoria: 'Doméstica',
    imagen: 'images/maquinas/Jack A5E.png',
    precio: 950000,
    descripcion: 'Máquina computarizada con pantalla LCD',
    badge: 'POPULAR',
    badgeClass: '',
    caracteristicas: [
      '30 puntadas incorporadas',
      'Pantalla LCD informativa',
      'Enhebrador automático',
      'Sistema drop-in para bobina',
      'Ojal en 1 paso',
    ],
    especificaciones: {
      'Tipo de máquina': 'Computarizada',
      Puntadas: '30',
      Pantalla: 'LCD',
      Velocidad: '750 ppm',
      Garantía: '2 años',
    },
  },
];

// Variables globales
let maquinasFiltradas = [...maquinasDB];
let filtrosActivos = {
  tipo: 'all',
  marca: 'all',
  precio: 'all',
};

// Inicializar
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    renderizarMaquinas(maquinasDB);
    actualizarContador(maquinasDB.length);
  }, 500);

  configurarEventos();
});

// Configurar eventos
function configurarEventos() {
  document
    .getElementById('searchInput')
    .addEventListener('input', buscarMaquinas);

  // Event listeners para los selectores
  document.getElementById('filtroTipo').addEventListener('change', function () {
    filtrosActivos.tipo = this.value;
    aplicarFiltros();
    actualizarEtiquetasFiltros();
  });

  document
    .getElementById('filtroMarca')
    .addEventListener('change', function () {
      filtrosActivos.marca = this.value;
      aplicarFiltros();
      actualizarEtiquetasFiltros();
    });

  document
    .getElementById('filtroPrecio')
    .addEventListener('change', function () {
      filtrosActivos.precio = this.value;
      aplicarFiltros();
      actualizarEtiquetasFiltros();
    });
}

// Renderizar máquinas
function renderizarMaquinas(maquinas) {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');

  if (maquinas.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = maquinas
    .map(
      (maquina) => `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card product-card">
            <div class="position-relative">
              ${
                maquina.badge
                  ? `<span class="product-badge ${maquina.badgeClass}">${maquina.badge}</span>`
                  : ''
              }
              <img src="${maquina.imagen}" class="card-img-top" alt="${
        maquina.nombre
      }" 
                   onerror="this.src='https://via.placeholder.com/400x250/f8f9fa/666?text=Máquina+de+Coser'">
            </div>
            <div class="card-body">
              <span class="product-category">${maquina.categoria}</span>
              <h5 class="card-title fw-bold">${maquina.nombre}</h5>
              <p class="text-muted mb-3">${maquina.descripcion}</p>
              
              <ul class="product-features">
                ${maquina.caracteristicas
                  .slice(0, 4)
                  .map(
                    (car) => `
                  <li><i class="bi bi-check-circle-fill"></i> ${car}</li>
                `
                  )
                  .join('')}
              </ul>

              <div class="price-section">
                <div class="price-label">Precio desde:</div>
                <div class="price">${maquina.precio.toLocaleString(
                  'es-CO'
                )}</div>
              </div>

              <div class="d-grid gap-2">
                <a href="https://wa.me/573246524049?text=Hola, me interesa la ${encodeURIComponent(
                  maquina.nombre
                )}" 
                   class="btn btn-contact" target="_blank">
                  <i class="bi bi-whatsapp me-2"></i>Consultar ahora
                </a>
                <button class="btn btn-details" onclick="mostrarDetalles(${
                  maquina.id
                })">
                  <i class="bi bi-info-circle me-2"></i>Ver detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}

// Buscar máquinas
function buscarMaquinas() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  let resultados = maquinasDB.filter((maquina) => {
    const cumpleBusqueda =
      maquina.nombre.toLowerCase().includes(searchTerm) ||
      maquina.marca.toLowerCase().includes(searchTerm) ||
      maquina.descripcion.toLowerCase().includes(searchTerm) ||
      maquina.caracteristicas.some((car) =>
        car.toLowerCase().includes(searchTerm)
      ) ||
      maquina.precio
        .toString()
        .includes(searchTerm.replace(/\./g, '').replace(/,/g, ''));

    return cumpleBusqueda;
  });

  aplicarFiltrosAResultados(resultados);
}

// Aplicar filtros
function aplicarFiltros() {
  let resultados = [...maquinasDB];

  if (filtrosActivos.tipo !== 'all') {
    resultados = resultados.filter((m) => m.tipo === filtrosActivos.tipo);
  }

  if (filtrosActivos.marca !== 'all') {
    resultados = resultados.filter((m) => m.marca === filtrosActivos.marca);
  }

  if (filtrosActivos.precio !== 'all') {
    const [min, max] = filtrosActivos.precio.split('-').map(Number);
    resultados = resultados.filter((m) => m.precio >= min && m.precio <= max);
  }

  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (searchTerm) {
    resultados = resultados.filter((maquina) => {
      return (
        maquina.nombre.toLowerCase().includes(searchTerm) ||
        maquina.marca.toLowerCase().includes(searchTerm) ||
        maquina.descripcion.toLowerCase().includes(searchTerm) ||
        maquina.caracteristicas.some((car) =>
          car.toLowerCase().includes(searchTerm)
        ) ||
        maquina.precio
          .toString()
          .includes(searchTerm.replace(/\./g, '').replace(/,/g, ''))
      );
    });
  }

  maquinasFiltradas = resultados;
  renderizarMaquinas(resultados);
  actualizarContador(resultados.length);
}

// Aplicar filtros a resultados de búsqueda
function aplicarFiltrosAResultados(resultados) {
  if (filtrosActivos.tipo !== 'all') {
    resultados = resultados.filter((m) => m.tipo === filtrosActivos.tipo);
  }

  if (filtrosActivos.marca !== 'all') {
    resultados = resultados.filter((m) => m.marca === filtrosActivos.marca);
  }

  if (filtrosActivos.precio !== 'all') {
    const [min, max] = filtrosActivos.precio.split('-').map(Number);
    resultados = resultados.filter((m) => m.precio >= min && m.precio <= max);
  }

  maquinasFiltradas = resultados;
  renderizarMaquinas(resultados);
  actualizarContador(resultados.length);
}

// Actualizar contador
function actualizarContador(count) {
  const counter = document.getElementById('resultsCount');
  if (count === 0) {
    counter.textContent = 'No se encontraron productos';
  } else if (count === 1) {
    counter.textContent = '1 producto encontrado';
  } else {
    counter.textContent = `${count} productos encontrados`;
  }
}

// Mostrar detalles en modal
function mostrarDetalles(id) {
  const maquina = maquinasDB.find((m) => m.id === id);
  if (!maquina) return;

  document.getElementById('modalTitle').textContent = maquina.nombre;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
        <div class="row">
          <div class="col-md-6">
            <img src="${maquina.imagen}" class="modal-img w-100 mb-3" alt="${
    maquina.nombre
  }"
                 onerror="this.src='https://via.placeholder.com/400x400/f8f9fa/666?text=Máquina+de+Coser'">
            
            <div class="price-section">
              <div class="price-label">Precio:</div>
              <div class="price">${maquina.precio.toLocaleString('es-CO')}</div>
            </div>

            <a href="https://wa.me/573246524049?text=Hola, me interesa la ${encodeURIComponent(
              maquina.nombre
            )}" 
               class="btn btn-contact" target="_blank">
              <i class="bi bi-whatsapp me-2"></i>Consultar por WhatsApp
            </a>
          </div>

          <div class="col-md-6">
            <span class="product-category mb-3">${maquina.categoria}</span>
            <p class="text-muted mt-2">${maquina.descripcion}</p>

            <h6 class="fw-bold mt-4 mb-3">Características principales:</h6>
            <ul class="product-features">
              ${maquina.caracteristicas
                .map(
                  (car) => `
                <li><i class="bi bi-check-circle-fill"></i> ${car}</li>
              `
                )
                .join('')}
            </ul>

            <h6 class="fw-bold mt-4 mb-3">Especificaciones técnicas:</h6>
            <table class="spec-table">
              ${Object.entries(maquina.especificaciones)
                .map(
                  ([key, value]) => `
                <tr>
                  <td>${key}</td>
                  <td>${value}</td>
                </tr>
              `
                )
                .join('')}
            </table>
          </div>
        </div>
      `;

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

// Actualizar etiquetas de filtros activos
function actualizarEtiquetasFiltros() {
  const container = document.getElementById('activeFilters');
  const etiquetas = [];

  const filtroLabels = {
    tipo: {
      domestica: 'Domésticas',
      industrial: 'Industriales',
    },
    marca: {
      singer: 'Singer',
      juki: 'Juki',
      jack: 'Jack',
      kingter: 'Kingter',
      brother: 'Brother',
    },
    precio: {
      '0-1000000': 'Hasta $1.000.000',
      '1000000-3000000': '$1M - $3M',
      '3000000-999999999': 'Más de $3M',
    },
  };

  if (filtrosActivos.tipo !== 'all') {
    etiquetas.push({
      tipo: 'tipo',
      texto: filtroLabels.tipo[filtrosActivos.tipo],
    });
  }

  if (filtrosActivos.marca !== 'all') {
    etiquetas.push({
      tipo: 'marca',
      texto: filtroLabels.marca[filtrosActivos.marca],
    });
  }

  if (filtrosActivos.precio !== 'all') {
    etiquetas.push({
      tipo: 'precio',
      texto: filtroLabels.precio[filtrosActivos.precio],
    });
  }

  if (etiquetas.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = etiquetas
    .map(
      (tag) => `
        <span class="filter-tag">
          ${tag.texto}
          <i class="bi bi-x-circle" onclick="removerFiltro('${tag.tipo}')"></i>
        </span>
      `
    )
    .join('');
}

// Remover un filtro específico
function removerFiltro(tipo) {
  filtrosActivos[tipo] = 'all';
  document.getElementById(
    'filtro' + tipo.charAt(0).toUpperCase() + tipo.slice(1)
  ).value = 'all';
  aplicarFiltros();
  actualizarEtiquetasFiltros();
}

// Resetear filtros
function resetFilters() {
  filtrosActivos = {
    tipo: 'all',
    marca: 'all',
    precio: 'all',
  };

  document.getElementById('filtroTipo').value = 'all';
  document.getElementById('filtroMarca').value = 'all';
  document.getElementById('filtroPrecio').value = 'all';
  document.getElementById('searchInput').value = '';

  renderizarMaquinas(maquinasDB);
  actualizarContador(maquinasDB.length);
  actualizarEtiquetasFiltros();
}
