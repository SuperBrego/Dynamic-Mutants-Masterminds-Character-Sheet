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
  
    updateDefenses();    
}

/****************************************************
** Atualiza os valores nos inputs com valores totais para Defesas.
****************************************************/
function updateDefenses(){

  let _curCamp;

  // Toughness fica por último, fazemos diferente
  for (let i = 0; i < _DefensesList.length - 1; i++) {
    _curCamp = document.getElementById(_DefensesList[i].name + "Total");
    _curCamp.innerHTML = parseInt(_DefensesList[i].baseValue) + parseInt(_DefensesList[i].baseRank) + parseInt(_DefensesList[i].enhancedValue);
  }

  _curCamp = document.getElementById("ResistênciaTotal");
  // Perguntar se tem Rolamento Defensivo e Proteção

  let _totalToughness = taStamina.baseValue;
  // Perguntar Proteção Primeiro.

  let _defensiveRoll = _PlayerAdvantages.find( element => element.id == 2083 );
  if( _defensiveRoll ) {
    _totalToughness = (_defensiveRoll.totalRanks + _totalToughness) + "/" + _totalToughness + "* (Vulnerável)";
  }
  _curCamp.innerHTML = _totalToughness;

  updateSkillsSpent();
}

/****************************************************
** Atualiza a quantidade de pontos gastos em Defesas.
****************************************************/
function updateDefensesSpent() {
  let sum = 0;
  for(let i = 0; i < _DefensesList.length; i++) {
    sum += _DefensesList[i].pointsSpent;
  }
  
  // Defesas = 1.
  spentPoints[1][1] = sum;
  document.getElementById("defensesTitle").innerHTML = "Defesas (" + sum + " pontos)";

  updateTotalSpent();
}
