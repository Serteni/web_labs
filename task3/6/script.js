let n = prompt("Введите число: ", 10);

Prime:
for (let i = 2; i <= n; i++)
{
    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue Prime;       
    }

    console.log(i);
}