const cards = document.querySelectorAll('.rotate-box');

cards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('rotated'); // Toggles the class on/off
    });
});