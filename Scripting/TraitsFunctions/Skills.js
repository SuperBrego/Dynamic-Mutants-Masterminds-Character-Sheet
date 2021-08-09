
/****************************************************
 * Variáveis
****************************************************/

// Conteúdo do Div para Adicionar novas Perícias
let _SkillPopUpContent = ""
    +"<div class='AddTraitButtons'>"
        + "<button name='addExpertise' value='Expertise' onclick='AddSkill(this.value)'>Adicionar <i>Especialidade</i></button> <br>"
        + "<button name='addRangedCombat' value='RangedCombat' onclick='AddSkill(this.value)'>Adicionar <i>Combate A Distância</i></button> <br>"
        + "<button name='addCloseCombat' value='CloseCombat' onclick='AddSkill(this.value)'>Adicionar <i>Corpo-a-corpo</i></button> <br>"
+ "</div>";

/*****************************************
 * Renderiza todas as perícias bases. 
*****************************************/
function RenderBaseSkillList(){

  let _line, _cell, _input;

  for (let i = 0; i < _MainCharacter.Skills.length; i++) {
    const element = _MainCharacter.Skills[i];
    
    _line = document.createElement('tr');
    
    _cell = document.createElement('td');
    _cell.className = 'SkillTitleCell';
    _cell.innerHTML = "<span class='skillNameTitle'>" + element.name + "</span>";

    _line.append(_cell);

    _cell = document.createElement('td');
    _cell.className = 'SkillCell';

    _input = document.createElement('input');
    _input.setAttribute('autocomplete', 'off');
    _input.setAttribute('type', 'number');
    _input.setAttribute('value', '0');
    _input.setAttribute('min', '0');
    _input.setAttribute('onChange', "onSkillRankChange( " + element.id + ", this.value )" );

    _cell.append(_input);

    _line.append(_cell);

    _cell = document.createElement('td');
    _cell.className = 'TraitTotalCell';
    _cell.innerHTML = "<span id='" + element.name + "Total'>0</span>";

    _line.append(_cell);

    $("#BaseSkillList").append(_line);
  }
        
}

/****************************************************
 * Ao alterar o valor de graduação de Perícia.
****************************************************/
function onSkillRankChange(skillID, skillRank){

  skillRank = RankValidation(skillRank, false);

  let desiredIndex;

  desiredIndex = _MainCharacter.Skills.findIndex( element => element.id == skillID );

  if (desiredIndex < 0 ){ 
    desiredIndex = _MainCharacter.ExtraSkills.list.findIndex( element => element.id == skillID );
    _MainCharacter.ExtraSkills.list[desiredIndex].baseRank = parseInt(skillRank);
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
      _currSkill.name = "Especialidade #"+_MainCharacter.ExtraSkills.id;
      _currSkill.instanceID = _MainCharacter.ExtraSkills.id++;
      _MainCharacter.ExtraSkills.list.push( _currSkill );
      break;
    case "RangedCombat": 
      _currSkill = Object.assign({}, tsRangedCombat);
      _currSkill.name = "Combate A Distância #"+_MainCharacter.ExtraSkills.id;
      _currSkill.instanceID = _MainCharacter.ExtraSkills.id++;
      _MainCharacter.ExtraSkills.list.push( _currSkill );
      break;
    case "CloseCombat": 
      _currSkill = Object.assign({}, tsCloseCombat);
      _currSkill.name = "Combate Corpo-a-corpo #"+_MainCharacter.ExtraSkills.id;
      _currSkill.instanceID = _MainCharacter.ExtraSkills.id++;
      _MainCharacter.ExtraSkills.list.push( _currSkill );
      break;
    default: break;
  }

  // Apresenta as perícias Extras.
  CreateExtraSkill(_currSkill);
  
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

    for (let i = 0; i < _MainCharacter.ExtraSkills.list.length; i++) {
      _curCamp = document.getElementById(_MainCharacter.ExtraSkills.list[i].name+"Total");
      $(_curCamp).html(_MainCharacter.ExtraSkills.list[i].totalRanks());
    }
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
function CreateExtraSkill(element) {
  
  let _line, _cell, _input, _delButton;

  let skillDisplayName = element.name.split(' #')[0];
      
  _line = document.createElement('tr');
  _line.id = element.instanceID + 'Line';

  // Célula com nome da Perícia e Cmapo de Input.
  _cell = document.createElement('td');
  _cell.className = "ExtraSkillTitleCell";
  _cell.innerHTML = "<span class='SkillCellText'>" + skillDisplayName + ":</span>";

  // Input de nome do Elemento
  _input = document.createElement('input');
  _input.setAttribute('type', 'text');
  _input.setAttribute('maxlength', '10');
  _input.setAttribute('size', '40');
  _input.setAttribute('value', element.skillTraitName);
  _input.setAttribute('onchange', "UpdateSkillText(this.value, " + element.id + ", " + element.instanceID + ")");

  _cell.append(_input);

  _line.append(_cell);

  // Célula de Valor de Graduação
  _cell = document.createElement('td');
  _cell.className = 'SkillCell';

  _input = document.createElement('input');
  _input.setAttribute('autocomplete', 'off');
  _input.setAttribute('type', 'number');
  _input.setAttribute('value', '0');
  _input.setAttribute('min', '0');
  _input.setAttribute('onChange', "onSkillRankChange( " + element.id + ", this.value )" );

  _cell.append(_input);

  _line.append(_cell);

  // Total da Perícia.
  _cell = document.createElement('td');
  _cell.className = 'TraitTotalCell';
  _cell.innerHTML = "<span id='" + element.name + "Total'>0</span>";

  _line.append(_cell);

  // Botão de Deletar.
  _cell = document.createElement('td');

  _delButton = document.createElement('button');
  _delButton.className = 'DeleteButton';
  _delButton.setAttribute("onclick", "RemoveTrait("+ element.id + ", 3, "+ element.instanceID + ")");
  _delButton.innerHTML = 'X';
  _cell.append(_delButton);

  _line.append(_cell);

  $('#AdditionalSkillsList').append(_line);

}

/******************************************
 * Atualiza o texto das Perícias Extras
******************************************/
function UpdateSkillText(){
  let traitText = arguments[0];
  let traitID = arguments[1];
  let traitInstanceID = arguments[2];

  let desiredSkillIndex = _MainCharacter.ExtraSkills.findIndex( _skill => _skill.id == traitID && _skill.instanceID == traitInstanceID );
  _MainCharacter.ExtraSkills[desiredSkillIndex].skillTraitName = traitText;

}