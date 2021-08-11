const enviromentOptions = [
	{
		name: "Calor",
		ranks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Calor Intenso";
			else return "Calor Extremo";
		}
	},
	{
		name: "Frio",
		ranks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Frio Intenso";
			else return "Frio Extremo";
		}
	},
	{
		name: "Impedir Movimento",
		ranks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Velocidade de movimento na área reduzida em 1 graduação";
			else return "Velocidade de movimento na área reduzida em 2 graduações";
		}
	},
	{
		name: "Luz",
		ranks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Luz suficiente para reduzir camuflagem total de escuridão para parcial e parcial para nenhuma.";
			else return "Luz tão intensa quanto um dia ensolarado, eliminando toda camuflagem concedida por escuridão.";
		}
	},
	{
		name: "Luz",
		ranks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Penalidade de –2 em testes de Percepção.";
			else return "Penalidade de –5 em testes de Percepção.";
		}
	},
];

const concealmentOptions = [
	{
		name: "Audição - Um Sentido",
		ranks: 1,
	},
	{
		name: "Audição - Total",
		ranks: 2,
	},
	{
		name: "Mental - Um Sentido",
		ranks: 1,
	},
	{
		name: "Mental - Total",
		ranks: 2,
	},
	{
		name: "Olfato - Um Sentido",
		ranks: 1,
	},
	{
		name: "Olfato - Total",
		ranks: 2,
	},
	{
		name: "Visual - Um Sentido",
		ranks: 2,
	},
	{
		name: "Visual - Total",
		ranks: 4,
	},
];

// Como é o ID 5007, começamos com 7 os IDs.
const comprehendOptions = [
	{
		id: 5701,
		name: "Animais",
		ranks: 1,
		maxRank: 2,
		description: "Você pode falar com ou compreender animais. Você pode fazer perguntas e receber respostas, mas os animais não são mais amistosos ou cooperativos que o normal. Além disso, animais desconfiados tendem a ser breves e evasivos, enquanto animais estúpidos fazem comentários vazios. Caso um animal seja amistoso, pode realizar algum favor ou serviço para você. Com 2 graduações, você pode tanto falar quanto compreender o \"idioma\" dos animais.",
		benefits: function(){
			if(this.ranks == 1) return "Compreender ou Falar Animais.";
			else return "Compreender e Falar com Animais.";
		}
	},
	{
		id: 5702,
		name: "Espíritos",
		ranks: 1,
		maxRank: 2,
		description: "Você pode se comunicar com seres espirituais incorpóreos e normalmente invisíveis e inaudíveis, como fantasmas ou entidades extradimensionais, dependendo do cenário. Com 1 graduação você opera como um \"médium\", sendo capaz de perceber os espíritos e relatar o que ouve e vê. Com 2 graduações você também é compreendido pelos habitantes do mundo espiritual. À escolha do mestre, este efeito pode se estender a mortos-vivos, demônios ou outras entidades sobrenaturais, dependendo do cenário.",
		benefits: function(){
			if(this.ranks == 1) return "Você opera como um \"médium\", sendo capaz de perceber os espíritos e relatar o que ouve e vê.";
			else return "Você opera como um \"médium\", sendo capaz de perceber os espíritos e relatar o que ouve e vê. Você também é compreendido pelos habitantes do mundo espiritual.";
		}
	},
	{
		id: 5703,
		name: "Idiomas",
		ranks: 2,
		maxRank: 4,
		description: "Você pode falar ou compreender o idioma de qualquer criatura inteligente. Este efeito não permite que você fale com criaturas que não tenham um idioma. Com 2 graduações você pode falar e compreender todos os idiomas. Com 3 graduações, qualquer um capaz de ouvir você pode compreender o que você diz, independente do idioma. Ser capaz de ler qualquer idioma que você compreenda exige 1 graduação adicional.",
		benefits: function(){
			switch(this.ranks) {
				case 2: return "Você pode falar e compreender todos os idiomas.";
				case 3: return "Você pode falar e compreender todos os idiomas. Qualquer um capaz de ouvir você pode compreender o que você diz, independente do idioma.";
				case 4: return "Você pode falar e compreender todos os idiomas. Qualquer um capaz de ouvir você pode compreender o que você diz, independente do idioma. Você é capaz de ler qualquer idioma que você compreenda.";
				default: return "";
			}
		}
	},
	{
		id: 5704,
		name: "Máquinas",
		ranks: 2,
		description: "Você pode se comunicar com dispositivos eletrônicos, fazendo indagações e compreendendo suas respostas. Isso exige duas graduações de Compreender. A maioria está limitada por sua programação e periféricos em termos de o que \"sabem\", e podem não ser capazes de responder certas perguntas com algo além de um \"desconhecido\" ou \"não encontrado\". De acordo com o mestre, você pode usar a perícia Tecnologia como uma perícia de interação quando se comunica com máquinas.",
		benefits: function(){
			return "Você pode se comunicar com dispositivos eletrônicos, fazendo indagações e compreendendo suas respostas.";
		}
	},
	{
		id: 5705,
		name: "Máquinas",
		ranks: 2,
		description: "Você pode se comunicar com objetos inanimados, concedendo-lhes a capacidade de falar com você ou simplesmente “lendo” impressões vindas deles. Isso exige duas graduações de Compreender. Objetos \"sabem\" apenas sobre eventos que os afetem diretamente ou que ocorram em sua área imediata. O mestre pode aplicar as diretrizes de Póscognição (veja Sentidos) a este efeito.",
		benefits: function(){
			return "Você pode se comunicar com objetos inanimados, concedendo-lhes a capacidade de falar com você ou simplesmente \"lendo\" impressões vindas deles.";
		}
	},
	{
		id: 5706,
		name: "Plantas",
		ranks: 2,
		description: "Você pode se comunicar com plantas, tanto as normais quando criaturas-planta. Isso exige duas graduações de Compreender. A consciência que uma planta tem de seus arredores é limitada, então ela pode não ser capaz de responder perguntas sobre eventos fora da área próxima.",
		benefits: function(){
			return "Você pode se comunicar com plantas, tanto as normais quando criaturas-planta.";
		}
	},
	
];

// Como Imunidade é 5020, começa com 5020 nos IDs.
const immunityOptions = [
	{
		id: 502001,
		name: "Acertos Críticos",
		ranks: 2,
		description: "Você é imune a acertos críticos.",
	},
	{
		id: 502002,
		name: "Aprisionamento",
		ranks: 5,
		description: "Você é imune a aprisionamento (agarrado, amarras ou armadilhas).",
	},
	{
		id: 502003,
		name: "Condição Ambiental",
		ranks: 1,
		description: "Escolha uma condição ambiental: Fogo, Frio, Pressão, Radiação, Vácuo.",
		additionalDescription: "",
	},
	{
		id: 502004,
		name: "Condições Ambientais (Todas)",
		ranks: 5,
		description: "Você tem imunidade a todas condições ambientais possíveis, exceto aquelas que causem dano diretamente (como sufocamento por ser afogado ou ser imerso em lava.",
	},
	{
		id: 502005,
		name: "Descritor Comum",
		ranks: 10,
		description: "Você é imune a um descritor comum (clima, eletricidade, fogo, frio, radiação, etc.)",
		additionalDescription: "",
	},
	{
		id: 502006,
		name: "Descritor Incomum",
		ranks: 2,
		description: "Você é imune a um descritor de poder comum (clima,eletricidade, fogo, frio, radiação, etc.)",
		additionalDescription: "",
	},
	{
		id: 502007,
		name: "Descritor Muito Comum",
		ranks: 20,
		description: "Você é imune a um descritor de poder muito comum (contuso, energia, etc).",
		additionalDescription: "",
	},
	{
		id: 502008,
		name: "Descritor Raro",
		ranks: 1,
		description: "Você é imune a um descritor de poder raro (seus próprios poderes, os poderes de um parente, etc).",
		additionalDescription: "",
	},
	{
		id: 502009,
		name: "Doenças",
		ranks: 1,
		description: "Você é imune a doenças.",
	},
	{
		id: 502010,
		name: "Efeitos de Alteração",
		ranks: 5,
		description: "Você é imune a efeitos de alteração.",
	},
	{
		id: 502011,
		name: "Efeito de Dano",
		ranks: 5,
		description: "Você imune a um efeito ou descritor de dano específico (ex. balas, eletricidade, frio, fogo, queda, magia, radiação, sônico, etc).",
		additionalDescription: "",
	},
	{
		id: 502012,
		name: "Efeitos de Fadiga",
		ranks: 5,
		description: "Você é imune a efeitos de fadiga.",
	},
	{
		id: 502013,
		name: "Efeitos de Fortitude",
		ranks: 30,
		description: "Você é imune a todos efeitos resistidos por Fortitude.",
	},
	{
		id: 502014,
		name: "Efeitos Emocionais",
		ranks: 5,
		description: "Você é imune a efeitos emocionais.",
	},
	{
		id: 502015,
		name: "Efeitos de Resistência",
		ranks: 80,
		description: "Você é imune a todos os efeitos resistidos por Resistência (o equivalente a 40 graduações de Resistência Impenetrável).",
	},
	{
		id: 502016,
		name: "Efeitos Sensoriais",
		ranks: 5,
		description: "Você é imune a efeitos sensoriais.",
	},
	{
		id: 502017,
		name: "Efeitos de Vontade",
		ranks: 30,
		description: "Você é imune a todos efeitos resistidos por Vontade.",
	},
	{
		id: 502018,
		name: "Envelhecimento",
		ranks: 1,
		description: "Você é imune a envelhecimento.",
	},
	{
		id: 502019,
		name: "Fome e Sede",
		ranks: 1,
		description: "Você é imune a fome e sede.",
	},
	{
		id: 502020,
		name: "Perícias de Interação",
		ranks: 5,
		description: "Você éimunea perícias de interação(Enganação, Intimidação, Persuasão).",
	},
	{
		id: 502021,
		name: "Personalizado",
		ranks: 1,
		description: "Você pode escolher uma imunidade personalizada aqui.",
	},
	{
		id: 502022,
		name: "Sono",
		ranks: 1,
		description: "Você não precisa dormir.",
	},
	{
		id: 502023,
		name: "Sufocamento",
		ranks: 1,
		description: "Escolha um tipo de sufocamento: Afogamento, atmosfera alienígena, etc.",
		additionalDescription: "",
	},
	{
		id: 502024,
		name: "Sufocamento (Todos)",
		ranks: 2,
		description: "Você não precisa respirar.",
	},
	{
		id: 502025,
		name: "Suporte Vital",
		ranks: 10,
		description: "Você é imune a doenças, veneno, condições ambientais, sufocamento, fome e sede.",
	},
	{
		id: 502026,
		name: "Venenos",
		ranks: 1,
		description: "Você é imune a venenos.",
	},
	
];

const luckControlOptions = [
	{
		name: "Conceder Sorte",
		description: "Você pode conceder seu ponto de vitória ou uso de Sorte para os outros. Você só pode usar esta habilidade em um personagem uma vez por rodada, mas o alvo pode usar o(s) ponto(s) concedido(s) normalmente.",
	},
	{
		name: "Forçar Re-rolagem",
		description: "Você pode gastar um ponto de vitória ou uso de Sorte para forçar outra pessoa a refazer uma rolagem e ficar com o pior resultado. O alvo deste efeito pode gastar um ponto de vitória ou uso de Sorte para evitá-lo.",
	},
	{
		name: "Gastar por Outros",
		description: "Você pode gastar pontos de vitória ou usos de Sorte em benefício de outros personagens, com os efeitos normais."
	},
	{
		name: "Negar Sorte",
		description: "Você pode gastar um ponto de vitória ou uso de Sorte para cancelar o uso de um ponto de vitória ou da vantagem Sorte de outro personagem, ou para cancelar uma complicação imposta pelo mestre (neste caso, nenhum ponto de vitória é concedido por ela)."
	},

];

const movementOptions = [];
const sensesOptions = [];
