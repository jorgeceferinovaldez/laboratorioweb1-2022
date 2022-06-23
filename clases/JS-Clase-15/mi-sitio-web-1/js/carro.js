
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
                </div>
            `;
        }
        
        ).join(""))

        //console.log("La cesta no esta vacia");
        
    }
    else{
        console.log("La cesta esta vacia");
    }
};

generarItemsCarro();