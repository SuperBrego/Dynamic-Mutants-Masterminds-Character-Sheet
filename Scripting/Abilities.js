/*********************************************************
 * Ao alterar o valor de Habilidade.
*********************************************************/
function onAbilityRankChange(currABILITY, abilityRank){

  abilityRank = RankValidation(abilityRank, true);

  // Atualiza o valor da Habilidade em questão
  for(let i = 0; i < _AbilitiesList.length; i++) {

    // Encontrei Habilidade em questão
    if(_AbilitiesList[i].name == currABILITY){
      // Atualizo a graduação
      _AbilitiesList[i].baseValue = abilityRank;
      // Atualizo o gasto
      _AbilitiesList[i].pointsSpent = _AbilitiesList[i].baseValue * _AbilitiesList[i].baseCost;
      // Atualizo outras características que usam ela.
      updateRelatedTraits(_AbilitiesList[i]);
    }
  }

  updateTraits();
  updateAbilitiesSpent();
}

/*********************************************************
 * Atualiza a quantidade de pontos gastos em Habilidades.
*********************************************************/
function updateAbilitiesSpent(){
  let sum = 0;
  for(let i = 0; i < _AbilitiesList.length; i++) {
    sum += _AbilitiesList[i].pointsSpent;
  }

  // Habilidade = 0.
  spentPoints[0][1] = sum;
  document.getElementById("abilitiesTitle").innerHTML = "Habilidades (" + sum + " pontos)";

  updateTotalSpent();
}

/****************************************************
 * Busco, por objeto da Habilidade em questão, todas Defesas e Perícias que usam essa Habilidade
 * E atualiza o valor base delas (valor da Habilidade).
****************************************************/
function updateRelatedTraits(abilityObject){
  let i = 0;

  // Atualizar as Defesas
  for(i; i < _DefensesList.length; i++){
    if( _DefensesList[i].keyTrait == abilityObject.name ){
      _DefensesList[i].baseValue = ( parseInt(abilityObject.baseValue) + parseInt(abilityObject.enhancedValue) );
    }
  }

  i = 0;
  // Atualizar as Perícias
  for(i; i < _SkillsList.length; i++){
    if( _SkillsList[i].keyTrait == abilityObject.name ){
      _SkillsList[i].baseValue = ( parseInt(abilityObject.baseValue) + parseInt(abilityObject.enhancedValue) );
    }
  }

}
  
/****************************************************
 * Atualiza características derivadas.
****************************************************/
function updateOtherTraits(){

  //--------------- Carga -----------------
  // Pegar valor total de carga
  let currentSTR = parseInt(taStrength.baseValue) + parseInt(taStrength.enhancedValue);

  // Encontrar na tabela de Graduações e Medidas o tamanho equivalente a graduação da carga.
  let currentSTRCargo = "";

  for(let i = 0; i < rankMeasures.length; i++){

    if(currentSTR == parseInt(rankMeasures[i][0]))
      currentSTRCargo = rankMeasures[i][1];
  }

  //Atualizar carga
  document.getElementById("maxCargo").innerText = currentSTRCargo;

  //------------ Iniciativa --------------
  let _totalInitiative = taAgility.baseValue;
  let _advIniative = _PlayerAdvantages.find( element => element.id == 2061 );
  if( _advIniative ) { _totalInitiative += (_advIniative.totalRanks * 4); }
  // let _advIniative = _PlayerEnhancedAdvantages.find( element => element.id == 2061 );

  document.getElementById("totalInitiative").innerText = (_totalInitiative > -1) ? ( "+" + _totalInitiative ) : _totalInitiative ;
}
  

