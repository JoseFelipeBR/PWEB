function verificaMaior() {
    var r = 0;
    for(c=0;c<3;c++){
        if(c == 0){
            var num1 = parseFloat(prompt("Insira o "+ (c+1)+ "º" +" número: "));
            maior = num1;
        }
        if(c >= 1){
            num2 = parseFloat(prompt("Insira o "+ (c+1)+ "º" +" número: "));
            if(maior == num2){
                r = r+1;
            }
            else if(maior < num2){
                maior = num2;
            }
            else{
                maior = maior;
            }
        }
    }
    
    if(r == 1){
        alert("O maior número é " + maior + " e é repetido!");
    }
    else if(r == 2){
        alert("Todos os números são repetidos");
    }
    else{
        alert("O maior número é " + maior)
    }
    
}