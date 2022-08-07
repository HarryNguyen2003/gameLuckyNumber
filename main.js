// Create variable luckyNumber random from 1 to 20
let luckyNumber = Math.trunc(Math.random()*20+1);
console.log(luckyNumber);

// When inputNumber and Click in Check button
document.querySelector('.check').addEventListener('click', function () {

    // create a variable to storage number input
    var inputNumber = Number(document.querySelector('.number').value);

    // Create a variable storage score
    const yourScore = document.querySelector('.score').textContent;

    if(inputNumber === luckyNumber){

        //Change messenger to ... and display lucky number 
        document.querySelector(".messenger").textContent = '🥳 Correct number!'
        document.querySelector('.luckyNumber').textContent = luckyNumber;

        // compare High-score and score
        if(Number(document.querySelector('.highscore').textContent) < yourScore){
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
        }

        //Change background-color
        document.querySelector('.header').style.backgroundColor = '#60b347';
        document.querySelector('.main').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.backgroundColor = '#60b347';
    } else if(inputNumber >20){

        //Change messenger to...
        document.querySelector(".messenger").textContent = '⚠️ Your number illegal'
    }else{

        // inputNumber > luckyNumber 
        if(inputNumber > luckyNumber){
            document.querySelector(".messenger").textContent = '📉 Too Long !'
        }

        // inputNumber < luckyNumber
        if(inputNumber < luckyNumber){
            document.querySelector(".messenger").textContent = '📈 Too Low !'
        }

        // Minus 5 point 
        if(yourScore > 0){
            document.querySelector('.score').textContent = Number(yourScore)-5;
        }else{
            document.querySelector(".messenger").textContent = '🤡 You very stupid'
        }
    }        
});

// Event onClick in button again
document.querySelector('.again').addEventListener('click', function(){
    luckyNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.luckyNumber').textContent = '?';
    document.querySelector('.score').textContent = 100;

    // 
    document.querySelector('.header').style.backgroundColor = 'black';
    document.querySelector('.main').style.backgroundColor = 'black';
    document.querySelector('.number').style.backgroundColor = 'black';
});