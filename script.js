const name = "Sherlock Holmes"
const age = 45
const birthday = "January 6th"
const actuallyDead = false

if (actuallyDead === true){
    console.log(`My name is ${name} and I am trully and completely dead. I was ${age} years old and my birthday was ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am alive. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

const lifeEvents = ["The first time I met Watson was a day I'll never forget.", "My first time saying 'The game is a foot' was quite exhilarating.", "That ordeal with Moriarty is one I'll never forget.", "It was very unfortunate when I had to fake my own death."]

for (i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i])
}

let counter = 0

while (true) {

    randomNumber = Math.floor(Math.random() * 11)

        if (randomNumber !==5) { 
        counter++;
        console.log(`${randomNumber} !==5 `);
        continue
     } else {    
        counter ++;
        console.log(`5===5. It took ${counter} iterations to randomly generate 5.`);
        break
    }
}