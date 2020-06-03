const upperLowerLetters = (sentence) => {

    let phrase = sentence.split('');

    for (let i = 0; i < phrase.length; i++) {
        if (i % 2 !== 0) {
            console.log(phrase[i].toUpperCase().toString());
        } else if (i % 2 === 0) {
            console.log(phrase[i].toLowerCase().toString());
        }
    }

};

upperLowerLetters("Bien le bonjour!");