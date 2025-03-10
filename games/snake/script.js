let canvas, ctx;
let snake, food, score;
let direction, gameLoop;

function startGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    snake = [{ x: 200, y: 200 }];
    food = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
    score = 0;
    direction = 'right';
    document.getElementById('score').textContent = 'Score: ' + score;
    clearInterval(gameLoop);
    gameLoop = setInterval(updateGame, 100);
    document.addEventListener('keydown', changeDirection);
}

function updateGame() {
    const head = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
        case 'right':
            head.x += 20;
            break;
        case 'left':
            head.x -= 20;
            break;
        case 'up':
            head.y -= 20;
            break;
        case 'down':
            head.y += 20;
            break;
    }

    // Wrap the snake around the canvas edges
    if (head.x >= canvas.width) head.x = 0;
    if (head.x < 0) head.x = canvas.width - 20;
    if (head.y >= canvas.height) head.y = 0;
    if (head.y < 0) head.y = canvas.height - 20;

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        document.getElementById('score').textContent = 'Score: ' + score;
        food = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
    } else {
        snake.pop();
    }

    snake.unshift(head);

    if (snakeCollision(head)) {
        clearInterval(gameLoop);
        alert('Game Over! Your score was ' + score);
    }

    drawGame();
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);
}

function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction !== 'right') direction = 'left';
    if (key === 38 && direction !== 'down') direction = 'up';
    if (key === 39 && direction !== 'left') direction = 'right';
    if (key === 40 && direction !== 'up') direction = 'down';
}

function snakeCollision(head) {
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}