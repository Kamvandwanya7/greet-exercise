function GreetingFact() {
    var greetedNames = [];
    // alreadyExistingName || 
    let alphabetRegex = /[a-z]$/gi;
    let theError= "";


    function setNames(name) {
        if (!greetedNames.includes(name)) {
            greetedNames.push(name)
        }
    }

    function setRed(red){
     theError= "red";
    }
    function getRed(){
        return theError;
    }

    function getNames() {
        return greetedNames;
    }


    function getCount() {
        return greetedNames.length;
    }

    function regexPass(name) {
        return alphabetRegex.test(name)
    }

    function regexFail(name) {
        if (!regexPass(name)) {
            return "Your name is not recognized!";
        }
    }

    function greetMessage(name, language) {
        if (name && language) {
            setNames(name)
            if (language === "english") {
                return "Hello " + name;
            }
            if (language === "isixhosa") {
                return "Molo " + name;
            }
            if (language === "afrikaans") {
                return "Hallo " + name;
            }
        }
    }
    function errorMessage(name, language) {
            if (name == '' && language === null) {
                return "Please enter your name and select the language!";
            }
    }
    function errorLang(name, language) {
            if (name !== '' && language === null) {
                return "Hi " + name + " please select the language!";
            }
    }
    function errorName(name) {
            if (name == '') {
                return "Please enter your name!";
            }
    }

    return {
        setNames,
        getNames,
        getCount,
        greetMessage,
        regexPass,
        regexFail,
        errorMessage,
        errorLang,
        errorName,
        getRed,
        setRed,
    }
}

