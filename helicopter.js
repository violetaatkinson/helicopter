class Helicopter {
    constructor(ctx) {
      this.img = new Image()
      this.img.src = "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png"
      this.img.frames = 4
      this.img.frameIndex = 0
      this.tick = 0
  
      this.ctx = ctx;
      this.h = 100
      this.w = 250
      this.x = 100
      this.y = 100
  
      this.g = 2
      this.vy = 0;
      this.vx = 0;
      
      this.weapon = new Weapon(this)
  
      this.actions = {
        up: false,
        left: false,
        right: false,
        jump: false,
        shoot: false
      }
  
      this.setListeners();
    }
  
    draw() {
        this.ctx.drawImage(
          this.img,
          0,
          this.img.frameIndex * (this.img.height / this.img.frames),
          this.img.width, 
          this.img.height / this.img.frames, 
          this.x, 
          this.y, 
          this.w, 
          this.h
      )
      this.animate()
    }
  
    isFloor() {
      return this.y + this.h >= FLOOR
    }
  
    move() {
      this.applyActions()
      this.vy += this.g
      this.y += this.vy;
      this.vx +=this.vx
      this.x += this.vx;
    }
  
    animate() {
        this.tick++
        if (this.tick > 8) {
          this.tick = 0
           if (this.img.frameIndex < this.img.frames - 1) {
              this.img.frameIndex++
          } else {
             this.img.frameIndex = 0
          }
        }
       
    }
  
    setListeners() {
      document.onkeydown = e => this.switchAction(e.keyCode, true)
      document.onkeyup = e => this.switchAction(e.keyCode, false)
    }
  
    applyActions() {
  
      this.isFloor()  
      
      if (this.actions.right) {
      this.vx =  2.5
      } else if (this.actions.left) {
      this.vx = -2.5
      } else {
      this.vx = 0
      }
      
      if ( this.actions.up) {
      this.vy = -2.5 * this.g
      } else {
      this.vy = 0
      }
  
    }
  
    switchAction(key, apply) {
  
      switch (key) {
        case LEFT:
          this.actions.left = apply
          break;
        case RIGHT:
          this.actions.right = apply
          break;
        case UP:
          this.actions.up = apply
          break;
        
      }
    
    }
  }
  