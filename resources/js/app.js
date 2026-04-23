import 'basecoat-css/all';


const text = 'hello world'
const words = text.split(' ')
console.log(words)
let wordCount = 0
let letterPosition = 0

addEvent(document, "keypress", function (e) {
    e = e || window.event;
    const key = e.key;
    const word = words[wordCount]
    const wordLength = word.length
    const letter = word[letterPosition]
    console.log(word, '|', letter , wordCount, letterPosition);
    const elLetter = document.querySelector(`[data-word="${wordCount}"][data-letter="${letterPosition}"]`)
    if (key === letter) {
        console.log('correct key', key, word)
        elLetter.classList.add('text-green-500')

        
        letterPosition++
        if (letterPosition >= wordLength) {
            wordCount++
            letterPosition = 0
        }
    } else {
        elLetter.classList.add('text-red-500')
    }
    // use e.keyCode
});

function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}