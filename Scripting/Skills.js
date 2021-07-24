
/****************************************************
 * Variáveis
****************************************************/
// Tamanho mínimo de Perícias, sem Especialidade, Combate A Distância e Combate Corpo-a-corpo.
var _MinimalLength = 13;
var _currentSkillID = 0;

// Conteúdo do Div para Adicionar novas Perícias
let _SkillPopUpContent = ""
    +"<div class='AddTraitButtons'>"
        + "<button name='addExpertise' value='Expertise' onclick='addSkill(this.value)'>Adicionar <i>Especialidade</i></button> <br>"
        + "<button name='addRangedCombat' value='RangedCombat' onclick='addSkill(this.value)'>Adicionar <i>Combate A Distância</i></button> <br>"
        + "<button name='addCloseCombat' value='CloseCombat' onclick='addSkill(this.value)'>Adicionar <i>Corpo-a-corpo</i></button> <br>"
+ "</div>";

/****************************************************
 * Ao alterar o valor de graduação de Perícia.
****************************************************/
function onSkillRankChange(currSkill, skillRank){

    if(skillRank == "") skillRank = 0;

    let desiredIndex = _SkillsList.findIndex( _SkillsList => _SkillsList.name == currSkill );
    
    _SkillsList[desiredIndex].baseRank = skillRank;
    _SkillsList[desiredIndex].pointsSpent = parseInt( _SkillsList[desiredIndex].baseRank ) * parseFloat( _SkillsList[desiredIndex].baseCost );
  
    UpdateSkills();
    UpdateSkillsSpent();
}

/****************************************************
 * Adiciona uma nova perícia.
****************************************************/
function addSkill(skillName){

    let _currSkill;
  
    switch(skillName){
      case "Expertise": 
        _currSkill = Object.assign({}, tsExpertise);
        _currSkill.name = "Especialidade #"+_currentSkillID;
        _currSkill.instanceID = _currentSkillID;
        _SkillsList.push( _currSkill );
        _currentSkillID++;
        break;
      case "RangedCombat": 
        _currSkill = Object.assign({}, tsRangedCombat);
        _currSkill.name = "Combate A Distância #"+_currentSkillID;
        _currSkill.instanceID = _currentSkillID;
        _SkillsList.push( _currSkill );
        _currentSkillID++;
        break;
      case "CloseCombat": 
        _currSkill = Object.assign({}, tsCloseCombat);
        _currSkill.name = "Combate Corpo-a-corpo #"+_currentSkillID;
        _currSkill.instanceID = _currentSkillID;
        _SkillsList.push( _currSkill );
        _currentSkillID++;
        break;
      default: break;
    }
  
    // Apresenta as perícias Extras.
    DisplayExtraSkills();
  
}
    
/****************************************************
  * Remove uma Perícia.
****************************************************/
function RemoveSkill(skillID, instanceID){

    let desiredIndex = _SkillsList.findIndex( _skill => _skill.id == skillID && _skill.instanceID == instanceID );
    _SkillsList.splice(desiredIndex, 1);

    // Pede para atualizar as Características
    UpdateSkills();

    // Atualiza o Gasto em Perícias
    UpdateSkillsSpent();

    // Apresenta novas Perícias
    DisplayExtraSkills();
}

/****************************************************
 * Atualiza os valores totais para Perícias.
****************************************************/
function UpdateSkills(){
    let _curCamp;
    for (let i = 0; i < _SkillsList.length; i++) {
      _curCamp = document.getElementById(_SkillsList[i].name+"Total");
      _curCamp.innerHTML = parseInt(_SkillsList[i].baseValue) + parseInt(_SkillsList[i].baseRank) + parseInt(_SkillsList[i].enhancedValue);
    }  
}

/****************************************************
 * Atualiza a quantidade de pontos gastos em Perícias.
/****************************************************/
function UpdateSkillsSpent() {
    let sum = 0;
    let skillsRanks = 0;
    for(let i = 0; i < _SkillsList.length; i++) {
      skillsRanks += parseInt(_SkillsList[i].baseRank);
      sum += parseFloat(_SkillsList[i].pointsSpent);
    }
  
    // Perícias = 2.
    spentPoints[2][1] = sum;
    $("#SkillsTitle").html("Perícias (" + skillsRanks + " grads/" + sum + " pontos)");

    UpdateTotalSpent();
}

/****************************************************
 * Função para apresentar perícias extras.
****************************************************/
function DisplayExtraSkills() {
  
    // Se não tenho perícias extras, volto
    if( _SkillsList.length < _MinimalLength) return;
  
    // Caso eu tenha alguma coisa, crio a tabela nova.
    let tableContent = "";
    tableContent += "<table>" 
  
    let skillName, skillID, skillInstanceID;
    for(let i = 0; i < _SkillsList.length; i++){
        skillID = _SkillsList[i].id;
        skillInstanceID = _SkillsList[i].instanceID;

        // Tem que perguntar se começa como uma das tipos diferentes
        skillName = _SkillsList[i].name;
        if ( skillID == 3004 || skillID == 3005 || skillID == 3006 ) {

          skillName = skillName.split(' #')[0];
          
          tableContent += "<tr>"
          + "<td class='ExtraSkillTitleCell'>"
          + "<span class='SkillCellText'>" + skillName + ": "
          + "<br>"
          + "<input type='text' value='"+ _SkillsList[i].skillTraitName +"' maxlength='10' size='40' name='"+ skillName +"' onchange='UpdateSkillText(this.value, " + skillID + ", " + skillInstanceID + ")' >"
          + "</span>"
          + "</td>";
          tableContent += "<td class='SkillCell'>"
          + "<input autocomplete='off' type='number' name='" + _SkillsList[i].name + "' value='0' min='0' onchange='onSkillRankChange(this.name, this.value)'>"
          + "</td>"
          + "<td class='TraitTotalCell'> <span name='"+ _SkillsList[i].name +"Total' id='"+ _SkillsList[i].name +"Total'>0</span> </td>";
          tableContent += "<td>"
          + "<button class='DeleteButton' onclick='RemoveSkill("+ skillID +", "+skillInstanceID+")'>"
          + "X"
          + "</button> </td>";
        }
    }
  
    tableContent += "</table>";  
  
    $("#AdditionalSkillsList").html(tableContent);
  
}

/******************************************
 * Atualiza o texto das Perícias Extras
******************************************/
function UpdateSkillText(skillTraitName, skillID, skillInstanceID){
    let desiredSkillIndex = _SkillsList.findIndex( _skill => _skill.id == skillID && _skill.instanceID == skillInstanceID );
    _SkillsList[desiredSkillIndex].skillTraitName = skillTraitName;
}