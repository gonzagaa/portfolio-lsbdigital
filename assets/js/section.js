const sectionApresentacao = document.querySelector('section.apresentacao')

window.addEventListener('scroll', () => {
  const alturaScrollY = window.scrollY
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 768) {
    if (alturaScrollY < 50) {
      sectionApresentacao.classList.remove('oculto')
    } else {
      sectionApresentacao.classList.add('oculto')
    }
  } else {
    if (alturaScrollY < 50) {
      sectionApresentacao.classList.remove('oculto')
    } else {
      sectionApresentacao.classList.add('oculto')
    }
  }
})
