/*6. Реализовать игру в крестики-нолики. 2 игрока по очереди выставляю крестики нолики в поле 3 на 3. После каждого необходимо проверять, что выиграл ли игрок, который ходил последним. Если все клетки заполнены и никто не выиграл, то выводить сообщение о ничье. */

let cells = document.querySelectorAll('.cell');
let player = document.querySelector('.player');
let playerX = 'X';
let moves = 0;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            cell.textContent = playerX;
            moves++;
            if (checkWin()) {
                player.textContent = `Победил игрок ${playerX}!`;
                disableCells();
            } else if (moves === 9) {
                player.textContent = 'Ничья!';
                disableCells();
            } else {
                playerX = playerX === 'X' ? 'O' : 'X';
                player.textContent = `Ходит игрок ${playerX}`;
            }
        }
    });
});

function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (cells[a].textContent === playerX && cells[b].textContent === playerX && cells[c].textContent === playerX) {
            return true;
        }
    }

    return false;
}

function disableCells() {
    cells.forEach(cell => {
        cell.removeEventListener('click', () => { });
    });
}

