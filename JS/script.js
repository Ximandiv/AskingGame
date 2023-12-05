let timeFinished;
let timeInterval;

function StartTimer(){
    timeFinished = setTimeout(finishGame, 31000);
    timeInterval = setInterval(DecreaseSeconds, 1000);
}

function DecreaseSeconds(){
    let timer = document.getElementById('timer');

    let output = String(Number(timer.textContent) - 1).padStart(2, '0');

    timer.textContent = output;
}

function finishGame(){
    StopTimer();

    let audio = document.getElementById('gameoverAudio');

    buttonFinish.removeAttribute('hidden');
    button.hidden = true;
    
    audio.play();
    alert(`Game Over! Time's up.`);
}

function EndGame(){
    StopTimer();

    let timeNow = new Date();
    timeNow = timeNow.toLocaleString('es-Es');
    let buttonFinish = document.getElementById('buttonFinish');
    let button = document.getElementById('button');
    let answerOne = document.getElementById('answerOne').value;
    let answerTwo = document.getElementById('answerTwo').value;
    let answerThree = document.getElementById('answerThree').value;
    let answerFour = document.getElementById('answerFour').value;
    let answerFive = document.getElementById('answerFive').value;

    let output = `
    These are your answers
    First Question: ${answerOne}
    Second Question: ${answerTwo}
    Third Question: ${answerThree}
    Fourth Question: ${answerFour}
    Fifth Question: ${answerFive}
    Date and Hour: ${timeNow}`;

    buttonFinish.removeAttribute('hidden');
    button.hidden = true;

    alert(output);
}

function Reset(){
    location.reload();
}

function StopTimer(){
    clearTimeout(timeFinished);
    clearInterval(timeInterval);
}