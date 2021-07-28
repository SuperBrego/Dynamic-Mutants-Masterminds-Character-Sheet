/*********************************************************
** Nomenclatura de IDs: 
** 1 - Habilidades
** 2 - Defesas
** 3 - Perícias
** 4 - Vantagens
** 5 - Poderes
** 6 - Equipamentos
*********************************************************/

/************************************
 * Controle de Equipamento
************************************/ 
var _TotalEquipmentPoints;
var _EquipmentList = [];
var _EquipmentSpent;

/**************************
 * Ofensiva
 **************************/
var _AttackList = [];
var _AttackID = 0;

// Modelo de Ataque
const attackEffect = {
  id: 0,
  name: "",
  attackBonus: 0,
  rank: 0,
  range: 1, // 1- perto, 2- A distância, 3-Percepção
  resistance: "",
  areaID: -1, // -1, sem área. Outros numerais são outras áreas.
  descriptors: "",
  enhancedRanks: 0
}
