function sortString(string) {
    return string.split('').sort().join('');
}

function findAnagram() {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'fr.txt', true);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = this.responseText;
            // console.log(result);

            // console.log(typeof result);

            let words = result.split(' ');
            words = result.split("\n");

            let anagrams = {};

            for (let i in words) {
                let word = words[i];
                // console.log(word);

                let letterCheck = sortString(word);
                // console.log(letterCheck);

                if (anagrams[letterCheck] != null) {
                    anagrams[letterCheck].push(word);
                } else {
                    anagrams[letterCheck] = [word];
                }
            }

            // console.log(anagrams);

            for (let anagram in anagrams) {
                // console.log(anagrams[anagram]);

                if (anagram === "aberr") {
                    console.log(anagrams[anagram]);
                }
            }

        }
    }

    xhttp.send();
}

findAnagram();