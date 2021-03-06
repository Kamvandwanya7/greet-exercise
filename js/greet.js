var myButtonElement = document.querySelector('.myButton');
let myTextElement = document.querySelector('.myText');
var message = document.querySelector(".message");
var namesGreetedCount = document.querySelector(".namesGreetedCounter")
var resetButton = document.querySelector(".reset")
//let alphabetRegex = /^[a-z]+$/gi;

var names = [];

if (localStorage['names']) {
    names = JSON.parse(localStorage.getItem('names'))
}

let greetFunction = GreetingFact(names);

namesGreetedCount.innerHTML = greetFunction.getCount();

function greetPeople() {
    var languageSelection = document.querySelector("input[name='theLanguage']:checked");
    var name = myTextElement.value;
    var nameText = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    //greeting names
    if (nameText !== "" && languageSelection) {
        if (greetFunction.regexPass(nameText)) {
            message.innerHTML = greetFunction.setNames(nameText)

        } else {
            message.innerHTML = "Enter a valid name";
            message.classList.add("red");
            myTextElement.value = "";
        }
            message.innerHTML = greetFunction.greetMessage(nameText, languageSelection.value)
            message.classList.remove("red");
            localStorage.setItem("names", JSON.stringify(greetFunction.getNames()))
            //    storeNames(nameText)
    }
    else {
        if (nameText == '' && languageSelection === null) {
            message.innerHTML = greetFunction.errorMessage(nameText, languageSelection);
            myTextElement.value = '';
            message.classList.add("red");
        } else if (nameText == '') {
            message.innerHTML = greetFunction.errorName(nameText);
            message.classList.add("red");
            // setTimeout(errorName, '3000')
        } else if (nameText !== '' && languageSelection === null) {
            message.innerHTML = greetFunction.errorLang(nameText, languageSelection);
            message.classList.add("red");
            myTextElement.value = '';
            console.log(languageSelection)
        }
    }
    function greetMe() {
        message.innerHTML = '';
    }
    setTimeout(greetMe, 2000);
    namesGreetedCount.innerHTML = greetFunction.getCount();
}

//reset button
function resetFunction() {
    message.innerHTML = '';
    namesGreetedCount.innerHTML = 0;
    localStorage.clear();
    location.reload();
}

myButtonElement.addEventListener("click", greetPeople);
resetButton.addEventListener("click", resetFunction)