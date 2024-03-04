namespace Condicao
{
    let vida: number = 100;
    let ataque: number = 5;
    let nome: string = "Art"
    let exp: number = 0
    let lvl: number = 1
    let status: string = "Vivo"

    console.log(`O ${nome} atacou e ganhou 5xp`);
    exp = exp + 5; //exp += 5
    console.log(`O ${nome} atacou e ganhou 5xp`);
    exp = exp + 5;
    console.log(`O ${nome} atacou e ganhou 5xp`);
    exp = exp + 5;

    if(exp >5 && exp < 10){
        console.log(`O ${nome} subiu de nível! \n Foi para o nível ${lvl += 1}`);
        vida += 10;
        ataque += 1;
        console.log(`*********${nome}*********\nVida: ${vida}\nAtaque: ${ataque}\n*********************`);
    }
    else{
        console.log(`O ${nome} subiu de nível! \n Foi para o nível ${lvl += 1}`);
        vida += 20;
        ataque += 2;
        console.log(`*********${nome}*********\nVida: ${vida}\nAtaque: ${ataque}\n*********************`);
    }

    vida = 0;
    status = vida <= 0 ? `O ${nome} morreu` : `O ${nome} está vivo`;
    console.log(status)
    
    let acao = "Magia"
    switch(acao){
        case "Parado":
            console.log(`O ${nome} está parado`)
            break;
        case "Atacou":
            console.log(`O ${nome} atacou e causou ${ataque} de dano ao inímigo`)
            break;
        case "Defendeu":
            console.log(`O ${nome} defendeu o ataque inimigo`)
            break;
        case "Magia":
            console.log(`O ${nome} lançou uma magia`)
            break;
    }

    let agir: number = Math.floor(Math.random() * 3) + 1;
    switch(agir){
        case 1: console.log(`O ${nome} atacou e causou ${ataque} de dano ao inímigo`)
                break;
        case 2: console.log(`O ${nome} defendeu o ataque inimigo`)
                break;
        case 3: console.log(`O ${nome} lançou uma magia`)
                break;
        default: console.log(`O ${nome} levou dano!`)
    }
}