// Setas dos carrosséis
document.querySelectorAll('.carrossel').forEach((carrossel) => {
  const faixa = carrossel.querySelector('.carrossel__faixa');

  carrossel.querySelectorAll('.carrossel__botao').forEach((botao) => {
    botao.addEventListener('click', () => {
      const sentido = botao.classList.contains('carrossel__botao--anterior') ? -1 : 1;
      faixa.scrollBy({ left: sentido * faixa.clientWidth, behavior: 'smooth' });
    });
  });
});
