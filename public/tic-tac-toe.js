// Your code here

//need something that keeps player state (x or o)
// x is first in lineup
//every cell has attribute of haveSymbol and will only allow click if false
//players should be a class - maybe?
//functionaly of buttons priority now
// game-state:


/************* global variables ***********/

let currPturn = "x";

let imageX = new Image();
imageX.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";

let imageY = new Image();
imageY.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";


// event listener to know what currPturn is, needs to know if the cell is occupied, and it also needs to currPturn after performing action

function newGame() {
    for(let i = 0; i < 9; i++) {

        
        let currentID = document.getElementById(`square-${i}`)
        console.log(`current Id: ${currentID}`)
        currentID.setAttribute("hasSymbol",false)


        eListener(currentID)
    }
}
newGame();
function eListener(id){
    id.addEventListener('click', ()=>{
        if(currPturn === 'x' && !id.hasSymbol){

            //get the image from url
            id.appendChild(imageX)
            //add image to div
            //toggle x to o
            currPturn = 'o'
            //change id hasSymbol to true
            id.setAttribute("hasSymbol", true)
        }
        else if(currPturn === 'o' && !id.hasSymbol){
            id.appendChild(imageY)

            currPturn = 'x'
            id.setAttribute("hasSymbol", true)
        }
        else{
            //display an error that the move is invalid
            console.error("Invalid Move")
        }

    })
}
