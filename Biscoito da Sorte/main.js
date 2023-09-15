/* animação de vibrar o biscoito */ 
const elemento = document.getElementById('biscoitinho');
let animationFrame;

function startVibration() {
  let x = 0;

  function mover() {
    x += 1;
    const deslocamento = Math.sin(x) * 3;
    elemento.style.transform = `translate(${deslocamento}px, ${deslocamento}px)`

  animationFrame = requestAnimationFrame(mover)
  }

  mover();
}

function stopVibration() {
  cancelAnimationFrame(animationFrame)
  elemento.style.transform = 'translate(0, 0)'
}

elemento.addEventListener('mouseenter', startVibration)
elemento.addEventListener('mouseleave', stopVibration)


/* script ao abrir o biscoito */ 
const biscoitinho = document.getElementById('biscoitinho');
const biscoitoFechado = document.querySelector('.biscoito-fechado');
const biscoitoAberto = document.getElementById('biscoitoAberto');
const abrirNovo = document.getElementById('abrirNovo');

function abrirBiscoito() {
  biscoitoFechado.style.display = 'none';
  biscoitoAberto.style.display = 'flex';
}

function abrirNovoBiscoito() {
  biscoitoAberto.style.display = 'none';
  biscoitoFechado.style.display = 'flex';
}

biscoitinho.addEventListener('click', abrirBiscoito);
abrirNovo.addEventListener('click', abrirNovoBiscoito);


/* sorteio de frases */
function abrirBiscoito() {
  biscoitoFechado.style.display = 'none';
  biscoitoAberto.style.display = 'flex';
  const sorte = sortearNovaFrase();
  document.getElementById('sorte').textContent = sorte;
}

function abrirNovoBiscoito() {
  biscoitoAberto.style.display = 'none';
  biscoitoFechado.style.display = 'flex';
}

function sortearNovaFrase() {
  const sorteio = Math.floor(Math.random() * frasesSorte.children.length);
  return frasesSorte.children[sorteio].textContent;
}

biscoitinho.addEventListener('click', abrirBiscoito);
abrirNovoBiscoito.addEventListener('click', abrirNovoBiscoito);
