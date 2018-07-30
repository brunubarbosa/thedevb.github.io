var idGlobal
var contCurso1 = 1
var contCurso2 = 1
window.onload = function(){inicio()}

function inicio(){
    document.getElementById('esconhderMostrar').onclick = function(){mostrarEsconder(1)}
    document.getElementById('esconhderMostrar2').onclick = function(){mostrarEsconder(2)}
    document.getElementById('html').onmouseover = function(){ partida(this.id)}
    document.getElementById('css').onmouseover = function(){ partida(this.id)}
    document.getElementById('javascript').onmouseover = function(){ partida(this.id)}
    document.getElementById('nodejs').onmouseover = function(){ partida(this.id)}
    document.getElementById('gulp').onmouseover = function(){ partida(this.id)}
    document.getElementById('ingles').onmouseover = function(){ partida(this.id)}
    document.getElementById('bootstrap').onmouseover = function(){ partida(this.id)}
    document.getElementById('sass').onmouseover = function(){ partida(this.id)}
    document.getElementById('sql').onmouseover = function(){ partida(this.id)}
    document.getElementById('linux').onmouseover = function(){ partida(this.id)}
    document.getElementById('projeto1').onclick = function(){projeto1()}
    document.getElementById('projeto2').onclick = function(){projeto2()}
}
function projeto1(){
    window.location.href="jogo/index.html"

}

function projeto2(){
    window.location.href="orcamento/index.html"

}




function mostrarEsconder(curso){
    if(curso === 1){
        if(contCurso1 === 1){
            document.getElementById('descricaoCurso1').style.display = 'block'
            contCurso1 = 0
        }else{
            document.getElementById('descricaoCurso1').style.display = 'none'
            contCurso1 = 1 
        }

    }else{
        if(contCurso2 === 1){
            document.getElementById('descricaoCurso2').style.display = 'block'
            contCurso2 = 0
        }else{
            document.getElementById('descricaoCurso2').style.display = 'none'
            contCurso2 = 1
        }
    }

    
}

function partida(id){
    var chamada = new Tratamento(id)
    
}

class Tratamento{
    constructor(id){
        this.id = id
        idGlobal = id
        switch(this.id){
            case "html":
                this.html()
                break;
            case "css":
                this.css()
                break;
            case "javascript":
                this.javascript()
                break;
             case "nodejs":
                this.nodejs()
                break;
            case "gulp":
                this.gulp()
                break;
            case "ingles":
                this.ingles()
                break;
            case "bootstrap":
                this.bootstrap()
                break;
            case "sass":
                this.sass()
                break;
            case "sql":
                this.sql()
                break;
            case "linux":
                this.linux()
                break;
            
        }
    }
    html(){
        var txt = 'esse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para htmlesse é meu texto para html'
        this.adicionarElemento(txt)

    }
    css(){
        var txt = 'esse é meu texto para css esse é meu texto para css esse é meu texto para css esse é meu texto para css esse é meu texto para css esse é meu texto para css esse é meu texto para css esse é meu texto para css esse é meu texto para css esse é meu texto para css '
        this.adicionarElemento(txt)

    }
    javascript(){
        var txt = 'esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js esse é meu texto para js '
        this.adicionarElemento(txt)

    }
    nodejs(){
        var txt = 'esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs esse é meu texto para nodejs '
        this.adicionarElemento(txt)

    }
    gulp(){
        var txt = 'esse é meu texto para gulp esse é meu texto para gulp esse é meu texto para gulp esse é meu texto para gulp esse é meu texto para gulp esse é meu texto para gulp esse é meu texto para gulp esse é meu texto para gulp esse é meu texto para gulp'
        this.adicionarElemento(txt)

    }
    ingles(){
        var txt = 'esse é meu texto para ingles esse é meu texto para ingles esse é meu texto para ingles esse é meu texto para ingles esse é meu texto para ingles esse é meu texto para ingles esse é meu texto para ingles esse é meu texto para ingles esse é meu texto para ingles '
        this.adicionarElemento(txt)

    }
    bootstrap(){
        var txt = 'esse é meu texto para bs esse é meu texto para bs esse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bs '
        this.adicionarElemento(txt)

    }
    sass(){
        var txt = 'esse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bsesse é meu texto para bs'
        this.adicionarElemento(txt)

    }
    sql(){
        var txt = 'esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql esse é meu texto para sql '
        this.adicionarElemento(txt)

    }
    linux(){
        var txt = 'esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux esse é meu texto para linux '
        this.adicionarElemento(txt)

    }
    adicionarElemento(txt){
        var conteudo = document.createTextNode(txt)
        var titulo = document.createTextNode(idGlobal)
        document.getElementById("adicionarElementoH3").innerHTML=""; 
        document.getElementById('adicionarElementoH3').appendChild(titulo)
        document.getElementById("adicionarElementoP").innerHTML=""; 
        document.getElementById('adicionarElementoP').appendChild(conteudo)
    }
}