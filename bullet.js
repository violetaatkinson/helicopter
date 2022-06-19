class Bullet {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.vx = 1 ;
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
      this.ctx.stroke(); 
    }
  
    move() {
      this.x += this.vx
    }
  
    isVisible() {
    }
  }