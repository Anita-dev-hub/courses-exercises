function sumDigits(n){
    let num = n;
    let result = 0;
    do{
        let last = num % 10;
        result += last;
        num = parseInt(num / 10);
    } while(num > 0);
    console.log(result)

}
sumDigits(543)

//Vtori variant:
function sumDigit(n){
    let num = String(n);
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        let current = Number(num[i]);
        sum += current;
    }
    console.log(sum)
}
sumDigit(347)

function asciiTable(p1, p2, p3){
    console.log(`${p3}${p2}${p1}`);
    console.log(`${p3.charCodeAt(0)} ${p2.charCodeAt(0)} ${p1.charCodeAt(0)}`)
}
asciiTable('a',

'b',

'c')