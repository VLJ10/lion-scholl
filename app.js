'use strict'

async function buscarNomeCurso() {
    const responseApi = await fetch('https://lion-school-backend.onrender.com/cursos')
    const dados = await responseApi.json()
    return dados
}

async function nomeBotao(dadosCurso) {

    const botaoDS = document.getElementById('botao1')
    const botaoRedes = document.getElementById('botao2')

    const iconeDS = document.createElement('i')
    iconeDS.className = "fa-solid fa-code"

    const textoDS = document.createElement('p')
    textoDS.textContent = dadosCurso[0].sigla

    const iconeRedes = document.createElement('i')
    iconeRedes.className = "fa-solid fa-sitemap"

    botaoDS.replaceChild()
    botaoDS.appendChild(iconeDS);
    botaoDS.appendChild(textoDS);

}
async function conteudomain() {

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
    const iconeDS = document.createElement('i')
    iconeDS.className = "fa-solid fa-code"
    iconeDS.style.color = 'white'

    botaoDS.append(iconeDS)


    const botaoRedes = document.createElement('button')
    const iconeRedes = document.createElement('i')
    iconeRedes.className = "fa-solid fa-sitemap"
    iconeRedes.style.color = 'white'

    botaoRedes.append(iconeRedes)

    const imagenTa = document.createElement('img')
    const imagenTab = document.createElement('img')
    const imagenTabl = document.createElement('img')
    const imagenTable = document.createElement('img')

    mainSectionLeft.append(titulo, imagenTablet)
    mainSectionRight.append(botaoDS, botaoRedes)
    main.append(mainSectionLeft, imagenAluna, mainSectionRight)


}
conteudomain()
console.log(await buscarNomeCurso())