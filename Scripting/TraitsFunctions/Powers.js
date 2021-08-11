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
function PowerOptionsList(effectID, powerID){
	let content = "";
    content += "<div id='BiLateralListPopUp'>";
    content += "<div id='BiLateralListItem1'>";
    content += "<table class='PopUpItensTable'>";

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
	power.type = _effect.type;
	power.action = _effect.action;
	power.range = _effect.range;
	power.duration = _effect.duration;
	power.benefits = _effect.benefits;
	if( _effect.maxRank != undefined ) power.maxRank = _effect.maxRank;
	power.flats = [];
	power.extras = [];
	power.flaws = [];

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
			power.TransformField = "";
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
	
	if(power.baseRanks > 1) document.getElementById("power-"+ power.id +"-GradMinus").disabled = false;
	else document.getElementById("power-"+ power.id +"-GradMinus").disabled = true;

	if(power.baseRanks == power.maxRank) 
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
 * @param {string} transformField 
 * @param {int} powerID 
 */
function StoreTransformType(transField, powerID){
	let power = _MainCharacter.Powers.list.find( element => element.id == powerID );
	power.TransformField = transField;
}