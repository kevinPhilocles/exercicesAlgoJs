const upperLowerLetters = (sentence) => {

    let phrase = sentence.split('');

    let finalString = [];

    for (let i = 0; i < phrase.length; i++) {
        if (i % 2 !== 0) {
            finalString.push(phrase[i].toUpperCase());
        } else if (i % 2 === 0) {
            finalString.push(phrase[i].toLowerCase());
        }
    }

    console.log(finalString.join(''));

};

upperLowerLetters("Bien le bonjour!");