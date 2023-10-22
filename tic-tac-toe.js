window.onload = function() {    //If I don't use this it acts weird

    //constants and variables to set up the game
    const boardCell = (document.getElementById('board')).querySelectorAll('div');
    const newGameBtn = document.querySelector('button.btn');
    const winner = document.getElementById('status');
    
    const winCombo = [[0,1,2],[3,4,5],[6,7,8],
                      [0,3,6],[1,4,7],[2,5,8],
                      [0,4,8],[2,4,6]
                     ];

    let gameBoard = ['', '', '',
                     '', '', '',
                     '', '', ''
                    ];
    const playerX = 'X';
    const playerO = 'O';
    let currentPlayer = playerX;
                     
    boardCell.forEach((element) => element.classList.add('square'));
    newGameBtn.addEventListener('click', newGame);
    newGameBtn.click();
    

    function newGame(){ //reset the board.
        boardCell.forEach((cell, index) => {
            cell.innerHTML = '';
            gameBoard = ['', '', '',
                         '', '', '',
                         '', '', ''];
            cell.classList.remove('X', 'O');
            cell.addEventListener('click', cellClick.bind(null, cell, index));
            cell.addEventListener('mouseover', cellHover.bind(null, cell));
            cell.addEventListener('mouseout', cellMouseOut.bind(null, cell));
            winner.classList.remove('you-won');
            document.getElementById('status').innerText = "Move your mouse over a square and click to play an X or an O."
        });
    }

    function cellHover(cell){
        cell.classList.add('hover');
    }
    function cellMouseOut(cell) {
        cell.classList.remove('hover');
    }

    function cellClick(cell, index){ 
        const id = cell.innerHTML;
        if (id === '') {
            if(currentPlayer === playerX){
                cell.innerHTML = playerX;
                cell.classList.add('X');
                currentPlayer = playerO;
                gameBoard[index] = playerX;
            }else {
                cell.innerHTML = playerO;
                cell.classList.add('O');
                currentPlayer = playerX;
                gameBoard[index] = playerO;
            }
        }
        if (isWinner()) {
            winner.classList.add('you-won');
            document.getElementById('status').innerText = currentPlayer + " " + "lost";
            disableBoard(); 
        }
        cell.removeEventListener('click', cellClick);
    }

    function disableBoard(){
        boardCell.forEach((cell) => {
            cell.removeEventListener('click', cellClick);
        });
    }

    function isWinner(){
        for (let i = 0; i < winCombo.length; i++) { //let index be the numbers in wincombo
            
            let x = winCombo[i][0];
            let y = winCombo[i][1];
            let z = winCombo[i][2];
            
            if ( (gameBoard[x] === gameBoard[y]) && (gameBoard[y] === gameBoard[z]) ) {
                if ((gameBoard[x] == playerO) || (gameBoard[x] == playerX)) {
                    return true;
                }
            }
        }
        return false;
    }
}