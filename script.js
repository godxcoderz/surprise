function revealSurprise() {
    document.getElementById('surprise').classList.remove('hidden');
    confetti();
}

function showCaption(text) {
    const caption = document.getElementById('caption');
    caption.textContent = text;
    caption.classList.remove('hidden');
    setTimeout(() => caption.classList.add('hidden'), 3000);
}

function popBalloon(element, message) {
    element.style.display = 'none';
    alert(message);
    confetti();
}

function popHeart(element, message) {
    element.style.display = 'none';
    alert(message);
    confetti();
}

function finalSurprise() {
    document.getElementById('final-surprise').classList.remove('hidden');
    confetti();
}

function playMusic() {
    const audio = document.getElementById('music');

    // play music (only once)
    if (audio.paused) {
        audio.play();
    }

    // butterflies animation
    const container = document.getElementById('butterfly-container');
    const butterflies = ['🦋', '🦋', '🦋', '🦋', '🦋'];

    butterflies.forEach((emoji, i) => {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.textContent = emoji;
        butterfly.style.left = Math.random() * 100 + '%';
        butterfly.style.animationDelay = i * 0.3 + 's';

        container.appendChild(butterfly);

        // remove after animation
        setTimeout(() => {
            butterfly.remove();
        }, 4000);
    });
}
