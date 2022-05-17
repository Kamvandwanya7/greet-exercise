var nameCount=0


function GreetingFact() {
    var greetedNames = [];

    function setNames(name) {
        greetedNames.push(name)
    }
    function getNames(){
        return greetedNames;
    }

    function setCount(nameCount){
        return nameCount;
    }

    function greetMessageEnglish(name, language) {
        if (language = "english")
            message = "Hello " + name;
    }
    function greetMessageIsixhosa(name, language) {
        if (language = "isixhosa")
            message = "Mholo " + name;
    }
    function greetMessageAfrikaans(name, language) {
        if (language = "afrikaans")
            message = "Hallo " + name;
    }
    return {
        setNames,
        getNames,
        setCount,
        greetMessageEnglish,
        greetMessageIsixhosa,
        greetMessageAfrikaans,
    }
}