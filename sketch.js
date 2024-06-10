let palavra;

function setup() {
  createCanvas(500, 500);
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = [
    "01100001 01101101 01101111 00100000 01110010 01101111 01100011 01101011",
    ".- -- --- / .-. --- -.-. -.-",
    "amo rock.s2",
  ];
  return random(palavras);
}

function inicializaCores() {
  background("black");
  fill("palegreen");
  textFont("Courier New", 10);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 0, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 20, 250);
}
