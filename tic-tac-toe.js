window.onload = function() {    //If I don't use this it acts weird

    //constants and variables to set up the game
    const boardCell = (document.getElementById('board')).querySelectorAll('div');
    const newGameBtn = document.querySelector('button.btn');
    const winner = document.getElementById('status');
    
    const winCombo = [[0,1,2],[3,4,5],[6,7,8]
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
    

    function newGame(){ //reset the board.
        boardCell.forEach((cell, index) => {
            cell.innerHTML = '';
            cell.classList.remove('X', 'O');
            cell.addEventListener('click', cellClick.bind(null, cell, index));
        });
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
        }
        cell.removeEventListener('click', cellClick);
    }

    function isWinner(){

    }
}