
/* document.getElementById('btnDownload').addEventListener("click", function (){

    const urlCurriculo = "curriculo.pdf";
    
    const link = document.createElement("a");

    link.href = urlCurriculo;

    link.download = "Thiago-sousa-curriculo.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}) */

//pegar a menu e a side bar,para quando o usuario clicar no menu aparecer a side bar

const menuIcone = document.getElementById('menu-icone');
const sidebar = document.getElementById('side-bar');

menuIcone.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

const form = document.getElementById('contato');

form.addEventListener("click",()=>{
  
});

const container = document.querySelector('.list-projects-container');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let isDown = false;
let startX;
let scrollLeft;

// Drag com o mouse
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
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2;
  container.scrollLeft = scrollLeft - walk;
});

// Setas
leftArrow.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});
