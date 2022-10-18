"use strict"; 
/*
CONSEGNA:

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:

1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*/ 

//HTML Play button
const playButton = document.getElementById('play');

//GAME FUNCTION
function play() {
    // console.log('start playing . . .');

    // REMOVE WELCOME MESSAGE
    const welcomeMsg = document.getElementById('welcome_msg');
    welcomeMsg.innerHTML = '';

    // 16 BOMB RANDOM
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

            if(bombsPosition.includes(num)){
                this.classList.add('bomb');
            } else{
                this.classList.add('green');
            }
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