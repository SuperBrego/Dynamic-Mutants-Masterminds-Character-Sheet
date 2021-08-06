
function AvaliableEffectList(){
    let content = "";
    content += "<div id='BiLateralListPopUp'>";
    content += "<div id='BiLateralListItem1'>";
    content += "<table class='PopUpItensTable'>";

    for (let i = 0; i < _EffectsList.length; i++) {

        curEffect = _EffectsList[i];

        content += "<tr><td>";
        content += "<button class='PopUpAddItem' value=" + curEffect.id + " onclick='AddPower(this.value)' onmouseover='ShowDescription(this.value, 5)'>";
        content += curEffect.name;
        content += "</button>";
        content += "</td></tr>";
    }

    content += "</table>";
    content += "</div>"; // Fim de Item 1

    // Campo para descrição das Vantagens
    content += "<div id='BiLateralListItem2'> </div>"; 
    content += "</div>"; // Fim de Grid
    return content;
}

/**
 * 
 * @param {int} effectID 
 * Adiciona um poder a partir de seu efeito.
 */
function AddPower(effectID){

    closePopUp();

    let _effect = _EffectsList.find( element => element.id == effectID );

    // Cria-se um novo poder.
    let power = Object.assign({}, powerDefault);
    power.id = _MainCharacter.Powers.id++;
    power.effectName = _effect.name;
    power.effectID = effectID;
    power.baseCost = _effect.baseCost;
	power.type = _effect.type;

	// Div do poder.
	let divDocument = document.createElement('div');
	divDocument.id = "Power" + power.id;
	divDocument.className = 'PowerTable';
	divDocument.innerHTML = PowerStructure(power);
	power.element = divDocument;

    _MainCharacter.Powers.list.push(power);

	if(_MainCharacter.Powers.list.length % 2 == 0) 
		$('#RightPowerCollum').append(power.element);
    else $('#LeftPowerCollum').append(power.element);

}

/**
 * 
 * Remove Poder em questão.
 */
function RemovePower(powerID) {
	let powerIndex = _MainCharacter.Powers.list.findIndex( element => element.id == powerID );
	_MainCharacter.Powers.list.splice(powerIndex, 1);

	$("#Power" + powerID).remove();
}

/**
 * Aumenta a graduação do poder em questão.
 */
function IncreaseRank(powerID){
	
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.baseRanks += 1;

	$("#Power" + power.id).html( PowerStructure(power) );
}

function ReduceRank(powerID){

	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.baseRanks -= 1;

	$("#Power" + power.id).html( PowerStructure(power) );
}

/**
 * Modelos de Poder.
 */

function PowerStructure(power){

	let tableContent = "";
	let powerOptions = "";

	tableContent += "<table border='3'>"
	+ "<tr>"
	+ "<th colspan='3'>"
	+ "<input type='text' placeholder='Nome do poder...' class='PowerName'>"
	+ "</th>"
	+ "<th><b>Graduação</b>: </th>"
	+ "<th>";
	if(power.baseRanks == 1)
		tableContent += "<button class='minusButton' value='"+ power.id +"' onclick='ReduceRank(this.value)' id='power-"+ power.id +"-GradMinus' disabled>-</button> &nbsp;";
	else
		tableContent += "<button class='minusButton' value='"+ power.id +"' onclick='ReduceRank(this.value)' id='power-"+ power.id +"-GradMinus' >-</button> &nbsp;";
	
	tableContent += "<span id='Power"+ power.id +"Ranks' >"+ power.baseRanks + "</span>";

	tableContent += "&nbsp; <button class='plusButton' value='"+ power.id +"' onclick='IncreaseRank(this.value)'>+</button>" 
	+ "</th>"
	+ "<th> <button value='"+ power.id +"' onclick='RemovePower(this.value)' class='DeleteButton'>X</button></th>"
	+ "</tr>"
	+ "<tr>"
	+ "<td><b>EFEITO</b>:</td>"
	+ "<td>"+ power.effectName +"</td>"
	+ "<td><b>TIPO</b></td>"
	+ "<td>"+ power.type +"</td>"
	+ "<td><b>DESCRITORES</b></td>"
	+ "<td><input type='text'></td>"
	+ "</tr>"
	+ "<tr>"
	+ "<td><b>AÇÃO</b>:</td>"
	+ "<td>"+ power.actionToString +"</td>"
	+ "<td><b>ALCANCE</b></td>"
	+ "<td>"+ power.rangeToString +"</td>"
	+ "<td><b>DURAÇÃO</b></td>"
	+ "<td>"+ power.durationToString +"</td>"
	+ "</tr>"
	+ "<tr>"
	+ "<td colspan='1'><b>Gastos</b>: </td>"
	+ "<td colspan='2'>\(Base " + power.baseCost + " + Extras " + power.totalExtraPerRank() + " - Falhas " + power.totalFlawsPerRank() + ") * Grads. " 
	+ power.baseRanks + "  + Fixos " + power.totalFlat() + ""
	+ "</td>"
	+ "<td colspan='2'><b>Total de Pontos Gastos</b>:</td>"
	+ "<td> "+ power.totalPointSpent() +"</td>"
	+ "</tr>";

	let effectID = parseInt(power.effectID);

	// Aqui vão campos adicionais caso sejam poderes diferentes.
	 switch(effectID){
		/**
		 * Aflição - 5001
		 */
		case 5001:
			tableContent += afflictionFields();
			break;
		/**
		 * Ilusão - 5018; Sentido Remoto - 5035
		 */
		case (5035 || 5018):
			tableContent += sensoryOptionsFields();
			break;
		/**
		 * Ambiente - 5003; Camuflagem - 5004; Compreender - 5007
		 * Controle de Sorte - 5009; Movimento - 5027; Imunidade - 5020
		 * Sentidos - 5036
		 */
		case 5003:
		case 5004: 
		case 5007:
		case 5009: 
		case 5027:
		case 5020:
		case 5036:
			powerOptions += powerOptionsFields();
			break;
		/**
		 * Defesa Impenetrável - 5044
		 */
		 case (5044): break;
		 default: 
			tableContent += "";
			break;
	}

	tableContent += "";

	tableContent += "<tr>"
	+ 	"<td rowspan='4' colspan='3'>"
	+ 		"<b>Descrição</b>:"
	+ 		"<textarea id='power-"+ power.id +"-description' value='"+ power.description +"'> </textarea>"
	+ 	"</td>";

	if (powerOptions == ""){
		tableContent += powerOptions;
		tableContent += ""
		+ 	"<td colspan='3' style='vertical-align: top;'>"
		+ 		"<button class='AddPowerTrait'>Adicionar Extras ou Falhas</button>"
		+ 	"</td></tr>"
	}
	else {
		tableContent += powerOptions
		+ 	"<td colspan='3' rowspan=' 2 ' style='vertical-align: top;'>"
		+ 		"<button class='AddPowerTrait'>Adicionar Extras ou Falhas</button>"
		+ 	"</td></tr>"
	}
	+ "</table>";

	return tableContent;
}

/**
 * Campos adicionais de Aflições.
 * 
 * @returns string
 */
function afflictionFields(){

	let afflictionText = "<tr>"
	+ "<td colspan='4'><b>SALVAMENTO</b></td>"
	+ "<td colspan='2'>"
	+ 		"<select>"
	+ 			"<option>- Opções - </option>"
	+ 			"<option>Esquiva</option>"
	+ 			"<option>Aparar</option>"
	+ 			"<option>Fortitude</option>"
	+ 			"<option>Resistência</option>"
	+ 			"<option>Vontade</option>"
+ 			"</select>"
	+	"</td>"
	+ "</tr>"
	+ "<tr>"
	+ 	"<td><b>Primeira</b></td>"
	+ 		"<td style='width: 100px;'>"
	+ 			"<select>"
	+ 				"<option disabled selected>- Opções -</option>"
	+ 				"<option>Impedido</option>"
	+ 				"<option>Fadigado</option>"
	+ 				"<option>Prejudicado</option>"
	+ 				"<option>Tonto</option>"
	+ 				"<option>Transe</option>"
	+ 				"<option>Vulnerável</option>"
	+ 			"</select>"
	+	"</td>"
	+ 	"<td><b>Segunda</b></td>"
	+ 		"<td style='width: 100px;'>"
	+ 			"<select>"
	+ 				"<option disabled selected>- Opções -</option>"
	+ 				"<option>Atordoado</option>"
	+ 				"<option>Caído</option>"
	+ 				"<option>Compelido</option>"
	+ 				"<option>Desabilitado</option>"
	+ 				"<option>Exausto</option>"
	+ 				"<option>Imóvel</option>"
	+ 				"<option>Indefeso</option>"
	+ 			"</select>"
	+	"</td>"
	+ 	"<td><b>Terceira</b></td>"
	+ 		"<td style='width: 100px;'>"
	+ 			"<select>"
	+ 				"<option disabled selected>- Opções -</option>"
	+ 				"<option>Adormecido</option>"
	+ 				"<option>Controlado</option>"
	+ 				"<option>Desatento</option>"
	+ 				"<option>Incapacitado</option>"
	+ 				"<option>Paralisado</option>"
	+ 				"<option>Transformado</option>"
+ 			"</select>"
	+	"</td>"
	+ "</tr>";
	return afflictionText;
}

function sensoryOptionsFields(){
	let sensoryOptions = "<tr>"
	+ "<td colspan='2'><b>Sentidos</b></td>"
	+ "<td colspan='2'>"
	+ 		"<select>"
	+			"<option disabled selected>- Opções -</option>"
	+ 			"<option>1 Tipo</option>"
	+ 			"<option>2 Tipos</option>"
	+ 			"<option>3 Tipos</option>"
	+ 			"<option>4 Tipos</option>"
	+ 			"<option>Todos Sentidos</option>"
	+		"</select>"
	+	"</td>"
	+ "<td colspan='2'>"
	+ 	"<input type='text' value='' placeholder='Sentido\(s\)'>"
	+ "</td>"
	+ "</tr>"
	return sensoryOptions;
}

function powerOptionsFields(){
	let powerOptions = "<tr><td colspan='3' style='vertical-align: top;'>"
	+ 		"<button class='AddPowerTrait'>Adicionar Opções de Poder</button>"
	+ 	"</td>"
	+ "</tr>";
	return powerOptions;
}

function powerCreation(){
	let _table, _line, _cell, _input, _button;

	_table = document.createElement('table');
	_table.setAttribute('border', '1');
	_table.style.border = '2px solid black';

	// ----------- Header ----------------
	_line = document.createElement('tr');
	// Nome 
	_cell = document.createElement('th');
	_cell.setAttribute('colspan', '3');
		// Input do nome
	_input = document.createElement('input');
	_input.setAttribute('type', 'text');
	_input.setAttribute('placeholder', 'Nome do Poder...');
	if(power.name != "") _input.setAttribute('value', power.name);
	
	_cell.append(_input);
	_line.append(_cell);

	// Graduações
	_cell = document.createElement('th');
	_cell.innerHTML = "<b>Graduação</b>:";
	
	_line.append(_cell);

	// Botões de Graduações
	_cell = document.createElement('th');
		// Menos
	_button = document.createElement('button');
	_button.setAttribute('value', power.id);
	_button.setAttribute('onclick', 'ReduceRank(this.value)');
	_button.className = 'minusButton';
	_button.id = 'power'+ power.id +'GradMinus';
	_button.innerHTML = '-';
	if(power.baseRanks == 1) _button.disabled = true;

	_cell.append(_button);
	_cell.append("&nbsp;" + power.baseRanks + "&nbsp;");

		// Mais
	_button = document.createElement('button');
	_button.setAttribute('value', power.id);
	_button.setAttribute('onclick', 'IncreaseRank(this.value)');
	_button.className = 'plusButton';
	_button.id = 'power'+ power.id +'GradPlus';
	_button.innerHTML = '+';

	_cell.append(_button);
	_line.append(_cell);

	// Botão de Deletar
	_cell = document.createElement('th');
	_button = document.createElement('button');
	_button.setAttribute('value', power.id);
	_button.setAttribute('onclick', 'RemovePower(this.value)');
	_button.className = 'DeleteButton';
	_button.innerHTML = 'X';

	_cell.append(_button);
	_line.append(_cell);

	_table.append(_line);

}