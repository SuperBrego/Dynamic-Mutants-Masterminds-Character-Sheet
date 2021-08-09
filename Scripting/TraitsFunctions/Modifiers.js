/******************************************
 * Lista de Modificadores para um efeito.
******************************************/
function ModifiersList(effectID, powerID){

	let modifier;
	let content = "";
    content += "<div id='BiLateralListPopUp'>";
    content += "<div id='BiLateralListItem1'>";
    content += "<table class='PopUpItensTable'>";

    for(let i = 0; i < _ModifiersList.length; i++){
		modifier = _ModifiersList[i];

    	content += "<tr><td>";
	    content += "<button class='PopUpAddItem' value='" + modifier.id + "' onclick='AddModifier(this.value, "+ powerID +")' " 
		+ "onmouseover='ShowDescription(this.value, 10)' ";
		if( PowerContainsModifier(powerID, modifier.id) ) content += "disabled>";
		else content += ">"

		// Extra/Falha
	    if(modifier.extra) content += "<span style='float: left;' > + </span>";
	    else content += "<span style='float: left;' > - </span>";
	    content += modifier.name;

		if(modifier.flat) content += "<span style='float: right;' > 1 fixo</span>";
	    else content += "<span style='float: right;' > "+ modifier.ranks +"/grad. </span>";

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

/*********************************************
 * Aumenta a graduação do poder em questão
*********************************************/
function IncreaseModRank(){
	let modID = arguments[0];
	let powerID = arguments[1];
}

/*********************************************
 * Aumenta a graduação do poder em questão
*********************************************/
function ReduceModRank(){
	let modID = arguments[0];
	let powerID = arguments[1];
}

/****************************************
 * Adicionar Modificador ao Poder.
****************************************/
function AddModifier(modifierID, powerID){
	closePopUp();

	let power = _MainCharacter.Powers.list.find( element => element.id == powerID);
	let modifier = Object.assign({}, _ModifiersList.find( element => element.id == modifierID));

	if( PowerContainsModifier(powerID, modifierID) ) return;

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

function PowerContainsModifier(powerID, modifierID){
	
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID);
	
	if( power.flats.find(element => element.id == modifierID ) ) return true;
	if( power.extras.find(element => element.id == modifierID ) ) return true;
	if( power.flaws.find(element => element.id == modifierID ) ) return true;

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
		playerMod = powerModifiersList[i];

		tableContent += "<tr id='Mod-"+playerMod.id+"'>"
		+ "<td>" + playerMod.name + "</td>";

		if(playerMod.ranked){
			// Abre Célula de Graduações
			tableContent += "<td>";

			// Se o rank total é 1, então não diminuo.
			if(playerMod.ranks == 1){
			  tableContent += "<button class='minusButton' onclick='DecreaseModRank("+ playerMod.id +", "+ power.id +")' disabled>-</button> ";
			}
			else{
			  tableContent += "<button class='minusButton' onclick='DecreaseModRank("+ playerMod.id +", "+ power.id +")'>-</button>";
			}
	  
			// Total de Graduações
			tableContent += "<span>"+ playerMod.ranks +"</span>";
	  
			// Botão desligado caso esteja no máximo de graduações.
			if( playerMod.ranks == playerMod.maxRank ){
			  tableContent += " <button class='plusButton' onclick='IncreaseModRank("+ playerMod.id +", "+ power.id +")' disabled>+</button>";
			}
			else{
			  tableContent += " <button class='plusButton' onclick='IncreaseModRank("+ playerMod.id +", "+ power.id +")'>+</button>";
			}
		}
		else {
			tableContent += "<td></td>";
		}

		tableContent += ""
		+ "<td>"
		+ 		"<button class='DeleteButton' onclick='RemoveTrait(" + power.id + ", 6, " + playerMod.id + ")' >"
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