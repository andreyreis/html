/*alert("Sejam bem vindos!!");*/




function clique_botao()
{
alert("Você clicou no botão");
}

function somarValores(){
	var s1 = document.getElementById("txt1").value;
	
	var s2 = document.getElementById("txt2").value;
	
	var s3 = parseInt(s1) + parseInt(s2);
	
    document.getElementById('resultado').innerHTML = s3;
	
}

function validaForm() {
	var form = document.getElementById('formulario');
	
	alert(form.nome.value +" - "+ form.email.value +" - "+ form.sexo.value +" - "+ form.cargo.value)
	
	
	
	
	
}



