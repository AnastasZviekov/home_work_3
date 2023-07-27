

 let userConfirm=  confirm(`Tell me three most important words 💚`);
 let userWord="";
 let sentence="";
 let lastSymbol="!";

 let transformWord = "";

if (userConfirm) {
    userBid=0;
    wordsCounter = 3;


    while (userBid < wordsCounter) {
        userBid++;
        userWord = prompt(`Enter word #${userBid}`);

        while (userWord === null || !userWord.trim()||isNaN(userWord)===false) {
            userWord = prompt(`Enter word #${userBid}`);

        }

        transformWord = prompt("Pls choose your option uppercase||lowercase||capitalize ");


         while (transformWord !== `uppercase`
             && transformWord !== `lowercase`
             && transformWord !== `capitalize`
             ||transformWord===null
             ||!transformWord
             ||isNaN(transformWord)===false
               )
             {console.log(`Error1`);
                 transformWord = prompt("Pls choose your option uppercase||lowercase||capitalize "); if (transformWord === `uppercase`) {
                 userWord = userWord.toUpperCase();
                 console.log(`Correct`);
             }
                 if (transformWord === `lowercase`) {
                     userWord = userWord.toLowerCase();
                     console.log(`Correct`);
                 }
                 if (transformWord === `capitalize`) {
                     userWord = userWord[0].toUpperCase() + userWord.slice(1);
                     console.log(`Correct`);
                 }
             }


        sentence+=userWord;

        if (userBid===wordsCounter) {
            sentence+=lastSymbol;
        } else {
            sentence+=" ";
        }

    }
}

console.log (sentence);
document.write(sentence);
















