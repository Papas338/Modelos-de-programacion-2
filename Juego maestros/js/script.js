$(document).ready(inicio)
$(document).keydown(manejar_evento)

var puntaje = 0;
var vida = 50;

function inicio() {
  lienzo = $("#lienzo")[0];
  contexto = lienzo.getContext("2d");
  buffer = document.createElement("canvas");
  estudiante = new estudiante();
  bMaestroD = [new maestroD(), new maestroD()];
  bMaestroI = [new maestroI(), new maestroI()];
  mMaestroD = [new mMaestroD(), new mMaestroD()];
  mMaestroI = [new mMaestroI(), new mMaestroI()];

  animar();
}

function animar() {
  buffer.width = lienzo.width;
  buffer.height = lienzo.height;
  contextoBuffer = buffer.getContext("2d");
  contextoBuffer.clearRect(0, 0, buffer.width, buffer.height);

  estudiante.dibujar(contextoBuffer);
  estudiante.moverse();

  for (i = 0; i < 2; i++) {
    bMaestroD[i].dibujar(contextoBuffer);
    bMaestroD[i].actualizar(i);
    bMaestroI[i].dibujar(contextoBuffer);
    bMaestroI[i].actualizar(i);
    mMaestroD[i].dibujar(contextoBuffer);
    mMaestroD[i].actualizar(i);
    mMaestroI[i].dibujar(contextoBuffer);
    mMaestroI[i].actualizar(i);
  }

  contexto.clearRect(0, 0, lienzo.width, lienzo.height);
  contexto.drawImage(buffer, 0, 0);
  cambioPuntaje();
	cambioVida();

  setTimeout("animar()", 20);
}

function manejar_evento(event) {
  if (event.which == 38 || event.which == 87)
    estudiante.moverse('arriba');
  if (event.which == 40 || event.which == 83)
    estudiante.moverse('abajo');
  if (event.which == 39 || event.which == 68)
    estudiante.moverse('derecha');
  if (event.which == 37 || event.which == 65)
    estudiante.moverse('izquierda');
}


function estudiante() {
  this.x = 686;
  this.y = 286;
  this.img = [$("#player")[0]];
  this.sprite = 0;

  this.dibujar = function(ctx) {
    ctx.drawImage(this.img[this.sprite], this.x, this.y);
  }

  this.moverse = function(accion) {
    if (accion == "derecha") {
      this.x = this.x + 15;
      this.sprite = 0;

    }
    if (accion == "izquierda") {
      this.x = this.x - 15;
      this.sprite = 0;
    }
    if (accion == "arriba") {
      this.y = this.y - 15;
      this.sprite = 0;
    }
    if (accion == "abajo") {
      this.y = this.y + 15;
      this.sprite = 0;
    }
    if (this.x == -15 || this.x == -38) {
      this.x = lienzo.width - 128;
    } else {

      if (this.x == lienzo.width - 113 || this.x == lienzo.width - 90) {
        this.x = 0;
      }
    }
  }

}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambioPuntaje() {
  var imprimepuntaje = "Puntaje: " + puntaje;
  contexto.font = "30px Comic Sans MS";
  contexto.fillStyle = "white";
  contexto.fillText(imprimepuntaje, 10, 30);
}
function cambioVida() {
  var imprimevida = "Vida: " + vida;
  contexto.font = "30px Comic Sans MS";
  contexto.fillStyle = "white";
  contexto.fillText(imprimevida, 10, 70);
}

function maestroD() {
  this.x = getRandomArbitrary(276, 340) * 4;
  this.y = getRandomArbitrary(0, 80) * 7;
  this.vel = getRandomArbitrary(3,6);
  this.img = [$("#bueno")[0]];
  this.sprite = 0;

  this.dibujar = function(ctx) {
    ctx.drawImage(this.img[this.sprite], this.x, this.y);
  }

  this.actualizar = function(numbar) {
    this.x -= this.vel;
    this.sprite = 0;
    colisionMaestroD(numbar);
    if (this.x - 51 <= 0) {
      this.x = getRandomArbitrary(276, 340) * 4;
      this.y = getRandomArbitrary(0, 80) * 7;
			this.vel = getRandomArbitrary(3,6);
		}
  }
}

function maestroI() {
  this.x = getRandomArbitrary(0, 80) * 4;
  this.y = getRandomArbitrary(0, 80) * 7;
  this.vel = getRandomArbitrary(3,6);
  this.img = [$("#bueno")[0]];
  this.sprite = 0;

  this.dibujar = function(ctx) {
    ctx.drawImage(this.img[this.sprite], this.x, this.y);
  }

  this.actualizar = function(numbar) {
    this.x += this.vel;
    this.sprite = 0;
    colisionMaestroI(numbar);
    if (this.x - 51 <= 0) {
      this.x = getRandomArbitrary(276, 340) * 4;
      this.y = getRandomArbitrary(0, 80) * 7;
			this.vel = getRandomArbitrary(3,6);
		}
  }
}


function mMaestroD() {
  this.x = getRandomArbitrary(276, 340) * 4;
  this.y = getRandomArbitrary(0, 80) * 7;
  this.vel = getRandomArbitrary(3,6);
  this.img = [$("#malo")[0]];
  this.sprite = 0;

  this.dibujar = function(ctx) {
    ctx.drawImage(this.img[this.sprite], this.x, this.y);
  }

  this.actualizar = function(numbar) {
    this.x -= this.vel;
    this.sprite = 0;
    colisionMaestroMD(numbar);
    if (this.x - 51 <= 0) {
      this.x = getRandomArbitrary(276, 340) * 4;
      this.y = getRandomArbitrary(0, 80) * 7;
			this.vel = getRandomArbitrary(3,6);
		}
  }
}

function mMaestroI() {
  this.x = getRandomArbitrary(0, 80) * 4;
  this.y = getRandomArbitrary(0, 80) * 7;
  this.vel = getRandomArbitrary(3,6);
  this.img = [$("#malo")[0]];
  this.sprite = 0;

  this.dibujar = function(ctx) {
    ctx.drawImage(this.img[this.sprite], this.x, this.y);
  }

  this.actualizar = function(numbar) {
    this.x += this.vel;
    this.sprite = 0;
    colisionMaestroMI(numbar);
    if (this.x - 51 <= 0) {
      this.x = getRandomArbitrary(276, 340) * 4;
      this.y = getRandomArbitrary(0, 80) * 7;
			this.vel = getRandomArbitrary(3,6);
		}
  }
}


function colisionMaestroD(numbar2) {
  if ((((bMaestroD[numbar2].x + 51 >= estudiante.x - 50) && (bMaestroD[numbar2].x + 51 <= estudiante.x + 50)) ||
	((bMaestroD[numbar2].x - 51 >= estudiante.x - 50) && (bMaestroD[numbar2].x - 51 <= estudiante.x + 50))) &&
	(((bMaestroD[numbar2].y + 41 >= estudiante.y - 61) && (bMaestroD[numbar2].y + 41 <= estudiante.y + 61)) ||
	((bMaestroD[numbar2].y - 56 <= estudiante.y + 64) && (bMaestroD[numbar2].y - 56 >= estudiante.y - 64))))
	 {
			puntaje = puntaje + 1;
  }
}

function colisionMaestroI(numbar2) {
	if ((((bMaestroI[numbar2].x + 51 >= estudiante.x - 50) && (bMaestroI[numbar2].x + 51 <= estudiante.x + 50)) ||
	((bMaestroI[numbar2].x - 51 >= estudiante.x - 50) && (bMaestroI[numbar2].x - 51 <= estudiante.x + 50))) &&
	(((bMaestroI[numbar2].y + 41 >= estudiante.y - 61) && (bMaestroI[numbar2].y + 41 <= estudiante.y + 61)) ||
	((bMaestroI[numbar2].y - 56 <= estudiante.y + 64) && (bMaestroI[numbar2].y - 56 >= estudiante.y - 64))))
	 {
			puntaje = puntaje + 1;
  }
}

function colisionMaestroMD(numbar2) {
	if ((((mMaestroD[numbar2].x + 51 >= estudiante.x - 50) && (mMaestroD[numbar2].x + 51 <= estudiante.x + 50)) ||
	((mMaestroD[numbar2].x - 51 >= estudiante.x - 50) && (mMaestroD[numbar2].x - 51 <= estudiante.x + 50))) &&
	(((mMaestroD[numbar2].y + 41 >= estudiante.y - 61) && (mMaestroD[numbar2].y + 41 <= estudiante.y + 61)) ||
	((mMaestroD[numbar2].y - 56 <= estudiante.y + 64) && (mMaestroD[numbar2].y - 56 >= estudiante.y - 64))))
	 {
			puntaje = puntaje - 1;
			vida = vida - 1;
			if (vida == 0){
				alert("Su puntaje fue: " + puntaje);
				location.reload(true);
			}
  }
}

function colisionMaestroMI(numbar2) {
	if ((((mMaestroI[numbar2].x + 51 >= estudiante.x - 50) && (mMaestroI[numbar2].x + 51 <= estudiante.x + 50)) ||
	((mMaestroI[numbar2].x - 51 >= estudiante.x - 50) && (mMaestroI[numbar2].x - 51 <= estudiante.x + 50))) &&
	(((mMaestroI[numbar2].y + 41 >= estudiante.y - 61) && (mMaestroI[numbar2].y + 41 <= estudiante.y + 61)) ||
	((mMaestroI[numbar2].y - 56 <= estudiante.y + 64) && (mMaestroI[numbar2].y - 56 >= estudiante.y - 64))))
	 {
			puntaje = puntaje - 1;
			vida = vida - 1;
			if (vida == 0){
				alert("Su puntaje fue: " + puntaje);
				location.reload(true);
			}
  }
}
