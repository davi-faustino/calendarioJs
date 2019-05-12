function nomeDias(location){
	// Adiciona o nome dos dias ao calendário //
	var nomeDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	location.insertRow(0);

	for( $i = 0; $i < 7; $i++ ){
		location.rows[0].insertCell($i);
		location.rows[0].cells[$i].innerHTML = nomeDias[$i];
	}
}

function nomeMes(mes){
	// Retorna o nome do mês //
	// Janeiro é 0 e Dezembro é 11 //
	var nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

	return nomeMes[mes];
}

function numeroDias(mes, ano){
	// Retorna o número de dias do mês //
	// Janeiro é 0 e Dezembro é 11 //
	var numeroDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if (((ano % 4) == 0 && (ano % 100)!=0) || (ano % 400)==0){
		// Altera o numero de dias de fevereiro se o ano for bissexto //
		numeroDias[1] = 29;
	}

	return numeroDias[mes];
}

function gerarCalendario(){
	// Saber qual a data atual e guardar numa variavel o dia, mês, ano e em que dia da semana vamos
	var data_atual = new Date();
	var mes = data_atual.getMonth();
	var dia = data_atual.getDate();
	var ano = data_atual.getFullYear();

	var diaaa = new Date(ano, mes, '1')
	var dia_semana = diaaa.getDay();
	var diacorrente = 0;

	//Identificar o mês
	document.getElementById("mes").innerHTML = nomeMes(mes);

	var tabela = document.getElementById("tabela_calend");

	// chama a função que coloca o nome dos dias na tabela //
	nomeDias(tabela);

	for (var linha = 1; linha < 6; linha++) {
		tabela.insertRow(linha)
		for (var coluna = 0; coluna < 7; coluna++) {
			tabela.rows[linha].insertCell(coluna)

			if( (diacorrente == dia && mes == mes)){	

			}else{
				if((diacorrente + 1) <= numeroDias(mes, ano)){
					if( coluna < dia_semana && linha == 1){
						tabela.rows[linha].cells[coluna].style.backgroundColor = '#f5f3f3';
					}else{

					}
				}else{
					tabela.rows[linha].cells[coluna].style.backgroundColor = '#f5f3f3';
				}
			}

			// /* TRECHO IMPORTANTE: A PARTIR DESTE TRECHO É MOSTRADO UM DIA DO CALENDÁRIO (MUITA ATENÇÃO NA HORA DA MANUTENÇÃO) */

			if( diacorrente + 1 <= numeroDias(mes, ano) ){
				if( coluna < dia_semana && linha == 1){

				}else{
					tabela.rows[linha].cells[coluna].innerHTML = ++diacorrente;
					tabela.rows[linha].cells[coluna].setAttribute("id", diacorrente);
				}
			}else{
				break;
			}

		// /* FIM DO TRECHO MUITO IMPORTANTE */
		}

	}
}