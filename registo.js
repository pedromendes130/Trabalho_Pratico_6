function Validar() {
    //Recordamos que cada uno de los espacios tiene distintas normativas, por ejemplo, el número de telf y el correo 
    //no tienen que cumplir las mismas reglas
    //LLamamos a las variables para que la comparativa sea más sencilla
    var nome = document.getElementById("txt_nome").value;
    var apelido = document.getElementById("txt_apelido").value;
    var cidade = document.getElementById("txt_cidade").value;
    var num = document.getElementById("txt_telf").value;
    var email = document.getElementById("txt_email").value;
    var password = document.getElementById("txt_password").value;
    var password_2 = document.getElementById("txt_password_2").value;

    var expresion = /\w+@\w+\.+[a-z]{2,3}/; 
    //Expressao regular de um email, nome@dominio.url.

    if(nome == "" || apelido == "" || cidade == ""){
        //Verificacao se os campos estao vazios
        alert("Complete todos os espaços.");
    } else if(!expresion.test(email)){
        //verifica a expressao do email
         alert("Endereço de email errado.");
    } else if(password != password_2){
         alert("As senhas não coincidem.");
    } else{
        obj.registo.push({nome, apelido, cidade, num, email, password});
        alert("Obrigado por se registar, agora pode fazer login."); 
        location.href = "inicio.html";
    }
    
    
}


function Limpar(){
    var limpeza = "";
    document.getElementById("txt_nome").value = limpeza;
    document.getElementById("txt_apelido").value = limpeza;
    document.getElementById("txt_cidade").value = limpeza;
    document.getElementById("txt_telf").value = limpeza;
    document.getElementById("txt_email").value = limpeza;
    document.getElementById("txt_password").value = limpeza;
    document.getElementById("txt_password_2").value = limpeza;
}

function Numeros(evt) {
    //Funcao que apenas permite o input de numeros
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

function Letras(evt) {
    //Funcao que permite apenas o input de letras
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /^[a-zA-Z Á á É é Í í Ó ó Ú ú Â â Ê ê Î î Ô ô Û û Ã ã Õ õ ç Ç]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}