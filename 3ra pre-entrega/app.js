const formulario =document.querySelector (".formulario")

const terminar = (e) => {
  e.preventDefault();
  let cliente = e.target.cliente.value;
  let marcas = e.target.marcas.value;
  let cc = e.target.cc.value;
  let start =e.target.start.value;




 // let cliente = prompt ("Ingrese su nombre")
console.log (`El cliente se llama ${cliente} ` )

// alert (`Bienvenido ${cliente} a JaponMotos`)

let entrada = (document.querySelector(".htmlcliente").textContent=(`Bienvenido ${cliente}`) )


//let start = prompt("¿Querés ver las motos que ofrecemos?").toLowerCase()

if (start==="si") {
  // let marcas = prompt(`elegí tu marca favorita
  // yamaha
  // honda
  // kawasaki
  // suzuki`);
  
  function modelos(cilindrada) {
      switch (marcas) {
          case "0":
            console.log(`${cliente} eligió a yamaha`)
            // alert(`los modelos que de yamaha son 
            // modelo 1 
            // modelo 2 
            // modelo 3`)
            break;
          case "1":
            console.log(`${cliente} eligió a honda`)
            // alert(`los modelos que de honda son 
            // modelo 1 
            // modelo 2 
            // modelo 3`)
            break;
          case "2":
            console.log(`${cliente} eligió a kawasaki`)
            // alert(`los modelos que de kawasaki son 
            // modelo 1 
            // modelo 2 
            // modelo 3`)
            case "3":
                console.log(`${cliente} eligió a suzuki`)
                // alert(`los modelos que de suzuki son 
                // modelo 1 
                // modelo 2 
                // modelo 3`)
            break;
          default:
            console.log("No trabajamos con esa marca, seleccione una de las que tenemos");
            break;
        }
        cilindrada();

        let arraymarcas =["yamaha", "honda", "kawasaki", "suzuki"]
    let marcashtml = (document.querySelector(".htmlmarca").textContent=("Usted seleccionó la marca " + arraymarcas[marcas]) )
        
  }
  // let cc = prompt (`¿que cilindrada es tu preferida?
  // 1 - 150cc
  // 2 - 300cc
  // 3 - 600cc
  // 4 - 1000cc`)
  function cilindrada() {
    switch (cc) {
      case "0":
        console.log(`a ${cliente} eligió a ${cc}`)
        // alert(`Las motos de la marca ${marcas} que poseen 150cc son:
        // moto1
        // moto2
        // moto3
        // `)
        break; 
      case "1":
        console.log(`a ${cliente} eligió a ${cc}`)
        // alert(`Las motos de la marca ${marcas} que poseen 300cc son:
        // moto1
        // moto2
        // moto3
        // `)
        break;
      case "2":
        console.log(`${cliente} eligió a ${cc} `)
        // alert(`Las motos de la marca ${marcas} que poseen 600cc son:
        // moto1
        // moto2
        // moto3
        // `)
      case "3":
        console.log(`${cliente} eligió a ${cc}`)
        // alert(`Las motos de la marca ${marcas} que poseen 1000cc son:
        // moto1
        // moto2
        // moto3
        // `)
      default:
        console.log("Seleccione una cilindrada correcta");
        break;
    }
    let arraycc = ["150","300","600","1000"]
    let htmlcc = (document.querySelector(".htmlcc").textContent=("Usted seleccionó una moto de cilindrada " + arraycc[cc]) + "cc" )

    
    
  }
  modelos(cilindrada);

  let htmlstatus = (document.querySelector(".htmlstatus").textContent=(`Estimado ${cliente} nos encontramos buscando la mejor moto con los datos seleccionados` ));
  Swal.fire(
    'Listo',
    'Se archivó la moto elegida',
    'success'
  )
  
  


} else {
  let htmlstatus = (document.querySelector(".htmlstatus").textContent=("¡Nos encontramos en la calle 111 por si querés visitar el local físico, hasta luego!") )
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salió mal',
  
  })
  
}

function Nmodelo (modelo, marca , cilindrada , stock) {

  this.modelo = modelo;
  this.marca = marca;
  this.cilindrada = cilindrada;
  this.stock = stock;
}

const moto1 = new Nmodelo ("marca 1", "moto 1", 150, true);
const moto2 = new Nmodelo ("marca 2", "moto 2", 300, true);
const moto3 = new Nmodelo ("marca 3", "moto 3", 600, true);
const moto4 = new Nmodelo ("marca 4", "moto 4", 1000, true);
}



formulario.addEventListener("submit", terminar)

const botonColorMode = document.querySelector("#modo");
const body = document.body;
let moscuro = localStorage.getItem("Modo");
function activarModo() {
    body.classList.add("oscuro");
    localStorage.setItem("Modo", "activado");
}
function desactivarModo() {
    body.classList.remove("oscuro");
    localStorage.setItem("Modo", "desactivado");
}
if (moscuro === "activado") {
    activarModo();
} else {
    desactivarModo();
}
botonColorMode.addEventListener("click", () => {
    moscuro = localStorage.getItem("Modo");

    if (moscuro === "activado") {
        desactivarModo();
    } else {
        activarModo();
    }
})

const list = document.querySelector("#list");

fetch("./data.json")
.then((respuesta) => respuesta.json())
.then((data) => {
  data.forEach((productos) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3> Moto de marca ${productos.marca}</h3>
      <p>con una potencia de  ${productos.cc} cc</p>
      <p>moto actualmente ${productos.stock}</p>
      `;
    list.append(li);
  });
}); 



 










