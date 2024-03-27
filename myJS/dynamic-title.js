/*
  myJS lib by @criskkky

  FEEL FREE TO USE THIS LIBRARY (https://raw.githubusercontent.com/criskkky/criskkky.github.io/main/static/myJS/*.js)
  JUST GIVE ME CREDIT, THANKS! ~~ @criskkky

  I'LL BE UPDATING THIS LIBRARY, SO KEEP AN EYE ON IT!
*/

const animatedTitle = document.getElementById('animatedTitle');
const titleTexts = ['Servicios de Formateo',
    'Servicios de Instalación',
    'Servicios de Activación',
    'Servicios de Optimización',
    'Servicios de Mantención',
    'Servicios de Recuperación',
    'Servicios de Diagnóstico',
    'Servicios de Reparación'];
let currentTitleIndex = 0;

function updateTitle() {
    animatedTitle.textContent = titleTexts[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % titleTexts.length;
}

setInterval(updateTitle, 1000);