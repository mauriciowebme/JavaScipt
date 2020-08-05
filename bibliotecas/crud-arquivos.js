//inetale antes a biblioteca com "npm install fs"
let fs = require("fs");

/* No exemplo abaixo, informamos o local que será criado o arquivo
toda a informação que esse arquivo conterá, e por ultimo temos nossa função callback */
fs.writeFile("./files/example.txt",'Um breve texto aqui!', function(err){
	//Caro ocorra algum erro
  if(err){
		return console.log('Erro! Arquivo não criado!')
	}
  //Caso não tenha erro, retornaremos a mensagem de sucesso
	console.log('Arquivo Criado');
});
