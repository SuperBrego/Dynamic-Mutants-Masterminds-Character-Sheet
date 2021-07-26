/****************************************************
** Ao alterar a graduação de Defesa.
****************************************************/
function onDefenseRankChange(currDefense, defenseRank){

    // Atualiza o valor da Defesa em questão
    for(let i = 0; i < _DefensesList.length; i++) {
  
      // Encontrei Defesa em questão
      if(_DefensesList[i].name == currDefense){
        // Atualizo a graduação
        _DefensesList[i].baseRank = defenseRank;
        // Atualizo o gasto
        _DefensesList[i].pointsSpent = parseInt(_DefensesList[i].baseRank) * parseInt(_DefensesList[i].baseCost);
      }
    }// Fim de For
  
    UpdateDefenses();    
}

/****************************************************
** Atualiza os valores nos inputs com valores totais para Defesas.
****************************************************/
function UpdateDefenses(){

  let _curCamp;

  // Toughness fica por último, fazemos diferente
  for (let i = 0; i < _DefensesList.length - 1; i++) {
    _curCamp = document.getElementById(_DefensesList[i].name + "Total");
    $(_curCamp).html (parseInt(_DefensesList[i].baseValue) + parseInt(_DefensesList[i].baseRank) + parseInt(_DefensesList[i].enhancedValue));
  }

  _curCamp = $("#ResistênciaTotal");
  // Perguntar se tem Rolamento Defensivo e Proteção

  let _totalToughness = taStamina.totalRanks();
  
  // Perguntar Proteção Primeiro.

  let _defensiveRoll = _PlayerAdvantages.find( element => element.id == 2083 );
  if( _defensiveRoll ) {
    _totalToughness = (_defensiveRoll.totalRanks + _totalToughness) + "/" + _totalToughness + "* (Vulnerável)";
  }
  $(_curCamp).html(_totalToughness);

  UpdateDefensesSpent();
}

/****************************************************
** Atualiza a quantidade de pontos gastos em Defesas.
****************************************************/
function UpdateDefensesSpent() {
  let sum = 0;

  // -1 porque não pode pegar Resistência, que está por último
  for(let i = 0; i < _DefensesList.length - 1; i++) {
    sum += _DefensesList[i].pointsSpent;
  }

  // Defesas = 1.
  spentPoints[1][1] = sum;
  $("#DefensesTitle").text("Defesas (" + sum + " pontos)");

  UpdateTotalSpent();
}
