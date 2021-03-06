class Bola {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }
//desenha a bola na tela
   draw() {
 
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(this.x,this.size);
    ctx.bezierCurveTo(7,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
   }
   //atualiza a posição da bola na tela

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
      }

      if ((this.x - this.size) <= 0) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }
//veruifica a colisão entre as bolas
   collisionDetect(Bolas) {
      for (var bola of Bolas) {
         if (!(this === bola)) {
            const dx = this.x - bola.x;
            const dy = this.y - bola.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + bola.size) {
              bola= this.color = randomRGB();
            }
         }
      }
   }

}
