namespace vetores
{
    let numeros: number [] = [1, 2, 3, 4, 5];
    let frutas: Array<string> = ["Morango", "Laranja", "Uva"];

    type livro = {
        titulo: string;
        autor: string
        ano: number;
    }

    let livros: livro[] = [
        {
            titulo: "Senhor dos Aneis",
            autor: "JJ R Jubileu",
            ano: 1954,
        },

        {
            titulo: "Herry Poter",
            autor: "J K RowLing",
            ano: 1995
        }
    ]

    console.log(numeros[0]);
    console.log(numeros[1]);
    console.log(numeros[2]);

    for(let i: number = 0; i < numeros.length - 1; i++){
        console.log(numeros[i])
    }

    //Adicionar no final do array
    numeros.push(6);

    //Remover o último elemento do array
    numeros.pop();

    //Adicionar no começo do array
    numeros.unshift(itens:0);

    //Remover o primeiro elemento do array
    numeros.shift();

    livros.forEach(livro: livro => {
        console.log(`${livro.titulo} \n${livro.autor} \n${livro.ano}`)
    })

    let quadrados: number[] = numeros.map(function (num: number){
        return num * num
    })

    console.log(quadrados)

    let pares: number[] = numeros.filter(function (num: number): boolean{
        return num % 2 == 0;
    })

    let soma: number = numeros.reduce(function (total: number, num: number){
        return total + num
    })
}