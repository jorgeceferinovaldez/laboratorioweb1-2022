let compra = document.getElementById("compra");
console.log(compra);

/* Para evitar usar base de datos */
let itemsCompraDatos = [
{
    id: "kjde",
    nombre: "Placa de Video Nvidia",
    precio: 45000,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "img/gpu.jpg"
},
{
    id: "lokf",
    nombre: "Mouse Gamer",
    precio: 7500,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "img/mouse_gamer.jpg"
},
{
    id: "bvxcs",
    nombre: "Notebook",
    precio: 237500,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "img/notebook.jpg"
},
{
    id: "pvqws",
    nombre: "Teclado Gamer",
    precio: 23000,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    img: "img/teclado.jpg"
}];

let cesta = [];
/* let cesta = localStorage.getItem("datos"); */

/* Generar una funcion que genere la compra */
/* let generarCompra = () => {
    return (compra.innerHTML= `
    <div class="item">
        <img width="220" src="img/gpu.jpg" alt="GPU">
        <div class="detalles">
          <h3>Placa de video</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div class="precioCantidad">
            <h2>$75000</h2>
            <div class="botones">
              <i class="bi bi-dash-lg"></i>
              <div id="cantidad">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `);
}; */

/* Mapearemos el arreglo de objetos */
let generarCompra = () => {
    return (compra.innerHTML = itemsCompraDatos.map((x)=>{
        let {id, nombre, precio, desc, img } = x;
        return `
        <div id='${id}' class="item">
        <img width="220" src="${img}" alt="GPU">
        <div class="detalles">
          <h3>${nombre}</h3>
          <p>${desc}</p>
          <div class="precioCantidad">
            <h2>${precio}</h2>
            <div class="botones">
              <i class="bi bi-dash-lg"></i>
              <div id=${id} class="cantidad">0</div>
              <i onclick="incrementar(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`
    }).join("")
    )};

generarCompra();

/* incremento */
let incrementar = (id) => {
    let itemSeleccionado = id;
    let buscar = cesta.find((x) => x.id === itemSeleccionado);
    //console.log(buscar);
    
    if (buscar === undefined){
        cesta.push({
            id: itemSeleccionado.id,
            item: 1,
        }); 
    } 
    else{
        buscar.item += 1;
    };

    console.log(cesta);
}