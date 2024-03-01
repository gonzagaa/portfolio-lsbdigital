var textos = ["ESCOLHA", "IMORTAL", "HTML", "CSS", "JAVASCRIPT", "EXPERIENCE"];
var indiceAtual = 0;
var letraAtual = 0;

function exibirTextoGradualmente() {
  var elementoTexto = document.getElementById("texto");
  var elementoTextoDois = document.getElementById("textoDois");
  var textoAtual = textos[indiceAtual];

  // Exibe o texto gradualmente, letra por letra
  elementoTexto.textContent = textoAtual.substring(0, letraAtual + 1);
  elementoTextoDois.textContent = textoAtual.substring(0, letraAtual + 1);

  // Incrementa a letra atual ou passa para o próximo texto
  if (letraAtual < textoAtual.length - 1) {
    letraAtual++;
  } else {
    // Reinicia para o próximo texto
    indiceAtual = (indiceAtual + 1) % textos.length;
    letraAtual = 0;
    // Aguarda por um curto período antes de iniciar o próximo texto
    setTimeout(exibirTextoGradualmente, 1000);
    return;
  }

  // Chama a função novamente após um intervalo curto
  setTimeout(exibirTextoGradualmente, 100);
}

// Chama a função uma vez para iniciar o processo
exibirTextoGradualmente();
