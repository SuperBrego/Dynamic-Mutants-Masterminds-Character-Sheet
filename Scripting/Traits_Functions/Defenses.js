/****************************************************
** Ao alterar a graduação de Defesa.
****************************************************/
function onDefenseRankChange(currDefense, defenseRank){

    // Atualiza o valor da Defesa em questão
    for(let i = 0; i < _MainCharacter.Defenses.length; i++) {
  
      // Encontrei Defesa em questão
      if(_MainCharacter.Defenses[i].name == currDefense){
        // Atualizo a graduação
        _MainCharacter.Defenses[i].baseRank = parseInt(defenseRank);
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
  for (let i = 0; i < _MainCharacter.Defenses.length - 1; i++) {
    _curCamp = document.getElementById(_MainCharacter.Defenses[i].name + "Total");
    $(_curCamp).html( _MainCharacter.Defenses[i].totalRanks() );
  }

  _curCamp = $("#ResistênciaTotal");
  // Perguntar se tem Rolamento Defensivo e Proteção

  let _totalToughness = _MainCharacter.Abilities[1].totalRanks();
  
  // Perguntar Proteção Primeiro.

  let _defensiveRoll = _MainCharacter.Advantages.find( element => element.id == 2083 );
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
  
  $("#DefensesTitle").text("Defesas (" + _MainCharacter.totalDefensesSpent() + " pontos)");

  UpdateTotalSpent();
}
