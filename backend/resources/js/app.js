import 'basecoat-css/all';

const text = 'hello world'
const words = text.split(' ')
console.log(words)
let wordCount = 0
let letterPosition = 0

function getElement(wordCount, letterPosition) {
    return document.querySelector(`[data-word="${wordCount}"][data-letter="${letterPosition}"]`) ?? null
}

addEvent(document, "keydown", (e) => {
    e = e || window.event;
    const key = e.key;
    const word = words[wordCount]
    const wordLength = word.length
    const letter = word[letterPosition]
    const elLetter = getElement(wordCount, letterPosition)
    console.log(word, '|', letter, wordCount, letterPosition);

    if (e.ctrlKey && key === "Backspace") {
        console.log('ctrl backspace clicked', letterPosition)
        // const prevElLetter = getElement(wordCount, letterPosition - 1)
        // // if (elLetter && elLetter.dataset.extraKey) {
        // //     elLetter.remove()
        // // }
        // prevElLetter?.classList.remove('text-red-500', 'text-green-500', 'text-red-900')
        // if (prevElLetter) {
        //     letterPosition--
        // }
    } 

    if (e.ctrlKey || e.altKey || e.metaKey || event.key === 'Escape') return;

    if (key === "Backspace") {
        console.log("Backspace pressed");
        const prevElLetter = getElement(wordCount, letterPosition - 1)
        if (prevElLetter && prevElLetter.dataset.extraKey) {
            prevElLetter.remove()
        }
        prevElLetter?.classList.remove('text-red-500', 'text-green-500', 'text-red-900')
        if (prevElLetter) {
            letterPosition--
        }

    } else if (key === " ") {
        letterPosition = 0
        wordCount++
        console.log('space pressed: ', wordCount, letterPosition);
        return
    } else if (key === letter) {
        // console.log('correct key', key, word)
        // console.log(letterPosition, wordLength, letterPosition >= wordLength);
        elLetter?.classList.add('text-green-500')
        letterPosition++
    } else {
        // console.log(elLetter)
        if (elLetter) {

            elLetter?.classList.add('text-red-500')
        } else {
            const newDiv = document.createElement("letter");
            newDiv.dataset.word = wordCount
            newDiv.dataset.letter = letterPosition
            newDiv.dataset.extraKey = true
            newDiv.classList.add('text-red-900')

            // and give it some content
            newDiv.textContent = key
            console.log('jdsalkfjkladsjflk2342143124132;', newDiv)
            document.querySelector(`[data-word="${wordCount}"]`).append(newDiv)
        }
        letterPosition++
    }
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
