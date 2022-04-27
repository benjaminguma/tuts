const canvas = document.querySelector ('#cv');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const mouse = {
  x: undefined,
  y: undefined,
};
const ctx = canvas.getContext ('2d');
let h = 1;

console.log (ctx);
function dist (p1, p2) {
  let dx = Math.abs (p1.x - p2.x);
  let dy = Math.abs (p2.y - p1.y);

  dx *= dx;
  dy *= dy;

  return Math.sqrt (dx + dy);
}

console.log (ctx);

let particles = [];

class Particle {
  constructor () {
    this.x = mouse.x;
    this.y = mouse.y;
    this.radius = Math.abs (Math.random () * 50) + 1;
    this.vx = Math.random () * -10 + 8;
    this.vy = Math.random () * -10 + 8;
    this.acc = Math.random () * -3 + 2;
    this.fillStyle = `hsl(${h},50%,50%)`;
    h = (h + 1) % 360;
  }
  update (particles, index) {
    this.draw ();
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.radius -= 2;
    this.vx = this.vx + this.acc;
    // this.vy = this.vy + this.acc;

    if (
      this.x > innerWidth ||
      this.x < 0 ||
      this.y > innerHeight ||
      this.y < 0 ||
      this.radius < 1
    ) {
      particles.splice (index, 1);
    }
  }
  draw () {
    ctx.beginPath ();
    ctx.arc (this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.fillStyle;
    ctx.fill ();
  }
}

function drawCircle () {
  ctx.beginPath ();
  ctx.arc (mouse.x, mouse.y, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'red';

  ctx.fill ();
}

window.addEventListener ('mousemove', e => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
  addCircles (16);
});

function addCircles (number) {
  for (let i = 0; i < number; i++) {
    particles.push (new Particle ());
  }
}

function animate () {
  requestAnimationFrame (animate);
  ctx.fillStyle = 'rgba(0,0,0,.2)';
  ctx.fillRect (0, 0, innerWidth, innerHeight);
  particles.forEach ((particle, index) => {
    particle.update (particles, index);

    particles.forEach (p => {
      if (dist (particle, p) < 50) {
        ctx.beginPath ();
        ctx.moveTo (particle.x, particle.y);
        ctx.lineTo (p.x, p.y);
        ctx.strokeStyle = p.fillStyle;
        ctx.stroke ();
        ctx.closePath ();
      }
    });
  });
}
animate ();
