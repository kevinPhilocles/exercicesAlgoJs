function solveSudoku() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "s.txt", true);

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let result = this.responseText;
      console.log(result);
    }
  };

  xhttp.send();
}

solveSudoku();
