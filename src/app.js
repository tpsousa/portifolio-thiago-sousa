



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
