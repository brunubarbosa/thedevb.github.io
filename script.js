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
    document.getElementById('git').onmouseover = function(){ partida(this.id)}
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
                this.html('HTML')
                break;
            case "css":
                this.css('CSS')
                break;
            case "javascript":
                this.javascript('JavaScript')
                break;
             case "nodejs":
                this.nodejs('NodeJS')
                break;
            case "gulp":
                this.gulp('Gulp')
                break;
            case "ingles":
                this.ingles('Inglês')
                break;
            case "bootstrap":
                this.bootstrap('Bootstrap')
                break;
            case "sass":
                this.sass('SASS')
                break;
            case "sql":
                this.sql('SQL')
                break;
            case "linux":
                this.linux('Linux')
                break;
            case "git":
                this.git('Git')
                break;
            
        }
    }
    html(nome){
        var txt = 'Conheço essa linguagem de marcação há um bom tempo, tenho muita facilidade para colocar projeto em prátia  e fazer um bom uso semântico das tags.'
        this.adicionarElemento(txt,nome)

    }
    css(nome){
        var txt = 'Conheço os principais comandos para estilizar uma página com CSS, atualmente estou aprendendo a fazer além disso, estou aprendendo a fazer efeito visuais, coisas que só parecem ser possivel com uma linguagem de programação mas que o CSS se sai muito bem com o benefício de deixar a página mais leve'
        this.adicionarElemento(txt,nome)

    }
    javascript(nome){
        var txt = 'Minha linguagem de programação preferida, é onde eu aplico meu conhecimento em programação orientada a objetos e lógica de programação, manipulo o DOM e o BOM de uma pagina HTML e estou constantemente aprendendo novas coisas'
        this.adicionarElemento(txt,nome)

    }
    nodejs(nome){
        var txt = 'Essa é a linguagem sever side em que eu mais me encanto, apesar de nesse começo de carreira profissional estar focado no client side eu conheço o básico da tecnologia e pretendo me aprofundar'
        this.adicionarElemento(txt, nome)

    }
    gulp(nome){
        var txt = 'Esse automatizado de tarefas é uma ferramenta incrível, entrou para minha lista de utilidades recentemente e é indispensável para projetos maiores onde o tempo precisa ser otimizado'
        this.adicionarElemento(txt, nome)

    }
    ingles(nome){
        var txt = 'Essa é a principal linguagem que um programador deve saber, com isso em mente venho aprendendo cada dia mais e pretendo alcançar a fluência em breve'
        this.adicionarElemento(txt, nome)

    }
    bootstrap(nome){
        var txt = 'Essa é minha preferida framework, com ela consigo ter uma página muito mais amigável em muito menos tempo, domino bem essa tecnologia e consigo fazer coisas incríveis com ela'
        this.adicionarElemento(txt, nome)

    }
    sass(nome){
        var txt = 'Esse pré processador CSS me ajuda a otimizar meu tempo me permitindo usar lógica para escrever minah folha de estilos, gosto de usar em projetos grandes junto ao Gulp'
        this.adicionarElemento(txt, nome)

    }
    sql(nome){
        var txt = 'Tenho conhecimento intermediário em banco de dados, conheço mais especificamente MySQL e SQL Server, domino os principais comandos de query'
        this.adicionarElemento(txt, nome)

    }
    linux(nome){
        var txt = 'Apesar de preferir o Windows para uso pessoal o linux em um ambiente de trabalho acaba tendo um melhor desempenho, atualmente utilizo linux apenas para fins de aprendizagem, mais especificamente linha de comandos'
        this.adicionarElemento(txt, nome)

    }
    git(nome){
        var txt = 'Costumo usar Git em todos meus projetos, tanto para garantir versão anterior em caso de falhas quanto para fazer upload do mesmo no GitHub, uma ferramenta indispensável em qualquer projeto.'
        this.adicionarElemento(txt,nome)
    }

    adicionarElemento(txt, nome){
        var conteudo = document.createTextNode(txt)
        var titulo = document.createTextNode(nome)
        document.getElementById("adicionarElementoH3").innerHTML=""; 
        document.getElementById('adicionarElementoH3').appendChild(titulo)
        document.getElementById("adicionarElementoP").innerHTML=""; 
        document.getElementById('adicionarElementoP').appendChild(conteudo)
    }
}