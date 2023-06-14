
//<!-- *********************************************  gestion de clientes  ********************************************************* -->

//declaramos las variables del formulario  y  de la tabla //
const formularioJuegoClientes = document.getElementById('formularioJuegoClientes');
const TablaJuegosClientes = document.getElementById('tablaJuegoClientes');


// recibimos la imformacion de los input  con el id  del mismo //
const identificacionJ = document.getElementById('identificacionJ');
const nombreJ = document.getElementById('nombreJ');
const apellidoJ = document.getElementById('apellidoJ');
const telefonoJ = document.getElementById('telefonoJ');
const correoJ = document.getElementById('correoJ');
const fechanacimientoJ = document.getElementById('fechanacimientoJ');
const nacionalidadJ = document.getElementById('nacionalidadJ');


// array de clientes de juegos///
const clientesJuegos = [];
