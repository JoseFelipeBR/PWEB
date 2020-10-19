function registraAlunos(){
    //Registrando o primeiro aluno
    var aluno1 = new Object();
    aluno1.ra = "0030481821019";
    aluno1.nome = "José Felipe Batistela Rosa";
    
    var aluno2 ={
        ra: "0030481821088",
        nome: "Nilsom Sampaio de Almeida"
    };
    
    var aluno3 = {};
    aluno3.ra = "0030481821099";
    aluno3.nome = "Pedro Henrique Gonsalves Pereira";
        
    alert("nome do 1º" + " aluno: " + aluno1.nome + "  RA: " + aluno1.ra);
    alert("nome do 2º" + " aluno: " + aluno2.nome + "  RA: " + aluno2.ra);
    alert("nome do 3º" + " aluno: " + aluno3.nome + "  RA: " + aluno3.ra);
}
