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
/* ************************************HABILIDADES***************************************** */
/* **************************************************************************************** */

const taStrength = {
  id: 1001,
  name: "Força",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: "A Força mede o poder muscular puro, e a habilidade de usá-lo. O seu modificador de Força se aplica a:<br>"
    + "• Dano causado pelo seu ataque desarmado e ataques baseados em força;<br>"
    + "• Quão longe pode saltar (baseado na perícia Atletismo);<br>"
    + "• O quanto de peso consegue levantar, carregar e arremessar;<br>"
    + "• Perícia de Atletismo."
};

const taStamina = {
  id: 1002,
  name: "Vigor",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: "Vigor é constituição, saúde e robustez física em geral. Vigor é importante porque afeta a habilidade do personagem de resistir à maior parte das formas de dano. O seu bônus de Vigor se aplica a: <br>"
    + "• Defesa Resistência, para resistir dano; <br>"
    + "• Defesa Fortitude, para resistir efeitos visando a saúde do personagem; <br>"
    + "• Teste de Vigor para resistir coisas afetando a saúde de seu personagem, quando uma perícia específica não é apropriada."
};

const taAgility = {
  id: 1003,
  name: "Agilidade",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: "Agilidade é equilíbrio, velocidade e coordenação física em geral. O valor de sua Agilidade se aplica a: <br>"
    + "• Defesa Esquiva, para evitar ataques à distância e outros perigos;<br>"
    + "• Bônus de Iniciativa, para agir primeiro em combate;<br>"
    + "• Perícias Acrobacias e Furtividade;<br>"
    + "• Testes de Agilidade para façanhas de coordenação, movimentos robustos e rapidez quando uma perícia específica não é apropriada."
};

const taDexterity = {
  id: 1004,
  name: "Destreza",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: "Destreza mede a coordenação entre as mãos e olhos, precisão e destreza manual. O valor de sua Destreza se aplica a: <br>"
    + "• Testes de ataques à distância;<br>" +
    + "• Perícias de Prestidigitação e Veículos;<br>" +
    + "• Testes de Destreza para façanhas de controle preciso e delicado quando uma perícia específica não é apropriada."
};

const taFighting = {
  id: 1005,
  name: "Luta",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: "Luta mede a habilidade de seu personagem em combate corpo-a-corpo, desde atingir o alvo até desviar de qualquer contra-ataque. O valor de Luta se aplica a: <br>"
    + "• Testes de ataques corpo-a-corpo;<br>"
    + "• Defesa Aparar, para evitar ataques corpo-a-corpo."
};

const taIntelect = {
  id: 1006,
  name: "Intelecto",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: "Intelecto cobre a habilidade de razão e aprendizado. Um personagem com Intelecto alto tende a ser conhecedor e bem-educado. Seu valor de Intelecto se aplica a:  <br>"
    + "• Perícias de Especialidade, Investigação, Tecnologia e Tratamento;<br>"
    + "• Testes de Intelecto para resolver problemas usando raciocínio puro quando uma perícia específica não é apropriada.<br>"
};

const taAwareness = {
  id: 1007,
  name: "Prontidão",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: "Enquanto a Intelecto cobre o raciocínio, a Prontidão descreve atenção, bom senso, intuição e força de vontade. Um personagem com alta Inteligência e baixa Prontidão pode ser um típico “professor avoado”, inteligente, mas distraído. Por outro lado, um personagem não muito brilhante (baixo Intelecto) pode ter muito bom senso (alta Prontidão). O valor de Prontidão se aplica a: <br>"
    + "• Defesa Vontade, para resistir ataques na sua mente;<br>"
    + "• Perícias Intuição e Percepção;<br>"
    + "• Testes de Prontidão para resolver tarefas de intuição quando uma perícia específica não é apropriada."
};

const taPresence = {
  id: 1008,
  name: "Presença",
  baseValue: 0, 
  enhancedValue: 0,
  baseCost: 2,
  pointsSpent: 0,
  description: " Presença é força de personalidade, persuasão, capacidade de liderança e aparência física. Presença é útil para heróis que pretendem ser líderes, assim como para aqueles que querem incutir medo nos corações dos criminosos com sua presença. O seu modificador de Presença se aplica a: <br>"
    + "• Perícias Enganação, Intimidação e Persuasão;<br>"
    + "• Testes de Presença para influenciar outros através da força de personalidade quando uma perícia específica não é apropriada. "
};