const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.createElement('button');
restartBtn.textContent = 'Start Again';
restartBtn.style.display = 'none';
timerEl.after(restartBtn);

let countdown;

function startTimer() {
  startBtn.remove();
  let timeLeft = 60;
  countdown = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerEl.textContent = formattedTime;
    timerEl.style.fontSize = '110px'; // Add this line to set font size to 110px
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdown);
      timerEl.textContent = 'Congratulations, you did nothing for a minute!';
      restartBtn.style.display = 'block';
    }
  }, 1000);
}

function restartTimer() {
  restartBtn.style.display = 'none';
  startTimer();
}

startBtn.addEventListener('click', startTimer);
restartBtn.addEventListener('click', restartTimer);

startTimer();
