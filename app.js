const $ = document.querySelector.bind(document)

const html = {
    links: [...$('.tab-links').children],
    conteudos: [...$('.tab-content').children],
    openTab: $('[data-open]')
}

function NavegacaoDasTabs(){

    function escondaTodasTabContent(){
         html.conteudos.forEach(secao =>{
            secao.style.display = "none"
        })
    }
    
    function removerTodasClassesAtivas(){
        html.links.forEach(tab =>{
            tab.className = tab.className.replace("active","")
        })
    }
    
    function mostrarTabAtual(id){
        const conteudoDaTab = $('#' + id)
        conteudoDaTab.style.display = "block"
    }

    function selecionarTab(event){
        escondaTodasTabContent()
         
        const target = event.currentTarget
        mostrarTabAtual(target.dataset.id)

        target.className += "active"
    }
    
    function escuteAsMudanca(){
        html.links.forEach(tab=>{
            tab.addEventListener('click',selecionarTab)
        })
    }
    
    function iniciar(){
        escondaTodasTabContent()
        escuteAsMudanca()

        html.openTab.click()
    }

    return{
        iniciar
    }
}

window.addEventListener('load', ()=>{
    const navegacaoDasTabs = NavegacaoDasTabs()
    navegacaoDasTabs.iniciar()
})
