function solve(n){
    function extractEven(num){
        let result = [];
        do{
            let lastNumber = num % 10;
            if(lastNumber % 2 === 0){
                result.push(lastNumber);
            }
            num = parseInt(num / 10);
        } while(num > 0)
        return result;
    }
    function extractOdd(num){
        let result = [];
        do{
            let lastNumber = num % 10;
            if(lastNumber % 2 > 0){
                result.push(lastNumber);
            }
            num = parseInt(num / 10);
        } while(num > 0)
        return result;
    }
    function sumArrays(arr){
        let result = 0;
        for (let i = 0; i < arr.length; i++){
            result += arr[i];
        }
        return result;
    }
    //oddArray = extractOdd(n);
    //result = sumArrays(oddArray);
    //console.log(result);

    //console.log(extractEven(n));
    //console.log(extractOdd(n));
    let odd = extractOdd(n);
    let even = extractEven(n);
    let oddSum = sumArrays(odd);
    let evenSum = sumArrays(even);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(3495892137259234)