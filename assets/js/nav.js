const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
  const altura = window.scrollY
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 768) {
    if (altura < 50) {
      nav.classList.remove('scroll')
    } else {
      nav.classList.add('scroll')
    }
  } else {
    if (altura < 200) {
      nav.classList.remove('scroll')
    } else {
      nav.classList.add('scroll')
    }
  }
})
