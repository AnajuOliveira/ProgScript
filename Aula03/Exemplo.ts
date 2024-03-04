//laçoes de repetição
namespace repeticao
{
    let life: number = 100;
    let atkBoss: number = 5;
    let atkHero: number = 2;
    let lifeBoss: number = 1000;
    
    while (life != 0)
    {
        console.log("O Boss atacou o Heroi!")
        life -= atkBoss;
        if (life <= 0)
        {
            break;
        }
    }

    do {
        console.log("O herói atacou o Boss!")
        lifeBoss -= atkHero
    } while (lifeBoss >= 0);

    do {
        console.log("O herói se curou")
        life += 20; 
    } while (life <=50);

    for(let i: number = 0; i <= 10; i ++)
    {
        console.log("O herói sibiu de nível! \nNível:" +i);
    }
}