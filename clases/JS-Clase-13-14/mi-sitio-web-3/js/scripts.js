function agregarValor(elemento){
    //alert('siete');
    //console.log(elemento.target.id);
    var id = elemento.target.id;
    switch (id){
        case "borrar":
          document.calc.txt.value = '';
          break;
        case "evaluar":
            if (document.calc.txt.value !== '')
                document.calc.txt.value = eval(document.calc.txt.value);
            break;
        default:
          document.calc.txt.value += elemento.target.innerHTML;
          break;
    }
}


//Asignar la función externa
document.getElementById('borrar').onclick = agregarValor;
document.getElementById('division').onclick = agregarValor;
document.getElementById('producto').onclick = agregarValor;
document.getElementById('siete').onclick = agregarValor;
document.getElementById('ocho').onclick = agregarValor;
document.getElementById('nueve').onclick = agregarValor;
document.getElementById('resta').onclick = agregarValor;
document.getElementById('cuatro').onclick = agregarValor;
document.getElementById('cinco').onclick = agregarValor;
document.getElementById('seis').onclick = agregarValor;
document.getElementById('suma').onclick = agregarValor;
document.getElementById('tres').onclick = agregarValor;
document.getElementById('dos').onclick = agregarValor;
document.getElementById('uno').onclick = agregarValor;
document.getElementById('cero').onclick = agregarValor;
document.getElementById('doblecero').onclick = agregarValor;
document.getElementById('decimal').onclick = agregarValor;
document.getElementById('evaluar').onclick = agregarValor;