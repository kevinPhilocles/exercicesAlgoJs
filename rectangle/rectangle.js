function readFile(file) {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", file, true);

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let result = this.responseText;

      let arr = [];

      arr = result.split("\n");

      // console.log(arr);

      for (let i in arr) {
        let item = arr[i];

        console.log(item);
      }
    }
  };

  xhttp.send();
}

readFile("c1.txt");
readFile("c2.txt");
