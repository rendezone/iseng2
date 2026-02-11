// Get elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('questionScreen');
const successScreen = document.getElementById('successScreen');

// Yes button handler
yesBtn.addEventListener('click', () => {
    questionScreen.classList.remove('active');
    successScreen.classList.add('active');
});

// Function to make No button run away
let noBtnClicks = 0;

function makeNoButtonRunAway(e) {
    if (e) e.preventDefault();

    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Make Yes button bigger
    noBtnClicks++;

    // Use smaller multiplier on mobile to prevent overflow
    const isMobile = window.innerWidth <= 480;
    const multiplier = isMobile ? 0.3 : 1.5;
    const maxScale = isMobile ? 2.5 : 4; // Limit max scale

    const newScale = Math.min(1 + (noBtnClicks * multiplier), maxScale);
    yesBtn.style.transform = `scale(${newScale})`;

    // Change text
    const noTexts = ['Are you sure?', 'Really?', 'Think again!', 'Please? 🥺', 'Pretty please? 💕'];
    if (noBtnClicks <= noTexts.length) {
        noBtn.textContent = noTexts[noBtnClicks - 1];
    }
}

// No button handlers for different events
noBtn.addEventListener('mouseenter', makeNoButtonRunAway);
noBtn.addEventListener('touchstart', makeNoButtonRunAway);
noBtn.addEventListener('click', makeNoButtonRunAway);
