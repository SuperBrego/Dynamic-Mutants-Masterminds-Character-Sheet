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

const effectDefault = {
	name: "Nome",
	baseCost: 0,
	baseRanks: 0,
	enhancedRanks: 0,
	extrasModifiers: [],
	flawsModifiers: [],
	extraFlatModifiers: [],
	flawFlatModifiers: [],
	totalExtraPerRank: function (){

	},
	totalFlawsRank: function (){

	},
	costPerRank: function() {
		/**
		 * =SE( 
				( BASE + EXTRAS - FALHAS) > 0; 
					(BASE + EXTRAS - FALHAS) * GRAD + FIXOS;
				(GRAD / (2 + (-1* (BASE + EXTRAS - FALHAS)) ) ) + FIXOS 
				)
		*/
		this.baseCost + this.extrasCosts - this.flawsCosts
	}, // Isto não funciona
	totalSpent: function () {(this.alteredCost * this.baseRanks) + this.extraFlatModifiers - this.flawFlatModifiers} // Nem isto
	// ^ Nem uma função com os dois.
}

const effectsList = [
		{
			id: 5001,
			name: "Aflição",
			baseCost: 1,
			description: "<p>Você pode impor uma condição ou condições debilitantes como um ataque de toque. Você define as condições a cada grau de falha que sua Aflição causa no momento da compra e não pode mudar elas. Graus maiores de falha substituem os menores e não acumulam. Veja as possíveis condições para cada grau de falha abaixo. O alvo resiste com Fortitude ou Vontade (quando o efeito é escolhido): </p>"
			+ "<table>"
			+ "<tr> <th colspan='2'><b>Teste de Resistência de Aflição</b></th> </tr>"
			+ "<tr> <td colspan='2'><b>Fortitude ou Vontade vs. CD (graduação de Aflição + 10)</b></td> </tr>"
			+ "<tr> <td><b>Sucesso</b></td> <td>Sem efeito</td> </tr>"
			+ "<tr> <td><b>Falha (um grau)</b></td> <td>O alvo está tonto, em transe, fadigado, impedido, prejudicado, ou vulnerável (escolha um).</td> </tr>"
			+ "<tr> <td><b>Falha (dois graus)</b></td> <td>O alvo está compelido, indefeso, desabilitado, exausto, imóvel, caído ou atordoado (escolha um).</td> </tr>"
			+ "<tr> <td><b>Falha (três graus)</b></td> <td>O alvo está adormecido, controlado, incapacitado, paralisado, transformado ou desatento (escolha um).</td> </tr>"
			+ "</table><br>"
			+ "<p>Alvo de Aflição faz teste de resistência ao final de cada turno para tirar condições do primeiro e segundo grau. Condições de terceiro grau requerem um minuto de recuperação ou ajuda exterior, como a perícia Tratamento ou o efeito Cura (CD 10 + graduação).</p>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5002,
			name: "Alongamento",
			baseCost: 1,
			description: "<p>Você pode esticar seu corpo e/ou membros. Some sua graduação neste efeito ao seu tamanho normal para determinar o quão longe você consegue se esticar; para um humano de tamanho normal (graduação de tamanho -2) isso significa 4 metros com 1 graduação, 8 metros com 2 graduações, e assim por diante. Com 20 graduações em Alongamento, você pode se esticar 1.600 quilômetros! </p>"
			+ "<p>Você pode usar Alongamento para fazer ataques \"de toque\" com uma distância maior alongado seus membros. Uma vez alongados, você pode fazer ataques corpo-a-corpo dentro de seu novo alcance como uma ação padrão. Se você não pode perceber o alvo exatamente (você alongar ao redor de uma quina, por exemplo), aplique as regras de camuflagem (veja Camuflagem em Ação & Aventura). Além disso, Alongamento permite que você embrulhar e enredar oponentes, logo lhe concede um bônus de +1 por graduação em agarrar (limitado pelo NP).</p>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5003,
			name: "Ambiente",
			baseCost: 1,
			description: "<p>Você pode mudar o ambiente: aumentar ou diminuir a temperatura, criar luz, fazer chover e assim por diante (veja Ameaças Ambientais no Ação & Aventura). Seu Ambiente afeta um raio de 8 metros ao seu redor com 1 graduação. Cada graduação adicional amplia o raio em uma graduação de distância, para um alcance de mais ou menos 3.200 quilômetros com 20 graduações, o suficiente para alterar o ambiente em um continente inteiro!</p>"
			+ "<p>Cada um dos efeitos a seguir é um efeito Ambiente separado. Caso tenha um, você pode adquirir outros como Efeitos Alternativos, mas só pode usar um de cada vez. Para manter múltiplos efeitos simultaneamente, some seus custos para o custo total do efeito por graduação ou aplique o modificador Seletivo.</p>"
			+ "<br>"
			+ "<p><b>Calor ou Frio</b></p> <hr>"
			+ "<p>Você pode aumentar ou diminuir a temperatura na área (escolha um). Por 1 ponto por graduação, você cria calor ou frio intenso; por 2 pontos por graduação, cria calor ou frio extremo.</p>"
			+ "<p><b>Impedir Movimento</b></p> <hr>"
			+ "<p>Você pode impedir movimento com ventos fortes, superfícies molhadas, gelo ou efeitos similares. Por 1 ponto por graduação, você reduz a velocidade de movimento através da área em 1 graduação; por 2 pontos por graduação, reduz em 2 graduações. Dependendo dos seus descritores, você também pode aplicar modificadores de circunstância em testes de Acrobacia ou Atletismo.</p>"
			+ "<p><b>Luz</b></p> <hr>"
			+ "<p>Você pode aumentar o nível de luminosidade na área, contra-atacando camuflagem por trevas (mas não outros tipos de camuflagem). Por 1 ponto por graduação, você cria luz suficiente para reduzir camuflagem total para parcial e parcial para nenhuma. Por 2 pontos por graduação, cria luz tão intensa quanto um dia ensolarado, eliminando toda camuflagem concedida por escuridão. Efeitos com o descritor trevas podem ser contra-atacados (veja Contra-Atacando Efeitos).</p>"
			+ "<p><b>Visibilidade</b></p> <hr>"
			+ "Por 1 ponto por graduação, você impõe uma penalidade de –2 em testes de Percepção. Por 2 pontos por graduação, impõe uma penalidade de –5. Para um obscurecimento mais significativo, use um efeito de Camuflagem com ataque de área (veja Camuflagem).",
			exclusiveModifiers: [],
		},
	
		{
			id: 5004,
			name: "Camuflagem",
			baseCost: 2,
			description: "<p>Você ganha camuflagem total contra um sentido específico, embora ainda seja detectável por outros sentidos (incluindo outros sentidos do mesmo tipo; assim, você pode ter camuflagem contra visão normal, mas não contra qualquer outro sentido visual). Cada graduação adicional concede camuflagem contra outro sentido; duas graduações concedem camuflagem contra um tipo inteiro de sentido.</p>"
			+ "<p>Camuflagem contra sentidos visuais custa o dobro (2 graduações para um sentido visual, 4 graduações para todos os sentidos visuais). Você não pode ter camuflagem contra sentidos do tato, uma vez que isso exige ser intangível (veja o efeito Intangibilidade). Assim, com Camuflagem 5, você pode ter camuflagem contra todos os sentidos visuais (4 graduações) e contra audição normal (1 graduação), por exemplo. Com Camuflagem 10 você tem total Camuflagem de todos tipos de sentidos, exceto o tátil.</p>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5005,
			name: "Característica",
			baseCost: 1,
			description: "<p>Você tem uma ou mais características menores, efeitos que lhe concedem uma habilidade ocasionalmente útil, uma por graduação. Este efeito é essencialmente uma versão da vantagem Benefício, mas um poder em vez de uma virtude de habilidade, talento ou formação social. Por exemplo, a imunidade diplomática ou a riqueza são Benefícios; pele, a capacidade de imitar sons ou um compartimento escondido em sua perna oca são características. Depende do Mestre sobre quais capacidades são qualificadas como Característica; geralmente, se não haver efeito real no jogo, é apenas um descritor. Se lhe conceder um benefício no sistema, pode ser um Adicional. Não há necessidade de definir todo Adicional possível que o personagem possa ter aos mínimos detalhes.</p>"
			+ "<p>Algumas Características podem ter duração sustentada em vez de permanente, sem mudança no custo. Isso se encaixa para algumas Características que o personagem usa e mantêm em vez de tê-los como características passivas, sem exigir esforço algum.</p>"
			+ "<h2>Exemplo de Características</h2> <br>"
			+ "<ul>"
			+ "<li><b>Compartimento Interno:</b> Você pode carregar uma porção do que carrega dentro de seu corpo! Você tem um bolso ou compartimento de algum tipo capaz de carregar objetos com graduação de tamanho que não sejam maior que 3 menos seu tamanho (tamanho -5 para um humano normal de tamanho -2).</li>"
			+ "<li><b>Efeito Especial:</b> Você tem algum tipo de efeito, como uma rajada de vento no momento dramático, iluminação ideal ou uma música-tema. O mestre pode conceder-lhe um bônus de +2 por circunstâncias favoráveis quando seu efeito especial pode impressionar outras pessoas ou ajudá-lo de outra forma.</li>"
			+ "<li><b>Estômago de Ferro:</b> Você pode comer qualquer coisa não tóxica sem efeitos negativos, não importa quão desagradável seja: estragada ou nojenta ou picante, por exemplo.</li>"
			+ "<li><b>Inércia Temporal:</b> Você pode imitar quase qualquer som que ouvir, dando-lhe um bônus de +10 em testes de Enganação para convencer outros que os sons são reais.</li>"
			+ "<li><b>Inércia Temporal:</b> Você está \"ancorado\" de alguma forma ao contínuo do espaço-tempo, sendo imune a mudanças na história. Você lembra da versão “verdadeira” de eventos históricos, mesmo que ninguém mais lembre.</li>"
			+ "<li><b>Mudança Rápida:</b> Você pode trocar de roupas – como entrar ou sair de seu traje – como uma ação livre. Com duas graduações, pode mudar para qualquer traje à vontade.</li>"
			+ "<li><b>Pelo Protetor:</b> Você tem uma cobertura de pelos que o protege do calor e frio intenso, dando-lhe imunidade a esses ambientes.</li>"
			+ "</ul>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5006,
			name: "Característica Aumentada",
			description: "<p>Você pode melhorar uma de suas características, escolhida quando compra este efeito. Enquanto este efeito estiver ativo, você aumenta a característica escolhida em sua graduação. Assim, por exemplo, Força Aumentada 5 aumenta sua Força em +5 enquanto estiver ativa. A característica aumentada ainda está sujeita aos limites do nível de poder.</p>"
			+ "<p>O custo por graduação de Característica Aumentada é igual ao custo por graduação da característica afetada. A diferença é que Característica Aumentada é um efeito de poder, em vez de uma característica natural e, como tal, pode ser combinada com esforço extra e outros efeitos.</p>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5007,
			name: "Compreender",
			baseCost: 2,
			description: "<p>Você compreende diferentes tipos de comunicação. Cada graduação neste efeito permite que você escolha uma das opções a seguir.</p>"
			+ "<p><b>Animais</b></p> <hr>"
			+ "<p>Você pode falar com ou compreender animais. Você pode fazer perguntas e receber respostas, mas os animais não são mais amistosos ou cooperativos que o normal. Além disso, animais desconfiados tendem a ser breves e evasivos, enquanto animais estúpidos fazem comentários vazios. Caso um animal seja amistoso, pode realizar algum favor ou serviço para você. Com 2 graduações, você pode tanto falar quanto compreender o “idioma” dos animais.</p>"
			+ "<p><b>Espíritos</b></p> <hr>"
			+ "<p>Você pode se comunicar com seres espirituais incorpóreos e normalmente invisíveis e inaudíveis, como fantasmas ou entidades extradimensionais, dependendo do cenário. Com 1 graduação você opera como um \"médium\", sendo capaz de perceber os espíritos e relatar o que ouve e vê. Com 2 graduações você também é compreendido pelos habitantes do mundo espiritual. À escolha do mestre, este efeito pode se estender a mortos-vivos, demônios ou outras entidades sobrenaturais, dependendo do cenário.</p>"
			+ "<p><b>Idiomas</b></p> <hr>"
			+ "<p>Você pode falar ou compreender o idioma de qualquer criatura inteligente. Este efeito não permite que você fale com criaturas que não tenham um idioma. Com 2 graduações você pode falar e compreender todos os idiomas. Com 3 graduações, qualquer um capaz de ouvir você pode compreender o que você diz, independente do idioma. Ser capaz de ler qualquer idioma que você compreenda exige 1 graduação adicional.</p>"
			+ "<p><b>Máquinas</b></p> <hr>"
			+ "<p>Você pode se comunicar com dispositivos eletrônicos, fazendo indagações e compreendendo suas respostas. Isso exige duas graduações de Compreender. A maioria está limitada por sua programação e periféricos em termos de o que \"sabem\", e podem não ser capazes de responder certas perguntas com algo além de um \"desconhecido\" ou \"não encontrado\". De acordo com o mestre, você pode usar a perícia Tecnologia como uma perícia de interação quando se comunica com máquinas.</p>"
			+ "<p><b>Objetos</b></p> <hr>"
			+ "<p>Você pode se comunicar com objetos inanimados, concedendo-lhes a capacidade de falar com você ou simplesmente “lendo” impressões vindas deles. Isso exige duas graduações de Compreender. Objetos “sabem” apenas sobre eventos que os afetem diretamente ou que ocorram em sua área imediata. O mestre pode aplicar as diretrizes de Póscognição (veja Sentidos) a este efeito.</p>"
			+ "<p><b>Plantas</b></p> <hr>"
			+ "<p>Você pode se comunicar com plantas, tanto as normais quando criaturas-planta. Isso exige duas graduações de Compreender. A consciência que uma planta tem de seus arredores é limitada, então ela pode não ser capaz de responder perguntas sobre eventos fora da área próxima.</p>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5007,
			name: "Comunicação",
			baseCost: 4,
			description: "Você pode se comunicar usando um meio que não seja sua voz normal. Escolha um sentido como seu meio de Comunicação (veja a lista para exemplos). Você também pode usar um sentido especial (como neutrinos, grávitons, mensagens mágicas, e assim por diante) perceptível apenas a uma forma apropriada do efeito Detecção (veja Sentidos), de acordo com o mestre."
			+ "<ul>"
			+ "<li><b>Auditiva:</b> raio ultrasônico, \"ventriloquismo\".</li>"
			+ "<li><b>Olfativa:</b> feromônios ou marcadores químicos.</li>"
			+ "<li><b>Mental:</b> transmissão telepática, ligação telepática, mensagem mística.</li>"
			+ "<li><b>Rádio:</b> AM, FM, frequências de rádio de ondas curtas, micro-ondas.</li>"
			+ "<li><b>Tátil:</b> onda vibratória transportadora.</li>"
			+ "<li><b>Visual:</b> ligação a laser ou de fibra ótica.</li>"
			+ "</ul>"
			+ "<p>Sua graduação determina o alcance de sua Comunicação, conforme abaixo.</p>"
			+ "<table>"
			+ "<tr> <th><b>Graduação</b></th> <th><b>Distância</b></th>  </tr>"
			+ "<tr> <td>1</td> <td>Perto: até 30 metros</td> </tr>"
			+ "<tr> <td>2</td> <td>Próximo: dentro de 1,5 quilômetros.</td> </tr>"
			+ "<tr> <td>3</td> <td>Longo: Dentro do mesmo Estado (ou de uma nação pequena)</td> </tr>"
			+ "<tr> <td>4</td> <td>Mundial: qualquer lugar da Terra (ou planeta de tamanho parecido)</td> </tr>"
			+ "<tr> <td>5</td> <td>Ilimitado: na prática, qualquer lugar</td> </tr>"
			+ "</table><br>"
			+ "<p>Sua Comunicação é instantânea, mas afeta apenas uma pessoa (é enviada a um único recipiente dentro do alcance). O recipiente deve ter um meio de receber sua transmissão (supersentidos ou um receptor de algum tipo; estar consciente é tudo o que é necessário para \"receber\" uma Comunicação Mental). Você pode receber uma Comunicação do seu mesmo tipo. O recipiente pode ignorar sua Comunicação, se quiser. A Comunicação é dependente de idioma; você e o alvo devem compartilhar de um mesmo idioma (veja Compreender para se comunicar independentemente de idiomas).</p>"
			+ "<p>Ativar este efeito é uma ação livre. Comunicar-se, no entanto, leva a quantidade de tempo normal. Você pode aplicar o modificador Rápido para acelerar as coisas, mas seu recipiente deve ser capaz de receber comunicação nessa velocidade.</p>"
			+ "<p>Outros indivíduos com sentidos aguçados capazes de detectar seu meio de Comunicação podem perceber suas transmissões com um teste de Percepção (CD 10 + sua graduação de Comunicação). O bisbilhoteiro deve estar dentro do seu alcance sensorial, ou do recipiente. Com dois graus de sucesso, ele pode compreender sua transmissão. Efeitos como Camuflagem que mirem seu meio de comunicação podem “interferir” em sua transmissão.</p>"
			,
			exclusiveModifiers: [],
		},
	
		{
			id: 5008,
			name: "Controle de Sorte",
			baseCost: 3,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5009,
			name: "Crescimento",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5010,
			name: "Criar",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5011,
			name: "Cura",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5012,
			name: "Dano",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5013,
			name: "Deflexão",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5014,
			name: "Encolhimento",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5015,
			name: "Enfraquecer",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5016,
			name: "Escavação",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5017,
			name: "Ilusão",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5018,
			name: "Imortalidade",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5019,
			name: "Imunidade",
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5020,
			name: "Intangibilidade",
			baseCost: 5,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5021,
			name: "Invocar",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5022,
			name: "Leitura Mental",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5023,
			name: "Membros Extras",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5024,
			name: "Morfar",
			baseCost: 5,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5025,
			name: "Mover Objetos",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5026,
			name: "Movimento",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5027,
			name: "Natação",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5028,
			name: "Nulificar",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5029,
			name: "Proteção",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5030,
			name: "Rapidez",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5031,
			name: "Regeneração",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5032,
			name: "Salto",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5033,
			name: "Sentido Remoto",
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5034,
			name: "Sentidos",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5035,
			name: "Teleporte",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5036,
			name: "Transformar",
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5037,
			name: "Variável",
			baseCost: 7,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5038,
			name: "Velocidade",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5039,
			name: "Voo",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5040,
			name: "- Arranjo -",
			description: "Arranjo é um conjunto de poderes, qual só pode ser usado um por vez."
		},
		{
			id: 5041,
			name: "- Efeitos Ligados -",
			description: "Selecione este poder para adicionar múltiplos efeitos que são todos ativados ao mesmo tempo."
		},
		{
			id: 5041,
			name: "- Múltiplos Efeitos - ",
			description: "Selecione este poder para adicionar vários efeitos a um único poder."
		},
	];