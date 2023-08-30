class NegociacaoController{
    
    constructor(){

        let $ = document.querySelector.bind(document);
        this._data = $('#data');
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
    }
    
    adiciona(event){
        event.preventDefault();
        
        let data = new Date(this._data.value.split('-'));
        
        let negociacao = new Negociacao(data, parseInt(this._quantidade.value, parseFloat(this._valor.value)));
        console.log(negociacao)

       
    
    }
}