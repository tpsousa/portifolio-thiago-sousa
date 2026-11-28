// Menu lateral (mobile)
const menuIcone = document.getElementById('menu-icone');
const sidebar = document.getElementById('side-bar');

if (menuIcone && sidebar) {
  menuIcone.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Carrossel de projetos: arrastar com o mouse e setas (se existirem)
const container = document.querySelector('.list-projects-container');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

if (container) {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });

  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
}

// Ver mais projetos (desktop)
const btnVerMais = document.getElementById('btn-ver-mais');
const listaProjetos = document.querySelector('.list-projects');

if (btnVerMais && listaProjetos) {
  btnVerMais.addEventListener('click', () => {
    const aberto = listaProjetos.classList.toggle('expandido');
    btnVerMais.textContent = aberto ? 'Ver menos' : 'Ver mais projetos';
    btnVerMais.setAttribute('aria-expanded', aberto);

    // Ao recolher, volta para o topo da seção
    if (!aberto) {
      document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
    }
  });
}