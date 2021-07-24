/*********************************************************
** Nomenclatura de IDs: 
** 1 - Habilidades
** 2 - Defesas
** 3 - Perícias
** 4 - Vantagens
** 5 - Poderes
** 
*********************************************************/

let _AbilitiesList = [taStrength, taAgility, taStamina, taDexterity, taFighting, taIntelect, taAwareness, taPresence];
let _DefensesList = [tdDodge, tdParry, tdFortitude, tdWill, tdToughness];
let _SkillsList = [tsAcrobatics, tsAthletics, tsDeception, tsStealth, tsIntimidation, tsInsight, tsInvestigation, tsPerception, tsPersuasion, tsSleightOfHand, 
  tsTreatment, tsTechnology, tsVehicles, tsInsight, tsInvestigation, tsPerception, tsPersuasion, tsSleightOfHand, tsTreatment, tsTechnology, tsVehicles];

/************************************
** Controle de Gastos
************************************/

let spentPoints = [ ["Habilidades", 0], ["Defesas", 0], ["Perícias", 0], ["Vantagens", 0], ["Poderes", 0] ];

/************************************
 * Controle de Nível de Poder
************************************/
let _PowerLevel;
let _MaxPowerPoints;
