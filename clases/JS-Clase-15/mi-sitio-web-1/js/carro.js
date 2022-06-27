
let etiqueta = document.getElementById('etiqueta');

let carritodecompra = document.getElementById('carrito-de-compra');

/* Traigo  los datos del almacen loca */
let cesta = JSON.parse(localStorage.getItem("datos")) || [];

//console.log(cesta);

/* generar funcion del competar div */
let generarItemsCarro = () =>{
    if (cesta.length !== 0){
        
        return (carritodecompra.innerHTML = cesta.map((x)=>{
            let { id, item } = x;
            let buscar = itemsCompraDatos.find((y)=>y.id === id) || [];
            return `
                <div class="item-carro">
                    <img width="100" src=${buscar.img} alt="">
                    <div class="detalles">
                        <div class="titulo-precio-x">
                            <h4 class="titulo-precio">
                            <p>${buscar.nombre}</p>
                            <p class="precio-item-carro">$ ${buscar.precio}</p>
                            </h4>
                            <i onclick="removerItem(${id})" class="bi bi-x-lg"></i>
                        </div>
                        <div class="botones">
                            <i onclick="decrementar(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="cantidad">
                            ${item}
                            </div>
                            <i onclick="incrementar(${id})" class="bi bi-plus-lg"></i>
                        </div>
                        <h3>$ ${item * buscar.precio}</h3>
                    </div>
                </div>

            `;
        }
        
        ).join(""));
        //console.log("La cesta no esta vacia");
    }
    else{
        //console.log("La cesta esta vacia");
        carritodecompra.innerHTML = '';
        etiqueta.innerHTML = `
        <h2>El carrito esta vacío</h2>
        <a href="index.html"><button class="homeBTN">Volver al inicio</button></a>
        `;
    }
};

generarItemsCarro();

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
    generarItemsCarro();

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

  let removerItem = (id) => {
    let itemSeleccionado = id;
    //console.log(itemSeleccionado.id);

    cesta = cesta.filter((x)=>x.id !== itemSeleccionado.id);
    generarItemsCarro();
    localStorage.setItem("datos", JSON.stringify(cesta));
    calculo();
  };

let importeTotal = (x) =>{
    if (cesta.length !== 0){
        let importe = cesta.map((x)=>{
            let {id, item} = x;
            let buscar = itemsCompraDatos.find((y)=>y.id === id) || [];
            return item * buscar.precio;
        }).reduce((x,y)=>x+y,0);
        etiqueta.innerHTML = `
        <h2>Importe total : ${importe} </h2>
        <button class="checkout">Finalizar compra</button>
        <button onclick="borrarCarro()" class="eliminarTodos">Borrar todo</button>
        `;
    }
    else return;
};

importeTotal();

let borrarCarro = ()=>{
    cesta = [];
    generarItemsCarro();
    localStorage.setItem("datos", JSON.stringify(cesta));
    calculo();
}