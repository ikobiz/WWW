const boardSize = 10;
const mineCount = 10;
let board, minePositions, revealedCells, gameActive;

function startGame() {
    board = [];
    minePositions = [];
    revealedCells = 0;
    gameActive = true;
    document.getElementById('result').textContent = '';
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    boardElement.style.pointerEvents = 'auto';

    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            board[i][j] = { mine: false, revealed: false, adjacentMines: 0 };
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.addEventListener('click', () => revealCell(i, j));
            boardElement.appendChild(cellElement);
        }
    }

    placeMines();
    calculateAdjacentMines();
}

function placeMines() {
    let minesPlaced = 0;
    while (minesPlaced < mineCount) {
        const x = Math.floor(Math.random() * boardSize);
        const y = Math.floor(Math.random() * boardSize);
        if (!board[x][y].mine) {
            board[x][y].mine = true;
            minePositions.push({ x, y });
            minesPlaced++;
        }
    }
}

function calculateAdjacentMines() {
    for (const { x, y } of minePositions) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const nx = x + i;
                const ny = y + j;
                if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize && !board[nx][ny].mine) {
                    board[nx][ny].adjacentMines++;
                }
            }
        }
    }
}

function revealCell(x, y) {
    if (!gameActive || board[x][y].revealed) return;

    const cellElement = document.getElementById('board').children[x * boardSize + y];
    board[x][y].revealed = true;
    cellElement.classList.add('revealed');
    revealedCells++;

    if (board[x][y].mine) {
        cellElement.textContent = '💣';
        gameOver(false);
    } else {
        cellElement.textContent = board[x][y].adjacentMines > 0 ? board[x][y].adjacentMines : '';
        if (board[x][y].adjacentMines === 0) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const nx = x + i;
                    const ny = y + j;
                    if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
                        revealCell(nx, ny);
                    }
                }
            }
        }
        if (revealedCells === boardSize * boardSize - mineCount) {
            gameOver(true);
        }
    }
}

function gameOver(won) {
    gameActive = false;
    document.getElementById('board').style.pointerEvents = 'none';
    document.getElementById('result').textContent = won ? 'You win!' : 'Game over!';
}