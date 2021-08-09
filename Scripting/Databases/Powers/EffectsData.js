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

const powerDefault = {
	name: "",
	id: 0,
	effectID: -1,
	baseCost: 0,
	baseRanks: 1,
	enhancedRanks: 0,
	resistance: "",
	
	type: "",
	action: "",
	range: "",
	duration: "",

	// Modificadores
	extras: [],
	flaws: [],
	flats: [],
	alternateEffects: [],

	removable: 0,

	totalExtraPerRank: function() {
		let sum = 0;

		for(let i = 0; i < this.extras.length; i++){
			sum += this.extras[i].ranks;
		}

		return parseInt(sum);
	},
	totalFlawsPerRank: function () {
		let sum = 0;

		for(let i = 0; i < this.flaws.length; i++){
			sum += this.flaws[i].ranks;
		}

		return parseInt(sum);
	},
	totalFlat: function() {
		let sum = 0;

		for(let i = 0; i < this.flats.length; i++){
			sum += this.flats[i].ranks;
		}

		return parseInt(sum);
	},
	/**
	* SE ( BASE + EXTRAS - FALHAS) > 0; ENTÃO (BASE + EXTRAS - FALHAS) * GRAD + FIXOS;
	* SE NÃO (GRAD / (2 + (-1* (BASE + EXTRAS - FALHAS)) ) ) + FIXOS 
	*/
	totalPointSpent: function() {
		let costPerRank = (this.baseCost + this.totalExtraPerRank() - this.totalFlawsPerRank() );

		let totalSpent;

		if( costPerRank > 0 ){ 
			totalSpent = parseInt( costPerRank * this.baseRanks + this.totalFlat() + this.alternateEffects.length ); 
		}
		else{ 
			totalSpent = parseInt( (this.baseRanks / (2 + (-1 * costPerRank ) ) ) + this.totalFlat()  + this.alternateEffects.length ) ; 
		}

		if(this.removable == 1){
			totalSpent = totalSpent - parseInt(totalSpent/5);
		}
		else if(this.removable == 2){
			totalSpent = totalSpent - parseInt((totalSpent/5) * 2);
		}

		return parseInt(totalSpent);

	},

	element: 0,
}

const _EffectsList = [
		{
			id: 5042,
			name: "- Arranjo -",
			action: "Livre",
			duration: "Sustentado",
			description: "Arranjo é um conjunto de poderes, qual só pode ser usado um por vez."
		},
		{
			id: 5043,
			name: "- Dispositivo -",
			action: "Livre",
			duration: "Permanente",
			description: "Um dispositivo tem um ou mais efeitos e pode ser equipado e desequipado."
		},
		{
			id: 5044,
			name: "- Defesa Impenetrável -",
			type: "Geral",
			action: "Livre",
			duration: "Contínuo",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Contínua.</li>"
			+ "</ul>"
			+ "Faça as graduações de uma de suas defesas (normalmente Resistência) Impenetrável."
			+ "",
		},
		{
			id: 5045,
			name: "- Efeitos Ligados -",
			action: "Livre",
			duration: "Sustentado",
			description: "Selecione este poder para adicionar múltiplos efeitos que são todos ativados ao mesmo tempo."
		},
		{
			id: 5046,
			name: "- Múltiplos Efeitos - ",
			action: "Livre",
			duration: "Sustentado",
			description: "Selecione este poder para adicionar vários efeitos a um único poder."
		},
		{
			id: 5001,
			name: "Aflição",
			type: "Ataque",
			range: "Perto",
			action: "Padrão",
			duration: "Instantânea",
			baseCost: 1,
			conditions: [
				["Impedido", "Fadigado", "Prejudicado", "Tonto", "Transe", "Vulnerável"],
				["Atordoado", "Caído", "Compelido", "Desabilitado", "Exausto", "Imóvel", "Indefeso"],
				["Adormecido", "Controlado", "Desatento", "Incapacitado", "Paralisado", "Transformado"]
			],
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Ataque.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Perto.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "<li><b>Salvamento</b>: Fortitude/Vontade.</li>"
			+ "</ul>"
			+ "<p>Você pode impor uma condição ou condições debilitantes como um ataque de toque. Você define as condições a cada grau de falha que sua Aflição causa no momento da compra e não pode mudar elas. Graus maiores de falha substituem os menores e não acumulam. Veja as possíveis condições para cada grau de falha abaixo. O alvo resiste com Fortitude ou Vontade (quando o efeito é escolhido): </p>"
			+ "<table class='GoldenCells'>"
			+ "<tr> <th colspan='2'><b>Teste de Resistência de Aflição</b></th> </tr>"
			+ "<tr> <td colspan='2'><b>Fortitude ou Vontade vs. CD (graduação de Aflição + 10)</b></td> </tr>"
			+ "<tr> <td><b>Sucesso</b></td> <td>Sem efeito</td> </tr>"
			+ "<tr> <td><b>Falha (um grau)</b></td> <td>O alvo está tonto, em transe, fadigado, impedido, prejudicado, ou vulnerável (escolha um).</td> </tr>"
			+ "<tr> <td><b>Falha (dois graus)</b></td> <td>O alvo está compelido, indefeso, desabilitado, exausto, imóvel, caído ou atordoado (escolha um).</td> </tr>"
			+ "<tr> <td><b>Falha (três graus)</b></td> <td>O alvo está adormecido, controlado, incapacitado, paralisado, transformado ou desatento (escolha um).</td> </tr>"
			+ "</table><br>"
			+ "<p>Alvo de Aflição faz teste de resistência ao final de cada turno para tirar condições do primeiro e segundo grau. Condições de terceiro grau requerem um minuto de recuperação ou ajuda exterior, como a perícia Tratamento ou o efeito Cura (CD 10 + graduação).</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5002,
			name: "Alongamento",
			baseCost: 1,
			type: "Geral",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			grabBonus: 1,
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode esticar seu corpo e/ou membros. Some sua graduação neste efeito ao seu tamanho normal para determinar o quão longe você consegue se esticar; para um humano de tamanho normal (graduação de tamanho -2) isso significa 4 metros com 1 graduação, 8 metros com 2 graduações, e assim por diante. Com 20 graduações em Alongamento, você pode se esticar 1.600 quilômetros! </p>"
			+ "<p>Você pode usar Alongamento para fazer ataques \"de toque\" com uma distância maior alongado seus membros. Uma vez alongados, você pode fazer ataques corpo-a-corpo dentro de seu novo alcance como uma ação padrão. Se você não pode perceber o alvo exatamente (você alongar ao redor de uma quina, por exemplo), aplique as regras de camuflagem (veja Camuflagem em Ação & Aventura). Além disso, Alongamento permite que você embrulhar e enredar oponentes, logo lhe concede um bônus de +1 por graduação em agarrar (limitado pelo NP).</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5003,
			name: "Ambiente",
			type: "Controle",
			range: "Graduação",
			action: "Livre",
			duration: "Sustentado",
			baseCost: 1,
			powerOptions: [
				"Calor",
				"Frio",
				"Impedir Movimento",
				"Luz",
				"Visibilidade"
			],
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1-2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Controle.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Graduação.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode mudar o ambiente: aumentar ou diminuir a temperatura, criar luz, fazer chover e assim por diante (veja Ameaças Ambientais no Ação & Aventura). Seu Ambiente afeta um raio de 8 metros ao seu redor com 1 graduação. Cada graduação adicional amplia o raio em uma graduação de distância, para um alcance de mais ou menos 3.200 quilômetros com 20 graduações, o suficiente para alterar o ambiente em um continente inteiro!</p>"
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
			unavaliableModifiers: [],
		},
	
		{
			id: 5004,
			name: "Camuflagem",
			type: "Sensorial",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			baseCost: 2,
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Sensorial.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você ganha camuflagem total contra um sentido específico, embora ainda seja detectável por outros sentidos (incluindo outros sentidos do mesmo tipo; assim, você pode ter camuflagem contra visão normal, mas não contra qualquer outro sentido visual). Cada graduação adicional concede camuflagem contra outro sentido; duas graduações concedem camuflagem contra um tipo inteiro de sentido.</p>"
			+ "<p>Camuflagem contra sentidos visuais custa o dobro (2 graduações para um sentido visual, 4 graduações para todos os sentidos visuais). Você não pode ter camuflagem contra sentidos do tato, uma vez que isso exige ser intangível (veja o efeito Intangibilidade). Assim, com Camuflagem 5, você pode ter camuflagem contra todos os sentidos visuais (4 graduações) e contra audição normal (1 graduação), por exemplo. Com Camuflagem 10 você tem total Camuflagem de todos tipos de sentidos, exceto o tátil.</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5005,
			name: "Característica",
			type: "Geral",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			baseCost: 1,
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Você tem uma ou mais características menores, efeitos que lhe concedem uma habilidade ocasionalmente útil, uma por graduação. Este efeito é essencialmente uma versão da vantagem Benefício, mas um poder em vez de uma virtude de habilidade, talento ou formação social. Por exemplo, a imunidade diplomática ou a riqueza são Benefícios; pele, a capacidade de imitar sons ou um compartimento escondido em sua perna oca são características. Depende do Mestre sobre quais capacidades são qualificadas como Característica; geralmente, se não haver efeito real no jogo, é apenas um descritor. Se lhe conceder um benefício no sistema, pode ser um Adicional. Não há necessidade de definir todo Adicional possível que o personagem possa ter aos mínimos detalhes.</p>"
			+ "<p>Algumas Características podem ter duração sustentada em vez de permanente, sem mudança no custo. Isso se encaixa para algumas Características que o personagem usa e mantêm em vez de tê-los como características passivas, sem exigir esforço algum.</p>"
			+ "<h2>Exemplo de Características</h2>"
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
			unavaliableModifiers: [],
		},
	
		{
			id: 5006,
			name: "Característica Aumentada",
			type: "Geral",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: Conforme Característica.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode melhorar uma de suas características, escolhida quando compra este efeito. Enquanto este efeito estiver ativo, você aumenta a característica escolhida em sua graduação. Assim, por exemplo, Força Aumentada 5 aumenta sua Força em +5 enquanto estiver ativa. A característica aumentada ainda está sujeita aos limites do nível de poder.</p>"
			+ "<p>O custo por graduação de Característica Aumentada é igual ao custo por graduação da característica afetada. A diferença é que Característica Aumentada é um efeito de poder, em vez de uma característica natural e, como tal, pode ser combinada com esforço extra e outros efeitos.</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5007,
			name: "Compreender",
			type: "Sensorial",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			baseCost: 2,
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Sensorial.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Você compreende diferentes tipos de comunicação. Cada graduação neste efeito permite que você escolha uma das opções a seguir.</p>"
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
			unavaliableModifiers: [],
		},
	
		{
			id: 5008,
			name: "Comunicação",
			type:"Sensorial",
			range: "Graduação",
			action: "Livre",
			duration: "Sustentado",
			baseCost: 4,
			maxRank: 5,
			valuePerRank: [
				"Perto: até 30 metros", 
				"Próximo: dentro de 1,5 quilômetros",
				"Longo: Dentro do mesmo Estado (ou de uma nação pequena)",
				"Mundial: qualquer lugar da Terra (ou planeta de tamanho parecido)",
				"Ilimitado: na prática, qualquer lugar"
			],
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 4 por graduação.</li>"
			+ "<li><b>Tipo</b>: Sensorial.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Graduação.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "Você pode se comunicar usando um meio que não seja sua voz normal. Escolha um sentido como seu meio de Comunicação (veja a lista para exemplos). Você também pode usar um sentido especial (como neutrinos, grávitons, mensagens mágicas, e assim por diante) perceptível apenas a uma forma apropriada do efeito Detecção (veja Sentidos), de acordo com o mestre."
			+ "<ul>"
			+ "<li><b>Auditiva:</b> raio ultrasônico, \"ventriloquismo\".</li>"
			+ "<li><b>Olfativa:</b> feromônios ou marcadores químicos.</li>"
			+ "<li><b>Mental:</b> transmissão telepática, ligação telepática, mensagem mística.</li>"
			+ "<li><b>Rádio:</b> AM, FM, frequências de rádio de ondas curtas, micro-ondas.</li>"
			+ "<li><b>Tátil:</b> onda vibratória transportadora.</li>"
			+ "<li><b>Visual:</b> ligação a laser ou de fibra ótica.</li>"
			+ "</ul>"
			+ "<p>Sua graduação determina o alcance de sua Comunicação, conforme abaixo.</p>"
			+ "<table style='border: 2px solid black; border-radius: 10px;' border='2'>"
			+ "<tr>"
			+ "<th class='GoldenCells'><b>Graduação</b></th>"
			+ "<th class='GoldenCells'><b>Distância</b></th>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>1</td>"
			+ "<td class='NoBGCells'>Perto: até 30 metros</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>2</td>"
			+ "<td class='LightGoldenCells'>Próximo: dentro de 1,5 quilômetros.</td>" 
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>3</td>"
			+ "<td class='NoBGCells'>Longo: Dentro do mesmo Estado (ou de uma nação pequena)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>4</td>"
			+ "<td class='LightGoldenCells'>Mundial: qualquer lugar da Terra (ou planeta de tamanho parecido)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>5</td>"
			+ "<td class='NoBGCells'>Ilimitado: na prática, qualquer lugar</td>"
			+ "</tr>"
			+ "</table><br>"
			+ "<p>Sua Comunicação é instantânea, mas afeta apenas uma pessoa (é enviada a um único recipiente dentro do alcance). O recipiente deve ter um meio de receber sua transmissão (supersentidos ou um receptor de algum tipo; estar consciente é tudo o que é necessário para \"receber\" uma Comunicação Mental). Você pode receber uma Comunicação do seu mesmo tipo. O recipiente pode ignorar sua Comunicação, se quiser. A Comunicação é dependente de idioma; você e o alvo devem compartilhar de um mesmo idioma (veja Compreender para se comunicar independentemente de idiomas).</p>"
			+ "<p>Ativar este efeito é uma ação livre. Comunicar-se, no entanto, leva a quantidade de tempo normal. Você pode aplicar o modificador Rápido para acelerar as coisas, mas seu recipiente deve ser capaz de receber comunicação nessa velocidade.</p>"
			+ "<p>Outros indivíduos com sentidos aguçados capazes de detectar seu meio de Comunicação podem perceber suas transmissões com um teste de Percepção (CD 10 + sua graduação de Comunicação). O bisbilhoteiro deve estar dentro do seu alcance sensorial, ou do recipiente. Com dois graus de sucesso, ele pode compreender sua transmissão. Efeitos como Camuflagem que mirem seu meio de comunicação podem “interferir” em sua transmissão.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5009,
			name: "Controle de Sorte",
			type: "Controle",
			range: "Percepção",
			action: "Reação",
			duration: "Instantânea",
			baseCost: 3,
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 3 por graduação.</li>"
			+ "<li><b>Tipo</b>: Controle.</li>"
			+ "<li><b>Ação</b>: Reação.</li>"
			+ "<li><b>Distância</b>: Percepção.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "</ul>"
			+ "<p>Você pode gastar Pontos de Vitória ou usos da vantagem Sorte para afetar os outros. Para cada graduação neste efeito, escolha uma das seguintes habilidades:</p>"
			+ "<ul>"
			+ "<li>Você pode gastar pontos de vitória ou usos de Sorte em benefício de outros personagens, com os efeitos normais.</li>"
			+ "<li>Você pode conceder seu ponto de vitória ou uso de Sorte para os outros. Você só pode usar esta habilidade em um personagem uma vez por rodada, mas o alvo pode usar o(s) ponto(s) concedido(s) normalmente</li>"
			+ "<li>Você pode gastar um ponto de vitória ou uso de Sorte para cancelar o uso de um ponto de vitória ou da vantagem Sorte de outro personagem, ou para cancelar uma complicação imposta pelo mestre (neste caso, nenhum ponto de vitória é concedido por ela).</li>"
			+ "<li>Você pode gastar um ponto de vitória ou uso de Sorte para forçar outra pessoa a refazer uma rolagem e ficar com o pior resultado. O alvo deste efeito pode gastar um ponto de vitória ou uso de Sorte para evitá-lo.</li>"
			+ "</ul>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5010,
			name: "Crescimento",
			baseCost: 2,
			type: "Geral",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode aumentar de tamanho temporariamente, ganhando Força e Vigor ao custo de se tornar um alvo maior, mais pesado, menos ágil e incapaz de manobrar através de espaços pequenos. Os modificadores de Crescimento são limitados pelo nível de poder.</p>"
			+ "<p>Crescimento aplica os seguintes modificadores: </p>"
			+ "<ul>"
			+ "<li><b>A cada graduação</b> some +1 em Força e Vigor (+1 em Resistência para personagens sem Vigor) e +1 em valor de graduação de Massa, mas aplique penalidade circunstancial de -1 em testes de Furtividade.</li>"
			+ "<li><b>A cada 2 graduações</b> some +1 de bônus circunstancial para testes de Intimidação, mas subtraia -1 das Defesas Esquiva e Aparar.</li>"
			+ "<li><b>A cada 4 graduações</b> some +1 a sua graduação de Tamanho (começando no valor -2 para tamanho de humano normal) e some +1 em sua graduação de Alcance (mesmo de Tamanho).</li>"
			+ "<li><b>A cada 8 graduações</b> some +1 na sua graduação de Velocidade terrestre (valor inicial 0).</li>"
			+ "</ul>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5011,
			name: "Criar",
			baseCost: 2,
			type: "Controle",
			range: "A Distância",
			action: "Padrão",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Controle.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: A Distância.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "<li><b>Salvamento</b>: Esquiva.</li>"
			+ "</ul>"
			+ "<p>Você pode formar objetos sólidos a partir do nada. Eles podem ser feitos de pedra, gelo, energia solidificada ou algum outro tipo de meio, dependendo dos descritores.</p>"
			+ "<p>Você pode fazer qualquer forma geométrica simples ou objeto comum (como um cubo, esfera, domo, martelo, lente, disco, etc.). O mestre tem a palavra final se um objeto é complexo demais para este efeito. No geral, seus objetos não podem ter partes móveis mais complexas que uma dobradiça. Eles podem ser ocos ou maciços, opacos ou transparentes, e você escolhe quando usa o efeito, limitado por seus descritores e pelo julgamento do mestre.</p>"
			+ "<p>Você pode criar um objeto com uma graduação máxima de volume igual à sua graduação neste efeito e Resistência igual à sua graduação neste efeito. Objetos criados podem ser danificados ou quebrados como objetos comuns. Eles também desaparecem se você parar de mantê-los. Você pode reparar qualquer dano a um objeto criado à vontade, usando seu efeito de novo (em essência, \"recriando\" o objeto). Seus objetos criados são estacionários uma vez que você os tenha criado, embora outros efeitos possam movê-los. Assuma que um objeto criado tem graduação de massa igual à sua graduação de volume.</p>"
			+ "<p><b>Objetos criados, Cobertura e Camuflagem</b></p>"
			+ "<hr>"
			+ "<p>Um objeto criado pode conceder cobertura ou camuflagem (caso seja opaco) da mesma forma que um objeto comum. A cobertura concedida por um objeto criado pode bloquear ataques vindos de fora, mas também bloqueia ataques realizados de dentro. Ataques que acertem o objeto servindo de cobertura causam dano ao objeto normalmente (veja Danificando Objetos). Efeitos indiretos podem passar a cobertura concedida por um objeto criado da mesma forma que com qualquer outra cobertura (veja o modificador Indireto). O modificador Seletivo permite que você mude a cobertura e a camuflagem concedidas por seus objetos.</p>"
			+ "<p><b>Prendendo com Objetos</b></p>"
			+ "<hr>"
			+ "<p>Você pode prender um alvo dentro de um objeto oco e grande o suficiente (uma gaiola ou bolha, por exemplo). Isso exige tanto um teste de ataque contra a Esquiva do alvo quanto um teste de salvamento de Esquiva contra a graduação do efeito. Um personagem preso pode fugir do objeto normalmente. Outras condições impostas sobre o alvo que não sejam apenas prendê-lo exigem efeitos separados, como Aflições (veja Aflição), que você pode querer adquirir como um Efeito Alternativo de Criar (veja Efeito Alternativo).</p>"
			+ "<p><b>Derrubando Objetos</b></p>"
			+ "<hr>"
			+ "<p>Derrubar um objeto criado sobre um alvo é tratado como um ataque com Efeito de Área baseado no tamanho do objeto (veja o extra Área). O objeto causa dano igual à sua Resistência, e os alvos devem fazer um teste de esquiva para evitar o objeto. Um teste bem sucedido significa que o alvo não sofre dano (em vez de metade do dano, como sempre). Enquanto um objeto criado tem potencial para ser usado como uma arma improvisada, o efeito não pode criar ataques ou outros efeitos; você deve adquirir esses efeitos separadamente (talvez como Efeitos Alternativos).</p>"
			+ "<p><b>Suportando Peso</b></p>"
			+ "<hr>"
			+ "<p>Caso um objeto criado precise suportar algum peso — ele é criado como uma ponte ou para apoiar uma estrutura enfraquecida, por exemplo —, ele tem uma Força efetiva igual à sua graduação. Você pode usar um objeto criado como “apoio”, usando uma ação padrão e se concentrando, aumentando sua Força em 1 até o início da sua próxima rodada. Você também pode usar esforço extra para aumentar a Força de um objeto criado por uma rodada, e esses modificadores são cumulativos.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5012,
			name: "Cura",
			baseCost: 2,
			type: "Geral",
			range: "Perto",
			action: "Padrão",
			duration: "Instantânea",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Perto.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "</ul>"
			+ "<p>Você pode curar condições de Dano tocando um alvo e usando uma ação padrão para fazer um teste de Cura de CD 10. Cada grau de sucesso cura uma condição de Dano, começando com a pior. Caso o alvo esteja Moribundo, o primeiro sucesso estabiliza o alvo, removendo a condição moribundo. Caso o teste de Cura falhe, você deve esperar um minuto ou usar esforço extra para tentar de novo.</p>"
			+ "<p>Você também pode conceder a um alvo um bônus igual à sua graduação em Cura em um teste de salvamento contra efeitos com os descritores doença ou veneno. O bônus se aplica ao próximo salvamento do alvo contra o efeito.</p>"
			+ "<p>Você pode usar Cura em si mesmo, desde que seja capaz de usar a ação padrão exigida. Cura não funciona em alvos incapazes de se recuperar sozinhos, como criaturas sem graduação de Vigor, nem em objetos inanimados.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5013,
			name: "Dano",
			type: "Ataque",
			baseCost: 1,
			range: "Perto",
			action: "Padrão",
			duration: "Instantânea",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Ataque.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Perto.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "<li><b>Salvamento</b>: Resistência.</li>"
			+ "</ul>"
			+ "<p>Você pode causar dano em um alvo realizando um ataque corpo-a-corpo. A natureza exata do seu Dano fica à sua escolha, dependendo da aprovação do mestre. Pode ser qualquer coisa, de um soco poderoso ou garras afiadas a campos de energia. O alvo se defende com Resistência.</p>"
			+ "<table style='border: 2px solid black; border-radius: 10px;' class='GoldenCells'>"
			+ "<tr>"
			+ "<tr> <th colspan='2'><b>TESTE DE SALVAMENTO CONTRA DANO</b></th> </tr>"
			+ "<tr> <td colspan='2'><hr></td> </tr>"
			+ "<tr> <td colspan='2'><center><b>Resistência contra (Graduação em Dano + 15)</b></center></td> </tr>"
			+ "<tr>"
			+ "<td><b>Sucesso</b>:</td> <td>o dano não tem efeito.</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td><b>Falha (um grau)</b>:</td> <td>o alvo sofre uma penalidade de circunstância de –1 nos próximos salvamentos contra dano.</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td><b>Falha (dois graus)</b>:</td> <td>o alvo fica tonto até o fim de seu próximo turno e sofre uma penalidade de circunstância de –1 nos próximos salvamentos contra dano.</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td><b>Falha (três graus)</b>:</td> <td>o alvo fica abatido e sofre uma penalidade de circunstância de –1 nos próximos salvamentos contra dano. Caso o alvo fique abatido de novo, aplique o quarto grau do efeito. A condição abatido continua até que o alvo se recupere (veja Recuperação, a seguir).</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td><b>Falha (quatro graus)</b>:</td> <td>o alvo fica incapacitado.</td>"
			+ "</tr>"
			+ "</table>"
			+ "<p>As penalidades para testes de Resistência são cumulativas, então um alvo que falhe em três salvamentos contra Dano sofre uma penalidade total de –3.</p>"
			+ "<p>Caso um alvo incapacitado falhe em um teste de salvamento contra Dano, sua condição muda para moribundo. Um alvo moribundo que falhe em um teste de salvamento contra Dano está morto.</p>"
			+ "<br>"
			+ "<p><b>FORÇA E DANO</b></p>"
			+ "<hr>"
			+ "<p>Força concede um efeito de Dano \"embutido\": a habilidade de bater em coisas! Você pode aplicar modificadores de efeito no Dano causado por sua Força, tornando-o em um efeito Penetrante ou até mesmo de Área! Você também pode ter Efeitos Alternativos para seu Dano de Força; veja o modificador Efeito Alternativo para detalhes. Como outros efeitos de Dano, o Dano de Força de um personagem tem alcance perto e duração instantânea como padrão.</p>"
			+ "<p>Se você quiser, um efeito Dano pode ser baseado em Força — algo como uma arma corpo-a-corpo —, o que permite que seu Dano de Força se some a ele. Você soma suas graduações de Força e Dano para determinar a graduação do ataque. Todos os modificadores aplicados ao seu Dano devem se aplicar à sua graduação de Força para seu bônus de dano se beneficiar deles. No entanto, qualquer decréscimo à sua Força reduz o total que você pode somar ao seu Dano, e Força negativa diminui o seu Dano!</p>"
			+ "<p>Da mesma forma, qualquer coisa que o impeça de exercer sua Força também o impede de usar efeitos de Dano baseados em Força. Se você não puder impulsionar seu punho, também não pode impulsionar uma espada. Por outro lado, uma lâmina laser causa o mesmo dano, mesmo que você não possa exercer toda a sua Força.</p>"
			+ "<br>"
			+ "<p><b>CAUSANDO DANO A OBJETOS</b></p>"
			+ "<hr>"
			+ "<p>Objetos (alvos sem graduação de Vigor) sofrem dano de maneira parecida a outros alvos. Resultados como tonto e abatido não têm efeito prático em objetos inanimados, uma vez que eles não usam ações. Já constructos, que podem usar ações, ficam tontos e abatidos normalmente.</p>"
			+ "<p>Objetos inanimados são indefesos por definição e, assim, passíveis de ataques finais (veja Ataques Finais no Ação & Aventura): você pode escolher entre realizar um ataque como um teste de rotina ou como um teste de ataque normal, neste caso ganhando um acerto crítico caso acerte (bônus de +5 no efeito).</p>"
			+ "<p>Atacar um objeto segurado ou vestido por outro personagem é uma ação quebrar (veja Quebrar).</p>"
			+ "<p>Caso a intenção de um atacante seja entortar, quebrar ou destruir um objeto, então dois graus de falha no teste de Resistência resultam em entortar ou quebrar (como fazer um buraco ao socar um objeto), enquanto três graus ou mais de falha significam que o objeto é destruído (estilhaçado, feito em pedaços, etc.)</p>"
			+ "<p style='padding-left: 10px;'><i><b>Exemplo</b>: Lady Liberdade, resgatando pessoas de um incêndio, fica presa em meio a destroços que desabaram do teto. A jogadora decide abrir caminho por entre os destroços a socos. Uma vez que está buscando causar o máximo de dano possível, decide fazer um teste de ataque normal (em vez de um teste de rotina). Dado seu bônus de ataque, ela só vai errar se rolar 1 natural. O mestre decide que os tijolos, argamassa e as vigas pesadas têm uma Resistência 9 e faz um teste de Resistência, rolando 4, contra a CD 30 (o Dano de Lady Liberdade + 15). Um resultado de 13 são três graus de falha, então ela atravessa os destroços e limpa o caminho, levando as pessoas para segurança!</i></p>"
			+ "<p>A Resistência de alguns materiais comuns são mostradas abaixo. As graduações listadas são para uma espessura de 2,5 centímetros (graduação de distância –7) do material: aplique +1 cada vez que aumentar a espessura em uma graduação de distância, e –1 cada vez que diminuí-la. Assim, 50 centímetros de pedra (graduação de distância –4) têm Resistência 8. Equipamento tem Resistência baseada no material de que é feito. Dispositivos têm Resistência básica igual ao total de pontos do dispositivo divididos por 5 (arredondados para baixo, mínimo 1).</p>"
			+ "<br>"
			+ "<center>"
			+ "<table style='border: 2px solid black; border-radius: 10px;' border='2'>"
			+ "<tr> <th colspan='2' class='GoldenCells'><b>Resistência dos Materiais</b></th> </tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'><b>Material</td>"
			+ "<td class='LightGoldenCells'><b>Resistência</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Papel, solo</td>"
			+ "<td class='NoBGCells'>0</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Corda, gelo, vidro</td>"
			+ "<td class='LightGoldenCells'>1</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Madeira</td>"
			+ "<td class='NoBGCells'>3</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Pedra</td>"
			+ "<td class='LightGoldenCells'>5</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Ferro</td>"
			+ "<td class='NoBGCells'>7</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Concreto reforçado</td>"
			+ "<td class='LightGoldenCells'>8</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Aço</td>"
			+ "<td class='NoBGCells'>9</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Titânio</td>"
			+ "<td class='LightGoldenCells'>15</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Super-ligas</td>"
			+ "<td class='NoBGCells'>20+</td>"
			+ "</tr>"
			+ "</table>"
			+ "</center>"
			+ "<br>"
			+ "<p><b>RECUPERAÇÃO</b></p>"
			+ "<hr>"
			+ "<p>Alvos vivos removem uma condição de dano por minuto de descanso, começando pela pior condição e voltando. Assim, um personagem ferido se recupera de estar incapacitado, então abatido, tonto e, finalmente, remove a penalidade de Resistência de –1.</p>"
			+ "<p>Os efeitos Cura e Recuperação podem acelerar esse processo. Ferimentos duradouros ou mais sérios são tratados como complicações (veja Ferimentos Duradouros).</p>"
			+ "<p>Objetos, que não têm Vigor, não se recuperam de dano. A menos que tenham um efeito como Regeneração, precisam ser consertados (veja a perícia Tecnologia).</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5014,
			name: "Deflexão",
			baseCost: 1,
			type: "Defesa",
			range: "A Distância",
			action: "Padrão",
			duration: "Instantânea",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Defesa.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: A Distância.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "</ul>"
			+ "<p>Você pode defender ativamente outros personagens além de si mesmo, defletindo ou desviando ataques contra eles à distância, e pode ser capaz de defender mais eficientemente a si mesmo, dependendo de sua graduação. Veja a ação Defender-se para detalhes. Você usa sua graduação de Deflexão no lugar de uma defesa ativa. Você ainda soma 10 a uma rolagem do dado de Deflexão cujo resultado seja 10 ou menos, para uma rolagem mínima de 11.</p>"
			+ "<p>Os modificadores de Deflexão são limitados pelo nível de poder. Como um ataque à distância, se você Defletir à distância média, sofre uma penalidade de circunstância de –2 no teste. À longa distância, você sofre uma penalidade de circunstância de –5. O alcance é medido a partir de você até o alvo do ataque que você está defletindo. Como a ação defletir, Deflexão não funciona contra efeitos de área ou contra ataques à distância baseados em percepção, nem contra ataques mirando defesas que não sejam Esquiva ou Aparar.</p>"
			+ "<p style='padding: 5px; border: 2px solid black;'>Este efeito é principalmente útil para escudos e outros dispositivos usados para ativamente bloquear ou desviar ataques. Note que a configuração padrão de Deflexão é A Distância; qualquer personagem pode \"defletir\" usando a opção de se defender ativamente na página Ações e Manobras. A única razão para ter Deflexão Perto é aplicar modificadores de poder, como Reflexão e Redirecionar.</p>"
			+ "<p>Deflexão foi deliberadamente designada de exigir uma ação padrão para se defender, porque seus benefícios \"quebram\" os limites de nível de poder, concedendo um teste oposto para ataques contra o personagem defendendo-se, o que pode resultar a um bônus de +10 para sua defesa ativa (se o jogador rolar um 20 no teste de defesa). Isso é o porque que um Deflexão \"automático\", exigindo menos que uma ação padrão é proibido; daria ao personagem uma quebra do nível de poder considerável em jogo sem custo (além dos pontos de personagem necessários).</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5015,
			name: "Encolhimento",
			baseCost: 2,
			type: "Geral",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode diminuir de tamanho temporariamente, tornando-se menor e mais difícil de ver — e acertar — ao custo de perder Força e velocidade.</p>"
			+ "<p>Encolhimento aplica os seguintes modificadores: </p>"
			+ "<ul>"
			+ "<li><b>A cada graduação</b> some +1 de bônus circunstancial à seus testes de Furtividade e subtraia -1 na sua graduação de massa (começando em 1).</li>"
			+ "<li><b>A cada 2 graduações</b> some +1 em suas defesas de Aparar e Esquiva e aplique -1 de penalidade circunstancial aos seus testes de Intimidação.</li>"
			+ "<li><b>A cada 4 graduações</b> reduza sua graduação de tamanho em -1 (começando no valor -2 para tamanho de humano normal) e reduza sua graduação de Força em -1.</li>"
			+ "<li><b>A cada 8 graduações</b> subtraia -1 na sua graduação de Velocidade terrestre (valor inicial 0).</li>"
			+ "</ul>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5016,
			name: "Enfraquecer",
			baseCost: 1,
			type: "Ataque",
			range: "Perto",
			action: "Padrão",
			duration: "Instantânea",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Ataque.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Perto.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "<li><b>Salvamento</b>: Fortitude/Vontade.</li>"
			+ "</ul>"
			+ "<p>Você pode diminuir temporariamente uma das características do alvo, escolhida quando este feito é adquirido. Você deve tocar o alvo, fazendo um ataque corpo-a-corpo.</p>"
			+ "<table class='GoldenCells' style='border: 2px solid black; border-radius: 10px;'>"
			+ "<tr> <th colspan='2'><b>TESTE DE SALVAMENTO DE ENFRAQUECER</b></th> </tr>"
			+ "<tr> <td colspan='2'><hr></td> </tr>"
			+ "<tr> <td colspan='2'><center><b>Fortitude ou Vontade contra CD (10 + graduação em Enfraquecer)</b></center></td> </tr>"
			+ "<tr> <td><b>Sucesso</b>:</td> <td>Enfraquecer não tem efeito.</td> </tr>"
			+ "<tr> <td><b>Falha</b>:</td> <td>o alvo perde uma quantidade de pontos de poder da característica afetada igual à diferença entre o resultado do teste e a CD, até um máximo igual à graduação de Enfraquecer. Múltiplos salvamentos falhos são cumulativos, até o máximo da graduação de Enfraquecer.</td> </tr>"
			+ "</table>"
			+ "<p>Os pontos perdidos retornam na razão de 1 por rodada no final de cada turno do alvo. Objetos inanimados não recuperam Resistência enfraquecida; eles devem ser consertados. Os objetos podem ou não recuperar outras características enfraquecidas, de acordo com o mestre, e dependendo dos descritores do efeito.</p>"
			+ "<br>"
			+ "<p><b>ENFRAQUECENDO HABILIDADES</b></p>"
			+ "<hr>"
			+ "<p>Habilidades enfraquecidas para abaixo de –5 se tornam debilitadas. Não é possível enfraquecer uma habilidade além disso (qualquer uso posterior de Enfraquecer não tem efeito).</p>"
			+ "<br>"
			+ "<p><b>ENFRAQUECENDO DISPOSITIVOS</b></p>"
			+ "<hr>"
			+ "<p>Enfraquecer com Afeta Objetos e o(s) descritor(es) certo(s) pode diminuir as características concedidas por um dispositivo (veja a falha Removível e em Apetrechos & Equipamento). Por exemplo, Enfraquecer Magia poderia drenar os poderes de um dispositivo mágico (além dos próprios poderes mágicos de um alvo), assim como Enfraquecer Eletricidade poderia afetar um dispositivo elétrico. Isso também se aplica a equipamento, embora equipamento tenda a ter menos características para serem enfraquecidas. O mestre deve se sentir livre para proibir efeitos de Enfraquecer que não fazem sentido. Por exemplo, só porque um efeito de Enfraquecer Dano é possível, não quer dizer que um personagem deveria ser capaz de fazer com que armas de fogo causassem menos dano!</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5017,
			name: "Escavação",
			baseCost: 1,
			type: "Movimento",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Movimento.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode escavar através do solo. Você se move através de terra e da areia a uma graduação de velocidade igual à sua graduação de Escavação –5. Então, com Escavação 8, você pode se mover através do chão com graduação de velocidade 3 (mais ou menos 30 km/h). Escavar através de barro duro ou de terra compacta reduz a velocidade em uma graduação. Escavar através de rocha sólida reduz a velocidade em duas graduações. O túnel que você deixa pode ser permanente ou desabar atrás de você imediatamente (você escolhe quando começa a escavar um novo túnel).</p>"
			+ "<p>Perceba que Escavação é diferente do efeito de Movimento Permear, que permite que você passe através de um obstáculo como o chão à sua velocidade normal sem perturbá-lo (veja Movimento para detalhes).</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5018,
			name: "Ilusão",
			baseCost: 1,
			maxBaseCost: 5,
			type: "Sensorial",
			range: "Percepção",
			action: "Padrão",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1-5 por graduação.</li>"
			+ "<li><b>Tipo</b>: Controle.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Percepção.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "<li><b>Salvamento</b>: Vontade.</li>"
			+ "</ul>"
			+ "<br>"
			+ "<p>Você pode controlar os sentidos de outras pessoas para criar impressões falsas. Isso pode variar de imagens a sons e cheiros falsos, ou até mesmo impressões mentais ou de radar. Suas ilusões afetam um número de tipos de sentido igual ao custo por graduação do efeito: um tipo de sentido para custo de 1 ponto por graduação, dois tipos de sentido para custo de 2 pontos por graduação e assim por diante. Por 5 pontos por graduação, você afeta todos os tipos de sentido. Sentidos visuais contam como dois tipos de sentido. Sua graduação determina o quão convincente é sua ilusão, incluindo a CD para o salvamento de Intuição (10 + graduação).</p>"
			+ "<br>"
			+ "<p><b>Tamanho das Ilusões</b></p>"
			+ "<hr>"
			+ "<p>Sua ilusão ocupa uma área com graduação máxima de volume igual à sua graduação no efeito. Para aumentar o tamanho da ilusão, aplique o extra Área; cada aplicação aumenta a área coberta por sua ilusão em 1 graduação.</p>"
			+ "<p><b>Efeitos Ilusórios</b></p>"
			+ "<hr>"
			+ "<p>Ilusões não têm substância e não podem afetar o mundo real. Assim, elas não podem iluminar, aquecer, alimentar, ou ter qualquer efeito parecido (embora possam passar a sensação dessas coisas). Da mesma forma, uma parede ilusória só consegue impedir que as pessoas atravessem uma área enquanto elas acreditarem que a parede é real, e uma ponte ou chão ilusórios são revelados como falsos assim que alguém pise neles... e caia!</p>"
			+ "<p><b>Sobrepujando Ilusões</b></p>"
			+ "<hr>"
			+ "<p>Personagens que encontrem uma ilusão não podem fazer testes para reconhecê-la como tal até que interajam com ela de alguma forma. Um teste de Intuição contra uma ilusão (CD 10 + graduação de Ilusão) a revela como falsa. Um teste que falhe significa que o personagem não nota nada estranho. Um personagem diante de uma prova clara de que uma ilusão não é real não precisa de teste. Sentidos com o efeito contra-ataca Ilusão (veja Sentidos) detectam ilusões imediatamente. Caso um dos presentes consiga descobrir a verdade sobre uma ilusão e comunicar esse fato para os outros, eles ganham outro teste de Intuição com um bônus de circunstância +5. Outras circunstâncias podem conceder modificadores adicionais para o teste de Intuição para sobrepujar uma ilusão.</p>"
			+ "<p><b>Mantendo Ilusões</b></p>"
			+ "<hr>"
			+ "<p>Manter uma ilusão estática (que não se move ou interage) é uma ação livre. Manter uma ilusão ativa (como uma criatura em combate) exige uma ação padrão por rodada.</p>"
			+ "<br>"
			+ "<table class='BehindTheMask-Table'>"
			+ "<tr> <td class='BehindTheMask-Header'> <h2>Por Trás da Máscara</h2> </td> </tr>"
			+ "<tr> <td class='BehindTheMask-Body'>"
			+ "<p>Ilusão é um efeito bastante amplo, útil para um bom número de coisas diferentes. A seguir estão algumas considerações sobre Ilusão.</p>"
			+ "<p><b>Ilusões que causam Dano</b></p>"
			+ "<hr>"
			+ "<p>Para ilusões tão realistas a ponto de serem capazes de causar dano, adicione um efeito Dano À Distância Percepção Ligado à Ilusão. À escolha do mestre, este efeito pode até mesmo ser feito como um Arranjo Ligado a uma variedade de Efeitos Alternativos de ataque, o que permite que o ilusionista cause outras condições além de dano a seus alvos. Todos os efeitos de ataque precisam ser de mesma distância que o efeito de Ilusão.</p>"
			+ "<br>"
			+ "<p><b>Aparência Ilusória</b></p>"
			+ "<hr>"
			+ "<p>Ilusão pode alterar a aparência de um alvo, em essência concedendo um disfarce impenetrável — pelo menos até que alguém seja bem-sucedido em um teste para ver através da ilusão. No entanto, para a simples habilidade de alterar a aparência, use o efeito Morfar, que no geral é mais eficiente que Ilusão Limitada à Aparência.</p>"
			+ "<br>"
			+ "<p><b>Ilusões Mentais</b></p>"
			+ "<hr>"
			+ "<p>O efeito padrão de Ilusão é percebido por qualquer um ou por qualquer coisa (inclusive a máquinas) como se fosse real. Algumas ilusões existem apenas na mente, como alucinações psíquicas. Este tipo de Ilusão tem a falha Resistível por Vontade e o extra Seletivo, uma vez que o ilusionista pode escolher se projeta ou não a ilusão na mente de um alvo específico, decidindo quem pode ou não percebê-la. Isso é um modificador de +0, pelo mesmo custo básico.</p>"
			+ "<br>"
			+ "<p><b>Meu Aliado, Meu Inimigo</b></p>"
			+ "<hr>"
			+ "<p>Um truque comum de Ilusão é alterar as aparências de um inimigo e de um aliado, fazendo com que o companheiro de um inimigo ataque o inimigo sem querer. No geral, você pode lidar com isso com um teste oposto de Ilusão e Intuição; se vencer, o alvo não se dá conta da troca e ataca o alvo errado.</p>"
			+ "<br>"
			+ "<p><b>NÃO QUERO ACREDITAR!</b></p>"
			+ "<hr>"
			+ "<p>Tenha em mente que os personagens não podem fazer testes de salvamento para sobrepujar ilusões a menos que tenham alguma razão para acreditar que ela não é real. Dadas as coisas fantásticas que podem acontecer em cenários de Mutantes & Malfeitores, uma ilusão geralmente tem de prover alguma evidência de sua natureza. Ilusionistas espertos mantêm a verdadeira natureza de seu poder em segredo, e mestres espertos exigem que os jogadores criem desculpas mais elaboradas que “Eu não acredito!” para descobrir quando há uma ilusão por perto.</p>"
			+ "</td> </tr>"
			+ "</table>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5019,
			name: "Imortalidade",
			baseCost: 2,
			type: "Defesa",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Defesa.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Você pode se recuperar da morte! Caso sua condição se torne morto, você pode retornar à vida depois de um tempo. Subtraia sua graduação em Imortalidade da graduação de tempo de 19 (um mês) para determinar quanto tempo leva. Assim, Imortalidade 11, por exemplo, retorna você à vida em 30 minutos (19 – 11 = graduação de tempo 8). Com 20 graduações, você retorna à vida no início de cada rodada de ação! Quando ressuscita, todas as suas condições de dano são removidas, mas você também perde todos os Pontos de Vitória acumulados.</p>"
			+ "<table style='border: 2px solid black; border-radius: 8px;'>"
			+ "<tr>"
			+ "<td colspan='2' class='GoldenCells'><b>Tabela de Imortalidade</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'><b>Graduação</b></td>"
			+ "<td class='LightGoldenCells'><b>Tempo</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>1</td>"
			+ "<td class='NoBGCells'>2 semanas</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>2</td>"
			+ "<td class='LightGoldenCells'>1 semana</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>3</td>"
			+ "<td class='NoBGCells'>4 dias</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>4</td>"
			+ "<td class='LightGoldenCells'>2 dias</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>5</td>"
			+ "<td class='NoBGCells'>1 dia</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>6</td>"
			+ "<td class='LightGoldenCells'>16 horas</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>7</td>"
			+ "<td class='NoBGCells'>8 horas</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>8</td>"
			+ "<td class='LightGoldenCells'>4 horas</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>9</td>"
			+ "<td class='NoBGCells'>2 horas</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>10</td>"
			+ "<td class='LightGoldenCells'>1 hora</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>11</td>"
			+ "<td class='NoBGCells'>30 minutos</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>12</td>"
			+ "<td class='LightGoldenCells'>15 minutos</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>13</td>"
			+ "<td class='NoBGCells'>8 minutos</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>14</td>"
			+ "<td class='LightGoldenCells'>4 minutos</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>15</td>"
			+ "<td class='NoBGCells'>2 minutos</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>16</td>"
			+ "<td class='LightGoldenCells'>1 minuto (10 rodadas)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>17</td>"
			+ "<td class='NoBGCells'>30 segundos</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>18</td>"
			+ "<td class='LightGoldenCells'>12 segundos</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>19</td>"
			+ "<td class='NoBGCells'>6 segundos (uma rodada)</td>"
			+ "</tr>"
			+ "</table>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5020,
			name: "Imunidade",
			type: "Defesa",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Defesa.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Você é imune a certos efeitos, sendo bem-sucedido automaticamente em testes de salvamento contra eles. Você designa graduações de Imunidade a vários efeitos para ganhar imunidade a eles (com efeitos mais extensos exigindo mais graduações). As graduações designadas são permanentes.</p>"
			+ "<p>A seguir estão alguns exemplos.</p>"
			+ "<ul>"
			+ "<li><b>1 graduação:</b> envelhecimento, doença, veneno, uma condição ambiental (frio, calor, pressão alta, radiação, ou vácuo), um tipo de sufocamento (respirar normalmente debaixo d’água ou em uma atmosfera alienígena, por exemplo), inanição e sede, necessidade de dormir ou um descritor raro de poder.</li>"
			+ "<li><b>2 graduações:</b> acertos críticos, sufocamento (você nunca precisa respirar) ou um descritor incomum de poder (como químico, gravidade, necromântico, etc.).</li>"
			+ "<li><b>5 graduações:</b> efeitos de alteração, efeitos de Aflição sensorial, efeitos de emoção, armadilha (agarrar, cordas), efeitos de fatiga, perícias de interação ou um efeito específico de Dano (como munição, fogo, frio, eletricidade, queda, magia, radiação, sônico, etc.).</li>"
			+ "<li><b>10 graduações:</b> um descritor comum de poder (como fogo, frio, eletricidade, radiação, ou descritores ligados ao clima, por exemplo), suporte vital (inclui imunidade à doença, a veneno, a todas as condições ambientais, sufocamento, inanição e sede).</li>"
			+ "<li><b>20 graduações:</b> um descritor de poder comum (contuso ou energia, por exemplo).</li>"
			+ "<li><b>30 graduações:</b> todos os efeitos resistidos por Fortitude, todos os efeitos resistidos por Vontade.</li>"
			+ "<li><b>80 graduações:</b> todos os efeitos resistidos por Resistência (o equivalente a 40 graduações de Resistência Impenetrável).</li>"
			+ "</ul>"
			+ "<br>"
			+ "<p><b>Graus de Imunidade</b></p>"
			+ "<hr>"
			+ "<p>Alguns efeitos de Imunidade são uma questão de grau. Por exemplo, \"imunidade ao frio\" pode variar de efeitos ambientais de frio (descritos em \"O Ambiente\") a dano por frio, à imunidade completa a todos os efeitos com o descritor “frio”. O primeiro exige apenas 1 graduação, e não concede salvamento a outros tipos de efeito de frio. O segundo exige 5 graduações e concede apenas imunidade a efeitos de Dano por frio. O terceiro exige 10 graduações e concede imunidade completa a todos os efeitos com o descritor \"frio\", sejam eles quais forem.</p>"
			+ "<table class='BehindTheMask-Table'>"
			+ "<tr> <td class='BehindTheMask-Header'><h2>Por Trás da Máscara</h2></td> </tr>"
			+ "<tr> <td class='BehindTheMask-Body'>"
			+ "<p>Certos personagens nas histórias em quadrinhos são completamente imunes a certas coisas. Imunidade foi pensada para conceder esta opção aos personagens de Mutantes & Malfeitores. Chega um ponto em que é mais simples dizer que um personagem é imune a alguma coisa do que perder tempo rolando os dados. Imunidade também encoraja a criatividade: caso você não possa vencer um inimigo batendo nele, o que você vai fazer? Encoraje os jogadores a usarem táticas, malandragem, façanhas de poder, e pontos de vitória para lidar com inimigos imunes a seus ataques mais convencionais.</p>"
			+ "<p>Se você achar que imunidade é um problema no seu jogo — especialmente as imunidades amplas das graduações mais altas —, sinta-se livre para restringi-la (talvez para não mais de 10 graduações) ou elimine-a por completo, substituindo-a por Proteção e bônus de defesa com os modificadores apropriados. Para imunidade a Dano, veja o extra Impenetrável em Modificadores.</p>"
			+ "</td> </tr>"
			+ "</table>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5021,
			name: "Intangibilidade",
			baseCost: 5,
			maxRank: 4,
			type: "Geral",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 5 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode assumir uma forma menos sólida. Você pode alternar entre a forma normal e a Intangível uma vez por rodada, como uma ação livre. Por padrão sua forma tangível é sua forma \"normal\", mas o mestre pode permitir que você faça de sua forma Intangível sua forma \"normal\"; nesse caso, permanecer sólido tem duração sustentada para você!</p>"
			+ "<p>Intangibilidade oferece quatro graus de efeito. Você não ganha a habilidade de assumir formas Intangibilidade de graduação menor em graduações mais altas, mas pode comprar as formas de graduação menores como um Efeito Alternativo de uma graduação mais alta.</p>"
			+ "<br>"
			+ "<p><b>1 Graduação - Fluida</b></p>"
			+ "<hr>"
			+ "<p>Você se torna uma massa fluida. Você pode fluir através de qualquer tipo de abertura, por baixo ou ao redor de portas, através de canos e buracos de fechadura, e assim por diante. Você não pode passar através de nada que seja impermeável ou hermeticamente fechado. Você pode fluir automaticamente para fora de qualquer impedimento — como uma armadilha ou de alguém agarrando — que não seja hermeticamente fechado. Assim, você não pode fluir para fora de uma bolha que o cubra por completo, mas qualquer coisa que o cubra menos do que isso não pode prendê-lo."
			+ "Você pode usar toda a sua Força normal e pode empurrar ou carregar objetos, embora sua destreza manual possa estar limitada (de acordo com o mestre). Um personagem fluido pode tentar pegar uma pessoa ou objeto em queda, amortecendo a queda com sua forma flexível. Isso exige uma ação de movimento, e reduz o dano da queda pelo seu bônus de Resistência (que representa sua flexibilidade, neste caso). Tanto você quanto o personagem em queda devem fazer salvamentos contra o dano restante. Formas intangíveis de graduações mais altas — que não têm Força física — não podem tentar isso.</p>"
			+ "<br>"
			+ "<p><b>2 graduações - Gasosa</b></p>"
			+ "<hr>"
			+ "<p>Você se torna uma nuvem de gás ou partículas finas. Você não tem Força efetiva, mas tem Imunidade a Dano Físico. Ataques de energia e de área ainda o afetam. Você pode fluir através de qualquer abertura que não seja hermeticamente fechada.</p>"
			+ "<br>"
			+ "<p><b>3 graduações - Energética</b></p>"
			+ "<hr>"
			+ "<p>Você se torna energia coesa. Você não tem Força efetiva, mas tem Imunidade a Dano Físico. Ataques de energia (que não sejam da energia que constitui sua forma, contra a qual é Imune) ainda o afetam. Você pode passar através de objetos sólidos permeáveis ao seu tipo de energia, mas barreiras resistentes de energia, como escudos pesados ou campos de força, bloqueiam seu movimento.</p>"
			+ "<br>"
			+ "<p><b>4 graduações - Incorpóreo</b></p>"
			+ "<hr>"
			+ "<p>Você se torna um fantasma. Você pode passar por matéria sólida à sua velocidade normal e tem Imunidade a Dano Físico e de Energia. Efeitos sensoriais (que não sejam táteis e aqueles mirando sua Vontade) ainda funcionam em você, assim como efeitos com o modificador Afeta Intangível. Escolha um outro efeito ou descritor razoavelmente comum que funciona em você enquanto está intangível. Você não tem Força efetiva e não pode afetar o mundo físico, exceto com efeitos com o modificador Afeta Corpóreo. Seus efeitos sensoriais funcionam normalmente.</p>"
			+ "<p>A menos que tenha Imunidade a Sufocamento, você deve prender a respiração quando passa por um objeto sólido, e pode sufocar. Caso reverta à sua forma sólida por qualquer motivo dentro de um objeto sólido, você sofre dano igual à Resistência do objeto, resistido por sua Fortitude. Caso não seja incapacitado, é imediatamente ejetado do objeto para o espaço aberto mais próximo. Caso seja incapacitado, fica preso dentro do objeto e sua condição piora para moribundo na rodada seguinte (fazendo com que seja muito difícil para qualquer ajuda alcançá-lo).</p>"
			+ "<br>"
			+ "<h2>Descritores de Intangibilidade</h2>"
			+ "<p>Note que os nomes das graduações (fluido, gasoso, etc.) são na prática descritores para os diferentes efeitos de Intangibilidade. Um personagem com Intangibilidade 1 pode esticar o corpo com uma forma de borracha em vez de uma forma líquida, por exemplo, enquanto outro com Intangibilidade 2 poderia se transformar em uma nuvem de insetos em vez de uma nuvem de gás.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5022,
			name: "Invocar",
			baseCost: 2,
			type: "Controle",
			range: "Perto",
			action: "Padrão",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Controle.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Perto.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode chamar outra criatura — um capanga — para ajudá-lo. Essa criatura é criada como um personagem independente com (graduação neste efeito x 15) pontos de personagem. O capanga possui nível de poder igual à graduação de Invocar e não pode ter seus próprios capangas.</p>"
			+ "<p>Você pode invocar seu capanga como uma ação padrão; ele aparece no espaço aberto mais próximo ao seu lado. O capanga age na sua iniciativa a partir da rodada seguinte. Capangas invocados são tontos, tendo apenas uma ação padrão por rodada. Direcionar um capanga para fazer algo é uma ação de movimento, e capangas fazem o que lhes é ordenado até que a tarefa esteja completada. Você sempre tem o mesmo capanga a menos que aplique o modificador Tipo Variável.</p>"
			+ "<p>Seu capanga tem uma atitude prestativa em relação a você e faz seu melhor para ajudá-lo e para obedecer seus comandos. Capangas incapacitados desaparecem. Eles se recuperam normalmente e você não pode invocar um capanga incapacitado até que ele esteja recuperado. Seus capangas invocados também desaparecem caso seu efeito não seja mantido ou caso seja contra-atacado ou nulificado. Para mais informações, veja Capangas.</p>"
			+ "<br>"
			+ "<p><b>Invocar e Descritores</b></p>"
			+ "<hr>"
			+ "<p>Alguns poderes podem parecer Invocação, trazendo capangas para fazer coisas para o personagem, mas na verdade são mais bem representados por outros efeitos. Por exemplo, um xamã capaz de \"invocar\" espíritos para realizar tarefas mágicas. Invocando um espírito do vento, o xamã pode atacar um inimigo com uma Aflição que \"rouba\" seu fôlego. O espírito do vento é um capanga? Tecnicamente, não. Uma vez que o espírito não pode fazer qualquer outra coisa além de criar o efeito Aflição, não pode ser atacado e não pode interagir com outros, é na prática apenas um efeito com um descritor diferente. O mesmo é verdadeiro para um personagem capaz de invocar um \"capanga\" que age como escudo, concedendo os efeitos Deflexão ou Proteção, mas nada além disso.</p>"
			+ "<p>Pense bem se um efeito desejado por um jogador precisa mesmo de Invocar ou não, ou se o \"capanga\" em questão é apenas um descritor para outro efeito! Neste caso, o efeito Invocar não é necessário</p>"
			+ "<table class='BehindTheMask-Table'>"
			+ "<tr> <td class='BehindTheMask-Header'>Por Trás da Máscara</td> </tr>"
			+ "<tr> <td class='BehindTheMask-Body'>"
			+ "<p>Invocar é um efeito útil; uma gangue de capangas não custa muito e concede um monte de ações por rodada! O mestre pode permitir números muito grandes de capangas (invocados ou não) apenas para PdMs. Capangas de PJs estão sujeitos aos limites de nível de poder. Também há questões práticas que limitam o que os capangas podem fazer.</p>"
			+ "<p>Primeiro, comandar seus capangas é uma ação de movimento. Caso queira dar diferentes comandos para diferentes capangas, então é uma ação de movimento por capanga. Assim, é mais fácil dizer a todos \"Ataquem!\" do que dar comandos complexos para cada um no meio do combate.</p>"
			+ "<p>Segundo, o mestre pode preferir que grupos de capangas usem testes de equipe em vez de rolar suas ações em separado. Por exemplo, em vez de fazer oito ataques para oito capangas diferentes, o mestre faz com que sete capangas ajudem o oitavo, concedendo um bônus de +5 a esse capanga. Isso faz com que grupos de capangas sejam mais eficientes no geral, além de limitar as rolagens de dado.</p>"
			+ "<p>O mestre pode vetar o uso do extra Heróico para Invocar. Tratar os capangas como heróis pode atrasar o combate enormemente, especialmente se houver vários deles!</p>"
			+ "</td> </tr>"
			+ "</table>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5023,
			name: "Leitura Mental",
			baseCost: 2,
			type: "Sensorial",
			range: "Percepção",
			action: "Padrão",
			duration: "Sustentada", // 3- Sustentada
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Sensorial.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Percepção.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "<li><b>Salvamento</b>: Vontade.</li>"
			+ "</ul>"
			+ "<p>Você pode ler a mente de outro personagem. Para usar Leitura Mental, faça um teste de efeito oposto por um teste de Vontade do alvo. O grau de sucesso determina o grau de contato.</p>"
			+ "<p>Caso perca o teste oposto, você não pode ler a mente do alvo. Com dois ou mais graus de falha, qualquer tentativa extra na mesma cena exige esforço extra (veja Esforço Extra). Caso deseje um grau maior de contato, você deve usar outra ação padrão e fazer um novo teste oposto</p>"
			+ "<table style='border: 2px solid black; border-radius: 8px;'>"
			+ "<tr>"
			+ "<td colspan='2' class='GoldenCells'><b>Teste de Salvamento contra Leitura Mental</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'><b>Sucesso</b></td>"
			+ "<td class='LightGoldenCells'><b>Grau de Contato</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>1</td>"
			+ "<td class='NoBGCells'><b>Pensamentos superficiais:</b> você pode ler o que o alvo está pensando agora. Leitura mental transcende idiomas; você pode compreender os pensamentos do alvo mesmo que vocês não compartilhem de um mesmo idioma.</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>2</td>"
			+ "<td class='LightGoldenCells'><b>Pensamentos pessoais:</b> você pode investigar a mente do alvo mais fundo em busca de informações. Em essência, pode fazer uma pergunta e receber a resposta da mente do alvo. Caso o alvo não saiba a resposta, você descobre isso.</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>3</td>"
			+ "<td class='NoBGCells'><b>Memória:</b> você pode ler as lembranças e memórias do alvo. Isso permite que você perceba-as com exatidão da maneira como o alvo se recorda delas, uma lembrança por rodada.</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>4</td>"
			+ "<td class='LightGoldenCells'><b>Subconsciente:</b> você pode ler as memórias do subconsciente do alvo, coisas que nem mesmo ele sabe de maneira consciente. Isso pode significar memórias reprimidas, traumas profundos ou até mesmo outras personalidades.</td>"
			+ "</tr>"
			+ "</table>"
			+ "<br>"
			+ "<p>O alvo pode fazer um novo teste de Vontade (CD 10 + graduação de Leitura Mental) no final de cada turno para afastá-lo de sua mente; sucesso encerra o efeito.</p>"
			+ "<br>"
			+ "<p><b>Leitura Mental e Enganação</b></p>"
			+ "<hr>"
			+ "<p>Caso você possa interagir com seu alvo, um teste bem-sucedido de Enganação contra um teste de Intuição do alvo faz com que ele pense conscientemente em uma informação que você esteja procurando, como uma senha ou nome, o que permite que você pesque-a da mente do alvo pelos seus pensamentos superficiais.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5024,
			name: "Membros Extras",
			baseCost: 1,
			type: "Geral",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Você tem membros manipuladores extras, como braços, tentáculos ou até mesmo cabelo ou cauda preênseis. Cada graduação neste efeito concede um membro extra.</p>"
			+ "<p>Membros extras não permitem que você realize ações adicionais na rodada, embora possam conceder os benefícios da vantagem Agarrar Aprimorado - agarrando com um de seus membros e deixando os outros livres. Todos os membros adicionais são considerados \"inábeis\".</p>"
			+ "<p>Caso você tenha a vantagem Benefício (Ambidestria), não sofre penalidades sobre nenhum de seus membros. Caso você use todos os seus membros em uma tentativa de agarrar (em vez de usar a opção de deixar alguns deles livres), ganha um bônus de +1 por graduação em Membros Extras, até um limite de +5, da mesma forma que em um testes em grupo.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5025,
			name: "Morfar",
			baseCost: 5,
			maxRank: 4,
			type: "Geral",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 5 por graduação</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode alterar sua aparência. Suas características não mudam; sua nova forma é uma mudança meramente cosmética. Você ganha um bônus de +20 em testes de Enganação para se disfarçar como a forma assumida (veja as diretrizes para Disfarçar-se em Enganação).</p>"
			+ "<p>Sua graduação em Morfar determina que forma(s) você pode assumir: com 1 graduação você pode assumir uma única outra aparência. Com 2 graduações você pode assumir qualquer forma de um grupo restrito, como pessoas de mais ou menos mesmo tamanho e sexo, um tipo de animal, como pássaros ou répteis, e assim por diante. Com 3 graduações você pode assumir qualquer forma de um grupo amplo, como humanoides, animais, máquinas, e assim por diante. Com 4 graduações você pode assumir qualquer forma com a mesma massa que a sua.</p>"
			+ "<p>Para a habilidade de mudar de tamanho além de alterar a aparência, veja os efeitos Crescimento e Encolhimento. Para pegar outras características das formas assumidas, veja o extra Metamorfo, a seguir, ou o efeito Variável.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	
		{
			id: 5026,
			name: "Mover Objetos",
			baseCost: 2,
			type: "Controle",
			range: "A Distância",
			action: "Padrão",
			duration: "Sustentada", // 3- Sustentada
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação</li>"
			+ "<li><b>Tipo</b>: Controle.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: A Distância.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode mover objetos sem tocar neles. Mover Objeto não tem ação/reação; um objeto em movimento não pode arrastar o personagem movendo-o, por exemplo. Este efeito também não pode ser considerado \"contato físico\" ou \"toque\" para efeitos que assim o exijam.</p>"
			+ "<p>Sua Força efetiva para erguer e mover objetos com este efeito é igual à sua graduação. Usando uma ação de movimento para se concentrar, você pode aumentá-la em +1, alterando a duração do efeito para Concentração. Isso é em adição a usar esforço extra para aumentar sua graduação.</p>"
			+ "<p>Este efeito pode mover objetos, mas não pode realizar tarefas de manipulação fina (como desfazer um nó, escrever, manipular controles, etc.).</p>"
			+ "<p>Mover Objetos não pode causar dano de forma direta; você não pode \"socar\" ou \"esmagar\" objetos com ele. Você pode usá-lo para arremessar objetos (objetos arremessados baseiam seu dano na graduação de poder como se fosse sua graduação de Força) e para agarrar, derrubar e desarmar.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5027,
			name: "Movimento",
			baseCost: 2,
			type: "Movimento",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentada", // 3- Sustentada
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Movimento.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você tem uma forma especial de movimento. Para cada graduação neste efeito, escolha uma das opções abaixo.</p>"
			+ "<br>"
			+ "<p><b>Adaptação ao Ambiente</b></p>"
			+ "<hr>"
			+ "<p>Você é adaptado a um ambiente específico, como subaquático, gravidade zero e assim por diante (veja Ameaças Ambientais). Você não sofre circunstâncias desfavoráveis nem penalidades ao movimento associadas com o ambiente em questão, movendo-se e agindo normalmente. Você ainda é afetado por ameaças ambientais como sufocamento e exposição (você precisa do efeito Imunidade para ignorar essas coisas).</p>"
			+ "<br>"
			+ "<p><b>Andar na Água</b></p>"
			+ "<hr>"
			+ "<p>Você pode ficar em pé e se mover à sua graduação de velocidade terrestre sobre a superfície da água, areia movediça e outros líquidos sem afundar. Caso caia por qualquer razão, você afunda normalmente. Com 2 graduações neste efeito, também fica caído na superfície líquida sem afundar; você só afunda caso assim escolha.</p>"
			+ "<br>"
			+ "<p><b>Balançar-se</b></p>"
			+ "<hr>"
			+ "<p>Você pode se balançar pelo ar à sua graduação de velocidade terrestre normal, usando uma linha providenciada por você mesmo ou disponível (galhos de árvores ou cipós, linhas de telefone ou de energia elétrica, etc.).</p>"
			+ "<br>"
			+ "<p><b>Deslizar</b></p>"
			+ "<hr>"
			+ "<p>Você pode se mover enquanto caído com sua velocidade terrestre normal. Você não sofre penalidades de circunstância para atacar enquanto caído.</p>"
			+ "<br>"
			+ "<p><b>Escalar Paredes</b></p>"
			+ "<hr>"
			+ "<p>Você pode escalar paredes e tetos à sua graduação de velocidade terrestre –1 sem necessidade de um teste de Atletismo. No entanto, você ainda fica vulnerável quando escala. Com mais uma graduação você escala à sua velocidade total e não fica vulnerável quando escala.</p>"
			+ "<br>"
			+ "<p><b>Estabilidade</b></p>"
			+ "<hr>"
			+ "<p>Você é melhor em lidar com obstáculos e obstruções. Reduza em 1 a penalidade de velocidade por mover-se através de obstáculos em 1 por graduação neste efeito. Se você reduzir a penalidade de velocidade para 0 ou menos, você não será afetado por esse obstáculo e se moverá a toda velocidade normal.</p>"
			+ "<br>"
			+ "<p><b>Permear</b></p>"
			+ "<hr>"
			+ "<p>Você pode atravessar objetos sólidos. Com 1 graduação, se move à sua graduação de velocidade –2 através de qualquer objeto físico. Com 2 graduações, se move à sua velocidade –1 e, com 3 graduações, se move à sua velocidade normal. Você não pode respirar quando dentro de um objeto sólido, então precisa prender o fôlego (ou ter Imunidade a Sufocamento). Você também não consegue ver dentro de objetos sólidos, então precisa de Sentidos que Penetrem Camuflagem para saber para onde está indo.</p>"
			+ "<p>Permear normalmente é Limitado a um tipo de substância como terra, gelo ou metal. Permear não concede proteção contra ataques, embora você possa ganhar cobertura quando dentro de um objeto (veja Cobertura). Para a habilidade de permitir que coisas (incluindo ataques) passem através de você, veja o efeito Intangibilidade.</p>"
			+ "<br>"
			+ "<p><b>Queda Segura</b></p>"
			+ "<hr>"
			+ "<p>Você pode cair de qualquer distância sem se ferir, desde que seja capaz de agir. Você também pode parar sua queda a qualquer momento desde que haja algo em que se segurar (como uma borda, mastro, galho, etc.). Caso tenha o poder Escalar Paredes, qualquer superfície que você possa escalar serve como algo em que se segurar. Queda Segura pode ser Limitada a apenas quando você estiver próximo de uma superfície (como a lateral de um prédio); assume-se que você esteja usando a superfície para ajudá-lo a diminuir a velocidade de sua queda.</p>"
			+ "<br>"
			+ "<p><b>Sem Rastros</b></p>"
			+ "<hr>"
			+ "<p>Você não deixa rastros e não pode ser rastreado através de sentidos visuais (embora ainda possa ser rastreado através do faro ou de outros meios). Você pode atravessar areia ou neve sem deixar pegadas, e tem camuflagem total contra sentido sísmico. Cada graduação adicional torna você imune a rastreamento contra outro tipo de sentido.</p>"
			+ "<br>"
			+ "<p><b>Viagem Dimensional</b></p>"
			+ "<hr>"
			+ "<p>Você pode se mover de uma dimensão para outra com uma ação de movimento. Com 1 graduação, pode se mover entre sua dimensão natal e uma outra. Com 2 graduações, pode se mover entre qualquer dimensão de um grupo relacionado (dimensões místicas, dimensões alienígenas, etc.). Com 3 graduações, pode viajar para qualquer dimensão. Você pode carregar até 30 kg (graduação de massa 0) com você quando viaja no tempo. Caso aplique o modificador Aumentar Massa, pode carregar massa adicional até seu modificador de graduação.</p>"
			+ "<br>"
			+ "<p><b>Viagem Espacial</b></p>"
			+ "<hr>"
			+ "<p>Você pode viajar mais rápido que a velocidade da luz através do vácuo do espaço (mas não dentro da atmosfera planetária). Com 1 graduação você pode viajar para outros planetas no sistema solar. Com 2 graduações, pode viajar para outros sistemas estelares, enquanto que com 3 graduações, pode visitar sistemas estelares distantes, talvez até outras galáxias! Este efeito não concede proteção contra os rigores do espaço (para isso, veja o efeito Imunidade).</p>"
			+ "<br>"
			+ "<p><b>Viagem Temporal</b></p>"
			+ "<hr>"
			+ "<p>Você pode se mover através do tempo! Com 1 graduação, pode se mover entre o presente e outro ponto fixo no tempo (como 100 anos no passado, ou 1.000 anos no futuro). Com 2 graduações, pode se mover a qualquer ponto no passado ou a qualquer ponto no futuro (mas não os dois). Com 3 graduações, pode viajar para qualquer ponto no tempo. Alcançar linhas de tempo alternativas ou mundos paralelos exige pelo menos 2 graduações de Viagem Dimensional. Você pode carregar até 30 kg (graduação de massa 0) com você quando viaja no tempo. Caso aplique o modificador Aumentar Massa, pode carregar massa adicional até seu modificador de graduação.</p>"
			+ "<br>"
			+ "<table class='BehindTheMask-Table'>"
			+ "<tr> <td class='BehindTheMask-Header'>Por Trás da Máscara: Tempo, Espaço e Viagem Dimensional</td> </tr>"
			+ "<tr> <td class='BehindTheMask-Body'>"
			+ "<p>Os efeitos Viagem Temporal, Viagem Espacial e Viagem Dimensional de Movimento são baratos, considerando o que podem fazer, primariamente porque essas capacidades especiais de movimento são altamente dependentes da trama e da natureza do cenário, e sujeitas ao julgamento do mestre. Assim, eles são quase que Características \"turbinadas\", que permitem que os heróis visitem locais exóticos.</p>"
			+ "<p>As mecânicas temporais e os efeitos de viagem no tempo são deixados inteiramente a cargo do mestre, que pode decidir tornar Viagem do Tempo Limitada, Incontrolável, ou Inconstante para os personagens jogadores, ou proibi-las por completo, tratando-as apenas como uma ferramenta de trama do cenário.</p>"
			+ "<p>Nos quadrinhos, a viagem espacial raramente envolve as leis da física e tende a ocorrer \"na velocidade da trama\". Os personagens e veículos (como naves alienígenas) capazes de atravessar o vácuo do espaço o fazem primeiramente para facilitar aventuras entre as estrelas. A velocidade exata em que os personagens viajam através do vácuo do espaço normalmente não interessa muito; o importante é quanto tempo leva para eles chegarem onde estão indo. Assim, Viagem Espacial é amplamente definida em termos de \"qual a distância que você pode percorrer entre as cenas?\". O mesmo é verdade para os mecanismos de viagem, sejam eles hiperespaço, motores de salto, \"velocidade warp\" mais rápida que a luz, ou o que você quiser.</p>"
			+ "<p>Da mesma forma, o mestre decide sobre a existência e a natureza de outras dimensões no cenário, como elas são, e quem pode alcançá-las. Da mesma forma que Viagem Espacial, o mestre pode exigir que Viagem Dimensional seja Limitada, Incontrolável, ou Inconstante para os personagens dos jogadores, ou tratá-la apenas como uma ferramenta de trama em vez de um efeito definido.</p>"
			+ "</td> </tr>"
			+ "</table>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5028,
			name: "Natação",
			baseCost: 1,
			type: "Movimento",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Movimento.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você nada rápido. Você tem uma velocidade aquática igual à sua graduação em Natação –2, sujeita as regras normais para nadar (veja a perícia Atletismo). Você pode fazer testes de Atletismo para nadar como testes de rotina.</p>"
			+ "<p>Este poder não permite que você respire embaixo da água (para isso, veja Imunidade).</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5029,
			name: "Nulificar",
			baseCost: 1,
			type: "Controle",
			range: "A Distância",
			action: 1, // 1-Padrão
			duration: "Instantânea",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Ataque.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: A Distância.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "<li><b>Salvamento</b>: Vontade.</li>"
			+ "</ul>"
			+ "<p>Nulificar pode contra-atacar efeitos específicos de um descritor específico, como efeitos de fogo, efeitos mágicos, efeitos mentais, e assim por diante (veja Contra-Atacando Efeitos). Você pode contra-atacar um efeito do descritor escolhido por uso de Nulificar. Você não pode nulificar efeitos inatos (veja o modificador Inato).</p>"
			+ "<p>Faça um ataque à distância para acertar o alvo. Então, faça um teste de sua graduação em Nulificar oposto pela graduação do efeito alvo ou a defesa de Vontade do alvo, o que for maior. Caso esteja mirando o alvo de um efeito em vez do usuário do efeito, faça um teste de sua graduação em Nulificar oposto pela graduação do efeito. Caso você vença, o efeito alvo é desligado, embora o usuário possa reativá-lo normalmente. Caso você perca, não Nulifica o efeito. Com dois ou mais graus de falha, tentar de novo contra o mesmo alvo na mesma cena exige esforço extra.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5030,
			name: "Proteção",
			baseCost: 1,
			type: "Defesa",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Defesa.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Este efeito o protege de dano, fornecendo +1 de Resistência por graduação. Assim, Proteção 4 fornece +4 de Resistência.</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5031,
			name: "Rapidez",
			baseCost: 1,
			type: "Geral",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode realizar tarefas de rotina rápido — qualquer coisa que possa ser feita com um teste de rotina (veja Testes de Rotina) —, talvez até muito rápido. Diminua sua graduação de efeito da graduação de tempo normal para realizar uma tarefa para determinar quanto tempo você leva para realizá-la. Assim, por exemplo, caso você tenha Rapidez 7, um teste de rotina que normalmente leva uma hora (graduação de tempo 9), leva para você apenas (9 – 7 = graduação de tempo 2) 30 segundos. Testes que não sejam de rotina não são afetados por Rapidez, assim como a velocidade de movimento também não é.</p>"
			+ "<p>Caso você possa realizar uma tarefa em menos de um segundo (graduação de tempo –2), o mestre pode escolher tratar a tarefa como uma ação livre para você (embora o mestre ainda possa limitar o número de ações livres que você pode realizar em um turno, como sempre).</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5032,
			name: "Regeneração",
			baseCost: 1,
			type: "Defesa",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Defesa.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Você se recupera rápido de dano. A cada minuto, remova uma quantidade de penalidades em testes de Resistência devido a dano igual à sua graduação em Regeneração. Espalhe esta recuperação igualmente pelas 10 rodadas que compõem um minuto. Assim, com Regeneração 5, você remove uma penalidade em Resistência a cada duas rodadas; com Regeneração 10, remove uma penalidade por rodada, e assim por diante. Você então recupera outras condições de dano igual à sua graduação de Regeneração a cada minuto, começando com a mais severa.</p>"
			+ "<br>"
			+ "<p><b>Regenerando Vigor Ausente</b></p>"
			+ "<hr>"
			+ "<p>Personagens sem Vigor não se curam normalmente (veja Habilidades Ausentes), mas Regeneração resolve isso. Um personagem sem Vigor, mas com Regeneração 1, se recupera à razão normal; graduações adicionais de Regeneração aceleram a razão de recuperação.</p>"
			+ "<table style='border: 2px solid black; border-radius: 8px;'>"
			+ "<tr>"
			+ "<td colspan='2' class='GoldenCells'><b>Tabela de Imortalidade</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'><b>Graduação</b></td>"
			+ "<td class='LightGoldenCells'><b>Tempo (Rodadas)</b></td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>1</td>"
			+ "<td class='NoBGCells'>1 / 10 rodadas (Rodada 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>2</td>"
			+ "<td class='LightGoldenCells'>1 / a cada 5 rodadas (Rodadas 5 e 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>3</td>"
			+ "<td class='NoBGCells'>1 / a cada 3 rodadas (Rodadas 3, 7 e 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>4</td>"
			+ "<td class='LightGoldenCells'>1 / a cada 3.5 rodadas (Rodadas 2, 5, 8 e 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>5</td>"
			+ "<td class='NoBGCells'>1 / a cada 2 rodadas (Rodadas 2, 4, 6, 8 e 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>6</td>"
			+ "<td class='LightGoldenCells'>1 / a cada 1.75 rodadas (Rodadas 2, 4, 5, 6, 8 e 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>7</td>"
			+ "<td class='NoBGCells'>1 / a cada 1.5 rodadas (Rodadas 2, 3, 5, 6, 8, 9 e 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>8</td>"
			+ "<td class='LightGoldenCells'>1 / a cada 1.25 rodadas (Rodadas 2, 3, 5, 7, 8, 9 e 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>9</td>"
			+ "<td class='NoBGCells'>1 / a cada 1.11 rodadas (Rodadas 2, 3, 4, 5, 6, 7, 8, 9, 10)</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>10</td>"
			+ "<td class='LightGoldenCells'>1 / a cada rodada.</td>"
			+ "</tr>"
			+ "</table>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5033,
			name: "Salto",
			baseCost: 1,
			type: "Movimento",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Movimento.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode dar saltos prodigiosos, muito mais longos do que até mesmo um atleta olímpico é capaz. A graduação de distância que você pode cobrir com um único salto parado é igual à sua graduação Salto menos 2: assim, 4 m metros com 1 graduação, 8 metros com 2 graduações, até 2 mil quilômetros com 20 graduações! Você não sofre dano por aterrissar depois de um salto, desde que esteja dentro da sua distância máxima.</p>"
			+ "<p>A graduação máxima de velocidade de seu salto é 7 (mais ou menos 500 quilômetros por hora), então, saltos de 1.000 quilômetros (17 graduações de distância) levam graduação de tempo 10 (17 – 7, ou duas horas) de tempo no ar! Por causa disso, saltadores podem escolher fazer \"pulos\" de apenas alguns quilômetros, que os deixam no ar por mais ou menos um minuto, para controlar melhor sua direção.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5034,
			name: "Sentido Remoto",
			baseCost: 1,
			type: "Sensorial",
			range: "Graduação",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1-5 por graduação.</li>"
			+ "<li><b>Tipo</b>: Sensorial.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Graduação.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode deslocar um ou mais de seus sentidos para longe, percebendo como se estivesse no local, até 15 metros de distância. Cada graduação adicional aumenta o alcance em uma graduação de distância, então 2 graduações são 30 metros, 3 graduações são 60 metros, e assim por diante. Sentido Remoto se sobrepõe a seus sentidos normais enquanto você o estiver usando. Alvos observados via Sentido Remoto podem \"senti-lo\" com um teste de Intuição (CD 10 + graduação). Você pode fazer testes de Percepção usando seus sentidos deslocados, usando a ação normal para fazê-lo. Para vistoriar uma área maior em busca de alguém ou de alguma coisa, use as diretrizes de busca de dados na descrição da perícia Investigação.</p>"
			+ "<p>Sentido Remoto custa 1 ponto por graduação para um tipo de sentido, 2 pontos para dois tipos, 3 pontos para três tipos, 4 pontos para quatro tipos e 5 pontos por graduação para todos os tipos de sentido. Sentidos visuais custam como dois tipos de sentido (assim, Sentido Remoto visual custa 2 pontos por graduação).</p>"
			+ "<p>Você pode usar efeitos sensoriais de percepção à distância via Sentido Remoto caso seu efeito se aplique aos seus tipos de sentido e um sentido acurado (normalmente a visão). Efeitos sensoriais mirados no ponto para o qual você deslocou seus sentidos afetam você normalmente.</p>"
			+ "<p>Uma vez que Sentido Remoto se sobrepõe aos seus sentidos normais, você fica vulnerável (à metade de suas defesas ativas normais) enquanto o usa, já que fica menos consciente dos seus arredores imediatos.</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5035,
			name: "Sentidos",
			baseCost: 1,
			type: "Sensorial",
			range: "Pessoal",
			action: "Nenhuma",
			duration: "Permanente",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Sensorial.</li>"
			+ "<li><b>Ação</b>: Nenhuma.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Permanente.</li>"
			+ "</ul>"
			+ "<p>Seus sentidos são melhores, ou você tem sentidos adicionais além dos cinco básicos. Pegue graduações em Sentidos para ter os efeitos abaixo. Alguns efeitos exigem mais de uma graduação, como apresentado na descrição. Por exemplo, se tiver Sentidos 5, você pode ter visão no escuro (2 graduações), senso de direção (1 graduação), senso de distância (1 graduação) e ultra-audição (1 graduação), ou qualquer outra combinação que some 5 graduações.</p>"
			+ "<p>Como todos os efeitos sensoriais, Sentidos usa os tipos de sentidos do abaixo, como descritores.</p>"
			+ "<table class='BehindTheMask-Table'>"
			+ "<tr> <td class='BehindTheMask-Header'>Por Trás da Máscara: Sentidos Normais</td> </tr>"
			+ "<tr> <td class='BehindTheMask-Body'>"
			+ "<p>Em Mutantes & Malfeitores, os sentidos são divididos em tipos, usados como descritores de efeitos sensoriais. Aqui vão as características de sentidos humanos normais, para você modificá-las com as opções do efeito Sentidos.</p>"
			+ "<br>"
			+ "<p><b>Audição</b></p>"
			+ "<hr>"
			+ "<p>A audição normal é à distância (com um modificador de –1/3 metros), aguçada (capaz de pegar detalhes como diferenças de tom) e radial (capaz de pegar sons vindo de qualquer direção). A audição normal não é acurada.</p>"
			+ "<br>"
			+ "<p><b>Mental</b></p>"
			+ "<hr>"
			+ "<p>Em termos de Mutantes & Malfeitores, o \"sexto sentido\" ou o tipo sentido mental, é bastante rudimentar em humanos normais, em essência limitado a interações com a perícia Intuição e com a consciência de efeitos mentais usados diretamente em você. Assim, seu alcance é perto e não tem nenhuma das qualidades de Sentido.</p>"
			+ "<br>"
			+ "<p><b>Olfato</b></p>"
			+ "<hr>"
			+ "<p>Os sentidos olfativos humanos, que juntam faro e paladar para propósitos de descritores, são bastante limitados. Os sentidos olfativos humanos normais não são nem aguçados nem acurados. O sentido de faro é radial, no entanto, capaz de captar cheiros vindos de qualquer direção. Seu \"alcance\" é limitado, entretanto, em efeito apenas para perto, exceto no caso de cheiros especialmente fortes.</p>"
			+ "<br>"
			+ "<p><b>Tato</b></p>"
			+ "<hr>"
			+ "<p>O sentido normal de toque tem, por definição, alcance perto. Ele é acurado (uma vez que você sabe a localização de tudo o que possa tocar) e radial (uma vez que você pode sentir coisas com qualquer parte de seu corpo).</p>"
			+ "<br>"
			+ "<p><b>Visão</b></p>"
			+ "<hr>"
			+ "<p>Visão normal é à distância (com um modificador de –1/3 metros), aguçada (capaz de distinguir detalhes finos) e acurada (capaz de precisar a localização de coisas).</p>"
			+ "</td> </tr>"
			+ "</table>"
			+ "<br>"
			+ "<p><b>Acurado • 2 ou 4 graduações</b></p>"
			+ "<hr>"
			+ "<p>Um sentido acurado pode apontar a localização exata de algo. Você pode usar um sentido acurado para mirar algo em combate. Sentidos visuais e táteis são normalmente acurados para humanos. Custa 2 graduações para um sentido, 4 para o tipo de sentido inteiro.</p>"
			+ "<br>"
			+ "<p><b>À Distância • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você pode usar um sentido que normalmente não tem alcance (como o paladar ou o tato para humanos) para fazer testes de Percepção à distância, com o modificador normal de –1 para cada 3 metros. Isso pode aumentar com o efeito Estender Sentido.</p>"
			+ "<br>"
			+ "<p><b>Aguçado • 1 ou 2 graduações</b></p>"
			+ "<hr>"
			+ "<p>Você pode sentir detalhes finos de qualquer coisa que possa detectar com um sentido específico, o que permite que você distinga e identifique diferentes alvos. Sentidos visuais e auditivos normalmente são aguçados para humanos. Custa 1 graduação para um sentido, 2 para um tipo inteiro de sentido.</p>"
			+ "<br>"
			+ "<p><b>Analítico • 1 ou 2 graduações</b></p>"
			+ "<hr>"
			+ "<p>Além até mesmo de aguçado, você pode perceber detalhes específicos de qualquer coisa que possa detectar com um sentido analítico, como a composição química, a massa ou as dimensões exatas, a frequência de sons e o comprimento de onda de energia, e assim por diante. Você só pode aplicar este efeito a um sentido aguçado. Sentidos normais não são analíticos. Custa 1 graduação para um sentido, 2 para um tipo inteiro de sentido.</p>"
			+ "<br>"
			+ "<p><b>Contra-ataca Camuflagem • 2 graduações</b></p>"
			+ "<hr>"
			+ "<p>Um tipo de sentido com esta característica ignora o efeito Camuflagem de um descritor específico; você percebe o alvo do efeito normalmente, como se a Camuflagem não estivesse lá. Por exemplo, se você tiver visão que Contra-Ataca Invisibilidade, seres invisíveis serão visíveis para você. Com 5 graduações, o tipo de sentido ignora todos os efeitos de Camuflagem, independente do descritor. Alvos com cobertura parecem levemente \"longe\" para você, o suficiente para saber que eles têm cobertura contra os outros. Esta característica não afeta camuflagem concedida por objetos opacos; para tanto, veja Penetra Cobertura.</p>"
			+ "<br>"
			+ "<p><b>Contra-ataca Ilusão • 2 graduações</b></p>"
			+ "<hr>"
			+ "<p>Um tipo de sentido com esta característica ignora o efeito Ilusão; você é automaticamente bem-sucedido em seu teste de salvamento contra a ilusão caso ela afete seu tipo de sentido, percebendo que ela não é real.</p>"
			+ "<br>"
			+ "<p><b>Detecção • 1 ou 2 graduações</b></p>"
			+ "<hr>"
			+ "<p>Você pode sentir um item ou efeito específico através do toque com um teste de Percepção. Detecção não tem alcance e indica apenas a presença ou ausência de algo (não sendo aguçado nem acurado). Escolha o tipo de sentido sua Detecção (normalmente mental). Com 2 graduações, você pode detectar coisas à distância (com o modificador normal de –1 no teste de Percepção para cada 3 metros).</p>"
			+ "<br>"
			+ "<p><b>Elo de Comunicação • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você tem um elo com um indivíduo específico, escolhido quando compra esta opção, que também precisa ter esta habilidade. Vocês dois podem se comunicar a qualquer distância como em um uso do efeito Comunicação. Escolha um tipo de sentido como meio de comunicação; mental é comum para elos empáticos ou psíquicos. Caso você aplique o modificador Dimensional ao seu Elo de Comunicação, ele também se estende para outras dimensões (veja Dimensional, em Modificadores de Poder).</p>"
			+ "<br>"
			+ "<p><b>Estendido • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você tem um sentido que opera a um alcance maior que o normal. Seu alcance com o sentido — a distância usada para determinar penalidades ao seu teste de Percepção — é aumentada em um fator de 10. Cada vez que você aplica esta opção, seu alcance aumenta em um fator adicional de 10, então 1 graduação significa que você sofre –1 nos testes de Percepção para cada 30 metros, 2 graduações sofrem –1 para cada 300 metros, e assim por diante. Um sentido estendido pode ser limitado por condições como o horizonte e barreiras físicas entre você e seu alvo, a menos que também tenha Penetra Cobertura.</p>"
			+ "<br>"
			+ "<p><b>Infravisão • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você pode ver na porção infravermelha do espectro, o que permite que você enxergue padrões de calor. A escuridão não concede camuflagem para objetos com temperaturas diferentes de seus arredores. Caso tenha o efeito rastrear, você pode rastrear criaturas quentes pelas finas trilhas de calor que deixam para trás. O mestre é o árbitro final de por quanto tempo a trilha permanece visível.</p>"
			+ "<br>"
			+ "<p><b>Penetra Cobertura • 4 graduações</b></p>"
			+ "<hr>"
			+ "<p>Um sentido com esta característica não é afetado por camuflagem de obstáculos (em vez de efeitos de Camuflagem). Visão que Penetra Cobertura enxerga através de objetos opacos, audição que Penetra Cobertura não é afetada por isolamento acústico e assim por diante.</p>"
			+ "<br>"
			+ "<p><b>Percepção • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você pode sentir o uso de um descritor específico com um teste de Percepção (CD 10, com –1 no teste para cada 3 metros de distância). Exemplos incluem Percepção Cósmica, Percepção Mental, Percepção Divina, Percepção Magnética e assim por diante. Percepção normalmente é um sentido mental, mas você pode escolher outro. Você também pode aplicar outros efeitos de Sentido à sua Percepção.</p>"
			+ "<p>Percepção conta como um \"sentido exótico\" para notar efeitos com a primeira graduação do modificador Sutil.</p>"
			+ "<br>"
			+ "<p><b>Póscognição • 4 graduações</b></p>"
			+ "<hr>"
			+ "<p>Seus sentidos se estendem ao passado, o que permite que você perceba eventos que já aconteceram. Você pode fazer testes de Percepção para captar informações passadas em uma área ou com um alvo. O mestre define a CD para esses testes baseado em quão obscura ou distante a informação está no passado, a partir de CD 15 (para uma visão vaga que pode ou não ser acurada) até CD 30 (para conhecimento quase completo de um evento passado específico, como se você o tivesse presenciado).</p>"
			+ "<p>Seus sentidos normais, no presente, não funcionam enquanto você está usando Póscognição; sua consciência está focada no passado. Suas visões póscognitivas duram enquanto você se concentra. A Póscognição não se aplica a efeitos sensoriais como Leitura Mental ou a outras habilidades que exijam interação. A Póscognição pode ser limitada a eventos passados ou a suas \"vidas passadas\" ou ancestrais, o que reduz o custo para 2 graduações.</p>"
			+ "<br>"
			+ "<p><b>Precognição • 4 graduações</b></p>"
			+ "<hr>"
			+ "<p>Seus sentidos se estendem ao futuro, o que permite que você perceba eventos que podem acontecer. Suas visões précognitivas representam futuros possíveis. Caso as circunstâncias mudem, a visão pode não acontecer. Quando você usa esta habilidade, o mestre escolhe qual informação contar. Suas visões podem ser obscuras e crípticas, abertas à interpretação. O mestre pode exigir testes de Percepção para que você compreenda informações específicas, com CD entre 15 e 30 ou mais. O mestre também pode ativar sua Precognição para fornecer informação como um gancho de aventura. Seus sentidos normais, no presente, não funcionam enquanto você está usando Precognição; sua consciência está focada no futuro. Suas visões précognitivas duram enquanto você se concentra.</p>"
			+ "<p>A Precognição não se aplica a efeitos sensoriais como Leitura Mental ou a outras habilidades que exijam interação.</p>"
			+ "<br>"
			+ "<table class='BehindTheMask-Table'>"
			+ "<tr> <td class='BehindTheMask-Header'>Por Trás da Máscara: Sentidos Normais</td> </tr>"
			+ "<tr> <td class='BehindTheMask-Body'>"
			+ "<p>Precognição e póscognição podem ser habilidades problemáticas, uma vez que concedem aos jogadores informações consideráveis. Tenha em mente que informações précognitivas e póscognitivas são muitas vezes enigmáticas ou obscuras, e mudanças nas circunstâncias podem levar a mudanças em visões do futuro. Caso os jogadores abusem dessas habilidades, sinta-se livre para tornar suas visões menos e menos claras, uma vez que as linhas de tempo vão se enrolando devido a vigilância e intervenções constantes.</p>"
			+ "<p>No geral, a precognição é mais bem tratada como uma ferramenta de trama para o mestre dar aos jogadores informações adequadas à aventura, semelhante a um uso livre das habilidades de inspiração dos pontos heroicos. De fato, um mestre que deseje limitar a precognição e a póscognição pode exigir esforço extra ou pontos de vitória para usá-las, ou exigir o modificador Incontrolável.</p>"			
			+ "</td> </tr>"
			+ "</table>"
			+ "<p><b>Rádio • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você pode \"ouvir\" frequências de rádio, incluindo faixas AM, FM, de televisão, celular e assim por diante. Isso permite que você pegue Rádio Comunicação (veja o efeito Comunicação). Este é o sentido básico para o tipo de sentido de rádio. É à distância, radial e acurado como padrão.</p>"
			+ "<br>"
			+ "<p><b>Radial • 1 ou 2 graduações</b></p>"
			+ "<hr>"
			+ "<p>Você pode fazer testes de Percepção com um sentido radial para qualquer ponto ao seu redor. Alvos atrás de você não podem usar Furtividade para esconder-se de você sem outra camuflagem. Sentidos auditivos, olfativos e táteis são radiais para humanos. Custa 1 graduação para um sentido e 2 graduações para um tipo de sentido.</p>"
			+ "<br>"
			+ "<p><b>Rápido • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você pode captar informação de um sentido mais rápido que o normal: cada graduação aumenta sua velocidade de percepção em um fator de 10 (x10, x100, etc.) com um único sentido; dobre o custo para um tipo de sentido inteiro. Você pode usar visão rápida para leitura dinâmica, para captar um tremeluzir entre os frames de um filme, para assistir replays na velocidade rápida, etc.</p>"
			+ "<br>"
			+ "<p><b>Rastrear • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você pode seguir trilhas e rastros usando um sentido específico. A CD básica para seguir uma trilha é 10, modificada pelas circunstâncias, como o mestre achar adequado. Você se move à sua graduação de velocidade –1 enquanto rastreia. Com 2 graduações, você pode se mover à sua velocidade normal total enquanto rastreia.</p>"
			+ "<br>"
			+ "<p><b>Sentido de Direção • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você sempre sabe para que lado fica o norte e pode refazer seus passos através de qualquer lugar em que já tenha estado.</p>"
			+ "<br>"
			+ "<p><b>Sentido de Distância • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você consegue julgar distâncias automaticamente e com precisão.</p>"
			+ "<br>"
			+ "<p><b>Sentido de Perigo • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Quando você normalmente ficaria surpreendido em combate, faça um teste de Percepção (CD 10): um grau de sucesso significa que você não fica surpreendido, mas não pode agir durante a rodada de surpresa, enquanto dois ou mais graus de sucesso significam que você não fica surpreendido e pode agir durante a rodada de surpresa (caso haja uma). Falha significa que você é surpreendido (embora, caso tenha Esquiva Fabulosa, você não fique vulnerável). O mestre pode aumentar a CD do teste de Sentido de Perigo em algumas circunstâncias. Escolha um tipo de sentido para seu Sentido de Perigo. Efeitos sensoriais que miram seu sentido também afetam sua habilidade Sentido de Perigo e podem \"cegá-la\".</p>"
			+ "<br>"
			+ "<p><b>Sentido de Tempo • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você sempre sabe que horas são e pode contar o tempo como se tivesse um cronômetro acurado.</p>"
			+ "<br>"
			+ "<p><b>Ultra-Audição • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você pode ouvir sons muito altos e de frequência muito baixa, como apitos para cães ou sinais ultrassônicos, incluindo aqueles usados por alguns controles remotos.</p>"
			+ "<br>"
			+ "<p><b>Ultravisão • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você enxerga a luz ultravioleta, o que permite que você enxergue normalmente à noite com a luz das estrelas ou outra fonte de luz UV.</p>"
			+ "<br>"
			+ "<p><b>Visão Microscópica • 1 a 4 graduações</b></p>"
			+ "<hr>"
			+ "<p>Você enxerga coisas extremamente pequenas. Você pode fazer testes de Percepção para enxergar coisas muito pequenas nas proximidades. Custa 1 graduação pra objetos do tamanho de poeira, 2 graduações para coisas do tamanho de células, 3 graduações para DNA e moléculas complexas, 4 graduações para coisas do tamanho de átomos. O mestre pode exigir testes da perícia Especialidade para você compreender e interpretar o que vê.</p>"
			+ "<br>"
			+ "<p><b>Visão na Penumbra • 1 graduação</b></p>"
			+ "<hr>"
			+ "<p>Você ignora penalidades de circunstância a testes de Percepção devido a baixas condições de luminosidade, desde que não esteja completamente escuro.</p>"
			+ "<br>"
			+ "<p><b>Visão no Escuro • 2 graduações</b></p>"
			+ "<hr>"
			+ "<p>Você enxerga na escuridão total como se fosse dia normal; a escuridão não concede camuflagem contra a sua visão. Em essência, isso é o mesmo que Contra-Ataca Camuflagem (Escuridão).</p>"
			+ "<br>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5036,
			name: "Teleporte",
			baseCost: 2,
			type: "Movimento",
			range: "Graduação",
			action: "Movimento",
			duration: "Instantânea",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Movimento.</li>"
			+ "<li><b>Ação</b>: Movimento.</li>"
			+ "<li><b>Distância</b>: Graduação.</li>"
			+ "<li><b>Duração</b>: Instantânea.</li>"
			+ "</ul>"
			+ "<p>Você pode se mover instantaneamente de um lugar para outro sem atravessar a distância entre os dois pontos. Você pode teleportar a si mesmo e até 30 kg (graduação de massa 0) de massa adicional a uma graduação de distância igual à sua graduação nesse efeito como uma ação de movimento. Passageiros resistentes podem fazer um teste de salvamento para evitar serem levados com você.</p>"
			+ "<p>Você só pode se teleportar para lugares que possa sentir com precisão ou que conheça especialmente bem (de acordo com o mestre). Você mantém sua posição e velocidade relativas quando se teleporta. Então, se estiver caindo quando se teleporta, você continua caindo à mesma velocidade quando chegar ao seu destino.</p>"
			+ "<p>Teleporte foi pensado para ser usado em um planeta ou ao redor dele. Para coisas como viajar para planetas ou estrelas distantes, aplique o efeito Viagem Espacial de Movimento como um \"hiper salto\" ou poder semelhante.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5037,
			name: "Transformar",
			baseCost: 2,
			type: "Controle",
			range: "Perto",
			action: "Padrão",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2-5 por graduação.</li>"
			+ "<li><b>Tipo</b>: Controle.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Perto.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "<li><b>Salvamento</b>: Esquiva.</li>"
			+ "</ul>"
			+ "<p>Você pode transformar objetos em outros objetos, alterando sua forma ou composição material no processo. Você deve tocar o objeto escolhido, o que exige um teste de ataque corpo-a-corpo caso o objeto esteja sendo segurado ou vestido por outro personagem. O que você pode transformar afeta o custo por graduação.</p>"
			+ "<ul>"
			+ "<li><b>2 pontos:</b> transforme uma coisa ou substância em outra coisa ou substância, como metal em madeira, ferro em vidro, objetos quebrados em objetos consertados, etc.</li>"
			+ "<li><b>3 pontos:</b> transforme um grupo amplo de coisas em uma única coisa (qualquer metal em ouro, por exemplo) ou uma única coisa em qualquer coisa de um grupo amplo (um tipo de metal, como chumbo, em outro qualquer outro metal, água em outros líquidos e assim por diante).</li>"
			+ "<li><b>4 pontos:</b> transforme um grupo amplo de alvos em um grupo amplo de resultados (sólidos em outros sólidos, por exemplo).</li>"
			+ "<li><b>5 pontos:</b> transforme qualquer coisa em qualquer outra coisa.</li>"
			+ "</ul>"
			+ "<p>Objetos inanimados não fazem testes de salvamento e são transformados automaticamente, desde que você possa afetar sua massa total. Você pode transformar (graduação de Transformação –6) graduações de massa, então Transformação 1 pode afetar até 1 kg (graduação de massa –5), então 2 kg com graduação 2, e assim por diante, até graduação 20, que afeta 500 toneladas de uma vez só.</p>"
			+ "<p>A transformação dura como um efeito sustentado. Quando você parar de mantê-la, o alvo reverte ao normal. Transformação Contínua é irreversível, exceto ao usar outro efeito de Transformação para transformar o alvo de volta em sua forma anterior. Transformar os dispositivos ou equipamento de alguém exige mirá-los primeiro: os personagens podem fazer testes de Esquiva para itens que estejam segurando ou vestindo, com um bônus de +5 para itens portáteis e objetos de tamanho semelhante.</p>"
			+ "<p>Assim, transformar uma arma portátil como uma pistola exige um teste de ataque e permite que o usuário faça um teste de Esquiva com um bônus de +5. Mirar uma armadura vestida exige um teste de ataque e permite que o usuário faça um teste de Esquiva (sem bônus, por se tratar de um item grande).</p>"
			+ "<table class='BehindTheMask-Table'>"
			+ "<tr> <td class='BehindTheMask-Header'>Por Trás da Máscara</td> </tr>"
			+ "<tr> <td class='BehindTheMask-Body'>"
			+ "<p>Transformação é um efeito poderoso, especialmente nas mãos de um jogador esperto. Até certo grau, Transformação pode duplicar outros efeitos, como transformar ar em material sólido para prender um inimigo ou transformar oxigênio em gás sufocante para sufocá-lo (ambos Aflições). Isso é permitido; use as regras para outros efeitos como diretrizes sobre como lidar com essas situações, usando a graduação de Transformação para determinar a CDs dos testes de salvamento..</p>"
			+ "<p>Tenha em mente, no entanto, que Transformação tem duração sustentada, o que pode afetar como esses \"truques\" funcionam (uma armadilha desaparece caso o personagem seja atordoado, o gás sufocante se dissipa a menos que o personagem se concentre em todas as rodadas para continuar transformando-o, etc.). Como sempre, o mestre deve usar o bom senso. Você pode exigir que personagens usando Transformação para conseguir dinheiro (ouro, pedras preciosas, etc.) ou outros bens materiais permanentes gastem pontos de poder em graduações da vantagem Benefício para refletir essa nova riqueza; caso contrário, os bens desaparecem ou de alguma forma deixam de ser permanentes (assumindo que riqueza faça diferença na série).</p>"
			+ "<br>"
			+ "<p><b>Transformações Destrutivas</b></p>"
			+ "<hr>"
			+ "<p>É possível que Transformação destrua objetos: transformar uma porta de aço em água, ar ou ferrugem a inutiliza! Entretanto, tenha em mente que Transformação normalmente é um efeito sustentado; o alvo não é realmente destruído a menos que o efeito seja contínuo, e, assim, irreversível. Mesmo então, a destruição dos alvos tende a ser tudo-ou-nada. Para um efeito capaz de apodrecer e eventualmente destruir objetos, use Enfraquecer Resistência.</p>"
			+ "<br>"
			+ "<p><b>Seres Transformados</b></p>"
			+ "<hr>"
			+ "<p>Transformar seres vivos em matéria inanimada exige um efeito que não seja Transformar. Para alterar apenas a aparência externa de um alvo, use Ataque de Morfar (veja o efeito Morfar). Para um efeito nocivo que faz algo como transformar o alvo em pedra ou em um zumbi com a mente controlada, veja Aflição. Ao lidar com criaturas não vivas (como aquelas sem Vigor) capazes de fazer testes de salvamento (que têm Vontade), o mestre pode permitir que Transformação funcione como uma Aflição contra elas.</p>"
			+ "</td> </tr>"
			+ "</table>"
			+ "<br>"
			+ "<p><b>Formato e Substância</b></p>"
			+ "<hr>"
			+ "<p>Transformação afeta tanto a substância de um objeto (do que os materiais são feitos) e formato (a forma que os materiais tomam).</p>"
			+ "<p>Então, por exemplo, você pode transformar uma barra de aço em uma espada de aço (formato diferente), uma maçã normal em uma maçã de ouro (substância diferente), ou um galho de madeira em uma espada de aço (formato e substância diferentes). Transformação limitada a mudar apenas o formato ou apenas substância é a Transformação ampla para ampla, custando apenas 4 pontos por graduação. Se você pode produzir cópias exatas de objetos, aplique o modificador Preciso.</p>"
			+ "<br>"
			+ "<p><b>À Distância</b></p>"
			+ "<hr>"
			+ "<p>Transformar é alcance Perto de padrão. Se você pode transformar materiais à distância, aplique o modificador À Distância por +1 ponto por graduação. Se você pode fazer sem ter que alvejar o material, aplique o modificador Alcance Percepção, +2 pontos por graduação, eliminando a necessidade de um teste de ataque.</p>"
			+ "<br>"
			+ "<p><b>Área</b></p>"
			+ "<hr>"
			+ "<p>Transformação afeta uma quantidade de massa baseada na graduação. Transformação em área afeita vários alvos na área, provido que a massa individual de cada objeto não exceda a massa da graduação do efeito. Então, Transformação em Área Estouro 6 pode transformar todos objetos inanimados dentro de um raio de 9 metros, onde nenhum alvo individualmente exceda 30 kg (graduação de massa 0). Se você pode transformar apenas alguns alvos na área e não outros, aplique o modificador Seletivo. Aplique novamente o modificador Seletivo se você também pode transformar alvos na área de maneiras diferentes, como transformar algumas coisas em ar, outras em chumbo e deixando outras não afetadas.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5038,
			name: "Variável",
			baseCost: 7,
			type: "Geral",
			range: "Pessoal",
			action: "Padrão",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 7 por graduação.</li>"
			+ "<li><b>Tipo</b>: Geral.</li>"
			+ "<li><b>Ação</b>: Padrão.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode ganhar ou usar virtualmente qualquer efeito do tipo e descritor apropriados! Um efeito Variável lhe concede (graduação x 5) pontos de poder que você pode alocar em diferentes efeitos. Use uma ação em seu turno e escolha onde alocar seus pontos de poder Variáveis. É uma boa ideia ter um “menu” de pontos pré-prontos para acelerar esse processo durante o jogo.</p>"
			+ "<p>Os efeitos que você ganha estão sujeitos aos limites de nível de poder e da série. Você não pode, por exemplo, adquirir Característica Aumentada como um efeito Variável para melhorar uma característica além do limite de nível de poder, nem para adquirir efeitos ou descritores específicos que o mestre baniu da série. O mestre tem a palavra final se um uso específico de um efeito Variável é apropriado e pode vetar suas alocações, caso necessário. Você também deve colocar descritores em seu efeito variável, limitando seu escopo. "
			+ "<p>Por exemplo, um efeito variável que imita as características dos outros está limitado pelas características que o(s)alvo(s) possua(m); um efeito variável que lhe conceda características adequadas a diferentes formas está limitado pela(s) forma(s) que você assume; um efeito Variável que conceda adaptações está limitado pelo estímulo para o qual se adapta, e assim por diante. Este descritor não reduz o custo do efeito a menos que seja especialmente estrito ou limitante, e o mestre é o árbitro final do que constitui um descritor adequado, e que descritores são limitados o suficiente para se qualificar para uma falha Limitado.</p>"
			+ "<p>A alocação de seus pontos Variáveis é sustentada, então caso você pare de manter seu efeito Variável por qualquer razão, seus pontos alocados \"zeram\" de volta a um estado \"nulo\": você perde todas as características temporárias e deve usar a ação necessária para realocar seus pontos Variáveis de novo no seu turno para recuperá-los. Pontos em um efeito Variável Contínuo permanecem onde você determinou sem manutenção, a menos que o efeito Variável em si seja contra-atacado ou nulificado. Efeitos Variáveis não podem ter duração permanente por definição.</p>"
			+ "",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5039,
			name: "Velocidade",
			baseCost: 1,
			type: "Movimento",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 1 por graduação.</li>"
			+ "<li><b>Tipo</b>: Movimento.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode se mover mais rápido que o normal. Você tem uma graduação de velocidade terrestre igual à sua graduação neste efeito. Isso também melhora todas as formas de movimento baseadas na velocidade terrestre.</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
		{
			id: 5040,
			name: "Voo",
			baseCost: 2,
			type: "Movimento",
			range: "Pessoal",
			action: "Livre",
			duration: "Sustentado",
			description: "<b>Efeito de Poder</b>"
			+ "<ul>"
			+ "<li><b>Custo</b>: 2 por graduação.</li>"
			+ "<li><b>Tipo</b>: Movimento.</li>"
			+ "<li><b>Ação</b>: Livre.</li>"
			+ "<li><b>Distância</b>: Pessoal.</li>"
			+ "<li><b>Duração</b>: Sustentado.</li>"
			+ "</ul>"
			+ "<p>Você pode voar, incluindo flutuar em um mesmo lugar. Você tem uma graduação de velocidade de voo igual à sua graduação neste efeito.</p>",
			exclusiveModifiers: [],
			unavaliableModifiers: [],
		},
	];