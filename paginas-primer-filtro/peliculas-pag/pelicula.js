const cartasContainer = document.getElementById('cartas');
const formulario = document.getElementById('formulario');
const consultarB = document.getElementById('consultar');

let peliculas = [];

// Función para crear una película
function crearPelicula(titulo, genero, duracion, director) {
  const pelicula = {
    titulo,
    genero,
    duracion,
    director
  };
  peliculas.push(pelicula);
}

// Función para eliminar una película
function borrarPelicula(index) {
  peliculas.splice(index, 1);
  cargarPeliculas();
}

// Función para consultar una película por título
function buscarPorTitulo(titulo) {
  const pelicula = peliculas.find(pelicula => pelicula.titulo === titulo);
  return pelicula;
}

// Función para renderizar las películas en tarjetas
function cargarPeliculas() {
  cartasContainer.innerHTML = '';

  peliculas.map((movie, index) => {
    const carta = document.createElement('div');
    carta.classList.add('card', 'col');

    const cartabody = document.createElement('div');
    cartabody.classList.add('card-body');

    const titulo= document.createElement('h2');
    titulo.classList.add('card-title');
    titulo.textContent = movie.titulo;

    const genero = document.createElement('p');
    genero.classList.add('card-text');
    genero.textContent = `Género: ${movie.genero}`;

    const duracion = document.createElement('p');
    duracion.classList.add('card-text');
    duracion.textContent = `Duración: ${movie.duracion}`;

    const director = document.createElement('p');
    director.classList.add('card-text');
    director.textContent = `Director: ${movie.director}`;

    const botonBorrar = document.createElement('button');
    botonBorrar.classList.add('btn', 'btn-danger');
    botonBorrar.textContent = 'Eliminar';
    botonBorrar.addEventListener('click', () => {
      borrarPelicula(index);
    });

    cartabody.appendChild(titulo);
    cartabody.appendChild(genero);
    cartabody.appendChild(duracion);
    cartabody.appendChild(director);
    cartabody.appendChild(botonBorrar);

    carta.appendChild(cartabody);

    cartasContainer.appendChild(carta);
  });
}

// Evento de envío del formulario
formulario.addEventListener('submit', event => {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const genero = document.getElementById('genero').value;
  const duracion = document.getElementById('duracion').value;
  const director = document.getElementById('director').value;

  crearPelicula(titulo, genero, duracion, director);
  cargarPeliculas();

  // Limpiar los campos del formulario
  formulario.reset();
});

// Evento de clic en el botón de consultar
consultarB.addEventListener('click', () => {
  const peliculaTitulo = prompt('Ingrese el título de la película a consultar');
  if (peliculaTitulo) {
    const encontrarTitulo = buscarPorTitulo(peliculaTitulo);
    if (encontrarTitulo) {
      alert(`Título: ${encontrarTitulo.titulo}\nGénero: ${encontrarTitulo.genero}\nDuración: ${encontrarTitulo.duracion}\nDirector: ${encontrarTitulo.director}`);
    } else {
      alert('No se encontró ninguna película con ese título');
    }
  }
});