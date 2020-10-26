function calcularArea(){
    var retangulo = new Object();
    retangulo.base = parseFloat(prompt("Vamos calcular a área de um retâgulo!\n Por favor insira o valor da base do retângulo."));
    retangulo.altura = parseFloat(prompt("Insira o valor da altura."));
    retangulo.area = retangulo.base * retangulo.altura;
    alert("Base do retângulo: " + retangulo.base + "\nAltura do retângulo: " + retangulo.altura + "\nÁrea do retângulo: " + retangulo.area);
}