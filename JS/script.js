"use strict"; 
/*
Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.

Bonus:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/ 

//HTML Play button
const playButton = document.getElementById('play');

//GAME FUNCTION
function play() {
    console.log('start playing . . .');
    const welcomeMsg = document.getElementById('welcome_msg');
    welcomeMsg.innerHTML = '';

    const NUM_BOMBS = 16;
    const bombsPosition = [];
    
    // 3 LEVELS GRIDS
    let cellNum;
    const pField = document.getElementById('playing_field');
    pField.innerHTML = '';
    const levelHtml = document.getElementById('level');
    const level = levelHtml.value;
    switch(level){
        case '1':
        default:
            cellNum = 100;
            break;
        case '2':
            cellNum = 81;
        break; 
        case '3':
            cellNum = 49;
        break;       
    }

    //RANDOM 16 CELL WITH BOMB
    while(bombsPosition.length < NUM_BOMBS){
        const bomb = randomNumber(1,cellNum);
        if(!bombsPosition.includes(bomb)){
            bombsPosition.push(bomb);
        }
    }
    console.log(bombsPosition);

    //DRAW CELL
    function drawCell(num){
        const cellForSide = Math.sqrt(cellNum);
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.style.width = `calc(100% / ${cellForSide})`;
        cell.style.height = `calc(100% / ${cellForSide})`;
        cell.innerHTML = `<span>${num}</span>`;

        cell.addEventListener('click', function(){

           this.classList.add('green');

            console.log(num);
        })
        return cell;
    }

    //DRAW PLAYING FIELD
    function drawGrid(){
        const grid = document.createElement('div');
        grid.className = 'grid';
        for(let i = 1; i <= cellNum; i++){
            const cell = drawCell(i);
            grid.appendChild(cell);
        }
        pField.appendChild(grid);
    }

    //INVOKE THE FUNCTION
    drawGrid();

}

//EVENT LISTENER LINKED TO PLAY BUTTON
playButton.addEventListener('click', play);