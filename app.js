function tocarSom(e){
    const codigoLetra = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${codigoLetra}"]`)
    if(!audio) return

    const tecla = document.querySelector(`div[data-key="${codigoLetra}"]`)
    tecla.classList.add("tocando")
    audio.ariaCurrent = 0
    audio.play()
}

function removeClasse(e){
    if(e.propertyName !== 'transform') return
    e.target.classList.remove('tocando')
}

const todasTeclas = Array.from(document.querySelectorAll('.tecla'))
todasTeclas.forEach(tecla => tecla.addEventListener('transitionend', removeClasse))
window.addEventListener("keydown",tocarSom)