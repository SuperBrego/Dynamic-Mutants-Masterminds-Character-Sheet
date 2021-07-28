/*********************************************************
 * Ao alterar o valor de Habilidade.
*********************************************************/
function onAbilityRankChange(abilityID, abilityRank){

  abilityRank = RankValidation(abilityRank, true);

  let _Ability = _MainCharacter.Abilities.find( element => element.id == abilityID );
  _Ability.baseRank = abilityRank;

  UpdateRelatedTraits(_Ability);
  
  UpdateTraits();
  UpdateAbilitiesSpent();
}

/*********************************************************
 * Atualiza a quantidade de pontos gastos em Habilidades.
*********************************************************/
function UpdateAbilitiesSpent(){

  $("#AbilitiesTitle").text( "Habilidades (" + _MainCharacter.totalAbilitiesSpent() + " pontos)" );

  UpdateTotalSpent();
}

/****************************************************
 * Busco, por objeto da Habilidade em questão, todas Defesas e Perícias que usam essa Habilidade
 * E atualiza o valor base delas (valor da Habilidade).
****************************************************/
function UpdateRelatedTraits(abilityObject){

  // Atualizar as Defesas
  for(let i = 0; i < _MainCharacter.Defenses.length; i++){
    if( _MainCharacter.Defenses[i].keyTraitID == abilityObject.id ){
      _MainCharacter.Defenses[i].baseValue = ( parseInt(abilityObject.totalRanks()) );
    }
  }

  i = 0;
  
  // Atualizar as Perícias
  for(let i = 0; i < _MainCharacter.Skills.length; i++){
    if( _MainCharacter.Skills[i].keyTraitID == abilityObject.id ){
      _MainCharacter.Skills[i].baseValue = ( parseInt(abilityObject.totalRanks()) );
    }
  }

  // Atualizar as Perícias
  for(let i = 0; i < _MainCharacter.ExtraSkills.length; i++){
    
    if( _MainCharacter.ExtraSkills[i].keyTraitID == abilityObject.id ){ _MainCharacter.ExtraSkills[i].baseValue = ( parseInt(abilityObject.totalRanks()) ); }

  }

  UpdateSkills();

}
  
/****************************************************
 * Atualiza características derivadas.
****************************************************/
function UpdateOtherTraits(){

  //--------------- Carga -----------------
  // Pegar valor total de carga / 0 para Força
  let currentSTR = _MainCharacter.Abilities[0].totalRanks();

  // Encontrar na tabela de Graduações e Medidas o tamanho equivalente a graduação da carga.
  let currentSTRCargo = "";

  let _TotalCargo;

  if(currentSTR < 31){
    currentSTRCargo = _RanksMeasuresTable.find( element => element[0] == currentSTR )[1];
    //Atualizar carga
    $("#maxCargo").text(currentSTRCargo);
  }
  else{
    _TotalCargo = 300000000 * Math.pow(2, (currentSTR - 30));
    currentSTRCargo = formatCargoText("" + _TotalCargo);
    $("#maxCargo").text(currentSTRCargo);
  }


  //------------ Iniciativa --------------
  let _totalInitiative = _MainCharacter.Abilities[2].baseRank;
  let _advIniative = _MainCharacter.Advantages.find( element => element.id == 2061 );
  if( _advIniative ) { _totalInitiative += ( _advIniative.totalRanks * 4 ); }
  // let _advIniative = _PlayerEnhancedAdvantages.find( element => element.id == 2061 );

  let _TotalText = (_totalInitiative > -1) ? ( "+" + _totalInitiative ) : _totalInitiative;

  $("#totalInitiative").text( _TotalText );
}


// Retorna uma apresentação de texto mais agradável para os milhões
function formatCargoText(number){
  
  let index = (number.length-1) - 7;  

  return ( GetFirstMillions(index, number).split( '' ).reverse().join( '' ) ) + " milhões t";

}

function GetFirstMillions(currIndex, number){
  if(currIndex == -1) return "";
  return number.charAt(currIndex) + GetFirstMillions(currIndex - 1, number);
}