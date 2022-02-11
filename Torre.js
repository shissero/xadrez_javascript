class Torre extends Peca{

    constructor(elemento, conjunto){

        super(elemento, conjunto);
        this.primeiroMovimento = true;
    }

    executarMovimento(movimento){

        this.primeiroMovimento = false;
        this.mudarPosicao(movimento.destino);
  
        if(movimento.natureza === "CAPTURA"){

            this._conjunto.destruir(movimento.destino, -this.cor);
        }
    }

    gerarMovimentos(){

        return this.gerarMovimentosCardeais(false);
    }

    mover(){

        this.movimentos = this.gerarMovimentos();
	
	    if(this.movimentos.length == 0) return null;
	    else{
	
	    	let mov = this.movimentos[Math.floor(Math.random()*this.movimentos.length)];
            
            this.executarMovimento(mov);
	
    	    return mov;
        }
    }
}