class Obstacle {
    constructor(ctx) {
      this.ctx = ctx;
      this.dist = Math.random() * 100 + 200
      this.y = Math.random() > 0.5 ? - this.dist : this.dist
      this.x = this.ctx.canvas.width;
      this.h = this.ctx.canvas.height;
      this.w = 70;
      this.color = 'red';
   
      this.vx = -2;
    }
  
    draw() {
      // Pintar un cuadrado
      this.ctx.beginPath()
      this.ctx.fillStyle = 'red'
      this.ctx.fillRect(this.x, this.y, this.w, this.h)
      this.ctx.closePath()
    }
  
    move() {
      this.x += this.vx;
    }
  
    collide(el) {
      const collideX = el.x + el.w > this.x && el.x < this.x + this.w
      const collideY = el.y < this.y + this.h && el.y + el.h > this.y
  
      return collideX && collideY
    }
  
    isVisible() {
      return this.x + this.w >= 0
    }
  }