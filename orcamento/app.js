var x
class Despesa{
	constructor(ano, mes, dia, tipo, descricao, valor){
		this.ano = ano
		this.mes=  mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}
	validarDados(){
		for(let i in this){
			if(this[i] == undefined || this[i] == '' || this[i] == null){
				return false
			}
			}
				return true
		}
	}


class Bd{
	constructor(){
		
		var id = localStorage.getItem('id')
		if(id === null){
			id = localStorage.setItem('id', 0)
		}
		
	}
	getProximoId(){
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}
	gravar(d){
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))
		
		localStorage.setItem('id', id)
	}

	recuperarTodosRegistros(despesasFiltradas){
		if(despesasFiltradas != null){
			
			return carregaListaDespesa(despesasFiltradas)
		}
		let despesas = []
		let id = localStorage.getItem('id')
		for(let i = 1; i<=id; i++){
			let despesa = JSON.parse(localStorage.getItem(i))
			if(despesa === null){
				continue
			}
			despesas.push(despesa)
			


		}
		return despesas
	}
	pesquisar(despesa){
		let despesasFiltradas = []
		despesasFiltradas = this.recuperarTodosRegistros()
		if(despesa.ano!=''){
			despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
		}
		if(despesa.mes!=''){
			despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
		}
		if(despesa.dia!=''){
			despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
		}
		if(despesa.descricao!=''){
			despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
		}
		if(despesa.tipo!=''){
			despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
		}
		if(despesa.valor!=''){
			despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
		}
		this.recuperarTodosRegistros(despesasFiltradas)
	}
}
let bd = new Bd()


function cadastrarDespesa(){
	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')
	let despesa = new Despesa(
		ano.value, mes.value, 
		dia.value, 
		tipo.value, 
		descricao.value, 
		valor.value
	)
	if (despesa.validarDados()){
		bd.gravar(despesa)
		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso!'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'
		document.getElementById('modal_conteudo').innerHTML= 'Sua despesa foi adicionada com sucesso!'
		document.getElementById('botao').innerHTML= 'ok'
		document.getElementById('botao').className = 'btn btn-success'
		$('#modalRegistraDespesa').modal('show')
		ano.value = ''
		mes.valuevalue = ''
		dia.value = ''
		tipo.value = ''
		descricao.value = ''
		valor.value = ''
	}else{


		
		document.getElementById('modal_titulo').innerHTML = 'Sua despesa não foi adicionada!'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
		document.getElementById('modal_conteudo').innerHTML= 'Há um ou mais campos em branco'
		document.getElementById('botao').innerHTML= 'Voltar'
		document.getElementById('botao').className = 'btn btn-danger'

		

		$('#modalRegistraDespesa').modal('show')

	}

}

function carregaListaDespesa(itens){
	var listaDespesas = document.getElementById('listaDespesas')
	let despesas = []
	if(itens!=null){
		despesas = itens
		var elemento = document.getElementById("listaDespesas");
		while (elemento.firstChild) {
  			elemento.removeChild(elemento.firstChild);
		}
		
	}else{
		despesas = bd.recuperarTodosRegistros()
	}
	
	


	despesas.forEach(function(d){
		
		var elementotr = document.createElement('tr')
		elementotr.insertCell(0).innerHTML= `${d.dia}/ ${d.mes}/ ${d.ano}`
		switch(d.tipo){
			case '1':
				d.tipo = 'Alimentação'
				break
			case '2':
				d.tipo = 'Educação'
				break
			case '3':
				d.tipo = 'Lazer'
				break
			case '4':
				d.tipo = 'Saúde'
				break
			case '5':
				d.tipo = 'Transporte'
				break

		}
		elementotr.insertCell(1).innerHTML= d.tipo
		elementotr.insertCell(2).innerHTML= d.descricao
		elementotr.insertCell(3).innerHTML= d.valor
		listaDespesas.appendChild(elementotr)
	})

}

function pesquisarDespesa(){
	let dia =document.getElementById('dia').value
	let ano =document.getElementById('ano').value
	let mes =document.getElementById('mes').value
	let tipo =document.getElementById('tipo').value
	let descricao =document.getElementById('descricao').value
	let valor =document.getElementById('valor').value
	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)
	bd.pesquisar(despesa)
}