/************************************
 * Controle de Nível de Poder
 ************************************/
var _PowerLevel;
var _MaxPowerPoints;
var _PointsPerLevel;

/*********************************************************
** Nomenclatura de IDs: 
** 1 - Habilidades
** 2 - Defesas
** 3 - Perícias
** 4 - Vantagens
** 5 - Poderes
** 6 - Equipamentos
*********************************************************/
var _AbilitiesList = [taStrength, taStamina, taAgility, taDexterity, taFighting, taIntelect, taAwareness, taPresence];
var _DefensesList = [tdDodge, tdParry, tdFortitude, tdWill, tdToughness];
var _SkillsList = [tsAcrobatics, tsAthletics, tsDeception, tsStealth, tsIntimidation, tsInsight, tsInvestigation, tsPerception, tsPersuasion, tsSleightOfHand, tsTechnology, tsTreatment, tsVehicles];

/************************************
** Controle de Gastos
************************************/
var spentPoints = [ ["Habilidades", 0], ["Defesas", 0], ["Perícias", 0], ["Vantagens", 0], ["Poderes", 0] ];

/**************************
 * Vantagens
**************************/
var _PlayerAdvantages = [];
var _PlayerEnhancedAdvantages = [];
var _LanguageRanks = 0;
var _LanguagesID = 1;
var _LanguageList = [[0, "Idioma Nativo"]];

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

/**************************
 * Complicações
**************************/
var _ComplicationList = [];
var _ComplicationID = 0;

/**************************
 * Pessoal
**************************/
const _PersonalTraits = {
  name: "",
  age: 20,
  genderID: 0,
  genders: ["Outro", "Feminino", "Masculino"],
  genderSpecifics: "",
  height: 170,
  weight: 80,
  massRank: 2,
  sizeRank: -2,
  hair: "",
  eyes: "",
  background: "",
  imageID: 0,
  images: []
}