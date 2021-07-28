
/****************************************************
 * Variáveis
****************************************************/
// Tamanho mínimo de Perícias, sem Especialidade, Combate A Distância e Combate Corpo-a-corpo.
let _MinimalLength = 13;
let _currentSkillID = 0;

// Conteúdo do Div para Adicionar novas Perícias
let _SkillPopUpContent = ""
    +"<div class='AddTraitButtons'>"
        + "<button name='addExpertise' value='Expertise' onclick='AddSkill(this.value)'>Adicionar <i>Especialidade</i></button> <br>"
        + "<button name='addRangedCombat' value='RangedCombat' onclick='AddSkill(this.value)'>Adicionar <i>Combate A Distância</i></button> <br>"
        + "<button name='addCloseCombat' value='CloseCombat' onclick='AddSkill(this.value)'>Adicionar <i>Corpo-a-corpo</i></button> <br>"
+ "</div>";

/**
 * Renderiza todas as perícias bases. 
 */
function RenderBaseSkillList(){

  let tableContent = "";
  tableContent += "<table> <tr> <td colspan='4' class='SectionTitle' style='background-color: darkgoldenrod;' id='SkillsTitle'>Perícias</td> </tr>";

  for (let i = 0; i < _MainCharacter.Skills.length; i++) {
    const element = _MainCharacter.Skills[i];
    
    tableContent += "<tr>";
    tableContent += "<td class='SkillTitleCell'> <span class='skillNameTitle'>" + element.name + "</span> </td>"
    tableContent += "<td class='SkillCell'>"
    tableContent += "<input autocomplete='off' type='number' value='0' min='0' onchange='onSkillRankChange(" + element.id + ", this.value)'>"
    tableContent += "</td>";
    tableContent += "<td class='TraitTotalCell'> <span id='" + element.name + "Total'>0</span> </td>";
    tableContent += "</tr>";
  }

  tableContent += "</table>";

  $("#BaseSkillList").html(tableContent);
        
}

/****************************************************
 * Ao alterar o valor de graduação de Perícia.
****************************************************/
function onSkillRankChange(skillID, skillRank){

    let desiredIndex;

    desiredIndex = _MainCharacter.Skills.findIndex( element => element.id == skillID );

    if (desiredIndex < 0 ){ 
      desiredIndex = _MainCharacter.ExtraSkills.findIndex( element => element.id == skillID );
      _MainCharacter.ExtraSkills[desiredIndex].baseRank = parseInt(skillRank);
    }
    else { _MainCharacter.Skills[desiredIndex].baseRank = parseInt(skillRank); }    
  
    UpdateSkills();
    UpdateSkillsSpent();
}

/****************************************************
 * Adiciona uma nova perícia.
****************************************************/
function AddSkill(skillName){

  let _currSkill;

  switch(skillName){
    case "Expertise": 
      _currSkill = Object.assign({}, tsExpertise);
      _currSkill.name = "Especialidade #"+_currentSkillID;
      _currSkill.instanceID = _currentSkillID;
      _MainCharacter.ExtraSkills.push( _currSkill );
      _currentSkillID++;
      break;
    case "RangedCombat": 
      _currSkill = Object.assign({}, tsRangedCombat);
      _currSkill.name = "Combate A Distância #"+_currentSkillID;
      _currSkill.instanceID = _currentSkillID;
      _MainCharacter.ExtraSkills.push( _currSkill );
      _currentSkillID++;
      break;
    case "CloseCombat": 
      _currSkill = Object.assign({}, tsCloseCombat);
      _currSkill.name = "Combate Corpo-a-corpo #"+_currentSkillID;
      _currSkill.instanceID = _currentSkillID;
      _MainCharacter.ExtraSkills.push( _currSkill );
      _currentSkillID++;
      break;
    default: break;
  }

  // Apresenta as perícias Extras.
  DisplayExtraSkills();
  
}
    

/****************************************************
 * Atualiza os valores totais para Perícias.
****************************************************/
function UpdateSkills(){
    let _curCamp;
    for (let i = 0; i < _MainCharacter.Skills.length; i++) {
      _curCamp = document.getElementById(_MainCharacter.Skills[i].name+"Total");
      $(_curCamp).html(_MainCharacter.Skills[i].totalRanks());
    }

    for (let i = 0; i < _MainCharacter.ExtraSkills.length; i++) {
      _curCamp = document.getElementById(_MainCharacter.ExtraSkills[i].name+"Total");
      $(_curCamp).html(_MainCharacter.ExtraSkills[i].totalRanks());
    }

    DisplayExtraSkills();
    // Atualiza o Gasto em Perícias
    UpdateSkillsSpent();

}

/****************************************************
 * Atualiza a quantidade de pontos gastos em Perícias.
/****************************************************/
function UpdateSkillsSpent() {
  
  $("#SkillsTitle").html("Perícias (" + _MainCharacter.totalSkillsRanks() + " grads/" + _MainCharacter.totalSkillsSpent() + " pontos)");

  UpdateTotalSpent();
}

/****************************************************
 * Função para apresentar perícias extras.
****************************************************/
function DisplayExtraSkills() {
  
  // Caso eu tenha alguma coisa, crio a tabela nova.
  let tableContent = "";
  tableContent += "<table>" 

  let skillName, skillID, skillInstanceID, skillTraitName, skillDisplayName;

  for(let i = 0; i < _MainCharacter.ExtraSkills.length; i++){

      skillID = _MainCharacter.ExtraSkills[i].id;
      skillInstanceID = _MainCharacter.ExtraSkills[i].instanceID;
      skillName = _MainCharacter.ExtraSkills[i].name;
      skillTraitName = _MainCharacter.ExtraSkills[i].skillTraitName;

      if ( skillID == 3004 || skillID == 3005 || skillID == 3006 ) {

        skillDisplayName = skillName.split(' #')[0];
        
        tableContent += "<tr>"
        + "<td class='ExtraSkillTitleCell'>"
        + "<span class='SkillCellText'>" + skillDisplayName + ": "
        + "<br>"
        + "<input type='text' value='"+ skillTraitName +"' maxlength='10' size='40' onchange='UpdateSkillText(this.value, " + skillID + ", " + skillInstanceID + ")' >"
        + "</span>"
        + "</td>";
        tableContent += "<td class='SkillCell'>"
        + "<input autocomplete='off' type='number' value='0' min='0' onchange='onSkillRankChange("+ skillID +", this.value)'>"
        + "</td>"
        + "<td class='TraitTotalCell'> <span name='"+ skillName +"Total' id='"+ skillName +"Total'>0</span> </td>";
        tableContent += "<td>"
        + "<button class='DeleteButton' onclick='RemoveTrait("+ skillID +", 3, " + skillInstanceID + ")'>"
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
    let desiredSkillIndex = _MainCharacter.Skills.findIndex( _skill => _skill.id == skillID && _skill.instanceID == skillInstanceID );
    _MainCharacter.Skills[desiredSkillIndex].skillTraitName = skillTraitName;
}