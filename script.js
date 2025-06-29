// get the button
const button = document.getElementById("start");
// Creation of the canvas
/** @type {HTMLCanvasElement} */
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.id = "canvas";
const square = 800;
canvas.height = square;
canvas.width = square;

// Without the context it's not possible to draw on the canvas
const ctx = canvas.getContext("2d");

// This now creates the cells, rows and cols
const cellSize = 10;
const rows = square / cellSize;
const cols = square / cellSize;

// Verificar en que click se dio
canvas.addEventListener("click", on_canvas_click, false);
function on_canvas_click(ev) {
  var x = ev.pageX - canvas.offsetLeft;
  var y = ev.pageY - canvas.offsetTop;
  if (y >= 0 && y <= y + cellSize) {
    var indexOfX = Math.floor(x / cellSize);
    var indexOfY = Math.floor(y / cellSize);
    grid[indexOfY][indexOfX] = 1;
  }
  drawGrid();
}

// Time to create the grid
let grid = [];
for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < cols; j++) {
    row.push(0);
  }
  grid.push(row);
}

function drawGrid() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * cellSize;
      const y = row * cellSize;

      ctx.fillStyle = grid[row][col] === 1 ? "green" : "black";
      ctx.fillRect(x, y, cellSize, cellSize);

      ctx.strokeStyle = "grey";
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
}

// TODO: Se debe modificar para que al llegar al borde, siga leyendo a las celulas
function countNeighbors(row, col) {
  // Takes the coordinate of a cell and returns the number of live neighbors it has
  let neighbors = 0;

  // desde la segunda fila y segunda columna
  if (row > 0 && col > 0) {
    // arriba a la izquierda
    if (grid[row - 1][col - 1] == 1) {
      neighbors++;
    }
    // arriba
    if (grid[row - 1][col] == 1) {
      neighbors++;
    }
    // arriba a la derecha
    if (grid[row - 1][col + 1] == 1) {
      neighbors++;
    }
    // a la izquierda
    if (grid[row][col - 1] == 1) {
      neighbors++;
    }
    // a la derecha
    if (grid[row][col + 1]) {
      neighbors++;
    }
  }

  if (row < rows - 1 && (col < cols - 1) & (col > 0)) {
    if (grid[row + 1][col - 1]) {
      neighbors++;
    }
    if (grid[row + 1][col]) {
      neighbors++;
    }
    if (grid[row + 1][col + 1]) {
      neighbors++;
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

      // si la celda esta viva
      if (grid[i][j] == 1) {
        if (neighbors == 2 || neighbors == 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      }
      // si la celda esta muerta
      else {
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
button.addEventListener("click", () => {
  setInterval(mainLoop, 500);
});
