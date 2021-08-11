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
		if( PowerContainsModifier(powerID, modifier.id) ) tableContent += "disabled>";
		else tableContent += ">"

		// Extra/Falha
	    if(modifier.extra) tableContent += "<span style='float: left;' > + </span>";
	    else tableContent += "<span style='float: left;' > - </span>";
	    tableContent += modifier.name;

		if(modifier.flat) tableContent += "<span style='float: right;' > 1 fixo</span>";
	    else tableContent += "<span style='float: right;' > "+ modifier.ranks +"/grad. </span>";

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
	modifier.ranks += rankChange;

	// Rank Span.
	modSpanRankID = "P-"+ power.id +"-M-"+ modifier.id +"";
	modMinusButtID = "P-"+ power.id +"-M-"+ modifier.id +"-M";
	modPlusButtID = "P-"+ power.id +"-M-"+ modifier.id +"-P";

	$("#"+ modSpanRankID +"").text(modifier.ranks);
	if(modifier.ranks == 1) document.getElementById(modMinusButtID).disabled = true;
	else document.getElementById(modMinusButtID).disabled = false;

	if(modifier.ranks == modifier.maxRank) document.getElementById(modPlusButtID).disabled = true;
	else document.getElementById(modPlusButtID).disabled = false;

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

	UpdateKeyTraits(power);

}

function PowerContainsModifier(powerID, modID){
	
	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID);
	
	if( power.flats.find( elem => elem.id == modID ) ) return true;
	if( power.extras.find( elem => elem.id == modID ) ) return true;
	if( power.flaws.find( elem => elem.id == modID ) ) return true;

	return false;

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

			// Se o rank total é 1, então não diminuo.
			if(modifier.ranks == 1){
			  tableContent += "<button class='minusButton' id='"+ modMinusButtID +"' "
			  +" onclick='ChangeModRank("+ modifier.id +", "+ power.id +", -1)' disabled>-</button>";
			}
			else{
			  tableContent += "<button class='minusButton' id='"+ modMinusButtID +"' "
			  +" onclick='ChangeModRank("+ modifier.id +", "+ power.id +", -1)' >-</button>";
			}
	  
	  		console.log(modSpanRankID)
			// Total de Graduações
			tableContent += " <span id='"+modSpanRankID+"'>"
			+ modifier.ranks 
			+"</span> ";
	  
			// Botão desligado caso esteja no máximo de graduações.
			if( modifier.ranks == modifier.maxRank ){
			  tableContent += "<button class='plusButton' id='"+ modPlusButtID +"' "
			  +" onclick='ChangeModRank("+ modifier.id +", "+ power.id +", 1)' disabled>+</button> ";
			}
			else{
			  tableContent += "<button class='plusButton' id='"+ modPlusButtID +"' "
			  +" onclick='ChangeModRank("+ modifier.id +", "+ power.id +", 1)' >+</button> ";
			}
		}
		else {
			tableContent += "<td></td>";
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

/**
 * Faz tratamento no poder e nos campos necessários
 * ao Modificador fazer novas alterações.
 * @param {Object} power 
 * @param {Object} modifier 
 */
function ModifierTreatment(power, modifier){

}