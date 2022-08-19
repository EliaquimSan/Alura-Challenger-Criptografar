const nPermitido = 'qwertyuiopasdfghjklçzxcvbnm ';
var botaoRecarregar = document.querySelector('#recarregar');
var copiar = document.querySelector('#copiarBtn');
var txtArea = document.querySelector("#txtAr");

function testeString(palavra){
	var ret = false;
	var a = palavra;
	

	for (var i = 0; i < a.length; i++){
		for (var o = 0; o < nPermitido.length; o++) {
			if (a[i] === nPermitido[o]){	
				ret = true;
				break;
			}else{
				ret = false;				
			}
		}					
	}
	return ret;
}


function Evento1(){

    const input = document.querySelector("input");
    const inputName = document.querySelector("textarea");
    const botaoCriptografar = document.querySelector("#criptografar");

	var texto = input.value;

	function criptografar(b) { 

		if (testeString(b)){

		var mensagem = b;
    	var msgEncriptada = mensagem.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("a", "ai").replaceAll("u", "ufat");			
			mensagem = msgEncriptada;

		}else{
			mensagem = alert("Caractere inválido! Recarregue e tente novamente.");
		}
		return mensagem;
	}

	var msgPronta = criptografar(input.value);
	inputName.value = msgPronta;
	botaoCriptografar.onclick = criptografar;
}

function Evento2(){

    const input = document.querySelector("input");
    const inputName = document.querySelector("textarea");
    const botaoDesCriptografar = document.querySelector("#descriptografar");

	var texto = input.value;


	function descriptografar(b) { 

		if (testeString(b)){

			var mensagem = b;
    		var msgEncriptada = mensagem.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ai", "a").replaceAll("ufat", "u");			
			mensagem = msgEncriptada;

		}else{
			mensagem = alert("Caractere inválido! Recarregue e tente novamente.");
		}
		return mensagem;
	}

	var dMsgPronta = descriptografar(input.value);
	inputName.value = dMsgPronta;
	botaoDesCriptografar.onclick = descriptografar;
}


function limparTexto() {
    document.getElementById('limpar').value = "";
}

botaoRecarregar.addEventListener("click", () => {
	location.reload();
})

function copiarTxt () {
	txtArea.select();
	document.execCommand('copy');
	alert("Copiado");
}