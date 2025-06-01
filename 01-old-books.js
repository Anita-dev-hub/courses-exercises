function oldLibrary(input){
    let searchedBook = input[0];
    let index = 1;
    let command = input[index];
    index++;
    let incorrectBooksChecked = 0;
    while(command !== 'No more books'){
        if(command === searchedBook){
            console.log(`You checked ${incorrectBooksChecked} books and found it.`);
            break;
        }
        incorrectBooksChecked++;
        command = input[index];
        index++;
    }
    if(command === 'No more books'){
        console.log("The book you search is not here!");
        console.log(`You checked ${incorrectBooksChecked} books.`);
    }
}

oldLibrary(["The Spot",

    "Hunger Games",
    
    "Harry Potter",
    
    "Torronto",
    
    "Spotify",
    
    "No More Books"])