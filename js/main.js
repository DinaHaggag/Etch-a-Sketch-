let color = "purple";
document.addEventListener("DOMContentLoaded",function(){
  
   
    let select = document.querySelector(".select")
    select.addEventListener("click",function(){
        let size = getSize();
        creatBoard(size);
    })
})
function creatBoard(size){
    let container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat( ${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat( ${size} , 1fr)`;

    let numDivs = size * size ;
    
    for ( let i=0 ;i <numDivs ; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.addEventListener("mouseover",function(){
            div.style.backgroundColor="purple";
        });
        container.insertAdjacentElement("beforeend",div);

    }

}

function getSize(){
    let input = prompt ("what is will be the size ?");
    let message = document.querySelector(".message")

    if (input == ""){
        message.innerHTML = "please provide a number";
    }

        else if ( input<=0 || input >100 ){
            message.innerHTML = "provide a number between 0 and 100 ";
    }
     
    else {
        message.innerHTML = "now you can play";
    }
    return input;
}

function reset (){
    let divs =document.getElementById("myDIV").children;
    divs.forEach((div)=>div.style.backgroundColor="white");
}

// function colorDiv(){
//     if (color == "random"){
//         this.backgroundColor =  Math.floor(Math.random()*16777215).toString(16);
//     }
//     else {
//         this.backgroundColor = "purple";
//     }
    
// }

// function setColor (colorChoice){
//     color = colorChoice;
// }
