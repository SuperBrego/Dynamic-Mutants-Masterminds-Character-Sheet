/**
	Movimento e Sentidos:
	• Ao adicionar uma opção de poder, ChangeRank(poder, valor das graduações)
	• Ao remover uma opção de poder, ChangeRank(poder, -valor Total das graduações)
*/

/**
 * Campos adicionais de Aflições.
 * 
 * @returns string
 */
 function AfflictionPowerStructure(power) {

	let afflictionText = "<tr>"
	+ 	"<td><b>Resistido por...</b></td>"
	+	"<td colspan='2' >" 
	+ 		"<input type='text' onchange='ChangeResistance(this.value, "+ power.id +")'>"
	+ 	"</td>"
	+	"<td><b>Superado por...</b> </td>"
	+	"<td colspan='2' >" 
	+ 		"<input type='text' onchange='ChangeOvercomeResistance(this.value, "+ power.id +")'>"
	+ 	"</td>"
	+ "</tr>"
	+ "<tr id='Power-"+ power.id +"-Conditions' >"
	+ 	"<td colspan='2'><b>Primeira(s)</b> "
	+		"<input type='text' value='"+ power.conditions[0] +"' " 
	+		" onchange='AlternateEffectCondition(this.value, "+ power.id +", 1)' >"
	+	"</td>"
	+ 	"<td colspan='2'><b>Segunda(s)</b> "
	+		"<input type='text' value='"+ power.conditions[1] +"' " 
	+		" onchange='AlternateEffectCondition(this.value, "+ power.id +", 2)' >"
	+	"</td>"
	+ 	"<td colspan='2'><b>Terceira(s)</b> "
	+		"<input type='text' value='"+ power.conditions[2] +"' " 
	+		" onchange='AlternateEffectCondition(this.value, "+ power.id +", 3)' >"
	+	"</td>"
	+ "</tr>";
	return afflictionText;
}

function SensoryPowerStructure(power) {

	let sensoryOptions = "<tr>"
	+ "<td colspan='2'><b>Sentidos</b></td>"
	+ "<td colspan='2'>"
	+ 	"<select onchange='ChangeBaseValue(this.value, "+ power.id +")' >"
	+ 		"<option disabled>- Opções -</option>"
	+ 		"<option value='1' selected>1 Tipo</option>"
	+ 		"<option value='2'>2 Tipos</option>"
	+ 		"<option value='3'>3 Tipos</option>"
	+ 		"<option value='4'>4 Tipos</option>"
	+		"<option value='5'>Todos Sentidos</option>"
	+	"</select>"
	+ "</td>"
	+ "<td colspan='2'>"
	+ 	"<input type='text' value='' placeholder='Sentido(s)' "
	+	"onchange='StoreSenseDescription(this.value, "+ power.id +")' >"
	+ "</td>"
	+ "</tr>";
    
	return sensoryOptions;
}

function BenefitsPowerStructure(power){
	let benefitsText = "<tr>"
	+ "<td colspan='2'><b>Benefícios:</b></td>"
	+ "<td colspan='4'>"
	+ 	"<span class='PowerBenefits' id='Power-"+ power.id +"-Benefits'></span>"
	+ "</td>"
	+ "</tr>";

	return benefitsText;
}

function WeakenPowerStructure(power){

	let nullifyText = "<tr>"
	+ "<td><b>Salvamento:</b></td>"
	+ "<td>"
	+	"<select onchange='ChangeResistance(this.value, "+ power.id +")'> "
	+		"<option value='Fortitude'>Fortitude</option>"
	+		"<option value='Vontade'>Vontade</option>"
	+	"</select>"
	+ "</td>"
	+ "<td><b>Afeta:</b>"
	+ "<td colspan='3'>"
	+ 	"<input type='text' onchange='ChangeAffectedTrait(this.value, "+ power.id +")' "
	+ 	"value='"+ power.affectedTrait +"' "
	+	" placeholder='Descritores/Efeitos afetado(s)...'>"
	+ "</td>"
	+ "</tr>";

	return nullifyText;
}

function EnhancedTraitStructure(power){}

function CommunicationStructure(power){

	let communicationOptions = "<tr>"
	+ "<td><b>Tipo de Sentido</b></td>"
	+ "<td colspan='2'>"
	+ 	"<select onchange='ChangeSense(this.value, "+ power.id +")' >"
	+ 		"<option disabled>- Opções -</option>"
	+ 		"<option value='Auditiva' selected>Auditiva</option>"
	+ 		"<option value='Olfativa'>Olfativa</option>"
	+ 		"<option value='Mental'>Mental</option>"
	+ 		"<option value='Rádio'>Rádio</option>"
	+		"<option value='Tátil'>Tátil</option>"
	+		"<option value='Visual'>Visual</option>"
	+	"</select>"
	+ "</td>"
	+ "<td colspan='3'>"
	+ 	"<input type='text' value='' placeholder='Descrição...' "
	+	"onchange='StoreSenseDescription(this.value, "+ power.id +")' >"
	+ "</td>"
	+ "</tr>";
    
	return communicationOptions;

}

function PowerOptionsStructure(power){
    let powerOptions = "<tr>"
    + 	"<td colspan='6' style='vertical-align: top;' class='HighWidthCells'>"
    + 		"<button class='AddPowerTrait' onclick='showPopUp(10, "+ power.effectID +", "+ power.id +")'>"
    +			"Adicionar Opções de Poder</button>"
    + 		"<table id='PowerOptions-Power-"+ power.id +"' class='ExtrasFlawsTable'>"
    +		"</table>"
    + 	"</td>"
	return powerOptions;
}

function RenderPowerOptions(power){
	
}

function NullifyStructure(power){
	let nullifyText = "<tr>"
	+ "<td colspan='3'><b>Contra-Ataca:</b></td>"
	+ "<td colspan='3'>"
	+ 	"<input type='text' onchange='ChangeAffectedTrait(this.value, "+ power.id +")' "
	+ 	"value='"+ power.affectedTrait +"' "
	+	" placeholder='Contra-ataca descritor/efeitos...'>"
	+ "</td>"
	+ "</tr>";

	return nullifyText;
}

function TransformStructure(power){

	let transformOption = "<tr>"
	+ "<td><b>Tipo</b></td>"
	+ "<td colspan='2'>"
	+ 	"<select onchange='ChangeBaseValue(this.value, "+ power.id +")' >"
	+ 		"<option disabled>- Opções -</option>"
	+ 		"<option value='2' selected>2/grad. - Uma coisa > Uma coisa</option>"
	+ 		"<option value='3'>3/grad. - Uma coisa > Amplo</option>"
	+ 		"<option value='3'>3/grad. - Amplo > Uma coisa</option>"
	+ 		"<option value='4'>4 pontos/grad. - Amplo > Amplo</option>"
	+ 		"<option value='5'>5 pontos/grad. - Qualquer coisa</option>"
	+	"</select>"
	+ "</td>"
	+ "<td colspan='3'>"
	+ 	"<input type='text' value='"+ power.TransformField +"' "
	+	"placeholder='Campo de transformação...' "
	+	"onchange='StoreTransformType(this.value, "+ power.id + ")' >"
	+ "</td>"
	+ "</tr>";

	return transformOption;
}

function ImperviousStructure(power){
	let imperviousText = "<tr>"
	+ "<td colspan='3'><b>Salvamento:</b></td>"
	+ "<td colspan='3'>"
	+	"<select onchange='ChangeAffectedTrait(this.value, "+ power.id +")'> "
	+		"<option value='Aparar'>Aparar</option>"
	+		"<option value='Esquiva'>Esquiva</option>"
	+		"<option value='Resistência'>Resistência</option>"
	+		"<option value='Fortitude'>Fortitude</option>"
	+		"<option value='Vontade'>Vontade</option>"
	+	"</select>"
	+ "</td>"
	+ "</tr>";

	return imperviousText;
}

function RankByOptionsStructure(power){
	
	let effectID = parseInt(power.effectID);
	let tableContent = "";
	// Header: Nome de Poder e campos de graduação;
	tableContent += "<table border='3' class='PowerTableStruct' >"
	+ "<tr>"
	+ 	"<th colspan='3'>"
	+ 		"<input type='text' placeholder='Nome do poder...' class='PowerName'>"
	+	"</th>"
	+ 	"<th><b>Graduação</b>: </th>"
	+ 	"<th>"
	+		"<span id='Power-"+ power.id +"-Ranks' >"+ power.baseRanks + "</span>"
	+	"</th>"
	+ 	"<th>"
	+ 		"<button value='"+ power.id +"' onclick='RemoveTrait(this.value, 5)' class='DeleteButton'>X</button>"
	+	"</th>"
	+ "</tr>";
	+ "";

}

function StandardStructure(power){
	
    let effectID = parseInt(power.effectID);
	let tableContent = "";
    
	// Header: Nome de Poder e campos de graduação;
	tableContent += "<table border='3' class='PowerTableStruct' >"
	+ "<tr>"
	+ 	"<th colspan='3'>"
	+ 		"<input type='text' placeholder='Nome do poder...' class='PowerName'>"
	+	"</th>"
	+ 	"<th><b>Graduação</b>: </th>"
	+ 	"<th>";

	// Se for Camuflagem ou Sentidos, não pode colocar os botões.
	if(effectID == 5004 || effectID == 5007 || effectID == 5035){
		tableContent += "<span id='Power-"+ power.id +"-Ranks' >"+ power.baseRanks + "</span>";
	}
	// Se for outro efeito, põe botões.
	else{
		// Se está com o mínimo de graduação, desligo o botão de reduzir grads.
		if(power.baseRanks <= 1)
			tableContent += "<button class='minusButton' value='"+ power.id +"' onclick='ChangeRank(this.value, -1)' "
			+ "id='power-"+ power.id +"-GradMinus' disabled>-</button> &nbsp;";
		else
			tableContent += "<button class='minusButton' value='"+ power.id +"' onclick='ChangeRank(this.value, -1)' "
			+ "id='power-"+ power.id +"-GradMinus' >-</button> &nbsp;";
	
		tableContent += "<span id='Power-"+ power.id +"-Ranks' >"+ power.baseRanks + "</span>";

		// Botão de Aumentar a Graduação
		// Se é um efeito com opções de poder, então custo 0 não pode aumentar nada.
		if(power.baseRanks == power.maxRank || power.baseRanks == 0)
			tableContent += "&nbsp; <button class='plusButton' value='"+ power.id +"' onclick='ChangeRank(this.value, 1)' "
			+ "id='power-"+ power.id +"-GradPlus' disabled>+</button> &nbsp;";
		else 
			tableContent += "&nbsp; <button class='plusButton' value='"+ power.id +"' onclick='ChangeRank(this.value, 1)' "
			+ "id='power-"+ power.id +"-GradPlus'>+</button> &nbsp;";
	}

	tableContent += "</th>"
	+ 	"<th>"
	+ 		"<button value='"+ power.id +"' onclick='RemoveTrait(this.value, 5)' class='DeleteButton'>X</button>"
	+	"</th>"
	+ "</tr>";

	// Linha de detalhes do efeito.
	tableContent += ""
	+ "<tr>"
	+ 	"<td><b>EFEITO</b>:</td>"
	+ 	"<td>"+ power.effectName +"</td>"
	+ 	"<td colspan='2'><b>DESCRITORES</b>:</td>"
	+ 	"<td colspan='2'><input type='text' placeholder='Descritores...'></td>"
	+ "</tr>";

	// Alcance e Duração
	tableContent += ""
	+ "<tr>"
	+ 	"<td><b>ALCANCE</b>:</td>"
	+ 	"<td id='Power-"+ power.id +"-Range' >"+ power.range +"</td>"
	+ 	"<td colspan='2'><b>DURAÇÃO</b>:</td>"
	+ 	"<td colspan='2' id='Power-"+ power.id +"-Duration' >"+ power.duration +"</td>"
	+ "</tr>";

	if( !(power.benefits(power.baseRanks) == "") ){
		// Benefícios
		let powerRanks = parseInt(power.baseRanks);
		
		tableContent += ""
		+ "<tr>"
		+ 	"<td><b>Benefícios</b>:</td>"
		+ 	"<td colspan='5' id='Power-"+ power.id +"-Benefits'>"+ power.benefits( powerRanks ) +"</td>"
		+ "</tr>";
	}

	// Gastos
	tableContent += "<tr>"
	+ 	"<td colspan='1'><b>Cálculo</b>: </td>"
	+ 	"<td colspan='3' id='Power-"+ power.id + "-Math'>"
	+ 	    "(Base "+ power.baseCost + "+ Extras "+ power.totalExtraPerRank() + " - Falhas "+ power.totalFlawsPerRank() + ") * Grads. "+ power.baseRanks + "  + Fixos "+ power.totalFlat()
	+ "</td>"
	+ 	"<td><b>TotalGasto</b>:</td>"
	+ 	"<td id='Power-"+ power.id + "-Spent'> "+ power.totalPointSpent() +"</td>"
	+ "</tr>";
	
    //--------------------------------------------------------------------------------
    // Agregando Aflições e/ou Benefícios
    // Aqui vão campos adicionais caso sejam poderes diferentes.
    switch(effectID) {
		// Aflição - 5001
		case 5001:
			tableContent += AfflictionPowerStructure(power);
			break;
        // Enfraquecer 5016
        case 5016:
            tableContent += WeakenPowerStructure(power);
            break;
		// Característica Aumentada 5006
		case 5006:
			tableContent += EnhancedTraitStructure(power);
			break;
		// Comunicação
		case 5008:
			tableContent += CommunicationStructure(power);
			break;
		// Ilusão - 5018; Sentido Remoto - 5035
		case 5018:
		case 5034:
			tableContent += SensoryPowerStructure(power);
			break;
		// Nulificar
		case 5029:
			tableContent += NullifyStructure(power);
			break;
		// Transformar 5037
		case 5037:
			tableContent += TransformStructure(power);
			break;
		// Defesa Impenetrável - 5044
	 	case 5044: 
            tableContent += ImperviousStructure(power);
            break;
        /**
         * Ambiente, Camuflagem
         * Compreender, Controle de Sorte
         * Imunidade, Movimento
         * Sentidos
        */
		case 5003:
		case 5004:
		case 5007:
		case 5009:
		case 5020:
		case 5027:
		case 5035:
			tableContent += PowerOptionsStructure(power);
			break;
	 	default:
			tableContent += "";
			break;
	}

    //--------------------------------------------------------------------------------

    // Agrego Descrição
    tableContent += "<tr>"
    + "<td colspan='3' class='HighWidthCells'> <b>Descrição</b>:"
    +	"<textarea id='power-"+ power.id +"-description' value='"+ power.description +"'>"
    +	"</textarea>"
    +"</td>";

    tableContent += ""
    + 	"<td colspan='3' style='vertical-align: top;' class='HighWidthCells'>"
    + 		"<button class='AddPowerTrait' onclick='showPopUp(9, "+ power.effectID +", "+ power.id +")'>Adicionar Extras ou Falhas</button>"
    + 		"<table id='ExtraFlaws-Power-"+ power.id +"' class='ExtrasFlawsTable'>"
    +		"</table>"
    + 	"</td>"
    + "</tr>";
	
	tableContent +=  "</table>";

	return tableContent;
}