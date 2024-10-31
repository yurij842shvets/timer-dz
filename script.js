const timer = document.querySelector('.timer')

let currentMinutes = 60

let countdown

function updateTimer() {
    let hours = Math.floor(currentMinutes / 60);
    let minutes = currentMinutes % 60;
    let seconds = 0;

    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
countdown = setInterval(() => {
    currentMinutes--

    updateTimer()

    if (currentMinutes == 30) {
        alert('залишилось 30хв')
    }

    if (currentMinutes == 0) {
        clearInterval(countdown)
        alert('час закінчився')
    }
}, 60000)

updateTimer()