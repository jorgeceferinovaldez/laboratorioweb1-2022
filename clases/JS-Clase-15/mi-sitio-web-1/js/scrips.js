let compra = document.getElementById("compra");
//console.log(compra);


 //let cesta = []; 
let cesta = JSON.parse(localStorage.getItem("datos")) || [];


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
        let buscar = cesta.find((x)=>x.id === id) || [];
        return `
        <div id=id-producto-${id} class="item">
        <img width="220" src="${x.img}" alt="GPU">
        <div class="detalles">
          <h3>${nombre}</h3>
          <p>${desc}</p>
          <div class="precioCantidad">
            <h2>${precio}</h2>
            <div class="botones">
              <i onclick="decrementar(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="cantidad">
              ${buscar.item === undefined? 0: buscar.item}
              </div>
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
    //console.log(itemSeleccionado.id);
    let buscar = cesta.find((x)=> x.id === itemSeleccionado.id);

    if (buscar === undefined){
      cesta.push({
        id: itemSeleccionado.id,
        item: 1,
      }); 
    }
    else{
      buscar.item += 1; //sumo uno al item del id ese
    }

    //console.log(cesta);

    //actualizamos la cantidad en el html
    actualizar(itemSeleccionado.id);

    localStorage.setItem("datos", JSON.stringify(cesta));

};


let decrementar = (id) => { 
    let itemSeleccionado = id;
    //console.log(itemSeleccionado.id);
    let buscar = cesta.find((x) => x.id === itemSeleccionado.id);

    if (buscar === undefined) return;
    else if (buscar.item === 0) return;
    else{
      buscar.item -= 1;
    };

    actualizar(itemSeleccionado.id);

    /* Para eliminar los elementos que tienen item=0 */
    cesta = cesta.filter((x) => x.item !== 0);

    localStorage.setItem("datos", JSON.stringify(cesta));
};

/* Actualizamos la cantidad del articulo si agregamos o sacamos */
let actualizar = (id) => {
  let buscar = cesta.find((x)=>x.id == id);
  document.getElementById(id).innerHTML = buscar.item;

  calculo();
};

/* Actualizamos la informacion del carrito */
let calculo = () => {
  let iconoCarrito = document.getElementById("carritoCantidad");
  iconoCarrito.innerHTML = cesta.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculo();