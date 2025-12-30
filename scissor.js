function gethumanresponse(){
    let human=prompt("ENTER ROCK , PAPER OR SCISSOR : ");
    return human;
}

console.log("hello world");

function generate_computer(){
    let choice = Math.floor(Math.random()*3);
    if(choice == 1){
        return "rock";      // 🔧 small fix
    }
    else if(choice == 0){
        return "paper";
    }
    else{
        return "scissor";
    }
}

// 🔧 moved outside (STATE)
let human = 0;
let computer = 0;
let rounds = 0;

function playgame(p1){

    if(rounds === 5){
        alert("Game Over");
        return;
    }

    let p2 = generate_computer();
    rounds++;

    if(p1.toLowerCase()=="rock" && p2=="scissor"){
        alert("human wins !");
        human++;
    }
    else if(p1.toLowerCase()=="paper" && p2=="rock"){
        alert("human wins !");
        human++;
    }
    else if(p1.toLowerCase()=="scissor" && p2=="paper"){
        alert("human wins !");
        human++;
    }
    else if(p2=="rock" && p1.toLowerCase()=="scissor"){
        alert("computer wins !");
        computer++;
    }
    else if(p2=="paper" && p1.toLowerCase()=="rock"){
        alert("computer wins !");
        computer++;
    }
    else if(p2=="scissor" && p1.toLowerCase()=="paper"){
        alert("computer wins !");
        computer++;
    }
    else{
        alert("its a tie");
    }

    alert(`scorecard : human ${human} and computer : ${computer}`);

    //  final result check
    if(rounds === 5){
        if(human > computer){
            alert("human wins");
        }
        else if(computer > human){
            alert("computer wins");
        }
        else{
            alert("its a tie");
        }
    }
}


const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playgame("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playgame("paper");
});

const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => {
    playgame("scissor");
});
