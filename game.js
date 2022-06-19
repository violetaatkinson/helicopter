class Game {
    constructor(ctx) {
      this.ctx = ctx
      this.background = new Background(this.ctx)
      this.obstacles = []
      this.helicopter = new Helicopter(this.ctx)
      this.intervalId = null
      this.thisObstacles = 0 // contador de interevalo de osbtaculos 
  
    }
  
    start() {
      this.intervalId = setInterval(() => {
        this.clear()
        this.draw()
        this.move()
        this.thisObstacles++ // se inclementa el intervalo en 1
        if (this.thisObstacles % 200 === 0) {
          // cada 100 intervalos, agregamos 1 obstaculo
          this.addObstacle();
        }
  
      }, 1000 / 60)
  
    }
  
    clearObstacles() {}
  
    addObstacle() {
      this.obstacles.push(new Obstacle(this.ctx))
    }
  
    clear() {
      this.ctx.clearRect(
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height
      )
    }
  
    draw() {
      this.background.draw()
      this.helicopter.draw()
      this.obstacles.forEach(obs => obs.draw())
    }
  
    move() {
      this.background.move()
      this.helicopter.move()
      this.obstacles.forEach(obs => obs.move())
      this.checkCollisions()
    }
  
    checkCollisions() {
      let playerVsObs = this.obstacles.find(obs => obs.collide(this.helicopter))
  
      if (playerVsObs || this.helicopter.y + this.helicopter.h >= this.ctx.canvas.height) {
        this.gameOver()
      }
      if (this.helicopter.isFloor()) {
        this.gameOver()
      }
  
    }
  
    gameOver() {
      clearInterval(this.intervalId);
      this.intervalId = null
      this.ctx.font = "30px Arial";
      this.ctx.fillStyle = "red";
      this.ctx.textAlign = "center";
      this.ctx.fillText("GAME OVER", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    }
  
  }