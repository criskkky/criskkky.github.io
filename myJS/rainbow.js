/*
  myJS lib by @criskkky

  FEEL FREE TO USE THIS LIBRARY (https://raw.githubusercontent.com/criskkky/criskkky.github.io/main/static/myJS/*.js)
  JUST GIVE ME CREDIT, THANKS! ~~ @criskkky

  I'LL BE UPDATING THIS LIBRARY, SO KEEP AN EYE ON IT!
*/

/*=============== RAINBOW ===============*/
// Get the rainbow link
const rainbowLink = document.getElementById('rainbowLink');

// Set rainbow colors array
const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#7F00FF', '#FF00FF', '#FF007F'];

// Set the animation speed
const animationSpeed = 10000;

// Apply the rainbow effect to the link
rainbowLink.style.transition = 'all 1s ease-in-out';

// Function to apply the rainbow effect
function applyRainbowEffect() {
    let currentPosition = 0;

    setInterval(() => {
        rainbowLink.style.color = 'black';
        rainbowLink.style.fontWeight = 'bold';
        rainbowLink.style.borderRadius = '0.8rem';
        rainbowLink.style.padding = '0.2rem 0.5rem';
        rainbowLink.style.backgroundColor = rainbowColors[currentPosition];

        currentPosition = (currentPosition + 1) % rainbowColors.length;
    }, animationSpeed / rainbowColors.length);
}

// Call the function to apply the rainbow effect
applyRainbowEffect();