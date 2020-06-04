function factoriel(n) {
    return (n != 1) ? n * factoriel(n - 1) : 1;
}

console.log(factoriel(3));