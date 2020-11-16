function limpar(){
    //maneira diferente para limpar campos
    document.getElementById("nome").value = '';
    document.getElementById('email').value = '';
    document.getElementById('texto').value = '';
}

function validar(){
    nome = document.getElementById("nome").value;
    email = document.getElementById('email').value;
    coment = document.formulario1.elements[2].value;
    if(nome.length < 10){
        alert("Por favor insira o nome completo!");
        document.forms.formulario1.elements[0].focus();
        return false;
    }
    else if(email.search("@") == -1 || email.indexOf(".") == -1){
        alert("Email não contêm '@' ou '.'!");
        document.forms.formulario1.elements[1].focus();
        return false;
    }
    else if(coment.length < 20){
        alert("Por favor insira um comentário com pelo menos 20 caracteres!");
        document.forms.formulario1.elements[2].focus();
        return false;
    }
    if(document.getElementById("rdbtnSim").checked == true){
        alert("Que  bom que você voltou a visitar esta página!");
    }
    else if(document.getElementById("rdbtnNao").checked == true){
        alert("Volte sempre à está página!");
    }
    return true;

}