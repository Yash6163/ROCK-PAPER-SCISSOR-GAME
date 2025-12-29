console.log("hello world");

function gethumanresponse(){
    let human=prompt("ENTER ROCK , PAPER OR SCISSOR : ");
    return human;
}

function generate_computer(){
    let choice= Math.floor(Math.random()*3);
    if(choice==1){
        return "Rock";
    }
    else if(choice==0){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function playgame(){
    let human=0;
    let computer=0;
    for(let i=1;i<=5;i++){
        let p1=gethumanresponse();//human
        let p2=generate_computer();//computer

        if(p1.toLowerCase()=="rock" && p2.toLowerCase()=="scissor" ){
            console.log("human wins ! ");
            human++;
        }
        else if(p1.toLowerCase()=="paper" && p2.toLowerCase()=="rock" ){
            console.log("human wins ! ");
            human++;
        }
        else if(p1.toLowerCase()=="scissor" && p2.toLowerCase()=="paper" ){
            console.log("human wins ! ");
            human++;
        }
        
        else if(p2.toLowerCase()=="rock" && p1.toLowerCase()=="scissor" ){
            console.log("computer wins ! ");
            computer++;
        }
        else if(p2.toLowerCase()=="paper" && p1.toLowerCase()=="rock" ){
            console.log("computer wins ! ");
            computer++;
        }
        else if(p2.toLowerCase()=="scissor" && p1.toLowerCase()=="paper" ){
            console.log("comptuer wins ! ");
            computer++;
        }
        else{
            console.log("its a tie next round begins !")
        }
        alert(`scorecard : human ${human} and computer : ${computer}`);
    }
    if(human>computer){
        alert("human wins ");
    }
    else if (computer>human){
        alert("computer wins");
    }
    else{
        alert("its a tie ")
    } 
}

playgame();


