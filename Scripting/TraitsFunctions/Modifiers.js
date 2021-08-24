/******************************************
 * Lista de Modificadores para um efeito.
******************************************/
function ModifiersList(effectID, powerID){

	let modifier;
	let tableContent = "";
    tableContent += "<div id='BiLateralListPopUp'>";
    tableContent += "<div id='BiLateralListItem1'>";
    tableContent += "<table class='PopUpItensTable'>";

    for(let i = 0; i < _ModifiersList.length; i++){
		modifier = _ModifiersList[i];

    	tableContent += "<tr><td>";
	    tableContent += "<button class='PopUpAddItem' value='" + modifier.id + "' onclick='AddModifier(this.value, "+ powerID +")' " 
		+ "onmouseover='ShowDescription(this.value, 10)' ";
		if( PowerContainsModifier(powerID, modifier.id) || ValidModifier(powerID, modifier.id) ) tableContent += " disabled ";
		
		tableContent += ">"

		// Extra/Falha
	    if(modifier.extra) tableContent += "<span style='float: left;' > + </span>";
	    else tableContent += "<span style='float: left;' > - </span>";
	    tableContent += modifier.name;

		if(modifier.flat) tableContent += "<span style='float: right;' > 1 fixo</span>";
	    else tableContent += "<span style='float: right;' > "+ modifier.totalRanks +"/grad. </span>";

	    tableContent += "</button>";
	    tableContent += "</td></tr>";
    }
    tableContent += "</table>";
    tableContent += "</div>"; // Fim de Item 1

    // Campo para descrição das Vantagens
    tableContent += "<div id='BiLateralListItem2'> </div>"; 
    tableContent += "</div>"; // Fim de Grid
    return tableContent;
}

/**
 * Aumenta a graduação do modificador do poder em questão
 * @param {int} modID
 * @param {int} powerID
 * @param {int} rankChange
*/
function ChangeModRank(modID, powerID, rankChange){

	let modifier = _ModifiersList.find( elem => elem.id == modID);
	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID);

	if(modifier.flat) modifier = power.flats.find( elem => elem.id == modID );
	else if(modifier.extra) modifier = power.extras.find( elem => elem.id == modID );
	else modifier = power.flaws.find( elem => elem.id == modID );

	// Agora tenho o modificador em mãos.
	modifier.totalRanks += rankChange;

	ModifierTreatment(power, modifier);

	ButtonConfiguration(power, modifier);

	UpdateKeyTraits(power);
}

/****************************************
 * Adicionar Modificador ao Poder.
****************************************/
function AddModifier(modID, powerID){
	closePopUp();

	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID);
	let modifier = Object.assign({}, _ModifiersList.find( elem => elem.id == modID));

	if( PowerContainsModifier(powerID, modID) ) return;

	if(modifier.flat) power.flats.push(modifier);
	else{
		// Extra
		if(modifier.extra) power.extras.push(modifier);
		// Falha
		else power.flaws.push(modifier);
	}
	
    ModifierTreatment(power, modifier);

	$("#ExtraFlaws-Power-" + power.id + "").html( RenderModifiers(power) );

	ButtonConfiguration(power, modifier);

	UpdateKeyTraits(power);

}

function PowerContainsModifier(powerID, modID){
	
	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID);
	
	if( power.flats.find( elem => elem.id == modID ) ) return true;
	if( power.extras.find( elem => elem.id == modID ) ) return true;
	if( power.flaws.find( elem => elem.id == modID ) ) return true;

	return false;

}

function ValidModifier(powerID, modID){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	let effect = _EffectsList.find( element => element.id == power.effectID );
	if( effect.unavaliableModifiers.find(element => element == modID) != undefined ) return true;
	
	// Se for Geral, Defesa ou Sensorial, tenho que ver se tem Ataque ou Afeta Outros.
	// if( power.type == "Geral" || power.type == "Defesa" ){}
	/*
		Se for do Afeta Outros ou 
	*/

	// Se tá disponível, ainda tem que verificar conforme itens.
	switch(modID){

	}
	
	return false;
}

function ButtonConfiguration(power, modifier){
	// Rank Span.
	modSpanRankID = "P-"+ power.id +"-M-"+ modifier.id +"";
	modMinusButtID = "P-"+ power.id +"-M-"+ modifier.id +"-M";
	modPlusButtID = "P-"+ power.id +"-M-"+ modifier.id +"-P";

	$("#"+ modSpanRankID +"").text( modifier.totalRanks );
	if(modifier.totalRanks == 1) document.getElementById( modMinusButtID ).disabled = true;
	else document.getElementById( modMinusButtID ).disabled = false;

	if(modifier.totalRanks == modifier.maxRank) document.getElementById( modPlusButtID ).disabled = true;
	else document.getElementById( modPlusButtID ).disabled = false;
}

/****************************************
 * Cria tabela com Modificadores de Poder.
****************************************/
function RenderModifiers(power){
	let tableContent = "";
	let powerModifiersList = power.extras.concat(power.flaws, power.flats);
	powerModifiersList.sort(
		(mod1, mod2) => parseInt( mod1.id ) > parseInt(mod2.id)
	);

	for(let i = 0; i < powerModifiersList.length; i++){
		modifier = powerModifiersList[i];

		// Rank Span.
		modSpanRankID = "P-"+ power.id +"-M-"+ modifier.id +"";
		modMinusButtID = "P-"+ power.id +"-M-"+ modifier.id +"-M";
		modPlusButtID = "P-"+ power.id +"-M-"+ modifier.id +"-P";

		tableContent += "<tr id='Mod-"+ modifier.id +"'>"
		+ "<td>"+ modifier.name +"</td>";

		if(modifier.ranked){
			// Abre Célula de Graduações
			tableContent += "<td>";
			
			tableContent += "<button class='minusButton' id='"+ modMinusButtID +"' "
			  +" onclick='ChangeModRank("+ modifier.id +", "+ power.id +", -1)' ";
			
			  // Se o rank total é 1, então não diminuo.
			if(modifier.totalRanks == 1){ tableContent += " disabled "; }
			else{ tableContent += ""; }
			tableContent += ">-</button>";
	  
			// Total de Graduações
			tableContent += " <span id='"+ modSpanRankID +"'>"
			+ modifier.totalRanks 
			+"</span> ";
	  
			// Botão desligado caso esteja no máximo de graduações.
			tableContent += "<button class='plusButton' id='"+ modPlusButtID +"' "
			  +" onclick='ChangeModRank("+ modifier.id +", "+ power.id +", 1)' ";
			
			  // Se o rank total é 1, então não diminuo.
			if(modifier.totalRanks == modifier.maxRank ){ tableContent += " disabled "; }
			else{ tableContent += ""; }
			tableContent += ">+</button>";

		}
		else {
			tableContent += "<td></td>";
		}

		// Texto adicional, se necessário
		if(modifier.additionalDescription != undefined){
			tableContent += "<input type='text' value='"+ modifier.additionalDescription +"' "
			+ " onchange='ChangeModifierText(this.value, "+ power.id +", "+ modifier.id +")' >"
		}

		tableContent += ""
		+ "<td>"
		+ 		"<button class='DeleteButton' onclick='RemoveTrait(" + power.id + ", 6, " + modifier.id + ")' >"
		+ 		"X"
		+ 		"</button>"
		+ 	"</td>"
		+ "</tr>";
	}

	return tableContent;
}

function ChangeModifierText(textValue, powerID, modID){

	let modifier = _ModifiersList.find( elem => elem.id == modID);
	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID);

	if(modifier.flat) modifier = power.flats.find( elem => elem.id == modID );
	else if(modifier.extra) modifier = power.extras.find( elem => elem.id == modID );
	else modifier = power.flaws.find( elem => elem.id == modID );

	modifier.additionalDescription = textValue;
}


/**
 * Faz tratamento no poder e nos campos necessários
 * ao Modificador fazer novas alterações.
 * @param {Object} power 
 * @param {Object} modifier 
 */
function ModifierTreatment(power, modifier){

	let _effect = _EffectsList.find( element => element.id == power.effectID );

	switch(modifier.id){
		case 10016:
			if(power.rangeID == 2) modifier.maxRank = 1;
			power.rangeID = _effect.range + modifier.totalRanks;
			$('#Power-' + power.id + '-Range').html( power.range() );
			break;
	}

}

function RemovedModifierTreatment(power, modifier){

	switch(modifier.id){
		case 10016:
			power.rangeID -= modifier.totalRanks;
			$('#Power-' + power.id + '-Range').html( power.range() );
			break;
	}

}