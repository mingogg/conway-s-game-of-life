const start = document.getElementById("start");
const stopGame = document.getElementById("stop");
const clear = document.getElementById("clear");
canvas = document.getElementById("canvas");

const square = 780;
canvas.height = square;
canvas.width = square;

const ctx = canvas.getContext("2d");

const cellSize = 10;
const rows = square / cellSize;
const cols = square / cellSize;

// TODO:
// add a better css
// add a randomize painted cells to start
// add a main figures list to pick and show
// add a standar figure to start the game
// see if it can be press and draw
// button to accelerate or de-accelerate the intervals
// counter of how many generations past

let grid = [];

for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < cols; j++) {
    //w letter
    if (
      (i === 7 && j === 5) ||
      (i === 7 && j === 7) ||
      (i === 7 && j === 9) ||
      (i === 8 && j === 5) ||
      (i === 8 && j === 7) ||
      (i === 8 && j === 9) ||
      (i === 9 && j === 5) ||
      (i === 9 && j === 7) ||
      (i === 9 && j === 9) ||
      (i === 10 && j === 5) ||
      (i === 10 && j === 7) ||
      (i === 10 && j === 9) ||
      (i === 11 && j === 6) ||
      (i === 11 && j === 7) ||
      (i === 11 && j === 8)
    ) {
      row.push(1);
    }

    //e letter
    else if (
      (i === 7 && j === 12) ||
      (i === 7 && j === 13) ||
      (i === 8 && j === 11) ||
      (i === 9 && j === 11) ||
      (i === 9 && j === 12) ||
      (i === 9 && j === 13) ||
      (i === 10 && j === 11) ||
      (i === 11 && j === 12) ||
      (i === 11 && j === 13)
    ) {
      row.push(1);
    }

    // l letter
    else if (
      (i === 7 && j === 15) ||
      (i === 8 && j === 15) ||
      (i === 9 && j === 15) ||
      (i === 10 && j === 15) ||
      (i === 11 && j === 16) ||
      (i === 11 && j === 17)
    ) {
      row.push(1);
    }

    //c letter
    else if (
      (i === 7 && j === 20) ||
      (i === 7 && j === 21) ||
      (i === 8 && j === 19) ||
      (i === 9 && j === 19) ||
      (i === 10 && j === 19) ||
      (i === 11 && j === 20) ||
      (i === 11 && j === 21)
    ) {
      row.push(1);
    }

    //o letter
    else if (
      (i === 7 && j === 24) ||
      (i === 7 && j === 25) ||
      (i === 8 && j === 23) ||
      (i === 9 && j === 23) ||
      (i === 10 && j === 23) ||
      (i === 8 && j === 26) ||
      (i === 9 && j === 26) ||
      (i === 10 && j === 26) ||
      (i === 11 && j === 24) ||
      (i === 11 && j === 25)
    ) {
      row.push(1);
    }

    //m letter
    else if (
      (i === 7 && j === 29) ||
      (i === 7 && j === 31) ||
      (i === 8 && j === 28) ||
      (i === 9 && j === 28) ||
      (i === 10 && j === 28) ||
      (i === 11 && j === 28) ||
      (i === 8 && j === 30) ||
      (i === 9 && j === 30) ||
      (i === 10 && j === 30) ||
      (i === 11 && j === 30) ||
      (i === 8 && j === 32) ||
      (i === 9 && j === 32) ||
      (i === 10 && j === 32) ||
      (i === 11 && j === 32)
    ) {
      row.push(1);
    }

    //e letter
    else if (
      (i === 7 && j === 35) ||
      (i === 7 && j === 36) ||
      (i === 8 && j === 34) ||
      (i === 9 && j === 34) ||
      (i === 9 && j === 35) ||
      (i === 9 && j === 36) ||
      (i === 10 && j === 34) ||
      (i === 11 && j === 35) ||
      (i === 11 && j === 36)
    ) {
      row.push(1);
    }

    //t letter
    else if (
      (i === 14 && j === 5) ||
      (i === 14 && j === 6) ||
      (i === 14 && j === 7) ||
      (i === 15 && j === 6) ||
      (i === 16 && j === 6) ||
      (i === 17 && j === 6) ||
      (i === 18 && j === 6)
    ) {
      row.push(1);
    }

    //o letter
    else if (
      (i === 14 && j === 10) ||
      (i === 14 && j === 11) ||
      (i === 15 && j === 9) ||
      (i === 16 && j === 9) ||
      (i === 17 && j === 9) ||
      (i === 15 && j === 12) ||
      (i === 16 && j === 12) ||
      (i === 17 && j === 12) ||
      (i === 18 && j === 10) ||
      (i === 18 && j === 11)
    ) {
      row.push(1);
    }

    //t letter
    else if (
      (i === 14 && j === 16) ||
      (i === 14 && j === 17) ||
      (i === 14 && j === 18) ||
      (i === 15 && j === 17) ||
      (i === 16 && j === 17) ||
      (i === 17 && j === 17) ||
      (i === 18 && j === 17)
    ) {
      row.push(1);
    }

    //h letter
    else if (
      (i === 14 && j === 20) ||
      (i === 14 && j === 23) ||
      (i === 15 && j === 20) ||
      (i === 16 && j === 20) ||
      (i === 17 && j === 20) ||
      (i === 18 && j === 20) ||
      (i === 15 && j === 23) ||
      (i === 16 && j === 23) ||
      (i === 17 && j === 23) ||
      (i === 18 && j === 23) ||
      (i === 16 && j === 21) ||
      (i === 16 && j === 22)
    ) {
      row.push(1);
    }
    //e letter
    else if (
      (i === 14 && j === 26) ||
      (i === 14 && j === 27) ||
      (i === 15 && j === 25) ||
      (i === 16 && j === 25) ||
      (i === 16 && j === 26) ||
      (i === 16 && j === 27) ||
      (i === 17 && j === 25) ||
      (i === 18 && j === 26) ||
      (i === 18 && j === 27)
    ) {
      row.push(1);
    }

    //c letter
    else if (
      (i === 23 && j === 6) ||
      (i === 23 && j === 7) ||
      (i === 23 && j === 8) ||
      (i === 23 && j === 9) ||
      (i === 24 && j === 5) ||
      (i === 25 && j === 5) ||
      (i === 26 && j === 5) ||
      (i === 27 && j === 5) ||
      (i === 28 && j === 5) ||
      (i === 29 && j === 6) ||
      (i === 29 && j === 7) ||
      (i === 29 && j === 8) ||
      (i === 29 && j === 9)
    ) {
      row.push(1);
    }

    //o letter
    else if (
      (i === 23 && j === 12) ||
      (i === 23 && j === 13) ||
      (i === 23 && j === 14) ||
      (i === 24 && j === 11) ||
      (i === 25 && j === 11) ||
      (i === 26 && j === 11) ||
      (i === 27 && j === 11) ||
      (i === 28 && j === 11) ||
      (i === 29 && j === 12) ||
      (i === 29 && j === 13) ||
      (i === 29 && j === 14) ||
      (i === 24 && j === 15) ||
      (i === 25 && j === 15) ||
      (i === 26 && j === 15) ||
      (i === 27 && j === 15) ||
      (i === 28 && j === 15)
    ) {
      row.push(1);
    }

    //n letter
    else if (
      (i === 23 && j === 18) ||
      (i === 23 && j === 19) ||
      (i === 23 && j === 20) ||
      (i === 24 && j === 17) ||
      (i === 25 && j === 17) ||
      (i === 26 && j === 17) ||
      (i === 27 && j === 17) ||
      (i === 28 && j === 17) ||
      (i === 29 && j === 17) ||
      (i === 24 && j === 21) ||
      (i === 25 && j === 21) ||
      (i === 26 && j === 21) ||
      (i === 27 && j === 21) ||
      (i === 28 && j === 21) ||
      (i === 29 && j === 21)
    ) {
      row.push(1);
    }

    //w letter
    else if (
      (i === 23 && j === 23) ||
      (i === 23 && j === 29) ||
      (i === 24 && j === 23) ||
      (i === 24 && j === 26) ||
      (i === 24 && j === 29) ||
      (i === 25 && j === 23) ||
      (i === 25 && j === 26) ||
      (i === 25 && j === 29) ||
      (i === 26 && j === 23) ||
      (i === 26 && j === 26) ||
      (i === 26 && j === 29) ||
      (i === 27 && j === 23) ||
      (i === 27 && j === 26) ||
      (i === 27 && j === 29) ||
      (i === 28 && j === 23) ||
      (i === 28 && j === 26) ||
      (i === 28 && j === 29) ||
      (i === 29 && j === 24) ||
      (i === 29 && j === 25) ||
      (i === 29 && j === 27) ||
      (i === 29 && j === 28)
    ) {
      row.push(1);
    }

    //a letter
    else if (
      (i === 23 && j === 32) ||
      (i === 23 && j === 33) ||
      (i === 23 && j === 34) ||
      (i === 24 && j === 31) ||
      (i === 24 && j === 35) ||
      (i === 25 && j === 31) ||
      (i === 25 && j === 35) ||
      (i === 26 && j === 31) ||
      (i === 26 && j === 32) ||
      (i === 26 && j === 33) ||
      (i === 26 && j === 34) ||
      (i === 26 && j === 35) ||
      (i === 27 && j === 31) ||
      (i === 27 && j === 35) ||
      (i === 28 && j === 31) ||
      (i === 28 && j === 35) ||
      (i === 29 && j === 31) ||
      (i === 29 && j === 35)
    ) {
      row.push(1);
    }

    //y letter
    else if (
      (i === 23 && j === 37) ||
      (i === 23 && j === 41) ||
      (i === 24 && j === 37) ||
      (i === 23 && j === 41) ||
      (i === 24 && j === 41) ||
      (i === 25 && j === 38) ||
      (i === 25 && j === 40) ||
      (i === 26 && j === 39) ||
      (i === 27 && j === 39) ||
      (i === 28 && j === 39) ||
      (i === 29 && j === 39)
    ) {
      row.push(1);
    }
    //' letter
    else if (
      (i === 21 && j === 43) ||
      (i === 22 && j === 44) ||
      (i === 23 && j === 44) ||
      (i === 24 && j === 44)
    ) {
      row.push(1);
    }

    //s letter
    else if (
      (i === 23 && j === 47) ||
      (i === 23 && j === 48) ||
      (i === 23 && j === 49) ||
      (i === 24 && j === 46) ||
      (i === 24 && j === 50) ||
      (i === 25 && j === 46) ||
      (i === 26 && j === 47) ||
      (i === 26 && j === 48) ||
      (i === 26 && j === 49) ||
      (i === 27 && j === 50) ||
      (i === 28 && j === 50) ||
      (i === 28 && j === 46) ||
      (i === 29 && j === 47) ||
      (i === 29 && j === 48) ||
      (i === 29 && j === 49)
    ) {
      row.push(1);
    }

    //g letter
    else if (
      (i === 33 && j === 29) ||
      (i === 33 && j === 30) ||
      (i === 34 && j === 28) ||
      (i === 35 && j === 28) ||
      (i === 35 && j === 29) ||
      (i === 35 && j === 30) ||
      (i === 35 && j === 31) ||
      (i === 36 && j === 28) ||
      (i === 36 && j === 31) ||
      (i === 37 && j === 29) ||
      (i === 37 && j === 30)
    ) {
      row.push(1);
    }

    //a letter
    else if (
      (i === 33 && j === 34) ||
      (i === 33 && j === 35) ||
      (i === 34 && j === 33) ||
      (i === 34 && j === 36) ||
      (i === 35 && j === 33) ||
      (i === 35 && j === 34) ||
      (i === 35 && j === 35) ||
      (i === 35 && j === 36) ||
      (i === 36 && j === 33) ||
      (i === 36 && j === 36) ||
      (i === 37 && j === 33) ||
      (i === 37 && j === 36)
    ) {
      row.push(1);
    }

    //m letter
    else if (
      (i === 33 && j === 39) ||
      (i === 33 && j === 41) ||
      (i === 34 && j === 38) ||
      (i === 35 && j === 38) ||
      (i === 36 && j === 38) ||
      (i === 37 && j === 38) ||
      (i === 34 && j === 40) ||
      (i === 35 && j === 40) ||
      (i === 36 && j === 40) ||
      (i === 37 && j === 40) ||
      (i === 34 && j === 42) ||
      (i === 35 && j === 42) ||
      (i === 36 && j === 42) ||
      (i === 37 && j === 42)
    ) {
      row.push(1);
    }

    //e letter
    else if (
      (i === 33 && j === 45) ||
      (i === 33 && j === 46) ||
      (i === 34 && j === 44) ||
      (i === 35 && j === 44) ||
      (i === 35 && j === 45) ||
      (i === 35 && j === 46) ||
      (i === 36 && j === 44) ||
      (i === 37 && j === 45) ||
      (i === 37 && j === 46)
    ) {
      row.push(1);
    }

    // not a letter
    else {
      row.push(0);
    }
  }
  grid.push(row);
}

function drawGrid() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * cellSize;
      const y = row * cellSize;

      ctx.fillStyle = grid[row][col] === 1 ? "rgb(0, 255, 0)" : "black";
      ctx.fillRect(x, y, cellSize, cellSize);

      ctx.strokeStyle = "grey";
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
}

canvas.addEventListener("click", on_canvas_click, false);
function on_canvas_click(ev) {
  var x = ev.pageX - canvas.offsetLeft;
  var y = ev.pageY - canvas.offsetTop;
  if (y >= 0 && y <= y + cellSize) {
    var indexOfX = Math.floor(x / cellSize);
    var indexOfY = Math.floor(y / cellSize);
    if (grid[indexOfY][indexOfX] == 1) {
      grid[indexOfY][indexOfX] = 0;
    } else if (grid[indexOfY][indexOfX] == 0) {
      grid[indexOfY][indexOfX] = 1;
    }
  }
  drawGrid();
}

// function countNeighbors(row, col) {
//   let neighbors = 0;
//
//   if (row > 0 && col > 0) {
//     if (grid[row - 1][col - 1] == 1) {
//       neighbors++;
//     }
//     if (grid[row - 1][col] == 1) {
//       neighbors++;
//     }
//     if (grid[row - 1][col + 1] == 1) {
//       neighbors++;
//     }
//     if (grid[row][col - 1] == 1) {
//       neighbors++;
//     }
//     if (grid[row][col + 1]) {
//       neighbors++;
//     }
//   }
//
//   if (row < rows - 1 && (col < cols - 1) & (col > 0)) {
//     if (grid[row + 1][col - 1]) {
//       neighbors++;
//     }
//     if (grid[row + 1][col]) {
//       neighbors++;
//     }
//     if (grid[row + 1][col + 1]) {
//       neighbors++;
//     }
//   }
//
//   return neighbors;
// }

function countNeighbors(row, col) {
  let neighbors = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // saltar la celda actual

      const neighborRow = (row + i + rows) % rows;
      const neighborCol = (col + j + cols) % cols;

      if (grid[neighborRow][neighborCol] === 1) {
        neighbors++;
      }
    }
  }

  return neighbors;
}

function updateGrid() {
  let newGrid = [];
  for (let i = 0; i < rows; i++) {
    let newRow = [];
    for (let j = 0; j < cols; j++) {
      let neighbors = countNeighbors(i, j);

      if (grid[i][j] == 1) {
        if (neighbors == 2 || neighbors == 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      } else {
        if (neighbors == 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      }
    }
    newGrid.push(newRow);
  }
  grid = newGrid;
  return grid;
}

function mainLoop() {
  updateGrid();
  drawGrid();
}

drawGrid();

let startGame;
start.addEventListener("click", () => {
  startGame = setInterval(mainLoop, 200);
});

stopGame.addEventListener("click", () => {
  clearInterval(startGame);
});

clear.addEventListener("click", () => {
  clearInterval(startGame);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[i][j] = 0;

      x = j * cellSize;
      y = i * cellSize;

      ctx.fillStyle = "black";
      ctx.fillRect(x, y, cellSize, cellSize);

      ctx.strokeStyle = "grey";
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
});
