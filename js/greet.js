var myButtonElement = document.querySelector('.myButton');
let myTextElement = document.querySelector('.myText');
var message = document.querySelector(".message");
var namesGreetedCount = document.querySelector(".namesGreetedCounter")

var names = [];

//    if (button == reset) {
//     namesGreetedCount = 0;
//     }
namesGreetedCount.innerHTML = names.length;

function greetPeople() {
    var languageSelection = document.querySelector("input[name='theLanguage']:checked");

    var name = myTextElement.value.toUpperCase();

    //storing names
    if (name !== "") {
    //  if(name[i].includes(names[i]))
    
        names.push(name);
    }

    //greeting names
    console.log({ name, languageSelection });
    if (name !== "" && languageSelection) {

        if (languageSelection.value == "english") {
            message.innerHTML = "Hello " + name;
            myTextElement.value = "";
        }
        if (languageSelection.value == "afrikaans") {
            message.innerHTML = "Hallo " + name;
            myTextElement.value = "";

        }
        if (languageSelection.value == "isixhosa") {
            message.innerHTML = "Molo " + name;
            myTextElement.value = "";
        }
    }
    else {
        if (name == '' && languageSelection === null) {
            message.innerHTML = "Please enter your name and select the language";
        }
        if (name !== '' && languageSelection === null) {
            message.innerHTML = "Hi " + name + " please select the language";
        }
        if (name === '' && languageSelection.value) {
            message.innerHTML = "Please enter your name";
        }
    }
    console.log(names.length);
    namesGreetedCount.innerHTML = names.length;

}
myButtonElement.addEventListener("click", greetPeople);