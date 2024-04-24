/* function parimp(n){
    if(n%2 == 0){
        return `O número ${n} é (PAR)`
    }else{
        return `O número ${n} é (ÍMPAR)`
    }
}
console.log(parimp(10))*/



function fatorial(n){
    let fat = 1
    for(let num = n; num > 1; num -= 1){
        fat *= num
    }
    return fat
}
console.log(`${fatorial(5)}`)