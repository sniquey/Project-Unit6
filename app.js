// Declare Variables //
const qwerty = document.getElementById('qwerty');
const letterButtons = qwerty.getElementsByTagName('button');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const ul = document.getElementsByTagName('ul')[0];
const ol = document.querySelector('ol');
const h2 = document.querySelector('h2');
let match = [];
let lettersArray = [];
let missed = 0;
const phrases = ['Eating ice cream on a hot day can be a good way to cool off',
                'She helped to build the roof',
                'In the kitchen you will find my mum',
                'Friday became a cool wet afternoon',
                'Mary might have been waiting outside for you'];

//return a random phrase from the array
const getRandomPhraseAsArray = (arr) => {
    const num = Math.floor(Math.random()*5);
    let randomPhrase = arr[num];
    return randomPhrase;
}

const randomPhrase = getRandomPhraseAsArray(phrases);

// adds letters of the string to the display
const addPhraseToDisplay = (phrase) => {
    for(let i=0;i<randomPhrase.length;i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = randomPhrase[i];
        if (li.textContent === " ") {
            li.className = "space";
        } else {
            li.className = "letter";
        }
    }
    const lettersLI = document.getElementsByClassName('letter');
    return lettersLI;
}

const letters = addPhraseToDisplay(randomPhrase);

const lettersLI = document.querySelector('ul').children;

for (let i=0;i<lettersLI.length;i++) {
    lettersArray.push(lettersLI[i].textContent.toLowerCase());
 }

function heartsDisplay(missed) {
        if (missed === 5) {
            overlay.style.className = "lose";
            overlay.style.display = "flex";
            h2.textContent = "You Lose!";
            startButton.style.display = "none";
        } else {
            ol.children[missed - 1].style.display = "none";
        }
}

//check if a letter is in the phrase
const checkLetter = (input) => { 
    // for each letter in the list of letters that make up the phrase go through and check
    for(let i=0;i<lettersLI.length;i++){
        // if the letter is equal to the button letter pressed AND the class name of that li is "letter"
        if (lettersLI[i].textContent.toLowerCase() === input.textContent && lettersLI[i].className === "letter") {
            console.log(`match at position ${i}`)
            // change the class name from "letter" to "show" to display that letter
            lettersLI[i].className = "show";
            // add the letter to the match array
            // add keyboard button class "chosen" on the letter
            input.className = "chosen";
            match.push(lettersLI[i].textContent);
        // if the letter is equal to the button letter pressed and this letter has already been selected
        } else if (lettersLI[i].textContent.toLowerCase() === input.textContent && lettersLI[i].className === "show") {
            alert('You have already clicked this letter');
            return;
        // if the keyboard letter is not in the array of letters and has not already been selected
        } else if (!lettersArray.includes(input.textContent) && input.className !== "chosen") {
            input.className = "chosen";
            missed++;
            heartsDisplay(missed);
            console.log(missed);
            return missed;
        }
    }
    console.log(match);
    checkWin();
    return match;
}




// check if the game has been won or lost
const checkWin = () => {
    if (letters.length === 0) {
        overlay.style.className = "win";
        overlay.style.display = "flex";
        h2.textContent = "You Win!";
        startButton.style.display = "none";
    }
}

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    const overlay = document.querySelector('.start');
    overlay.style.display = 'none';
});

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if(isButton) {
        const button = e.target;
        checkLetter(button);
    }
});