/*
 * Lista de Efeitos.
*/
function AvaliableEffectList() {
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
 * Lista de Opções para um efeito.
 * @param {int} effectID
 * @param {int} powerID
*/
function PowerOptionsList(powerID){

	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID );
	let effectID = power.effectID;

	switch(effectID){
		default: return;
		// Ambiente
		case 5003: _CurrentPowerOptions = enviromentOptions; break;
		// Camuflagem
		case 5004: _CurrentPowerOptions = concealmentOptions; break;
		// Compreender
		case 5007: _CurrentPowerOptions = comprehendOptions; break;
		// Controle de Sorte
		case 5009: _CurrentPowerOptions = luckControlOptions; break;
		// Imunidade - 5020
		case 5020: _CurrentPowerOptions = immunityOptions; break;
		// Movimento - 5027
		case 5027: _CurrentPowerOptions = movementOptions; break;
		// Sentidos
		case 5035: _CurrentPowerOptions = sensesOptions; break;
	}

	let content = "";
    content += "<div id='BiLateralListPopUp'>";
    content += "<div id='BiLateralListItem1'>";
    content += "<table class='PopUpItensTable'>";

	let isFound;
	for (let i = 0; i < _CurrentPowerOptions.length; i++) {
		currOption = _CurrentPowerOptions[i];

		// Se eu já tenho a opção, pulo.
		isFound = power.powerOptions.find( elem => elem.id == currOption.id );
		if(isFound != undefined) continue;

        content += "<tr><td>";
        content += "<button class='PopUpAddItem' value=" + currOption.id + " onclick='AddPowerOption(this.value, "+ powerID +")' "
		+ "onmouseover='ShowDescription(this.value, 11)'>";
        content += currOption.name;
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
 * Adiciona um poder a partir de seu efeito.
 * @param {int} effectID 
*/
function AddPower(effectID) {

    closePopUp();

	effectID = parseInt(effectID);

    let _effect = _EffectsList.find( element => element.id == effectID );

    // Cria-se um novo poder.
    let power = Object.assign({}, powerDefault);
	
    power.id = _MainCharacter.Powers.id++;
    power.effectName = _effect.name;
    power.effectID = effectID;
    power.baseCost = _effect.baseCost;
	power.baseRanks = _effect.baseRanks;
	power.type = _effect.type;
	power.action = _effect.action;
	power.range = _effect.range;
	power.duration = _effect.duration;
	power.benefits = _effect.benefits;
	power.maxRank = _effect.maxRank;
	power.flats = [];
	power.extras = [];
	power.flaws = [];
	power.powerOptions = [];

	// Adiciona campos extras conforme Efeito.
	switch(effectID){
		// Aflição.
		case 5001:
			power.conditions = ["", "", ""];
			power.overcomedBy = "";
			break;
		// Comunicação, Ilusão, Sentido Remoto.
		case 5008:
		case 5018:
		case 5034:
			power.RelatedSenses = {
				AffectedSenses: "",
				SensesDescription: "",
			}
			break;
		// Transformar
		case 5037:
			power.affectedTrait = "";
			break;
		default: break;
	}

	// Div do poder.
	let divDocument = document.createElement('div');
	divDocument.id = "Power" + power.id;
	divDocument.className = 'PowerTable';
	divDocument.innerHTML = StandardStructure(power);

	power.element = divDocument;

    _MainCharacter.Powers.list.push(power);

    $('#PowerGrid').append(power.element);
}

/**
 * Adiciona opções de poder.
 * @param {int} optionID 
 * @param {int} powerID 
 * 
 */
function AddPowerOption(optionID, powerID){
	closePopUp();
	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID );
	let effectID = parseInt(power.effectID);
	let powerOption = Object.assign({}, _CurrentPowerOptions.find( elem => elem.id == optionID));

	let ranks = (powerOption.totalRanks == undefined ) ? 1 : powerOption.totalRanks;
	// Se é Ambiente, tem que mudar o custo por graduação.
	if(effectID == 5003){ 
		if(power.baseCost == 0) power.baseRanks = 1;
		power.baseCost += parseInt(powerOption.totalRanks); 		
	}
	else{ ChangeRank(powerID, ranks) }

	power.powerOptions.push(powerOption);	

	$("#PowerOptions-Power-" + power.id + "").html( RenderPowerOptions(power) );

	UpdateKeyTraits(power)
}

function RenderPowerOptions(power){
	let tableContent = "";
	let powerOption;

	for(let i = 0; i < power.powerOptions.length; i++){
		powerOption = power.powerOptions[i];

		// Rank Span.
		optSpanRankID = "P-"+ power.id +"-O-"+ powerOption.id +"";
		optMinusButtID = "P-"+ power.id +"-O-"+ powerOption.id +"-M";
		optPlusButtID = "P-"+ power.id +"-O-"+ powerOption.id +"-P";

		tableContent += "<tr id='Option-"+ powerOption.id +"'>"
		+ "<td>"+ powerOption.name +"</td>";

		if(powerOption.ranked){
			// Abre Célula de Graduações
			tableContent += "<td>";
			
			tableContent += "<button class='minusButton' id='"+ optMinusButtID +"' "
			  +" onclick='ChangeOptionRank("+ powerOption.id +", "+ power.id +", -1)' ";
			
			  // Se o rank total é 1, então não diminuo.
			if(powerOption.totalRanks == 1){ tableContent += " disabled "; }
			else{ tableContent += ""; }
			tableContent += ">-</button>";

	  		// Total de Graduações
			tableContent += " <span id='"+ optSpanRankID +"'>"
			+ powerOption.totalRanks 
			+"</span> ";

			// Texto adicional, se necessário
			if(powerOption.additionalDescription != undefined){
				tableContent += "<input type='text' value='"+ powerOption.additionalDescription +"' "
				+ " onchange='ChangeOptionText(this.value, "+ power.id +", "+ powerOption.id +")' >"
			}
			
			// Botão desligado caso esteja no máximo de graduações.
			tableContent += "<button class='plusButton' id='"+ optPlusButtID +"' "
			  +" onclick='ChangeOptionRank("+ powerOption.id +", "+ power.id +", 1)' ";
			
			  // Se o rank total é 1, então não diminuo.
			if(powerOption.totalRanks == powerOption.maxRank ){ tableContent += " disabled "; }
			else{ tableContent += ""; }
			tableContent += ">+</button>";
		}
		else {
			tableContent += "<td></td>";
		}

		tableContent += ""
		+ "<td>"
		+ 		"<button class='DeleteButton' onclick='RemoveTrait(" + power.id + ", 9, " + powerOption.id + ")' >"
		+ 		"X"
		+ 		"</button>"
		+ 	"</td>"
		+ "</tr>";
	}

	return tableContent;
}

function ChangeOptionRank(optionID, powerID, rank){
	let power = _MainCharacter.Powers.list.find( elem => elem.id == powerID );
	let powerOption = power.powerOptions.find( elem => elem.id == optionID );
	
	powerOption.totalRanks += rank;
	if(power.effectID == 5004) power.baseCost += rank;
	else power.baseRanks += rank;

	// Rank Span.
	optSpanRankID = "P-"+ power.id +"-O-"+ powerOption.id +"";
	optMinusButtID = "P-"+ power.id +"-O-"+ powerOption.id +"-M";
	optPlusButtID = "P-"+ power.id +"-O-"+ powerOption.id +"-P";

	$("#"+ optSpanRankID +"").text(powerOption.totalRanks);
	if(powerOption.totalRanks == 1) document.getElementById(optMinusButtID).disabled = true;
	else document.getElementById(optMinusButtID).disabled = false;

	if(powerOption.totalRanks == powerOption.maxRank) document.getElementById(optPlusButtID).disabled = true;
	else document.getElementById(optPlusButtID).disabled = false;

	UpdateKeyTraits(power);
}

/**
 * Muda a graduação base do poder em questão
 * em virtude das Opções de Poder.
 * @param {int} baseValue
 * @param {int} powerID
*/
function ChangeBaseValue(baseValue, powerID){

	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.baseCost = parseInt(baseValue);

	UpdateKeyTraits(power);
}

/**
 * Aumenta a graduação do poder em questão.
 * @param {int} powerID
 * @param {int} rankRange
*/
function ChangeRank(powerID, rankChange){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.baseRanks += rankChange;

	UpdateKeyTraits(power);
}

function ExclusivePowerOption(effectID){
	if( effectID == 5004 || 
		effectID == 5004 ||
		effectID == 5007 ||
		effectID == 5009 ||
		effectID == 5020 ||
		effectID == 5027 ||
		effectID == 5035){
			return true;
		}
	return false;
}

/**
 * Atualiza os campos de cálculo dos gastos, gastos e graduações do poder. 
 * @param {Object} power 
 */
function UpdateKeyTraits(power){
	let powerMath = "(Base " + power.baseCost + " + Extras " + power.totalExtraPerRank() + " - Falhas " 
	+ power.totalFlawsPerRank() + ") * Grads. " + power.baseRanks + "  + Fixos " + power.totalFlat();

	$('#Power-' + power.id + '-Math').html(powerMath)
	$('#Power-' + power.id + '-Spent').html( power.totalPointSpent() );
	$('#Power-' + power.id + '-Ranks').html( power.baseRanks );
	$('#Power-' + power.id + '-Benefits').html( power.benefits( power.baseRanks ) );

	if( ExclusivePowerOption( power.effectID ) ) return;

	if(power.baseRanks > 1) document.getElementById("power-"+ power.id +"-GradMinus").disabled = false;
	else document.getElementById("power-"+ power.id +"-GradMinus").disabled = true;

	if(power.baseRanks == power.maxRank || power.baseRanks == 0) 
		document.getElementById("power-"+ power.id +"-GradPlus").disabled = true;
	else 
		document.getElementById("power-"+ power.id +"-GradPlus").disabled = false;
}

/**
 * Altera as condições na Aflição
 * @param {string} conditionText 
 * @param {int} powerID 
 * @param {int} conditionNumber 
 */
function AlternateEffectCondition(conditionText, powerID, conditionindex){

	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.conditions[conditionindex-1] = conditionText;
}

/**
 * Altera os salvamentos de uma Aflição
 * @param {string} resistanceText 
 * @param {int} powerID 
 */
function ChangeResistance(resistanceText, powerID){
	
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.resistedBy = resistanceText;
}

/**
 * Altera os salvamentos de uma Aflição
 * @param {string} overcomedByText 
 * @param {int} powerID 
*/
function ChangeOvercomeResistance(overcomedByText, powerID){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.overcomedBy = overcomedByText;
}

/**
 * 
 */
 function ChangeSense(senseText, powerID){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.RelatedSenses.AffectedSenses = senseText;
}

/**
 * 
 * @param {string} senseText 
 * @param {int} powerID 
 */
function StoreSenseDescription(senseText, powerID){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.RelatedSenses.SensesDescription = senseText;
}

/**
 * 
 * @param {string} traitText
 * @param {int} powerID
 */
function ChangeAffectedTrait(traitText, powerID){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.affectedTrait = traitText;
}

/**
 * 
 * @param {string} affectedTrait 
 * @param {int} powerID 
 */
function StoreTransformType(transField, powerID){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.affectedTrait = transField;
}