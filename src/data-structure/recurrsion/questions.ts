function factorialIterative(number: number): number{
    if(number === 1 || number=== 0){
        return 1
    }

    return number * factorialIterative(number-1)
}

/*
0 1 1 2 3 5 8 13 21
 */
function fibonacci(number: number): number{
    if(number<1){
        return 0
    }
    if(number <= 2){
        return 1
    }
    return fibonacci(number-1)+ fibonacci(number-2)
}
