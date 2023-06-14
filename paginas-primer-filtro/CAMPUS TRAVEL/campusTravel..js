 
 // Almacenar las clientes en un mapa
 const clientes = new Map();


 // Función para agregar un cliente
 function addcliente(event) {
     event.preventDefault();

     const ndocumento = document.getElementById('ndocumento');
     const nombre= document.getElementById('nombres');
     const apellido = document.getElementById('apellidos');
     const email = document.getElementById('email');
     const fechadenacimiento = document.getElementById('fechadenacimiento');
     const nacionalidad = document.getElementById('nacionalidad');

     const cliente = {
         Ndocumento: ndocumento.value,
         nombre: nombre.value,
         email: email.value,
         apellido: apellido.value,
         fnacimiento: fechadenacimiento.value,
         nacionalidad: nacionalidad.value
     };

     clientes.set(ndocumento,cliente);
     ndocumento.value = '';
     nombre.value = '';
     apellido.value = '';
     email.value = '';
     fechadenacimiento.value = '';
     nacionalidad.value = '';

     listarclientes();
 }


 // Función para eliminar clientes
 function eliminarcliente(ndocumento) {
     clientes.delete(ndocumento);
     listarclientes();
 }


 // Función para listar clientes
 function listarclientes() {
     const padreTabla = document.getElementById('padreTabla');
     const tbody = padreTabla.getElementsByTagName('tbody')[0];
     tbody.innerHTML = '';

     clientes.forEach(cliente => {
         const fila = document.createElement('tr');
        //  nuevaFila.classList.add('table-primary');`
        //     <td>${cliente.ndocumento}</td>
        //     <td>${cliente.nombre}</td>
        //     <td>${cliente.apellido}</td>
        //     <td>${cliente.telefono}</td>
        //     <td>${cliente.email}</td>
        //     <td>${cliente.fechaNacimiento}</td>
        //     <td>${cliente.nacionalidad}</td>
        //     <td><button class="btn btn-danger btn-sm btn-eliminar" data-id="${cliente.id}">Eliminar</button></td>
        //     <td><button class="btn btn-warning btn-sm btn-editar" data-id="${cliente.id}">Editar</button></td>`
        ;
         const columnandocumento = document.createElement('td');
         columnandocumento.textContent = cliente.Ndocumento;
         fila.appendChild(columnandocumento);

         const columnanombre = document.createElement('td');
         columnanombre.textContent = cliente.nombre;
         fila.appendChild(columnanombre);

         const columnaapellido = document.createElement('td');
         columnaapellido.textContent = cliente.apellido;
         fila.appendChild(columnaapellido);

         const columnaemail = document.createElement('td');
         columnaemail.textContent = cliente.email;
         fila.appendChild(columnaemail);

         const columnafechadenacimiento = document.createElement('td');
         columnafechadenacimiento.textContent = cliente.fechadenacimiento;
         fila.appendChild(columnafechadenacimiento);

         const columnanacionalidad = document.createElement('td');
         columnanacionalidad.textContent = cliente.nacionalidad;
         fila.appendChild(columnanacionalidad);



         const columnabotones = document.createElement('td');
         const botonborrar = document.createElement('button');
         botonborrar.textContent = 'Eliminar';
         botonborrar.classList.add('btn', 'btn-danger');
         botonborrar.addEventListener('click', () => eliminarcliente(cliente.Ndocumento));
         columnabotones.appendChild(botonborrar);
         fila.appendChild(columnabotones);

         tbody.appendChild(fila);
     });
 }


 // Event listar para el formulario
 const capturarformulario = document.getElementById('formularioG');
 capturarformulario.addEventListener('submit', addcliente);

// *********************************************************************************************************************************************


// <!-- ********************** RUTAS AEREAS ******************************** -->
// const rutas =[]

// const id = document.getElementById("id");
// const nombreruta = document.getElementById("nombreruta");
// const valortiket = document.getElementById("valortiket");
// const ciudadorigen = document.getElementById("ciudadorigen");
// const ciudaddestino = document.getElementById("ciudaddestino");
// const puntos = document.getElementById("puntos");
// const formularioR = document.getElementById("formularioR");



// // Función para crear rutas
// function crearRutas (id,nombreruta,valortiket,ciudadorigen,ciudaddestino,puntos){
//     const ruta  = {
//         id,
//         nombreruta,
//         valortiket,
//         ciudadorigen,
//         ciudaddestino,
//         puntos
//     } ;
//     rutas.push(ruta)
// }
