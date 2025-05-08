// Play sound on click
const clickSound = new Audio('pop.mp3');
document.addEventListener('click', () => {
  clickSound.currentTime = 0;
  clickSound.play();
});
// Ripple click effect
document.addEventListener('click', e => {
    const ripple = document.createElement('div');
    ripple.className = 'click-effect';
    ripple.style.left = `${e.clientX - 10}px`;
    ripple.style.top = `${e.clientY - 10}px`;
    document.body.appendChild(ripple);
  
    setTimeout(() => {
      ripple.remove();
    }, 600); // same duration as animation
  });
  