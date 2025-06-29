// Se accede al canvas y al 'lienzo' para dibujar
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const square = 800;
canvas.height = square;
canvas.width = square;
const ctx = canvas.getContext("2d");

// Cada célula mide 20x20 píxeles
const cellSize = 80;
const rows = canvas.height / cellSize;
const cols = canvas.width / cellSize;

let grid = [];
for (let i = 0; i < rows; i++) {
  let row = [];
  for (let i = 0; i < cols; i++) {
    row.push(0);
  }
  grid.push(row);
}

function drawGrid() {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * cellSize;
      const y = row * cellSize;

      ctx.fillStyle = grid[row][col] === 1 ? "white" : "black";
      ctx.fillRect(x, y, cellSize, cellSize);

      ctx.strokeStyle = "grey";
      ctx.strokeRect(x, y, cellSize, cellSize);
    }
  }
}

drawGrid();
