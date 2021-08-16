// Ambiente - 5003
const enviromentOptions = [
	{
		id: 500301,
		name: "Calor",
		description: "Você pode diminuir a temperadora da área para criar calor intenso ou calor extremo.",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Calor Intenso";
			else return "Calor Extremo";
		}
	},
	{
		id: 500302,
		name: "Frio",
		description: "Você pode diminuir a temperadora da área para criar frio intenso ou frio extremo.",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Frio Intenso";
			else return "Frio Extremo";
		}
	},
	{
		id: 500303,
		name: "Impedir Movimento",
		description: "A velocidade de qualquer movimento na área é reduzido em uma graduação ou duas graduações, conforme a graduação desta opção.",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Velocidade de movimento na área reduzida em 1 graduação";
			else return "Velocidade de movimento na área reduzida em 2 graduações";
		}
	},
	{
		id: 500304,
		name: "Luz",
		description: "Você pode criar luz suficiente para reduzir camuflagem por escuridão em uma categoria, ou duas, com luz brilhante como dia.",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Luz suficiente para reduzir camuflagem total de escuridão para parcial e parcial para nenhuma.";
			else return "Luz tão intensa quanto um dia ensolarado, eliminando toda camuflagem concedida por escuridão.";
		}
	},
	{
		id: 500305,
		name: "Visibilidade",
		description: "Você pode conceder penalidade de -2 em testes de Percepção, ou -5, para duas graduações nesta opção.",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		benefits: function(){
			if(this.ranks == 1) return "Penalidade de –2 em testes de Percepção.";
			else return "Penalidade de –5 em testes de Percepção.";
		}
	},
];

// camuflagem - 5004
const concealmentOptions = [
	{
		id: 500401,
		name: "Audição (Um Sentido)",
		description: "Você é camuflado a um sentido de audição.",
		totalRanks: 1,
	},
	{
		id: 500402,
		name: "Audição (Total)",
		description: "Você é camuflado a todos sentidos de audição (ex: audição normal, sonar, etc.).",
		totalRanks: 2,
	},
	{
		id: 500403,
		name: "Mental (Um Sentido)",
		description: "Você é camuflado a um sentido mental.",
		totalRanks: 1,
	},
	{
		id: 500404,
		name: "Mental (Total)",
		description: "Você é camuflado a todos sentidos mentais (ex: sentido aranha).",
		totalRanks: 2,
	},
	{
		id: 500405,
		name: "Olfato (Um Sentido)",
		description: "Você é camuflado a um sentido olfatório.",
		totalRanks: 1,
	},
	{
		id: 500406,
		name: "Olfato (Total)",
		description: "Você é camuflado a todos sentidos olfatórios.",
		totalRanks: 2,
	},
	{
		id: 500407,
		name: "Visual (Um Sentido)",
		description: "Você é camuflado a um sentido visual.",
		totalRanks: 2,
	},
	{
		id: 500408,
		name: "Visual (Total)",
		description: "Você é a todos sentidos mentais (ex: visão normal, infravisão, etc.).",
		totalRanks: 4,
	},
];

// Compreender - 5007
const comprehendOptions = [
	{
		id: 500701,
		name: "Animais",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		description: "Você pode falar com ou compreender animais. Você pode fazer perguntas e receber respostas, mas os animais não são mais amistosos ou cooperativos que o normal. Além disso, animais desconfiados tendem a ser breves e evasivos, enquanto animais estúpidos fazem comentários vazios. Caso um animal seja amistoso, pode realizar algum favor ou serviço para você. Com 2 graduações, você pode tanto falar quanto compreender o \"idioma\" dos animais.",
		benefits: function(){
			if(this.ranks == 1) return "Compreender ou Falar Animais.";
			else return "Compreender e Falar com Animais.";
		}
	},
	{
		id: 500702,
		name: "Espíritos",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		description: "Você pode se comunicar com seres espirituais incorpóreos e normalmente invisíveis e inaudíveis, como fantasmas ou entidades extradimensionais, dependendo do cenário. Com 1 graduação você opera como um \"médium\", sendo capaz de perceber os espíritos e relatar o que ouve e vê. Com 2 graduações você também é compreendido pelos habitantes do mundo espiritual. À escolha do mestre, este efeito pode se estender a mortos-vivos, demônios ou outras entidades sobrenaturais, dependendo do cenário.",
		benefits: function(){
			if(this.totalRanks == 1) return "Você opera como um \"médium\", sendo capaz de perceber os espíritos e relatar o que ouve e vê.";
			else return "Você opera como um \"médium\", sendo capaz de perceber os espíritos e relatar o que ouve e vê. Você também é compreendido pelos habitantes do mundo espiritual.";
		}
	},
	{
		id: 500703,
		name: "Idiomas",
		ranked: true,
		totalRanks: 2,
		maxRank: 4,
		description: "Você pode falar ou compreender o idioma de qualquer criatura inteligente. Este efeito não permite que você fale com criaturas que não tenham um idioma. Com 2 graduações você pode falar e compreender todos os idiomas. Com 3 graduações, qualquer um capaz de ouvir você pode compreender o que você diz, independente do idioma. Ser capaz de ler qualquer idioma que você compreenda exige 1 graduação adicional.",
		benefits: function(){
			switch(this.totalRanks) {
				case 2: return "Você pode falar e compreender todos os idiomas.";
				case 3: return "Você pode falar e compreender todos os idiomas. Qualquer um capaz de ouvir você pode compreender o que você diz, independente do idioma.";
				case 4: return "Você pode falar e compreender todos os idiomas. Qualquer um capaz de ouvir você pode compreender o que você diz, independente do idioma. Você é capaz de ler qualquer idioma que você compreenda.";
				default: return "";
			}
		}
	},
	{
		id: 500704,
		name: "Máquinas",
		totalRanks: 2,
		description: "Você pode se comunicar com dispositivos eletrônicos, fazendo indagações e compreendendo suas respostas. Isso exige duas graduações de Compreender. A maioria está limitada por sua programação e periféricos em termos de o que \"sabem\", e podem não ser capazes de responder certas perguntas com algo além de um \"desconhecido\" ou \"não encontrado\". De acordo com o mestre, você pode usar a perícia Tecnologia como uma perícia de interação quando se comunica com máquinas.",
		benefits: function(){
			return "Você pode se comunicar com dispositivos eletrônicos, fazendo indagações e compreendendo suas respostas.";
		}
	},
	{
		id: 500705,
		name: "Máquinas",
		totalRanks: 2,
		description: "Você pode se comunicar com objetos inanimados, concedendo-lhes a capacidade de falar com você ou simplesmente “lendo” impressões vindas deles. Isso exige duas graduações de Compreender. Objetos \"sabem\" apenas sobre eventos que os afetem diretamente ou que ocorram em sua área imediata. O mestre pode aplicar as diretrizes de Póscognição (veja Sentidos) a este efeito.",
		benefits: function(){
			return "Você pode se comunicar com objetos inanimados, concedendo-lhes a capacidade de falar com você ou simplesmente \"lendo\" impressões vindas deles.";
		}
	},
	{
		id: 500706,
		name: "Plantas",
		totalRanks: 2,
		description: "Você pode se comunicar com plantas, tanto as normais quando criaturas-planta. Isso exige duas graduações de Compreender. A consciência que uma planta tem de seus arredores é limitada, então ela pode não ser capaz de responder perguntas sobre eventos fora da área próxima.",
		benefits: function(){
			return "Você pode se comunicar com plantas, tanto as normais quando criaturas-planta.";
		}
	},
	
];

// Controle de Sorte - 5009
const luckControlOptions = [
	{
		id: 500901,
		name: "Conceder Sorte",
		description: "Você pode conceder seu ponto de vitória ou uso de Sorte para os outros. Você só pode usar esta habilidade em um personagem uma vez por rodada, mas o alvo pode usar o(s) ponto(s) concedido(s) normalmente.",
	},
	{
		id: 500902,
		name: "Forçar Re-rolagem",
		description: "Você pode gastar um ponto de vitória ou uso de Sorte para forçar outra pessoa a refazer uma rolagem e ficar com o pior resultado. O alvo deste efeito pode gastar um ponto de vitória ou uso de Sorte para evitá-lo.",
	},
	{
		id: 500903,
		name: "Gastar por Outros",
		description: "Você pode gastar pontos de vitória ou usos de Sorte em benefício de outros personagens, com os efeitos normais."
	},
	{
		id: 500904,
		name: "Negar Sorte",
		description: "Você pode gastar um ponto de vitória ou uso de Sorte para cancelar o uso de um ponto de vitória ou da vantagem Sorte de outro personagem, ou para cancelar uma complicação imposta pelo mestre (neste caso, nenhum ponto de vitória é concedido por ela)."
	},

];

// Imunidade - 5020.
const immunityOptions = [
	{
		id: 502001,
		name: "Acertos Críticos",
		totalRanks: 2,
		description: "Você é imune a acertos críticos.",
	},
	{
		id: 502002,
		name: "Aprisionamento",
		totalRanks: 5,
		description: "Você é imune a aprisionamento (agarrado, amarras ou armadilhas).",
	},
	{
		id: 502003,
		name: "Condição Ambiental",
		totalRanks: 1,
		description: "Escolha uma condição ambiental: Fogo, Frio, Pressão, Radiação, Vácuo.",
		additionalDescription: "",
	},
	{
		id: 502004,
		name: "Condições Ambientais (Todas)",
		totalRanks: 5,
		description: "Você tem imunidade a todas condições ambientais possíveis, exceto aquelas que causem dano diretamente (como sufocamento por ser afogado ou ser imerso em lava.",
	},
	{
		id: 502005,
		name: "Descritor Comum",
		totalRanks: 10,
		description: "Você é imune a um descritor comum (clima, eletricidade, fogo, frio, radiação, etc.)",
		additionalDescription: "",
	},
	{
		id: 502006,
		name: "Descritor Incomum",
		totalRanks: 2,
		description: "Você é imune a um descritor de poder comum (clima,eletricidade, fogo, frio, radiação, etc.)",
		additionalDescription: "",
	},
	{
		id: 502007,
		name: "Descritor Muito Comum",
		totalRanks: 20,
		description: "Você é imune a um descritor de poder muito comum (contuso, energia, etc).",
		additionalDescription: "",
	},
	{
		id: 502008,
		name: "Descritor Raro",
		totalRanks: 1,
		description: "Você é imune a um descritor de poder raro (seus próprios poderes, os poderes de um parente, etc).",
		additionalDescription: "",
	},
	{
		id: 502009,
		name: "Doenças",
		totalRanks: 1,
		description: "Você é imune a doenças.",
	},
	{
		id: 502010,
		name: "Efeitos de Alteração",
		totalRanks: 5,
		description: "Você é imune a efeitos de alteração.",
	},
	{
		id: 502011,
		name: "Efeito de Dano",
		totalRanks: 5,
		description: "Você imune a um efeito ou descritor de dano específico (ex. balas, eletricidade, frio, fogo, queda, magia, radiação, sônico, etc).",
		additionalDescription: "",
	},
	{
		id: 502012,
		name: "Efeitos de Fadiga",
		totalRanks: 5,
		description: "Você é imune a efeitos de fadiga.",
	},
	{
		id: 502013,
		name: "Efeitos de Fortitude",
		totalRanks: 30,
		description: "Você é imune a todos efeitos resistidos por Fortitude.",
	},
	{
		id: 502014,
		name: "Efeitos Emocionais",
		totalRanks: 5,
		description: "Você é imune a efeitos emocionais.",
	},
	{
		id: 502015,
		name: "Efeitos de Resistência",
		totalRanks: 80,
		description: "Você é imune a todos os efeitos resistidos por Resistência (o equivalente a 40 graduações de Resistência Impenetrável).",
	},
	{
		id: 502016,
		name: "Efeitos Sensoriais",
		totalRanks: 5,
		description: "Você é imune a efeitos sensoriais.",
	},
	{
		id: 502017,
		name: "Efeitos de Vontade",
		totalRanks: 30,
		description: "Você é imune a todos efeitos resistidos por Vontade.",
	},
	{
		id: 502018,
		name: "Envelhecimento",
		totalRanks: 1,
		description: "Você é imune a envelhecimento.",
	},
	{
		id: 502019,
		name: "Fome e Sede",
		totalRanks: 1,
		description: "Você é imune a fome e sede.",
	},
	{
		id: 502020,
		name: "Perícias de Interação",
		totalRanks: 5,
		description: "Você éimunea perícias de interação(Enganação, Intimidação, Persuasão).",
	},
	{
		id: 502021,
		name: "Personalizado",
		totalRanks: 1,
		description: "Você pode escolher uma imunidade personalizada aqui.",
	},
	{
		id: 502022,
		name: "Sono",
		totalRanks: 1,
		description: "Você não precisa dormir.",
	},
	{
		id: 502023,
		name: "Sufocamento",
		totalRanks: 1,
		description: "Escolha um tipo de sufocamento: Afogamento, atmosfera alienígena, etc.",
		additionalDescription: "",
	},
	{
		id: 502024,
		name: "Sufocamento (Todos)",
		totalRanks: 2,
		description: "Você não precisa respirar.",
	},
	{
		id: 502025,
		name: "Suporte Vital",
		totalRanks: 10,
		description: "Você é imune a doenças, veneno, condições ambientais, sufocamento, fome e sede.",
	},
	{
		id: 502026,
		name: "Venenos",
		ranks: 1,
		description: "Você é imune a venenos.",
	},
	
];

// Movimento - 5027
const movementOptions = [
	{
		id: 502701,
		name: "Adaptação ao Ambiente",
		description: "Você é adaptado a um ambiente específico, como subaquático, gravidade zero e assim por diante (veja Ameaças Ambientais). Você não sofre circunstâncias desfavoráveis nem penalidades ao movimento associadas com o ambiente em questão, movendo-se e agindo normalmente. Você ainda é afetado por ameaças ambientais como sufocamento e exposição (você precisa do efeito Imunidade para ignorar essas coisas).",
		additionalDescription: "",
	},
	{
		id: 502702,
		name: "Andar na Água",
		description: "Você pode ficar em pé e se mover à sua graduação de velocidade terrestre sobre a superfície da água, areia movediça e outros líquidos sem afundar. Caso caia por qualquer razão, você afunda normalmente. Com 2 graduações neste efeito, também fica caído na superfície líquida sem afundar; você só afunda caso assim escolha.",
	},
	{
		id: 502703,
		name: "Balançar-se",
		description: "Você pode se balançar pelo ar à sua graduação de velocidade terrestre normal, usando uma linha providenciada por você mesmo ou disponível (galhos de árvores ou cipós, linhas de telefone ou de energia elétrica, etc.).",
	},
	{
		id: 502704,
		name: "Deslizar",
		description: "Você pode se mover enquanto caído com sua velocidade terrestre normal. Você não sofre penalidades de circunstância para atacar enquanto caído.",
	},
	{
		id: 502705,
		name: "Escalar Paredes",
		description: "Você pode escalar paredes e tetos à sua graduação de velocidade terrestre –1 sem necessidade de um teste de Atletismo. No entanto, você ainda fica vulnerável quando escala. Com mais uma graduação você escala à sua velocidade total e não fica vulnerável quando escala.",
		totalRanks: 1,
		maxRank: 2,
	},
	{
		id: 502706,
		name: "Estabilidade",
		description: "Você é melhor em lidar com obstáculos e obstruções. Reduza em 1 a penalidade de velocidade por mover-se através de obstáculos em 1 por graduação neste efeito. Se você reduzir a penalidade de velocidade para 0 ou menos, você não será afetado por esse obstáculo e se moverá a toda velocidade normal.",
		totalRanks: 1,
		maxRank: 2,
	},
	{
		id: 502707,
		name: "Permear",
		description: "<p>Você pode atravessar objetos sólidos. Com 1 graduação, se move à sua graduação de velocidade –2 através de qualquer objeto físico. Com 2 graduações, se move à sua velocidade –1 e, com 3 graduações, se move à sua velocidade normal. Você não pode respirar quando dentro de um objeto sólido, então precisa prender o fôlego (ou ter Imunidade a Sufocamento). Você também não consegue ver dentro de objetos sólidos, então precisa de Sentidos que Penetrem Camuflagem para saber para onde está indo.</p>"
		+ "<p>Permear normalmente é Limitado a um tipo de substância como terra, gelo ou metal. Permear não concede proteção contra ataques, embora você possa ganhar cobertura quando dentro de um objeto (veja Cobertura). Para a habilidade de permitir que coisas (incluindo ataques) passem através de você, veja o efeito Intangibilidade.</p>",
		totalRanks: 1,
		maxRank: 3,
	},
	{
		id: 502708,
		name: "Queda Segura",
		description: "Você pode cair de qualquer distância sem se ferir, desde que seja capaz de agir. Você também pode parar sua queda a qualquer momento desde que haja algo em que se segurar (como uma borda, mastro, galho, etc.). Caso tenha o poder Escalar Paredes, qualquer superfície que você possa escalar serve como algo em que se segurar. Queda Segura pode ser Limitada a apenas quando você estiver próximo de uma superfície (como a lateral de um prédio); assume-se que você esteja usando a superfície para ajudá-lo a diminuir a velocidade de sua queda.",
	},
	{
		id: 502709,
		name: "Sem Rastros",
		description: "Você não deixa rastros e não pode ser rastreado através de sentidos visuais (embora ainda possa ser rastreado através do faro ou de outros meios). Você pode atravessar areia ou neve sem deixar pegadas, e tem camuflagem total contra sentido sísmico. Cada graduação adicional torna você imune a rastreamento contra outro tipo de sentido.",
	},
	{
		id: 502710,
		name: "Viagem Dimensional",
		description: "Você pode se mover de uma dimensão para outra com uma ação de movimento. Com 1 graduação, pode se mover entre sua dimensão natal e uma outra. Com 2 graduações, pode se mover entre qualquer dimensão de um grupo relacionado (dimensões místicas, dimensões alienígenas, etc.). Com 3 graduações, pode viajar para qualquer dimensão. Você pode carregar até 30 kg (graduação de massa 0) com você quando viaja no tempo. Caso aplique o modificador Aumentar Massa, pode carregar massa adicional até seu modificador de graduação.",
		totalRanks: 1,
		maxRank: 3,
		additionalDescription: "",
	},
	{
		id: 502711,
		name: "Viagem Espacial",
		description: "Você pode viajar mais rápido que a velocidade da luz através do vácuo do espaço (mas não dentro da atmosfera planetária). Com 1 graduação você pode viajar para outros planetas no sistema solar. Com 2 graduações, pode viajar para outros sistemas estelares, enquanto que com 3 graduações, pode visitar sistemas estelares distantes, talvez até outras galáxias! Este efeito não concede proteção contra os rigores do espaço (para isso, veja o efeito Imunidade).",
		totalRanks: 1,
		maxRank: 3,
	},
	{
		id: 502712,
		name: "Viagem Temporal",
		description: "Você pode se mover através do tempo! Com 1 graduação, pode se mover entre o presente e outro ponto fixo no tempo (como 100 anos no passado, ou 1.000 anos no futuro). Com 2 graduações, pode se mover a qualquer ponto no passado ou a qualquer ponto no futuro (mas não os dois). Com 3 graduações, pode viajar para qualquer ponto no tempo. Alcançar linhas de tempo alternativas ou mundos paralelos exige pelo menos 2 graduações de Viagem Dimensional. Você pode carregar até 30 kg (graduação de massa 0) com você quando viaja no tempo. Caso aplique o modificador Aumentar Massa, pode carregar massa adicional até seu modificador de graduação.",
		totalRanks: 1,
		maxRank: 3,
	},


];

// Sentidos - 5035
const sensesOptions = [
	{
		id: 503501,
		instanceID: 0,
		name: "Acurado",
		description: "Um sentido acurado pode apontar a localização exata de algo. Você pode usar um sentido acurado para mirar algo em combate. Sentidos visuais e táteis são normalmente acurados para humanos. Custa 2 graduações para um sentido, 4 para o tipo de sentido inteiro.",
		ranked: false,
		totalRanks: 2,
		additionalDescription: "",
	},
	{
		id: 503502,
		instanceID: 0,
		name: "Acurado (Tipo)",
		description: "Um sentido acurado pode apontar a localização exata de algo. Você pode usar um sentido acurado para mirar algo em combate. Sentidos visuais e táteis são normalmente acurados para humanos. Custa 2 graduações para um sentido, 4 para o tipo de sentido inteiro.",
		ranked: false,
		totalRanks: 4,
		additionalDescription: "",
	},
	{
		id: 503503,
		instanceID: 0,
		name: "À Distância",
		description: "Você pode usar um sentido que normalmente não tem alcance (como o paladar ou o tato para humanos) para fazer testes de Percepção à distância, com o modificador normal de –1 para cada 3 metros. Isso pode aumentar com o efeito Estender Sentido.",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503504,
		instanceID: 0,
		name: "Aguçado",
		description: "Você pode sentir detalhes finos de qualquer coisa que possa detectar com um sentido específico, o que permite que você distinga e identifique diferentes alvos. Sentidos visuais e auditivos normalmente são aguçados para humanos. Custa 1 graduação para um sentido, 2 para um tipo inteiro de sentido.",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503505,
		instanceID: 0,
		name: "Aguçado (Tipo)",
		description: "Você pode sentir detalhes finos de qualquer coisa que possa detectar com um sentido específico, o que permite que você distinga e identifique diferentes alvos. Sentidos visuais e auditivos normalmente são aguçados para humanos. Custa 1 graduação para um sentido, 2 para um tipo inteiro de sentido.",
		ranked: false,
		totalRanks: 2,
		additionalDescription: "",
	},
	{
		id: 503506,
		instanceID: 0,
		name: "Analítico",
		description: "Além até mesmo de aguçado, você pode perceber detalhes específicos de qualquer coisa que possa detectar com um sentido analítico, como a composição química, a massa ou as dimensões exatas, a frequência de sons e o comprimento de onda de energia, e assim por diante. Você só pode aplicar este efeito a um sentido aguçado. Sentidos normais não são analíticos. Custa 1 graduação para um sentido, 2 para um tipo inteiro de sentido.",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503507,
		instanceID: 0,
		name: "Analítico (Tipo)",
		description: "Além até mesmo de aguçado, você pode perceber detalhes específicos de qualquer coisa que possa detectar com um sentido analítico, como a composição química, a massa ou as dimensões exatas, a frequência de sons e o comprimento de onda de energia, e assim por diante. Você só pode aplicar este efeito a um sentido aguçado. Sentidos normais não são analíticos. Custa 1 graduação para um sentido, 2 para um tipo inteiro de sentido.",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503508,
		instanceID: 0,
		name: "Contra-ataca Camuflagem",
		description: "Um tipo de sentido com esta característica ignora o efeito Camuflagem de um descritor específico; você percebe o alvo do efeito normalmente, como se a Camuflagem não estivesse lá. Por exemplo, se você tiver visão que Contra-Ataca Invisibilidade, seres invisíveis serão visíveis para você. Com 5 graduações, o tipo de sentido ignora todos os efeitos de Camuflagem, independente do descritor. Alvos com cobertura parecem levemente \"longe\" para você, o suficiente para saber que eles têm cobertura contra os outros. Esta característica não afeta camuflagem concedida por objetos opacos; para tanto, veja Penetra Cobertura.",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503509,
		instanceID: 0,
		name: "Contra-ataca Ilusão",
		description: "Um tipo de sentido com esta característica ignora o efeito Ilusão; você é automaticamente bem-sucedido em seu teste de salvamento contra a ilusão caso ela afete seu tipo de sentido, percebendo que ela não é real.",
		ranked: false,
		totalRanks: 2,
		additionalDescription: "",
	},
	{
		id: 503510,
		instanceID: 0,
		name: "Detecção",
		description: "Você pode sentir um item ou efeito específico através do toque com um teste de Percepção. Detecção não tem alcance e indica apenas a presença ou ausência de algo (não sendo aguçado nem acurado). Escolha o tipo de sentido sua Detecção (normalmente mental). Com 2 graduações, você pode detectar coisas à distância (com o modificador normal de –1 no teste de Percepção para cada 3 metros).",
		ranked: true,
		totalRanks: 1,
		maxRank: 2,
		additionalDescription: "",
	},
	{
		id: 503511,
		instanceID: 0,
		name: "Elo de Comunicação",
		description: "Você tem um elo com um indivíduo específico, escolhido quando compra esta opção, que também precisa ter esta habilidade. Vocês dois podem se comunicar a qualquer distância como em um uso do efeito Comunicação. Escolha um tipo de sentido como meio de comunicação; mental é comum para elos empáticos ou psíquicos. Caso você aplique o modificador Dimensional ao seu Elo de Comunicação, ele também se estende para outras dimensões (veja Dimensional, em Modificadores de Poder).",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503512,
		instanceID: 0,
		name: "Estendido",
		description: "Você tem um sentido que opera a um alcance maior que o normal. Seu alcance com o sentido — a distância usada para determinar penalidades ao seu teste de Percepção — é aumentada em um fator de 10. Cada vez que você aplica esta opção, seu alcance aumenta em um fator adicional de 10, então 1 graduação significa que você sofre –1 nos testes de Percepção para cada 30 metros, 2 graduações sofrem –1 para cada 300 metros, e assim por diante. Um sentido estendido pode ser limitado por condições como o horizonte e barreiras físicas entre você e seu alvo, a menos que também tenha Penetra Cobertura.",
		ranked: true,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503513,
		instanceID: 0,
		name: "Infravisão",		
		description: "Você pode ver na porção infravermelha do espectro, o que permite que você enxergue padrões de calor. A escuridão não concede camuflagem para objetos com temperaturas diferentes de seus arredores. Caso tenha o efeito rastrear, você pode rastrear criaturas quentes pelas finas trilhas de calor que deixam para trás. O mestre é o árbitro final de por quanto tempo a trilha permanece visível.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503514,
		instanceID: 0,
		name: "Penetra Cobertura",		
		description: "Um sentido com esta característica não é afetado por camuflagem de obstáculos (em vez de efeitos de Camuflagem). Visão que Penetra Cobertura enxerga através de objetos opacos, audição que Penetra Cobertura não é afetada por isolamento acústico e assim por diante.",
		ranked: false,
		totalRanks: 4,
		additionalDescription: "",
	},
	{
		id: 503515,
		instanceID: 0,
		name: "Percepção",		
		description: "<p>Você pode sentir o uso de um descritor específico com um teste de Percepção (CD 10, com –1 no teste para cada 3 metros de distância). Exemplos incluem Percepção Cósmica, Percepção Mental, Percepção Divina, Percepção Magnética e assim por diante. Percepção normalmente é um sentido mental, mas você pode escolher outro. Você também pode aplicar outros efeitos de Sentido à sua Percepção.</p>"
		+ "<p>Percepção conta como um \"sentido exótico\" para notar efeitos com a primeira graduação do modificador Sutil.</p>",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503516,
		instanceID: 0,
		name: "Póscognição",		
		description: "<p>Seus sentidos se estendem ao passado, o que permite que você perceba eventos que já aconteceram. Você pode fazer testes de Percepção para captar informações passadas em uma área ou com um alvo. O mestre define a CD para esses testes baseado em quão obscura ou distante a informação está no passado, a partir de CD 15 (para uma visão vaga que pode ou não ser acurada) até CD 30 (para conhecimento quase completo de um evento passado específico, como se você o tivesse presenciado).</p>"
		+ "<p>Seus sentidos normais, no presente, não funcionam enquanto você está usando Póscognição; sua consciência está focada no passado. Suas visões póscognitivas duram enquanto você se concentra. A Póscognição não se aplica a efeitos sensoriais como Leitura Mental ou a outras habilidades que exijam interação. A Póscognição pode ser limitada a eventos passados ou a suas \"vidas passadas\" ou ancestrais, o que reduz o custo para 2 graduações.</p>"
		+ "<table class='BehindTheMask-Table'>"
		+	"<th>Precognição e Póscognição</th>"
		+		"<td><p>Precognição e póscognição podem ser habilidades problemáticas, uma vez que concedem aos jogadores informações consideráveis. Tenha em mente que informações précognitivas e póscognitivas são muitas vezes enigmáticas ou obscuras, e mudanças nas circunstâncias podem levar a mudanças em visões do futuro. Caso os jogadores abusem dessas habilidades, sinta-se livre para tornar suas visões menos e menos claras, uma vez que as linhas de tempo vão se enrolando devido a vigilância e intervenções constantes.</p>"
		+ 	"<p>No geral, a precognição é mais bem tratada como uma ferramenta de trama para o mestre dar aos jogadores informações adequadas à aventura, semelhante a um uso livre das habilidades de inspiração dos pontos heroicos. De fato, um mestre que deseje limitar a precognição e a póscognição pode exigir esforço extra ou pontos de vitória para usá-las, ou exigir o modificador Incontrolável.</p></td>"
		+	"</tr>"
		+ "</table>"
		+ "",
		ranked: false,
		totalRanks: 4,
	},
	{
		id: 503517,
		instanceID: 0,
		name: "Precognição",		
		description: "<p>Seus sentidos se estendem ao futuro, o que permite que você perceba eventos que podem acontecer. Suas visões précognitivas representam futuros possíveis. Caso as circunstâncias mudem, a visão pode não acontecer. Quando você usa esta habilidade, o mestre escolhe qual informação contar. Suas visões podem ser obscuras e crípticas, abertas à interpretação. O mestre pode exigir testes de Percepção para que você compreenda informações específicas, com CD entre 15 e 30 ou mais. O mestre também pode ativar sua Precognição para fornecer informação como um gancho de aventura. Seus sentidos normais, no presente, não funcionam enquanto você está usando Precognição; sua consciência está focada no futuro. Suas visões précognitivas duram enquanto você se concentra.</p>"
		+ "<p>A Precognição não se aplica a efeitos sensoriais como Leitura Mental ou a outras habilidades que exijam interação.</p>"
		+ "<table class='BehindTheMask-Table'>"
		+	"<th>Precognição e Póscognição</th>"
		+		"<td><p>Precognição e póscognição podem ser habilidades problemáticas, uma vez que concedem aos jogadores informações consideráveis. Tenha em mente que informações précognitivas e póscognitivas são muitas vezes enigmáticas ou obscuras, e mudanças nas circunstâncias podem levar a mudanças em visões do futuro. Caso os jogadores abusem dessas habilidades, sinta-se livre para tornar suas visões menos e menos claras, uma vez que as linhas de tempo vão se enrolando devido a vigilância e intervenções constantes.</p>"
		+ 	"<p>No geral, a precognição é mais bem tratada como uma ferramenta de trama para o mestre dar aos jogadores informações adequadas à aventura, semelhante a um uso livre das habilidades de inspiração dos pontos heroicos. De fato, um mestre que deseje limitar a precognição e a póscognição pode exigir esforço extra ou pontos de vitória para usá-las, ou exigir o modificador Incontrolável.</p></td>"
		+	"</tr>"
		+ "</table>"
		+ "",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503518,
		instanceID: 0,
		name: "Rádio",		
		description: "Você pode \"ouvir\" frequências de rádio, incluindo faixas AM, FM, de televisão, celular e assim por diante. Isso permite que você pegue Rádio Comunicação (veja o efeito Comunicação). Este é o sentido básico para o tipo de sentido de rádio. É à distância, radial e acurado como padrão.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503519,
		instanceID: 0,
		name: "Radial",		
		description: "Você pode fazer testes de Percepção com um sentido radial para qualquer ponto ao seu redor. Alvos atrás de você não podem usar Furtividade para esconder-se de você sem outra camuflagem. Sentidos auditivos, olfativos e táteis são radiais para humanos. Custa 1 graduação para um sentido e 2 graduações para um tipo de sentido.",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503520,
		instanceID: 0,
		name: "Radial (Tipo)",
		description: "Você pode fazer testes de Percepção com um sentido radial para qualquer ponto ao seu redor. Alvos atrás de você não podem usar Furtividade para esconder-se de você sem outra camuflagem. Sentidos auditivos, olfativos e táteis são radiais para humanos. Custa 1 graduação para um sentido e 2 graduações para um tipo de sentido.",
		ranked: false,
		totalRanks: 2,
		additionalDescription: "",
	},
	{
		id: 503521,
		instanceID: 0,
		name: "Rápido",		
		description: "Você pode captar informação de um sentido mais rápido que o normal: cada graduação aumenta sua velocidade de percepção em um fator de 10 (x10, x100, etc.) com um único sentido; dobre o custo para um tipo de sentido inteiro. Você pode usar visão rápida para leitura dinâmica, para captar um tremeluzir entre os frames de um filme, para assistir replays na velocidade rápida, etc.",
		ranked: true,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503522,
		instanceID: 0,
		name: "Rastrear",		
		description: "Você pode seguir trilhas e rastros usando um sentido específico. A CD básica para seguir uma trilha é 10, modificada pelas circunstâncias, como o mestre achar adequado. Você se move à sua graduação de velocidade –1 enquanto rastreia. Com 2 graduações, você pode se mover à sua velocidade normal total enquanto rastreia.",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503523,
		instanceID: 0,
		name: "Sentido de Direção",		
		description: "Você sempre sabe para que lado fica o norte e pode refazer seus passos através de qualquer lugar em que já tenha estado.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503524,
		instanceID: 0,
		name: "Sentido de Distância",		
		description: "Você consegue julgar distâncias automaticamente e com precisão.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503525,
		instanceID: 0,
		name: "Sentido de Perigo",		
		description: "Quando você normalmente ficaria surpreendido em combate, faça um teste de Percepção (CD 10): um grau de sucesso significa que você não fica surpreendido, mas não pode agir durante a rodada de surpresa, enquanto dois ou mais graus de sucesso significam que você não fica surpreendido e pode agir durante a rodada de surpresa (caso haja uma). Falha significa que você é surpreendido (embora, caso tenha Esquiva Fabulosa, você não fique vulnerável). O mestre pode aumentar a CD do teste de Sentido de Perigo em algumas circunstâncias. Escolha um tipo de sentido para seu Sentido de Perigo. Efeitos sensoriais que miram seu sentido também afetam sua habilidade Sentido de Perigo e podem \"cegá-la\".",
		ranked: false,
		totalRanks: 1,
		additionalDescription: "",
	},
	{
		id: 503526,
		instanceID: 0,
		name: "Sentido de Tempo",		
		description: "Você sempre sabe que horas são e pode contar o tempo como se tivesse um cronômetro acurado.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503527,
		instanceID: 0,
		name: "Ultra-Audição",		
		description: "Você pode ouvir sons muito altos e de frequência muito baixa, como apitos para cães ou sinais ultrassônicos, incluindo aqueles usados por alguns controles remotos.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503528,
		instanceID: 0,
		name: "Ultravisão",		
		description: "Você enxerga a luz ultravioleta, o que permite que você enxergue normalmente à noite com a luz das estrelas ou outra fonte de luz UV.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503529,
		instanceID: 0,
		name: "Visão Microscópica",		
		description: "Você enxerga coisas extremamente pequenas. Você pode fazer testes de Percepção para enxergar coisas muito pequenas nas proximidades. Custa 1 graduação pra objetos do tamanho de poeira, 2 graduações para coisas do tamanho de células, 3 graduações para DNA e moléculas complexas, 4 graduações para coisas do tamanho de átomos. O mestre pode exigir testes da perícia Especialidade para você compreender e interpretar o que vê. ",
		ranked: true,
		totalRanks: 1,
		maxRank: 4,
	},
	{
		id: 503530,
		instanceID: 0,
		name: "Visão na Penumbra",		
		description: "Você ignora penalidades de circunstância a testes de Percepção devido a baixas condições de luminosidade, desde que não esteja completamente escuro.",
		ranked: false,
		totalRanks: 1,
	},
	{
		id: 503531,
		instanceID: 0,
		name: "Visão no Escuro",		
		description: "Você enxerga na escuridão total como se fosse dia normal; a escuridão não concede camuflagem contra a sua visão. Em essência, isso é o mesmo que Contra-Ataca Camuflagem (Escuridão).",
		ranked: false,
		totalRanks: 2,
	},
];
