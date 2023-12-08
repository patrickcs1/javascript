
		
var myImage = document.querySelector('img');

	myImage.onclick = function(){
	
    var mySrc = myImage.getAttribute('src');
	
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/space.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

	var num1;
	var num2;

	num1 === num2;
		
	var lista = [1,'nome',"idade"];
	

var meuJogoFavorito = 'super mario world';

	if (meuJogoFavorito === 'super mario world'){
		
		alert('sim,o meu jogo favorito é:' + meuJogoFavorito);
	}else{
		
		alert('nao,o meu jogo favorito é:' + meuJogoFavorito);
}

    
	function multiplicar(num,num2){
	
	
	var resultado = num * num2;
	
	return resultado;
		
}

	function adicionar(num1,num2){
		
		var resultado = num1 + num2;
		
		return resultado;
		
	}
	
	function subtrair(num1,num2){
		
		var resultado = num1 - num2;
		
		return resultado;
		
	}


function dividir(num1,num2){
		
		var resultado = num1 / num2;
		
		return resultado;
		
	}

function testefuncao(){
	
	return "teste";
}

/**document.querySelector('html').onclick = function(){
	
	alert("teste");
}**/
    
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	
  var myName = prompt('Por favor, digite seu nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
  
  if(!localStorage.getItem('name')) {
	  
	setUserName();
	
	}else {
		
	  var storedName = localStorage.getItem('name');
	  myHeading.textContent = 'Mozilla is cool, ' + storedName;
	  
	}
}



myButton.onclick = function() {
  setUserName();
}


	