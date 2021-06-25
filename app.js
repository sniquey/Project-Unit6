// Declare Variables //
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const ul = document.getElementsByTagName('ul')[0];
let missed = 0;
let phrases = ['Eating ice cream on a hot day can be a good way to cool off',
                'She helped to build the roof',
                'In the kitchen you will find my mum',
                'Friday became a cool wet afternoon',
                'Mary might have been waiting outside for you']

//return a random phrase from the array
const getRandomPhraseAsArray = (arr) => {
    const num = Math.floor(Math.random()*6);
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
}

if (randomPhrase) {
    addPhraseToDisplay(randomPhrase);
} else {
    const randomPhrase = getRandomPhraseAsArray(phrases);
}


//check if a letter is in the phrase
const checkLetter = (input) => {
    const key = input;
    const checkLetter = document.getElementsByClassName('letter')
    let match = 0;
    let lettersArray = [];
    for (let i=0;i<checkLetter.length;i++) {
        lettersArray.push(checkLetter[i].textContent.toLowerCase());
    }
    console.log(lettersArray);
    if (lettersArray.includes(key)) {
        match = 1;
    }
    console.log(match);
    // for (let i=0;i<checkLetter.length;i++) {
    //     if (key === parseInt(checkLetter[i]) {

    //     }
    // }

}

// check if the game has been won or lost
const checkWin = () => {


}

//listen for the start game button to be pressed
startButton.addEventListener('click', () => {
    const hide = document.querySelector('.start');
    hide.style.display = 'none';
});

//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (e) => {
    const button = e.target;
    const letterClicked = button.textContent;
    // if (button.className !== 'keyrow') {
    //    console.log('no');
    // } else {
    //     console.log(letterClicked);
    // }
    checkLetter(letterClicked);
});