import './style.css'

const text = 'hello world'
const words = text.split(' ')
let wordCount = 0
let letterPosition = 0
const caret = document.querySelector('.caret')

function updateCaret(elLetter = getElement(wordCount, letterPosition), prevElLetter) {
    // elLetter?.classList.add('text-green-500', 'active')
    // prevElLetter?.classList.remove('active')
    // const activeEl = document.querySelector('.active')
    const rect = elLetter?.getBoundingClientRect()
    if (rect) {
        caret.style.left = `${rect.left}px`
        caret.style.top = `${rect.top}px`
        caret.style.height = `${rect.height}px`
    } else {
        const prevRect = document.querySelector(`[data-word="${wordCount}"]`)?.getBoundingClientRect()
        caret.style.left = `${prevRect.right}px`
    }
    // console.log('2389479832740932174980312 748901 3:', elLetter)

}

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
    const prevElLetter = getElement(wordCount, letterPosition - 1)

    if (e.ctrlKey && key === "Backspace") {
        const generatedText = words[wordCount]
            .split('')
            .map((letter, i) => `<letter data-word="${wordCount}" data-letter="${i}">${letter}</letter>`)
            .join('')
        document.querySelector(`[data-word="${wordCount}"]`).innerHTML = generatedText
        letterPosition = 0
        updateCaret()



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
    console.log('okay')

    if (key === "Backspace") {
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
    } else if (key.length === 1 && key === letter || (e.shiftKey && key.toUpperCase() === letter)) {
        elLetter?.classList.add('text-green-500')
        letterPosition++
    } else if (key.length === 1) {
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
            document.querySelector(`[data-word="${wordCount}"]`).append(newDiv)
        }
        letterPosition++
    }
    updateCaret()
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
updateCaret()