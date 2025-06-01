function vacantion(group, type, day){
    let total = 0;
    switch(type){
        case 'Students':
        switch(day){
            case 'Friday':
            total = group * 8.45;  break;
            case 'Saturday':
            total = group * 9.8;  break;
            case 'Sunday':
            total = group * 10.46;  break;
        }
        if(group >= 30){total *= 0.85;}
        break;
        case 'Business':
        if(group >= 100){group -= 10;}
        switch(day){
            case 'Friday':
            total = group * 10.9;  break;
            case 'Saturday':
            total = group * 15.6;  break;
            case 'Sunday':
            total = group * 16;  break;
        }
        break;
        case 'Regular':
        switch(day){
            case 'Friday':
            total = group * 15;  break;
            case 'Saturday':
            total = group * 20;  break;
            case 'Sunday':
            total = group * 22.5;  break;
        }
        if(group >= 10 && group <= 20){total *= 0.95;}
        break;
    }
    console.log(`Total price: ${total.toFixed(2)}`)

}

//6.ex
function printAndSum(start, end){
    let sum = 0;
    let result = '';
    for(let i = start; i <= end; i++){
        sum += i;
        result += i + ' ';
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}