
 function poneretiqueta(formulariocontact, titulo){
    var t1 = document.createElement("label");      
    t1.innerHTML = titulo;     
    formulariocontact.appendChild(t1);
  }

 

  function traer1 (){
    var contenido = document.querySelector("#contenido");    
    fetch("documentos/devops.txt")
    .then(res => res.text())
    .then(data =>{      
        contenido.innerHTML = data;
    });
  }
  
  function traer2 (){
    var contenido = document.querySelector("#contenido1");    
    fetch("documentos/paradigma.txt")
    .then(res => res.text())
    .then(data =>{      
        contenido.innerHTML = data;
    });
  }
  
  function traer3 (){
    var contenido = document.querySelector("#contenido2");    
    fetch("documentos/automatizacion.txt")
    .then(res => res.text())
    .then(data =>{      
        contenido.innerHTML = data;
    });
  }
  
  function traer4 (){
    var contenido = document.querySelector("#contenido3");    
    fetch("documentos/stack.txt")
    .then(res => res.text())
    .then(data =>{      
        contenido.innerHTML = data;
    });
  }

function formulario1(){
    var formulariocontact = document.getElementById("formulariocontacto");
    
    var titulo ="Nombres y apellidos: ";
    poneretiqueta(formulariocontact, titulo);
    var entrada1 = document.createElement("input");
    entrada1.placeholder = "Digite nombres y apellidos";     
    entrada1.value = "";     
    entrada1.name ="nombre";
    entrada1.type ="text";
    entrada1.id="mnombre";
    entrada1.className="formulario1";
    formulariocontact.appendChild(entrada1);

    var espacio = document.createElement("br");
    formulariocontact.appendChild(espacio);

    var titulo ="Telefono celular: ";
    poneretiqueta(formulariocontact, titulo);
    var entrada2 = document.createElement("input");
    entrada2.placeholder = "Digite numero celular";     
    entrada2.value = "";     
    entrada2.name ="celular";
    entrada2.type ="text";
    entrada2.id="mcelular";
    entrada2.className="formulario1";
    formulariocontact.appendChild(entrada2);

    var espacio = document.createElement("br");
    formulariocontact.appendChild(espacio);

    var titulo ="Correo electronico: ";
    poneretiqueta(formulariocontact, titulo);
    var entrada3 = document.createElement("input");
    entrada3.placeholder = "Digite e-mail";     
    entrada3.value = "";     
    entrada3.name ="email";
    entrada3.type ="text";
    entrada3.id="memail";
    entrada3.className="formulario1";
    formulariocontact.appendChild(entrada3);

    var espacio = document.createElement("br");
    formulariocontact.appendChild(espacio);

    var titulo ="Ciudad/Región: ";
    poneretiqueta(formulariocontact, titulo);
    var entrada4 = document.createElement("input");
    entrada4.placeholder = "Digite ciudad de residencia";     
    entrada4.value = "";     
    entrada4.name ="ciudad";
    entrada4.type ="text";
    entrada4.id="mciudad";
    entrada4.className="formulario1";
    formulariocontact.appendChild(entrada4);

    var espacio = document.createElement("br");
    formulariocontact.appendChild(espacio);

}

function carritocompras1(articulo,precio){

    var carrito = document.getElementById("carritocompras");

    var nombreart = document.createElement("h4")
    nombreart.innerHTML="Articulo: ";
    carrito.appendChild(nombreart);



    var t1 = document.createElement("label");      
    t1.innerHTML = articulo;     
    carrito.appendChild(t1);

    var precioart = document.createElement("h4")
    precioart.innerHTML="Precio: ";
    carrito.appendChild(precioart);

    var entrarprecio = document.createElement("label");      
    entrarprecio.innerHTML = precio;     
    carrito.appendChild(entrarprecio);

/*var entrada4 = document.createElement("input"); 
    entrada4.value = precio;     
    entrada4.name ="precio";
    entrada4.type ="text";
    entrada4.id="mprecio";
    carrito.appendChild(entrada4);*/
   
}








function resetcolor(){
   var elem = document.getElementById("reset");
   console.log();
   var botones = document.getElementsByTagName("button");
botones.background=('white')
}


function cambiarcolorhead1(newColor){
    var elem = document.getElementById("head1");
        elem.style.background= newColor;
}

function cambiarcolorhead2(newColor){
    var elem = document.getElementById("head2");
        elem.style.background= newColor;
}
function cambiarcolorhead3(newColor){
    var elem = document.getElementById("head3");
        elem.style.background= newColor;
}
function cambiarcolorhead4(newColor){
    var elem = document.getElementById("head4");
        elem.style.background= newColor;
}

// ------       ------------      -----------      ------------

function cambiarcolorheader1(newColor){
    var elem = document.getElementById("header1");
        elem.style.background= newColor;
}
function cambiarcolorheader2(newColor){
    var elem = document.getElementById("header2");
        elem.style.background= newColor;
}
function cambiarcolorheader3(newColor){
    var elem = document.getElementById("header3");
        elem.style.background= newColor;
}
function cambiarcolorheader4(newColor){
    var elem = document.getElementById("header4");
        elem.style.background= newColor;
}
function cambiarcolorheader5(newColor){
    var elem = document.getElementById("header5");
        elem.style.background= newColor;
}
function cambiarcolorheader6(newColor){
    var elem = document.getElementById("header6");
        elem.style.background= newColor;
}

 // ------       ------------      -----------      ------------
 
function cambiarcolorhtml2(newColor){
    var elem = document.getElementById("html2");
        elem.style.background= newColor;
}
function cambiarcolorhtml3(newColor){
    var elem = document.getElementById("html3");
        elem.style.background= newColor;
}
function cambiarcolorhtml4(newColor){
    var elem = document.getElementById("html4");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------

 function cambiarcolorlang2(newColor){
    var elem = document.getElementById("lang2");
        elem.style.background= newColor;
}
function cambiarcolorlang3(newColor){
    var elem = document.getElementById("lang3");
        elem.style.background= newColor;
}
function cambiarcolorlang4(newColor){
    var elem = document.getElementById("lang4");
        elem.style.background= newColor;
        
}
 // ------       ------------      -----------      ------------
 function cambiarcolorbody1(newColor){
    var elem = document.getElementById("body1");
        elem.style.background= newColor;
}
function cambiarcolorbody2(newColor){
    var elem = document.getElementById("body2");
        elem.style.background= newColor;
}
function cambiarcolorbody3(newColor){
    var elem = document.getElementById("body3");
        elem.style.background= newColor;
}
function cambiarcolorbody4(newColor){
    var elem = document.getElementById("body4");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------

 function cambiarcolornav2(newColor){
    var elem = document.getElementById("nav2");
        elem.style.background= newColor;
}
function cambiarcolornav3(newColor){
    var elem = document.getElementById("nav3");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------
 function cambiarcolorlista2(newColor){
    var elem = document.getElementById("lista2");
        elem.style.background= newColor;
}
function cambiarcolorlista3(newColor){
    var elem = document.getElementById("lista3");
        elem.style.background= newColor;
}
function cambiarcolorlista4(newColor){
    var elem = document.getElementById("lista4");
        elem.style.background= newColor;
}
function cambiarcolorlista5(newColor){
    var elem = document.getElementById("lista5");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------

function cambiarcolorarticle2(newColor){
    var elem = document.getElementById("article2");
        elem.style.background= newColor;
}
function cambiarcolorarticle3(newColor){
    var elem = document.getElementById("article3");
        elem.style.background= newColor;
}
function cambiarcolorarticle4(newColor){
    var elem = document.getElementById("article4");
        elem.style.background= newColor;
}
function cambiarcolorarticle5(newColor){
    var elem = document.getElementById("article5");
        elem.style.background= newColor;
}
function cambiarcolorarticle6(newColor){
    var elem = document.getElementById("article6");
        elem.style.background= newColor;
}
function cambiarcolorarticle7(newColor){
    var elem = document.getElementById("article7");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------

 function cambiarcolorsection2(newColor){
    var elem = document.getElementById("section2");
        elem.style.background= newColor;
}
function cambiarcolorsection3(newColor){
    var elem = document.getElementById("section3");
        elem.style.background= newColor;
}
function cambiarcolorsection4(newColor){
    var elem = document.getElementById("section4");
        elem.style.background= newColor;
}
function cambiarcolorsection5(newColor){
    var elem = document.getElementById("section5");
        elem.style.background= newColor;
}
function cambiarcolorsection6(newColor){
    var elem = document.getElementById("section6");
        elem.style.background= newColor;
}
function cambiarcolorsection7(newColor){
    var elem = document.getElementById("section7");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------
 function cambiarcoloraside1(newColor){
    var elem = document.getElementById("aside1");
        elem.style.background= newColor;
}
function cambiarcoloraside2(newColor){
    var elem = document.getElementById("aside2");
        elem.style.background= newColor;
}
function cambiarcoloraside3(newColor){
    var elem = document.getElementById("aside3");
        elem.style.background= newColor;
}
function cambiarcoloraside4(newColor){
    var elem = document.getElementById("aside4");
        elem.style.background= newColor;
}
function cambiarcoloraside5(newColor){
    var elem = document.getElementById("aside5");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------
 function cambiarcolormargin1(newColor){
    var elem = document.getElementById("margin1");
        elem.style.background= newColor;
}
function cambiarcolormargin2(newColor){
    var elem = document.getElementById("margin2");
        elem.style.background= newColor;
}
function cambiarcolormargin3(newColor){
    var elem = document.getElementById("margin3");
        elem.style.background= newColor;
}
function cambiarcolormargin4(newColor){
    var elem = document.getElementById("margin4");
        elem.style.background= newColor;
}
function cambiarcolormargin5(newColor){
    var elem = document.getElementById("margin5");
        elem.style.background= newColor;
}
function cambiarcolormargin6(newColor){
    var elem = document.getElementById("margin6");
        elem.style.background= newColor;
}

 // ------       ------------      -----------      ------------
 function cambiarcolorpadding1(newColor){
    var elem = document.getElementById("padding1");
        elem.style.background= newColor;
}
function cambiarcolorpadding2(newColor){
    var elem = document.getElementById("padding2");
        elem.style.background= newColor;
}
function cambiarcolorpadding3(newColor){
    var elem = document.getElementById("padding3");
        elem.style.background= newColor;
}
function cambiarcolorpadding4(newColor){
    var elem = document.getElementById("padding4");
        elem.style.background= newColor;
}
function cambiarcolorpadding5(newColor){
    var elem = document.getElementById("padding5");
        elem.style.background= newColor;
}
function cambiarcolorpadding6(newColor){
    var elem = document.getElementById("padding6");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------
 function cambiarcolorbackground1(newColor){
    var elem = document.getElementById("background1");
        elem.style.background= newColor;
}
function cambiarcolorbackground2(newColor){
    var elem = document.getElementById("background2");
        elem.style.background= newColor;
}
function cambiarcolorbackground3(newColor){
    var elem = document.getElementById("background3");
        elem.style.background= newColor;
}
function cambiarcolorbackground4(newColor){
    var elem = document.getElementById("background4");
        elem.style.background= newColor;
}
function cambiarcolorbackground5(newColor){
    var elem = document.getElementById("background5");
        elem.style.background= newColor;
}
function cambiarcolorbackground6(newColor){
    var elem = document.getElementById("background6");
        elem.style.background= newColor;
}
function cambiarcolorbackground7(newColor){
    var elem = document.getElementById("background7");
        elem.style.background= newColor;
}
function cambiarcolorbackground8(newColor){
    var elem = document.getElementById("background8");
        elem.style.background= newColor;
}
function cambiarcolorbackground9(newColor){
    var elem = document.getElementById("background9");
        elem.style.background= newColor;
}
function cambiarcolorbackground10(newColor){
    var elem = document.getElementById("background10");
        elem.style.background= newColor;
}

 // ------       ------------      -----------      ------------
 function cambiarcolorstyle1(newColor){
    var elem = document.getElementById("style1");
        elem.style.background= newColor;
}
function cambiarcolorstyle2(newColor){
    var elem = document.getElementById("style2");
        elem.style.background= newColor;
}
function cambiarcolorstyle3(newColor){
    var elem = document.getElementById("style3");
        elem.style.background= newColor;
}
function cambiarcolorstyle4(newColor){
    var elem = document.getElementById("style4");
        elem.style.background= newColor;
}
function cambiarcolorstyle5(newColor){
    var elem = document.getElementById("style5");
        elem.style.background= newColor;
}
 // ------       ------------      -----------      ------------
 function cambiarcolorprogramacion1(newColor){
    var elem = document.getElementById("programacion1");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion2(newColor){
    var elem = document.getElementById("programacion2");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion3(newColor){
    var elem = document.getElementById("programacion3");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion4(newColor){
    var elem = document.getElementById("programacion4");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion5(newColor){
    var elem = document.getElementById("programacion5");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion6(newColor){
    var elem = document.getElementById("programacion6");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion7(newColor){
    var elem = document.getElementById("programacion7");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion8(newColor){
    var elem = document.getElementById("programacion8");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion9(newColor){
    var elem = document.getElementById("programacion9");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion10(newColor){
    var elem = document.getElementById("programacion10");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion11(newColor){
    var elem = document.getElementById("programacion11");
        elem.style.background= newColor;
}
function cambiarcolorprogramacion12(newColor){
    var elem = document.getElementById("programacion12");
        elem.style.background= newColor;
}
// ------       ------------      -----------      ------------
function cambiarcolorweb1(newColor){
    var elem = document.getElementById("web1");
        elem.style.background= newColor;
}
function cambiarcolorweb2(newColor){
    var elem = document.getElementById("web2");
        elem.style.background= newColor;
}
function cambiarcolorweb3(newColor){
    var elem = document.getElementById("web3");
        elem.style.background= newColor;
}
// ------       ------------      -----------      ------------
function cambiarcolorclass1(newColor){
    var elem = document.getElementById("class1");
        elem.style.background= newColor;
}
function cambiarcolorclass2(newColor){
    var elem = document.getElementById("class2");
        elem.style.background= newColor;
}
function cambiarcolorclass3(newColor){
    var elem = document.getElementById("class3");
        elem.style.background= newColor;
}
function cambiarcolorclass4(newColor){
    var elem = document.getElementById("class4");
        elem.style.background= newColor;
}
function cambiarcolorclass5(newColor){
    var elem = document.getElementById("class5");
        elem.style.background= newColor;
}
// ------       ------------      -----------      ------------

function cambiarcolorcomputacion1(newColor){
    var elem = document.getElementById("computacion1");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion2(newColor){
    var elem = document.getElementById("computacion2");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion3(newColor){
    var elem = document.getElementById("computacion3");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion4(newColor){
    var elem = document.getElementById("computacion4");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion5(newColor){
    var elem = document.getElementById("computacion5");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion6(newColor){
    var elem = document.getElementById("computacion6");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion7(newColor){
    var elem = document.getElementById("computacion7");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion8(newColor){
    var elem = document.getElementById("computacion8");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion9(newColor){
    var elem = document.getElementById("computacion9");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion10(newColor){
    var elem = document.getElementById("computacion10");
        elem.style.background= newColor;
}
function cambiarcolorcomputacion11(newColor){
    var elem = document.getElementById("computacion11");
        elem.style.background= newColor;
}

// ------       ------------      -----------      ------------