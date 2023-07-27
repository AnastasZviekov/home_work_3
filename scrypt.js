

userConfirm=  confirm(`Tell me three most important words 💚`);
let userWord1="";
let userWord2="";
let userWord3="";
let enterFirst="Pls enter first word";
let enterSecond="Pls second word";
let enterThird="Pls third word"
let sentance="";
let transformWord = "";



if (userConfirm) {
    userBid=0;
    wordsCounter = 3;



    while (userBid < wordsCounter && userWord1 === null || userWord1 === "") {
        userBid++;
        userWord1 = prompt(`${enterFirst}`);
        if(userWord1===null||userWord1===``) {
            transformWord = console.log(`Error`);
        } else { console.log(`Correct`);
            transformWord = prompt("Pls choose your option uppercase||lowercase||capitalize ");
        };

           if (transformWord === `uppercase`) {
               userWord1 = userWord1.toUpperCase();
           }
           if (transformWord === `lowercase`) {
               userWord1 = userWord1.toLowerCase();
           }
           if (transformWord === `capitalize`) {
               userWord1 = userWord1[0].toUpperCase() + userWord1.slice(1);
           }


    }

    userBid=0;
    wordsCounter = 3;


    while (userBid < wordsCounter && userWord2 === null || userWord2 === "") {
        userBid++;
        userWord2 = prompt(`${enterSecond}`);
        if(userWord2===null||userWord2===``) {
            transformWord = console.log(`Error`);
        } else { console.log(`Correct`);
            transformWord = prompt("Pls choose your option uppercase||lowercase||capitalize ");
        };

        if (transformWord === `uppercase`) {
            userWord2 = userWord2.toUpperCase();
        }
        if (transformWord === `lowercase`) {
            userWord2 = userWord2.toLowerCase();
        }
        if (transformWord === `capitalize`) {
            userWord2 = userWord2[0].toUpperCase() + userWord2.slice(1);
        }

    }


}
sentance=`${userWord1} ${userWord2} ${userWord3} !`;
console.log (sentance);
document.write(sentance);
