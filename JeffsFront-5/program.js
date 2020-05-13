$(document).ready(function(){
    // GENERAL: Scroll arriba de la web
    $('.goTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // INDEX: Reset del texto textarea
    $("#botonEnviar").click(function(){
        alert ("este mensaje contiene palabras ofensivas");
        $('#comentario').val('');
    }); 

    // PROPOSITOS: Signo zodiacal
    $("#btnSigno").click(function(){
        var nombre = document.querySelector("#signo");
        
        switch (nombre.value) {
            case "enero": alert ("Eres del signo Capricornio");break;
            case "febrero": alert ("Eres del signo Acuario");break;
            case "marzo": alert ("Eres del signo Afrodita");break;
            case "abril": alert ("Eres del signo Aries");break;
            case "mayo": alert ("Eres del signo Tauro");break;
            case "junio": alert ("Eres del signo Geminis");break;
            case "julio": alert ("Eres del signo Cancer");break;
            case "agosto": alert ("Eres del signo Leo");break;
            case "septiembre": alert ("Eres del signo Virgo");break;
            case "octubre": alert ("Eres del signo Libra");break;
            case "noviembre": alert ("Eres del signo Escorpion");break;
            case "diciembre": alert ("Eres del signo Sagitario");break;
            default: alert("el dato no es valido");break;         
        }   $('#signo').val('');
            return false;
    });

    // LOGROS: Mostrar cajas de informacion
    $('#mostrar').show();
    $('#ocultar').hide();
    $('#coment').hide();

    var mostrar = $('#mostrar').click(function(){
        mostrar.hide();
        $('#ocultar').show();
        $('#coment').show('fast');
        return false;
    });

    var ocultar = $('#ocultar').click(function(){
        ocultar.hide();
        $('#mostrar').show();
        $('#coment').hide('fast');
        return false;
    });

    // PROYECTOS: Validacion de formulario
    $("#botonForm").click(function() {
        var nameUser    = document.querySelector("#usuario");
        var correo      = document.querySelector("#correo");
        var clave       = document.querySelector("#clave");

        if (nameUser.value == null || nameUser.value == "") {
            alert ("Debes ingresar un nombre valido");
        } else if (correo.value == null || correo.value == "") {
            alert ("Debes Ingresar un correo valido");
        } else if (clave.value == null || clave.value == "") {
            alert ("Debes Ingresar una clave valida");
        } else {
            alert ("te has registrado correctamente");
        } return false;
    });
});
