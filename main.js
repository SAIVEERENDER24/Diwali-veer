import './style.css';

function createFirework() {
  const colors = ['#ffd700', '#ff4d4d', '#ff9933', '#ff1493', '#ffa500'];
  const firework = document.createElement('div');
  firework.className = 'firework';
  
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  firework.style.left = `${randomX}px`;
  firework.style.top = `${randomY}px`;
  firework.style.backgroundColor = randomColor;
  firework.style.boxShadow = `0 0 20px ${randomColor}`;
  
  document.body.appendChild(firework);
  
  const lifetime = 1000 + Math.random() * 1000;
  let opacity = 1;
  let size = 5;
  
  const animate = () => {
    opacity -= 1 / (lifetime / 16);
    size += 0.3;
    
    firework.style.opacity = opacity;
    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;
    firework.style.boxShadow = `0 0 ${size * 2}px ${randomColor}`;
    
    if (opacity <= 0) {
      firework.remove();
    } else {
      requestAnimationFrame(animate);
    }
  };
  
  animate();
}

function createDiyas() {
  const container = document.querySelector('.diya-container');
  const numDiyas = 8;
  
  for (let i = 0; i < numDiyas; i++) {
    const diya = document.createElement('img');
    diya.src = `/images/diya${(i % 3) + 1}.svg`;
    diya.className = 'diya';
    diya.style.left = `${Math.random() * 90}%`;
    diya.style.top = `${Math.random() * 90}%`;
    diya.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(diya);
  }
}

function initDiwaliCelebration() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="container">
      <h1 class="diwali-text">✨ Happy Diwali ✨</h1>
      
      <div class="wishes">
        <p class="message">
          Sai Veerender Perumandla wishes you a healthy and joyous Diwali!<br>
          May this festival of lights bring happiness, prosperity, and good health to you and your family.
        </p>
      </div>
      
      <div class="gallery">
        <div class="gallery-item">
          <img src="/images/diya1.svg" alt="Diwali Celebration">
        </div>
        <div class="gallery-item">
          <img src="/images/diya2.svg" alt="Festive Lights">
        </div>
        <div class="gallery-item">
          <img src="/images/diya3.svg" alt="Diwali Decorations">
        </div>
      </div>
      
      <div class="diya-container"></div>
    </div>
  `;
  
  createDiyas();
  setInterval(createFirework, 200);
}

initDiwaliCelebration();