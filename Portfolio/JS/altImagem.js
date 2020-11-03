function alternarImagem(imagem){

    if(imagem.id == "b1"){
        imagem.src = './Fotos/grupop.jpg';
    }
    if(imagem.id == "efp"){
        imagem.src = './Fotos/etec2.jpg';
    }
    if(imagem.id == "fs"){
        imagem.src = './Fotos/fatec2.png';
    }
    if(imagem.id == "slp"){
        imagem.src = './Fotos/senai2.jpg';
    }
}
function restaurar(imagem){
    if(imagem.id == "b1"){
        imagem.src = './Fotos/boituva.jpg';
    }
    if(imagem.id == "efp"){
        imagem.src = './Fotos/etec.jpg';
    }
    if(imagem.id == "fs"){
        imagem.src = './Fotos/fatec.jpg';
    }
    if(imagem.id == "slp"){
        imagem.src = './Fotos/senai.jpg';
    }
}