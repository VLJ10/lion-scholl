'use strict'

async function buscarNomeCurso() {
    const responseApi = await fetch('https://lion-school-backend.onrender.com/cursos')
    const dados = await responseApi.json()
    return dados
}

async function nomeBotao(dadosCurso) {



}
async function conteudomain() {

    const nomeCurso = await buscarNomeCurso()

    const main = document.getElementById('main')

    const mainSectionLeft = document.createElement('div')
    mainSectionLeft.className = 'main-section-left'

    const palavraColorida = document.createElement('span')
    palavraColorida.textContent = 'curso'
    palavraColorida.style.color = '#3347b0'
    palavraColorida.style.fontWeight = 'bold'

    const titulo = document.createElement('h1')
    titulo.append('Escolha um ', palavraColorida, ' para gerenciar')

    const imagenTablet = document.createElement('img')
    imagenTablet.src = './img/devices.png'

    const imagenAluna = document.createElement('img')
    imagenAluna.src = './img/studant.jpg'

    // Seção direita
    const mainSectionRight = document.createElement('div')
    mainSectionRight.className = 'main-section-right'

    const botaoDS = document.createElement('button')
    botaoDS.className = 'botao-ds'
    const iconeDS = document.createElement('i')
    iconeDS.className = "fa-solid fa-code"
    iconeDS.style.color = 'white'
    const textDS = await nomeCurso[0].sigla

    botaoDS.append(iconeDS, textDS)

    const botaoRedes = document.createElement('button')
    const iconeRedes = document.createElement('i')
    iconeRedes.className = "fa-solid fa-sitemap"
    iconeRedes.style.color = 'white'
    const textRedes = await nomeCurso[1].sigla

    botaoRedes.append(iconeRedes, textRedes)

    mainSectionLeft.append(titulo, imagenTablet)
    mainSectionRight.append(botaoDS, botaoRedes)
    main.append(mainSectionLeft, imagenAluna, mainSectionRight)
    
    botaoDS.addEventListener('click', () => {
        main.replaceChildren()
    })
    botaoRedes.addEventListener('click', () => {
        main.replaceChildren()
    })

}
conteudomain()
console.log(await buscarNomeCurso())