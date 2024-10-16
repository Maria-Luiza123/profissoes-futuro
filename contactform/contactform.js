jQuery(document).ready(function($) {
  "use strict";

  //Contact
  function valida() { 
			var nome = contato.nome.value;
			var email = contato.email.value;
			var nota = contato.nota.value;
		
			if (nome == "") {
			   alert('Por favor, Preencha o campo com seu nome!');
			   contato.nome.focus();
			return false;
			}

			if (email == "") {
			   alert('Preencha o campo com seu email');
			   contato.email.focus();
			return false;
			}

			if (nota == "") {
				alert('Preencha o campo com a sua nota!');
			   contato.nota.focus();
			return false;
			}
			
			alert("Dados enviados com sucesso!");
			contato.reset(); 

		}
  });

});
