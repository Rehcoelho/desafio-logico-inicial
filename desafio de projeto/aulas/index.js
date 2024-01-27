// Classificação do nível de Herói 

let nomeHeroi = "Rei Arthur"
let nivelHeroi = 9.002

if(nivelHeroi >= 5.001 && nivelHeroi <= 7.000){
    console.log( " O nome do Herói é " + nomeHeroi + " Está no Nível Ouro");
}
else if (nivelHeroi >= 7.001 && nivelHeroi <= 8.000){
    console.log("O nome do Herói é " + " Está no Nível Platina")
}

else if (nivelHeroi >= 8.001 && nivelHeroi <= 9.000) {
    console.log("O nome do Herói é " + nomeHeroi + ". Está no Nível Imortal");
  }
  else if (nivelHeroi >= 9.001 && nivelHeroi <= 10.000) {
    console.log("O nome do Herói é " + nomeHeroi + ". Está no Nível Radiante");
  } 
  else {
    console.log("Nível não reconhecido");
  }
