
let baralho = [];

async function puxarCarta() {
    document.getElementById("nome-carta").innerText = "Sorteando...";


    if (baralho.length === 0) {
 
        let resposta = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
        let dados = await resposta.json();
        
      
        baralho = dados.data; 
        console.log("Baralho carregado com sucesso! Total de cartas: " + baralho.length);
    }


    let numeroSorteado = Math.floor(Math.random() * baralho.length);
    
 
    let carta = baralho[numeroSorteado];


    let linkDaImagem = carta.card_images[0].image_url;
    document.getElementById("imagem-carta").src = linkDaImagem;

    document.getElementById("nome-carta").innerText = carta.name;
}