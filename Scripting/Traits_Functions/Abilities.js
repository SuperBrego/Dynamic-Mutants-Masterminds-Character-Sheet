/*********************************************************
 * Ao alterar o valor de Habilidade.
*********************************************************/
function onAbilityRankChange(abilityID, abilityRank){

  abilityRank = RankValidation(abilityRank, true);

  // Atualiza o valor da Habilidade em questão
  for(let i = 0; i < _AbilitiesList.length; i++) {

    // Encontrei Habilidade em questão
    if(_AbilitiesList[i].id == abilityID){
      // Atualizo a graduação
      _AbilitiesList[i].baseRank = abilityRank;
      // Atualizo outras características que usam ela.
      UpdateRelatedTraits(_AbilitiesList[i]);
    }
  }

  UpdateTraits();
  UpdateAbilitiesSpent();
}

/*********************************************************
 * Atualiza a quantidade de pontos gastos em Habilidades.
*********************************************************/
function UpdateAbilitiesSpent(){
  let sum = 0;
  for(let i = 0; i < _AbilitiesList.length; i++) {
    sum += _AbilitiesList[i].pointsSpent();
  }

  // Habilidade = 0.
  spentPoints[0][1] = sum;
  $("#AbilitiesTitle").text( "Habilidades (" + sum + " pontos)" );

  UpdateTotalSpent();
}

/****************************************************
 * Busco, por objeto da Habilidade em questão, todas Defesas e Perícias que usam essa Habilidade
 * E atualiza o valor base delas (valor da Habilidade).
****************************************************/
function UpdateRelatedTraits(abilityObject){
  let i = 0;

  // Atualizar as Defesas
  for(i; i < _DefensesList.length; i++){
    if( _DefensesList[i].keyTraitID == abilityObject.id ){
      _DefensesList[i].baseValue = ( parseInt(abilityObject.totalRanks()) );
    }
  }

  i = 0;
  // Atualizar as Perícias
  for(i; i < _SkillsList.length; i++){
    if( _SkillsList[i].keyTraitID == abilityObject.id ){
      _SkillsList[i].baseValue = ( parseInt(abilityObject.totalRanks()) );
    }
  }

}
  
/****************************************************
 * Atualiza características derivadas.
****************************************************/
function UpdateOtherTraits(){

  //--------------- Carga -----------------
  // Pegar valor total de carga
  let currentSTR = taStrength.totalRanks();

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
  let _totalInitiative = taAgility.baseRank;
  let _advIniative = _PlayerAdvantages.find( element => element.id == 2061 );
  if( _advIniative ) { _totalInitiative += (_advIniative.totalRanks * 4); }
  // let _advIniative = _PlayerEnhancedAdvantages.find( element => element.id == 2061 );

  let _TotalText = (_totalInitiative > -1) ? ( "+" + _totalInitiative ) : _totalInitiative;

  $("#totalInitiative").text( _TotalText );
}


// Retorna uma apresentação de texto mais agradável para os milhões
function formatCargoText(number){
  let zeroLength = number.split('0').length - 1;

  let index = Math.abs(9 - zeroLength);
  console.log(index);

  return ( GetFirstMillions(index, number).split( '' ).reverse().join( '' ) ) + " milhões t";

}

function GetFirstMillions(currIndex, number){
  if(currIndex == -1) return "";
  return number.charAt(currIndex) + GetFirstMillions(currIndex - 1, number);
}