var rows = prompt('Number of Rows: ');
var col = prompt('Number of Column: ');

function multiArray(rows, col) {
  var arr = [];
  var row = [];

  for (i = 0; i < rows; i++) {
    arr[i] = [];
    for (j = 0; j < col; j++) {
      arr[i][j] = getRandomInt(1, 10);

      arr.sort(function(a, b) {
    return a - b;
  });

    }

  }
  console.log(arr);



  return arr;

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

multiArray(rows, col);
