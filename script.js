console.log("welcome to tic tac toe game")

let music =new Audio("music.mp3")
let audioturn =new Audio("ting.mp3")
let gameover =new Audio("gameover.mp3")

let isgamover=false;

let Turn="X"
 
const changeTurn =() =>{
    return Turn ==="X"?"0":"X"
}

const checkwin =() =>{
    let boxtexts=document.getElementsByClassName('boxtext');
      let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
      wins.forEach(e =>{
             if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !=="")){
              document.querySelector('.info').innerText = boxtexts[e[0]].innerText +" won "

              isgamover=true
              document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="256px"
              gameover.play();
             }
      })
}

//game logic
//music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
      let boxtext=element.querySelector('.boxtext');
      element.addEventListener('click',() =>{
           if(boxtext.innerText ===''){
            boxtext.innerText=Turn;
            Turn=changeTurn();
            audioturn.play();
            checkwin();
            if(!isgamover){
            document.getElementsByClassName("info")[0].innerText= "turn for "+Turn;
            }
           }
      })
})

//Add on click listener to reset button
reset.addEventListener('click',() =>{
  let boxtexts=document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element =>{
         element.innerText=" "

  });
          Turn="X"
          isgamover=false
            document.getElementsByClassName("info")[0].innerText= "turn for "+Turn;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
            

})
