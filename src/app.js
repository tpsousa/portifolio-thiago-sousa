


document.getElementById('btnDownload').addEventListener("click", function (){


    const urlCurriculo = "curriculo.pdf";

    const link = document.createElement("a");

    link.href = urlCurriculo;


    link.download = "Thiago-sousa-curriculo.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
})