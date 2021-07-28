/*
********************************************************
** Todas as Vantagens
** Nomenclatura: 
** 1 - Habilidades
** 2 - Defesas
** 3 - Perícias
** 4 - Vantagens
** 5 - Poderes
** 6 - Equipamentos
** 8 - Complicações
** 
********************************************************
*/

const tsAcrobatics = {
  id: 3001,
  name: "Acrobacias",
  keyTrait: "Agilidade",
  keyTraitID: 1003,
  baseValue: 0, //← tem que ser Agilidade
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsAthletics = {
  id: 3002,
  name: "Atletismo",
  keyTrait: "Força",
  keyTraitID: 1001,
  baseValue: 0, //← tem que ser Força
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsDeception = {
  id: 3003,
  name: "Enganação",
  keyTrait: "Presença",
  keyTraitID: 1008,
  baseValue: 0, //← tem que ser Presença
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsCloseCombat = {
  id: 3004,
  name: "Combate Corpo-a-corpo",
  keyTrait: "Luta",
  keyTraitID: 1005,
  instanceID: 0,
  skillTraitName: "",
  baseValue: 0, //← tem que ser Luta
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  // Preciso de uma função para encontrar ataques
};

const tsExpertise = {
  id: 3005,
  name: "Especialidade",
  keyTrait: "Intelecto",
  keyTraitID: 1006,
  instanceID: 0,
  skillTraitName: "",
  baseValue: 0, //← tem que ser Intelecto
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( Math.round(this.baseRank * this.baseValue) ); },
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsRangedCombat = {
  id: 3006,
  name: "Combate A Distância",
  keyTrait: "Destreza",
  keyTraitID: 1004,
  instanceID: 0,
  skillTraitName: "",
  baseValue: 0, //← tem que ser Destreza
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  // Preciso de uma função para encontrar ataques
};

const tsStealth = {
  id: 3007,
  name: "Furtividade",
  keyTrait: "Agilidade",
  keyTraitID: 1003,
  baseValue: 0, //← tem que ser Agilidade
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsIntimidation = {
  id: 3008,
  name: "Intimidação",
  keyTrait: "Presença",
  keyTraitID: 1008,
  baseValue: 0, //← tem que ser Presença
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsInsight = {
  id: 3009,
  name: "Intuição",
  keyTrait: "Prontidão",
  keyTraitID: 1007,
  baseValue: 0, //← tem que ser Prontidão
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsInvestigation = {
  id: 3010,
  name: "Investigação",
  keyTrait: "Intelecto",
  keyTraitID: 1006,
  baseValue: 0, //← tem que ser Investigação
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsPerception = {
  id: 3011,
  name: "Percepção",
  keyTrait: "Prontidão",
  keyTraitID: 1007,
  baseValue: 0, //← tem que ser Prontidão
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsPersuasion = {
  id: 3012,
  name: "Persuasão",
  keyTrait: "Presença",
  keyTraitID: 1008,
  baseValue: 0, //← tem que ser Presença
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsSleightOfHand = {
  id: 3013,
  name: "Prestidigitação",
  keyTrait: "Destreza",
  keyTraitID: 1004,
  baseValue: 0, //← tem que ser Destreza
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsTechnology = {
  id: 3014,
  name: "Tecnologia",
  keyTrait: "Intelecto",
  keyTraitID: 1006,
  baseValue: 0, //← tem que ser Intelecto
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsTreatment = {
  id: 3015,
  name: "Tratamento",
  keyTrait: "Intelecto",
  keyTraitID: 1006,
  baseValue: 0, //← tem que ser Intelecto
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};

const tsVehicles = {
  id: 3016,
  name: "Veículos",
  keyTrait: "Destreza",
  keyTraitID: 1004,
  baseValue: 0, //← tem que ser Destreza
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 0.5,
  pointsSpent: function () { return parseFloat( parseFloat(this.baseCost) * parseInt(this.baseRank) )},
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: ""
};