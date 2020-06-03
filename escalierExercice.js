function showStep(nbStep) {
    let step = "#";
    for (let i = 0; i < (nbStep - 1); i++) {
        if (i == 0) {
            console.log(step);
        }
        console.log(step += step[i]);
    }
}

showStep(4);