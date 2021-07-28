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

const tdDodge = {
  name: "Esquiva",
  keyTrait: "Agilidade",
  keyTraitID: 1003,
  baseValue: 0,
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 1,
  pointsSpent: function () { return (this.baseRank * this.baseCost); },
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue)},
  description: "Defesa Esquiva é baseada no valor de Agilidade. Isso inclui tempo de reação, rapidez e coordenação em geral, usada para desviar de ataques à distância e outros perigos onde reflexos e velocidade são importantes."
};

const tdParry = {
  name: "Aparar",
  keyTrait: "Luta",
  keyTraitID: 1005,
  baseValue: 0,
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 1,
  pointsSpent: function () { return (this.baseRank * this.baseCost); },
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue); },
  description: "Defesa Aparar é baseada no valor de Luta. É a habilidade de se abaixar, contra-atacar e desviar das tentativas de um oponente lhe acertar em combate corpo-a-corpo através de uma habilidade de luta superior. "
};

const tdFortitude = {
  name: "Fortitude",
  keyTrait: "Vigor",
  keyTraitID: 1002,
  baseValue: 0,
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 1,
  pointsSpent: function () { return (this.baseRank * this.baseCost); },
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue)},
  description: "Defesa Fortitude é baseada no valor de Vigor e mede a saúde e resistência do personagem contra ameaças como venenos e doenças. Incorpora a constituição, metabolismo e imunidade. "
};

const tdWill = {
  name: "Vontade",
  keyTrait: "Prontidão",
  keyTraitID: 1007,
  baseValue: 0,
  baseRank: 0,
  enhancedValue: 0,
  baseCost: 1,
  pointsSpent: function () { return (this.baseRank * this.baseCost); },
  totalRanks: function () { return (this.baseRank + this.baseValue + this.enhancedValue)},
  description: "Defesa Vontade é baseada no valor de Consciência. Mede a estabilidade mental, a paciência, determinação, autoconfiança, autoconsciência e força de vontade, usadas para resistir ataques mentais ou espirituais. "
};

const tdToughness = {
  name: "Resistência",
  keyTrait: "Vigor",
  keyTraitID: 1002,
  baseValue: 0,
  enhancedValue: 0, // ← aqui tem que ser poder Proteções.
  description: "Defesa Resistência é baseada no valor de Vigor e é a resistência direta contra danos ou ferimentos, e é a durabilidade em geral."
};