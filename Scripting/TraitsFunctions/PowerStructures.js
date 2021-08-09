/**
 * Campos adicionais de Aflições.
 * 
 * @returns string
 */
 function AfflictionPowerStructure(power) {

	let powerID = power.id;

	let afflictionText = "<tr>"
	+ 	"<td><b>Resistido por...</b></td>"
	+	"<td colspan='2' >" 
	+ 		"<input type='text' onchange='ChangeAfflictionResistance(this.value, "+ powerID +", 1)'>"
	+ 	"</td>"
	+	"<td><b>Superado por...</b> </td>"
	+	"<td colspan='2' >" 
	+ 		"<input type='text' onchange='ChangeAfflictionResistance(this.value, "+ powerID +", 2)'>"
	+ 	"</td>"
	+ "</tr>"
	+ "<tr id='Power-"+ powerID +"-Conditions' >"
	+ 	"<td colspan='2'><b>Primeira(s)</b> "
	+		"<input type='text' value='"+ power.Conditions[0] +"' " 
	+		" onchange='AlternateEffectCondition(this.value, "+ powerID +", 1)' >"
	+	"</td>"
	+ 	"<td colspan='2'><b>Segunda(s)</b> "
	+		"<input type='text' value='"+ power.Conditions[1] +"' " 
	+		" onchange='AlternateEffectCondition(this.value, "+ powerID +", 2)' >"
	+	"</td>"
	+ 	"<td colspan='2'><b>Terceira(s)</b> "
	+		"<input type='text' value='"+ power.Conditions[2] +"' " 
	+		" onchange='AlternateEffectCondition(this.value, "+ powerID +", 3)' >"
	+	"</td>"
	+ "</tr>";
	return afflictionText;
}

function SensoryPowerStructure(power) {
	let powerID = power.id;

	let sensoryOptions = "<tr>"
	+ "<td colspan='2'><b>Sentidos</b></td>"
	+ "<td colspan='2'>"
	+ 	"<select onchange='ChangeBaseValue(this.value, "+ powerID +")' >"
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
	+	"onchange='StoreSenseDescription(this.value, "+ powerID +")' >"
	+ "</td>"
	+ "</tr>";
    
	return sensoryOptions;
}

function BenefitsPowerStructure(power){}

function WeakenPowerStructure(power){

}

function EnhancedTraitStructure(power){}

function CommunicationStructure(power){

	let powerID = power.id;

	let communicationOptions = "<tr>"
	+ "<td><b>Tipo de Sentido</b></td>"
	+ "<td colspan='2'>"
	+ 	"<select onchange='ChangeSense(this.value, "+ powerID +")' >"
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
	+	"onchange='StoreSenseDescription(this.value, "+ powerID +")' >"
	+ "</td>"
	+ "</tr>";
    
	return communicationOptions;

}

function PowerOptionsStructure(power){
    let powerOptions = "";
	return powerOptions;
}

function NullifyStructure(power){
	let nullifyText = "<tr>"
	+ "<td colspan='3'><b>Contra-Ataca:</b></td>"
	+ "<td colspan='3'>"
	+ 	"<input type='text' onchange='ChangeNullify(this.value, "+ power.id +")' "
	+ 	"value='"+ power.NullifyTrait +"' "
	+	" placeholder='Contra-ataca descritor/efeitos...'>"
	+ "</td>"
	+ "</tr>";

	return nullifyText;
}

function TransformStructure(power){
	let powerID = power.id;

	let transformOption = "<tr>"
	+ "<td><b>Tipo</b></td>"
	+ "<td colspan='2'>"
	+ 	"<select onchange='ChangeBaseValue(this.value, "+ powerID +")' >"
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
	+	"onchange='StoreTransformType(this.value, "+ powerID + ")' >"
	+ "</td>"
	+ "</tr>";

	return transformOption;
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

	// Se está com o mínimo de graduação, desligo o botão de reduzir grads.
	if(power.baseRanks <= 1)
		tableContent += "<button class='minusButton' value='"+ power.id +"' onclick='ReduceRank(this.value)' "
		+ "id='power-"+ power.id +"-GradMinus' disabled>-</button> &nbsp;";
	else
		tableContent += "<button class='minusButton' value='"+ power.id +"' onclick='ReduceRank(this.value)' "
		+ "id='power-"+ power.id +"-GradMinus' >-</button> &nbsp;";
	
	tableContent += "<span id='Power-"+ power.id +"-Ranks' >"+ power.baseRanks + "</span>";

	// Botão de Aumentar a Graduação
	// Se é um efeito com opções de poder, então custo 0 não pode aumentar nada.
	if(power.baseRanks == power.maxRank)
		tableContent += "&nbsp; <button class='plusButton' value='"+ power.id +"' onclick='IncreaseRank(this.value)' "
		+ "id='power-"+ power.id +"-GradPlus' disabled>+</button> &nbsp;";
	else 
		tableContent += "&nbsp; <button class='plusButton' value='"+ power.id +"' onclick='IncreaseRank(this.value)' "
		+ "id='power-"+ power.id +"-GradPlus'>+</button> &nbsp;";
	
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

/*
function AfflictionPowerStructure(power) {

	let powerID = power.id;

	let afflictionText = "<tr>"
	+ 	"<td><b>Resistido por...</b></td>"
	+ 	"<td id='' colspan='2' > <input type='text' onchange='' placeholder=''>"
	+ 	"</td>"
	+	"<td id=''><b>Superado por...</b> </td>"
	+	"<td id='' colspan='2' > <input type='text' onchange='' placeholder=''> </td>"
	+ "</tr>"
	+ "<tr id='Power-"+ powerID +"-Conditions' >"
	+ 	"<td colspan='2'><b>Primeira</b> "
	+		"<select onchange='AlternateEffectCondition(this.value, "+ powerID +", 1)' >"
	+			"<option disabled selected>- Opções -</option>"
	+			"<option value='Impedido' >Impedido</option>"
	+			"<option value='Fadigado' >Fadigado</option>"
	+			"<option value='Prejudicado' >Prejudicado</option>"
	+			"<option value='Tonto' >Tonto</option>"
	+			"<option value='Transe' >Transe</option>"
	+			"<option value='Vulnerável' >Vulnerável</option>"
	+		"</select>"
	+	"</td>"
	+ 	"<td colspan='2'><b>Segunda</b> "
	+		"<select onchange='AlternateEffectCondition(this.value, "+ powerID +", 2)' >"
	+			"<option disabled selected>- Opções -</option>"
	+			"<option value='Atordoado' >Atordoado</option>"
	+			"<option value='Caído' >Caído</option>"
	+			"<option value='Compelido' >Compelido</option>"
	+			"<option value='Desabilitado' >Desabilitado</option>"
	+			"<option value='Exausto' >Exausto</option>"
	+			"<option value='Imóvel' >Imóvel</option>"
	+			"<option value='Indefeso' >Indefeso</option>"
	+		"</select>"
	+	"</td>"
	+ 	"<td colspan='2'><b>Terceira</b> "
	+		"<select onchange='AlternateEffectCondition(this.value, "+ powerID +", 3)' >"
	+			"<option disabled selected>- Opções -</option>"
	+			"<option value='Adormecido' >Adormecido</option>"
	+			"<option value='Controlado' >Controlado</option>"
	+			"<option value='Desatento' >Desatento</option>"
	+			"<option value='Incapacitado' >Incapacitado</option>"
	+			"<option value='Paralisado' >Paralisado</option>"
	+			"<option value='Transformado' >Transformado</option>"
	+		"</select>"
	+	"</td>"
	+ "</tr>";
	return afflictionText;
}
*/