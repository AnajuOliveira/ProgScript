namespace repeticao
{
    // Escreva um programa que mostre os número primos de 1 á 100, usando apenas o laço de repetição do while
    let num: number = 2;

    while (num <= 100)
    {
        let primo: boolean = true;
        let divisor: number = 2;
        while (divisor < num)
        {
            if(num % divisor == 0){
                primo = false
                break
            }
            divisor++;
        }
        if (primo = true)
        {
            console.log(num);
        }
        num++;
    }
}