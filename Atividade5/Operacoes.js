function calculaMedia() {
    var nome = prompt("Insira o seu nome: ");
    var nota1 = parseFloat(prompt("Insira a nota 1: "));
    var nota2 = parseFloat(prompt("Insira a nota 2: "));
    var nota3= parseFloat(prompt("Insira a nota 3: "));
    media = (nota1 + nota2 + nota3) /3;
    alert("Nome: " + nome + "\nMédia: " + media);
}
