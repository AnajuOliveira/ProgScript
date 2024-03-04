namespace HelloWorld
{
    //escreva
    console.log("Olá Mundo!!");

    //var = variável pública
    //let = variável privada
    //const = constante
    var status: string = "Atacou";
    let qtd: number = 5;

    console.log(`O boss ${status} ${qtd} vezes`)

    let vidaHeroi: number = 100;

    console.log(`O Herói ficou com ${vidaHeroi - (qtd * 2)} de vida`)
}