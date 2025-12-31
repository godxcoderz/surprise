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
    if (audio.paused) {
        audio.play();
    }
}
