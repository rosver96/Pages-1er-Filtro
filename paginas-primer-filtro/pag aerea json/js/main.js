let myForm = document.querySelector("#formulario");
let btnListar = document.getElementById("btnListar");
let tbodyClientes = document.querySelector("#tbodyclientes");
let identificacion = document.querySelector("#identificacion");
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let telefono = document.querySelector("#telefono");
let fechNaci = document.querySelector("#fechNaci");
let cuidadOrigen = document.querySelector("#cuidadOrigen");
let paisOrigen = document.querySelector("#paisOrigen");
let correo = document.querySelector("#correo");
let idUser = document.querySelector("#id")

btnListar.addEventListener("click", async (e)=>{
    e.preventDefault();
    let accion = e.currentTarget.dataset.accion;
    if(accion === "Listar"){
        getUserAll();
    }
});

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    opc[e.submitter.dataset.accion](data)
})

const opc = {
    "GET": () => getUserAll(),
    "PUT": (data) => putUserAll(data),
    "DELETE": (data) => deleteUser(data),
    "SEARCH": (data) => searchUser(data),
    "POST": (data) => postUser(data),
}


let config = {
    headers: new Headers({ 
        "Content-Type": "application/json"
    }),
}

const getUserAll = async() => {
    config.method = "GET";
    let data = await ( await fetch("http://localhost:3000/clientes",config)).json();
    mostrarData(data)
}

const postUser = async(data) => {
    config.method = "POST";
    config.body = JSON.stringify(data);
    let users = await ( await fetch("http://localhost:3000/clientes",config)).json();
}

const deleteUser = async(id)=>{
    config.method = "DELETE";
    let del = await(await fetch(`http://localhost:3000/clientes/${id}`,config)).json();
}

const putUserAll = async(data)=>{
    config.method = "PUT";
    config.body = JSON.stringify(data);
    let act = await(await fetch(`http://localhost:3000/clientes/${data.id}`,config)).json();
}

const searchUser = async(data)=>{
    config.method = "GET";
    let sea = await ( await fetch(`http://localhost:3000/clientes?q=${Object.values(data).join("")}`,config)).json();
    mostrarDataBuscado(sea)
}

function mostrarData(data) {

    tbodyClientes.innerHTML = "",

    data.forEach((element) => {
        let tr = document.createElement("tr");
        tr.id = element.id;
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.telefono}</td>
        <td>${element.fechNaci}</td>
        <td>${element.cuidadOrigen}</td>
        <td>${element.paisOrigen}</td>
        <td>${element.correo}</td>
        <td> <input type="submit" data-accion="DELETE" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
             <input type="submit" data-accion="PUT" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
        </td>
        `
        tbodyClientes.appendChild(tr)
    });
}
function mostrarDataBuscado(sea) {

    tbodyClientes.innerHTML = "",

    sea.forEach((element) => {
        let tr = document.createElement("tr");
        tr.id = element.id;
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.telefono}</td>
        <td>${element.fechNaci}</td>
        <td>${element.cuidadOrigen}</td>
        <td>${element.paisOrigen}</td>
        <td>${element.correo}</td>
        <td> <input type="submit" data-accion="DELETE" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
             <input type="submit" data-accion="PUT" value="Actualizar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
        </td>
        `
        tbodyClientes.appendChild(tr)
    });
}


tbodyClientes.addEventListener("click", (e)=>{
    let id = e.target.parentElement.parentElement.id
   if (e.target.dataset.accion =="DELETE"){
    deleteUser(id);
   }
   else if (e.target.dataset.accion =="PUT"){
    let idAct = e.target.parentElement.parentElement.childNodes[1].innerText
    let nombreAct = e.target.parentElement.parentElement.childNodes[3].innerText
    let apellidoAct = e.target.parentElement.parentElement.childNodes[5].innerText
    let telefonoAct = e.target.parentElement.parentElement.childNodes[7].innerText
    let fechNaciAct = e.target.parentElement.parentElement.childNodes[9].innerText
    let cuidadOrigenAct = e.target.parentElement.parentElement.childNodes[11].innerText
    let paisOrigenAct = e.target.parentElement.parentElement.childNodes[13].innerText
    let correoAct = e.target.parentElement.parentElement.childNodes[15].innerText

    idUser.value = id
    identificacion.value = idAct
    nombre.value = nombreAct
    apellido.value =apellidoAct
    telefono.value =telefonoAct
    fechNaci.value =fechNaciAct
    cuidadOrigen.value = cuidadOrigenAct
    paisOrigen.value = paisOrigenAct
    correo.value = correoAct

   }
})

