function shopping(budget, videocard, protsessor, ram){
    let videocardPrice = videocard * 250;
    let protsessorPrice = (videocardPrice * 0.35) * protsessor;
    let ramPrice = (videocardPrice * 0.1) * ram;
    let totalPrice = videocardPrice + protsessorPrice + ramPrice;
    if(videocard > protsessor){
        totalPrice *= 0.85; 
    }
    if( budget >= totalPrice){
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else{
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    } 
}
shopping(900, 2, 1, 3)