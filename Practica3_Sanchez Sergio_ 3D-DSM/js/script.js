function mostrarParcial1() {
  // Obtener el contenedor de contenido
  const contenedor = document.getElementById('contenido');

  // Limpiar el contenido existente
  contenedor.innerHTML = '';

  // Crear el grid con los elementos para Parcial 1
  const grid = document.createElement('div');
  grid.classList.add('row');

  // Elemento 1
  const elemento1 = document.createElement('div');
  elemento1.classList.add('col-md-4');
  elemento1.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/AplicacionesWeb/Practica1/maquetado1.html">
        <img src="img/maquetado1.png" alt="Elemento 1" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Maquetado 1 Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/AplicacionesWeb/Practica1/maquetado1.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento1);

  // Elemento 2
  const elemento2 = document.createElement('div');
  elemento2.classList.add('col-md-4');
  elemento2.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/AplicacionesWeb/Practica1/maquetado2.html">
        <img src="img/maquetado2.png" alt="Elemento 2" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Maquetado 2 Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/AplicacionesWeb/Practica1/maquetado2.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento2);

  // Elemento 3
  const elemento3 = document.createElement('div');
  elemento3.classList.add('col-md-4');
  elemento3.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica3/curriculum.html">
        <img src="img/curriculum.png" alt="Elemento 3" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Curriculum Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica3/curriculum.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento3);

  // Elemento 4
  const elemento4 = document.createElement('div');
  elemento4.classList.add('col-md-4');
  elemento4.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica3/mapa.html">
        <img src="img/mapa.png" alt="Elemento 4" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Mapa Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica3/mapa.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento4);

  // Elemento 5
  const elemento5 = document.createElement('div');
  elemento5.classList.add('col-md-4');
  elemento5.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Formularios/index.html">
        <img src="img/formulario1.png" alt="Elemento 5" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Formulario1 Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Formularios/index.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento5);

  // Elemento 6
  const elemento6 = document.createElement('div');
  elemento6.classList.add('col-md-4');
  elemento6.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Formularios/form2.html">
        <img src="img/formulario2.png" alt="Elemento 6" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Formulario2 Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Formularios/form2.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento6);

  // Elemento 7
  const elemento7 = document.createElement('div');
  elemento7.classList.add('col-md-4');
  elemento7.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Paginas/Bebidas%20energeticas/index.html">
        <img src="img/grid.png" alt="Elemento 7" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Grid Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Paginas/Bebidas%20energeticas/index.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento7);

  // Elemento 8
  const elemento8 = document.createElement('div');
  elemento8.classList.add('col-md-4');
  elemento8.innerHTML = `
    <div class="card">
      <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Paginas/Boogle/boogle.html">
        <img src="img/boogle.png" alt="Elemento 8" class="card-img-top img-fluid">
      </a>
      <div class="card-body">
        <h6 class="card-title">Boogle Parcial 1</h6>
        <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica4APW/Paginas/Boogle/boogle.html" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
  grid.appendChild(elemento8);

  // Agregar el grid al contenedor
  contenedor.appendChild(grid);
}

function mostrarParcial2() {
  // Obtener el contenedor de contenido
  const contenedor = document.getElementById('contenido');

  // Limpiar el contenido existente
  contenedor.innerHTML = '';

  // Crear el grid con los elementos para Parcial 2
  const grid = document.createElement('div');
  grid.classList.add('row');

  // Elemento 1
  const elemento1 = document.createElement('div');
  elemento1.classList.add('col-md-4');
  elemento1.innerHTML = `
  <div class="card">
  <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica1%20Parcial%202/index.html">
    <img src="img/parcial21.png" alt="Elemento 8" class="card-img-top img-fluid">
  </a>
  <div class="card-body">
    <h6 class="card-title">Boogle Parcial 1</h6>
    <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica1%20Parcial%202/index.html" class="btn btn-primary">Ver más</a>
  </div>
</div>
  `;
  grid.appendChild(elemento1);

  // Elemento 2
  const elemento2 = document.createElement('div');
  elemento2.classList.add('col-md-4');
  elemento2.innerHTML = `
  <div class="card">
  <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica2%20Bootstrap/index.html">
    <img src="img/parcial22.png" alt="Elemento 8" class="card-img-top img-fluid">
  </a>
  <div class="card-body">
    <h6 class="card-title">Formulario 1 Parcial 2</h6>
    <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica2%20Bootstrap/index.html" class="btn btn-primary">Ver más</a>
  </div>
</div>
  `;
  grid.appendChild(elemento2);

  // Elemento 3
  const elemento3 = document.createElement('div');
  elemento3.classList.add('col-md-4');
  elemento3.innerHTML = `
  <div class="card">
  <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica%204%20Parcial%202/index.html">
    <img src="img/parcial23.png" alt="Elemento 8" class="card-img-top img-fluid">
  </a>
  <div class="card-body">
    <h6 class="card-title">Consumo API Parcial 2</h6>
    <a href="https://htmlpreview.github.io/?https://github.com/Cabohuevo/AplicacionesWeb/blob/main/Practica%204%20Parcial%202/index.html" class="btn btn-primary">Ver más</a>
  </div>
</div>
  `;
  grid.appendChild(elemento3);

  contenedor.appendChild(grid);
}

