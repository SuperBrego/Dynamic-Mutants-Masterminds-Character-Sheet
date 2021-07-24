/*
********************************************************
** Nomenclatura de IDs: 
** 1 - Habilidades
** 2 - Defesas
** 3 - Perícias
** 4 - Vantagens
** 5 - Poderes
** 
********************************************************
*/

/* **************************************************************************************** */
/* **************************************PERICIAS****************************************** */
/* **************************************************************************************** */

const tsAcrobatics = {
  id: 3001,
  name: "Acrobacias",
  keyTrait: "Agilidade",
  baseValue: 0, //← tem que ser Agilidade
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsAthletics = {
  id: 3002,
  name: "Atletismo",
  keyTrait: "Força",
  baseValue: 0, //← tem que ser Força
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsDeception = {
  id: 3003,
  name: "Enganação",
  keyTrait: "Presença",
  baseValue: 0, //← tem que ser Presença
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsCloseCombat = {
  id: 3004,
  name: "Combate Corpo-a-corpo",
  keyTrait: "Luta",
  instanceID: 0,
  skillTraitName: "",
  baseValue: 0, //← tem que ser Luta
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0
  // Preciso de uma função para encontrar ataques
};

const tsExpertise = {
  id: 3005,
  name: "Especialidade",
  keyTrait: "Intelecto",
  instanceID: 0,
  skillTraitName: "",
  baseValue: 0, //← tem que ser Intelecto
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsRangedCombat = {
  id: 3006,
  name: "Combate A Distância",
  keyTrait: "Destreza",
  instanceID: 0,
  skillTraitName: "",
  baseValue: 0, //← tem que ser Destreza
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0
  // Preciso de uma função para encontrar ataques
};

const tsStealth = {
  id: 3007,
  name: "Furtividade",
  keyTrait: "Agilidade",
  baseValue: 0, //← tem que ser Agilidade
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsIntimidation = {
  id: 3008,
  name: "Intimidação",
  keyTrait: "Presença",
  baseValue: 0, //← tem que ser Presença
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsInsight = {
  id: 3009,
  name: "Intuição",
  keyTrait: "Prontidão",
  baseValue: 0, //← tem que ser Prontidão
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsInvestigation = {
  id: 3010,
  name: "Investigação",
  keyTrait: "Intelecto",
  baseValue: 0, //← tem que ser Investigação
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsPerception = {
  id: 3011,
  name: "Percepção",
  keyTrait: "Prontidão",
  baseValue: 0, //← tem que ser Prontidão
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsPersuasion = {
  id: 3012,
  name: "Persuasão",
  keyTrait: "Presença",
  baseValue: 0, //← tem que ser Presença
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsSleightOfHand = {
  id: 3013,
  name: "Prestidigitação",
  keyTrait: "Destreza",
  baseValue: 0, //← tem que ser Destreza
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsTechnology = {
  id: 3014,
  name: "Tecnologia",
  keyTrait: "Intelecto",
  baseValue: 0, //← tem que ser Intelecto
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsTreatment = {
  id: 3015,
  name: "Tratamento",
  keyTrait: "Intelecto",
  baseValue: 0, //← tem que ser Intelecto
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};

const tsVehicles = {
  id: 3016,
  name: "Veículos",
  keyTrait: "Destreza",
  baseValue: 0, //← tem que ser Destreza
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: 0,
  description: ""
};