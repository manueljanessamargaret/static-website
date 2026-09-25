document.addEventListener('DOMContentLoaded', () => {

    // Live Digital Clock
    function updateLiveClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const clockElem = document.getElementById('live-clock');
        if (clockElem) {
            clockElem.textContent = timeString;
        }
    }
    updateLiveClock();
    setInterval(updateLiveClock, 1000);

    // Countdown Timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 25);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        const countdownElem = document.getElementById('countdown-timer');

        if (!countdownElem) return;

        if (distance < 0) {
            countdownElem.textContent = "ORDERS CLOSED FOR THIS BATCH";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const pad = (n) => String(n).padStart(2, '0');
        countdownElem.textContent = `${pad(days)}D | ${pad(hours)}H | ${pad(minutes)}M | ${pad(seconds)}S`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Interactive Theme Switcher
    const themeBtn = document.getElementById('theme-btn');
    const themeStatus = document.getElementById('theme-status');

    if (themeBtn && themeStatus) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeStatus.textContent = "Current Mode: Dark Mode";
                themeBtn.textContent = "TOGGLE LIGHT MODE";
            } else {
                themeStatus.textContent = "Current Mode: Light Mode";
                themeBtn.textContent = "TOGGLE DARK MODE";
            }
        });
    }

});