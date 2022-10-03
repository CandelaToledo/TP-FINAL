alert("Holaaa")
function otrapagina(){
    var confirmar=confirmar("Estás seguro que desea salir del sitio?")
    if(confirmar)
    {
        location.href=("https://www.google.com/");}
    }


function verificar(){
    var anios= document.getElementByld("Edad"). value;
    var persona=document.getElementByld("Nombre").value 
    parseInt(anios);
    if(anios){
        alert("Eres mayor edad");
    
    }
    else{
        alert("Eres menor de edad, pero puedes ingresar");
    }

    function continuar(){
        location.href=("inicio.html");
    }
}