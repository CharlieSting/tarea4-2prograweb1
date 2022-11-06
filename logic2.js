var listaGeneral = [];
if (localStorage.getItem("articulos")) {
    listaGeneral = JSON.parse(localStorage.articulos);
}

function  guardar(event){
    event.preventDefault();
    registro();
    llenar_tabla();
    
}
 
function registro() {
    var formulario = document.forms["From_product"];
    var sku = formulario["productocode"].value;
    var nombre = formulario["nombreP"].value;
    var precio = formulario["precio"].value;
    var Foto = formulario["foto"].value;
    var descripcion = formulario["descripcion"].value;

    var articulos = [sku, nombre, precio, Foto, descripcion];
        
    listaGeneral.push(articulos);
    localStorage.setItem("articulos", JSON.stringify(listaGeneral));
}

function llenar_tabla() {
    

    var cuerpo = document.getElementById("cuerpo_tabla");
    cuerpo.innerHTML = "";
    listaGeneral.forEach(p => {
        var fila = document.createElement("tr");
    
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celdafoto = document.createElement("td");
        var celda5 = document.createElement("td");

        celda1.innerHTML = p[0];

        celda2.innerHTML = p[1];

        celda3.innerHTML = p[2];

        celdafoto.innerHTML =  ' <img src="'+p[3]+'" style="height: 12px ;width: 12px" >'

        celda5.innerHTML = p[4];

        fila.appendChild(celda1);
        fila.appendChild(celda2);

        fila.appendChild(celda3);

        fila.appendChild(celdafoto);
        fila.appendChild(celda5);

        cuerpo.appendChild(fila);

        //celdafoto.innerHTML= ' <img src="Foto[3]" >';

    });
}