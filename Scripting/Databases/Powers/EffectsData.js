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
	instanceID: 0,
	effectID: -1,
	baseCost: 0,
	baseRanks: 1,
	enhancedRanks: 0,
	extrasModifiers: [],
	flawsModifiers: [],
	flatModifiers: [],
	totalExtraPerRank: function () {
		let sum = 0;

		for(let i = 0; i < this.extrasModifiers.length; i++){
			sum += this.extrasModifiers[i].ranks;
		}

		return parseInt(sum);
	},
	totalFlawsRank: function () {
		let sum = 0;

		for(let i = 0; i < this.flawsModifiers.length; i++){
			sum += this.flawsModifiers[i].ranks;
		}

		return parseInt(sum);
	},
	totalFlat: function() {
		let sum = 0;

		for(let i = 0; i < this.flatModifiers.length; i++){
			sum += this.flatModifiers[i].ranks;
		}

		return parseInt(sum);
	},
	/**
	* SE ( BASE + EXTRAS - FALHAS) > 0; 
	* 	(BASE + EXTRAS - FALHAS) * GRAD + FIXOS;
	* ELSE 
	*	(GRAD / (2 + (-1* (BASE + EXTRAS - FALHAS)) ) ) + FIXOS 
	*/
	totalPointSpent: function() {
		let costPerRank = (this.baseCost + this.totalExtraPerRank() - this.totalFlawsRank() );
		if( costPerRank > 0 ){
			return parseInt( costPerRank * this.baseRanks + this.totalFlat() );
		}
		else{
			return parseInt( (this.baseRanks / (2 + (-1 * costPerRank ) ) ) + this.totalFlat() );
		}
	},
}

const _EffectsList = [
		{
			id: 5001,
			name: "Aflição",
			baseCost: 1,
			description: "<p>Você pode impor uma condição ou condições debilitantes como um ataque de toque. Você define as condições a cada grau de falha que sua Aflição causa no momento da compra e não pode mudar elas. Graus maiores de falha substituem os menores e não acumulam. Veja as possíveis condições para cada grau de falha abaixo. O alvo resiste com Fortitude ou Vontade (quando o efeito é escolhido): </p>"
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
			id: 5008,
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
			+ "<table style='border: 2px solid black; border-radius: 10px;'>"
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
		},
	
		{
			id: 5009,
			name: "Controle de Sorte",
			baseCost: 3,
			description: "<p>Você pode gastar Pontos de Vitória ou usos da vantagem Sorte para afetar os outros. Para cada graduação neste efeito, escolha uma das seguintes habilidades:</p>"
			+ "<ul>"
			+ "<li>Você pode gastar pontos de vitória ou usos de Sorte em benefício de outros personagens, com os efeitos normais.</li>"
			+ "<li>Você pode conceder seu ponto de vitória ou uso de Sorte para os outros. Você só pode usar esta habilidade em um personagem uma vez por rodada, mas o alvo pode usar o(s) ponto(s) concedido(s) normalmente</li>"
			+ "<li>Você pode gastar um ponto de vitória ou uso de Sorte para cancelar o uso de um ponto de vitória ou da vantagem Sorte de outro personagem, ou para cancelar uma complicação imposta pelo mestre (neste caso, nenhum ponto de vitória é concedido por ela).</li>"
			+ "<li>Você pode gastar um ponto de vitória ou uso de Sorte para forçar outra pessoa a refazer uma rolagem e ficar com o pior resultado. O alvo deste efeito pode gastar um ponto de vitória ou uso de Sorte para evitá-lo.</li>"
			+ "</ul>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5010,
			name: "Crescimento",
			baseCost: 2,
			description: "<p>Você pode aumentar de tamanho temporariamente, ganhando Força e Vigor ao custo de se tornar um alvo maior, mais pesado, menos ágil e incapaz de manobrar através de espaços pequenos. Os modificadores de Crescimento são limitados pelo nível de poder.</p>"
			+ "<p>Crescimento aplica os seguintes modificadores: </p>"
			+ "<ul>"
			+ "<li><b>A cada graduação</b> some +1 em Força e Vigor (+1 em Resistência para personagens sem Vigor) e +1 em valor de graduação de Massa, mas aplique penalidade circunstancial de -1 em testes de Furtividade.</li>"
			+ "<li><b>A cada 2 graduações</b> some +1 de bônus circunstancial para testes de Intimidação, mas subtraia -1 das Defesas Esquiva e Aparar.</li>"
			+ "<li><b>A cada 4 graduações</b> some +1 a sua graduação de Tamanho (começando no valor -2 para tamanho de humano normal) e some +1 em sua graduação de Alcance (mesmo de Tamanho).</li>"
			+ "<li><b>A cada 8 graduações</b> some +1 na sua graduação de Velocidade terrestre (valor inicial 0).</li>"
			+ "</ul>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5011,
			name: "Criar",
			baseCost: 2,
			description: "<p>Você pode formar objetos sólidos a partir do nada. Eles podem ser feitos de pedra, gelo, energia solidificada ou algum outro tipo de meio, dependendo dos descritores.</p>"
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
		},
	
		{
			id: 5012,
			name: "Cura",
			baseCost: 2,
			description: "<p>Você pode curar condições de Dano tocando um alvo e usando uma ação padrão para fazer um teste de Cura de CD 10. Cada grau de sucesso cura uma condição de Dano, começando com a pior. Caso o alvo esteja Moribundo, o primeiro sucesso estabiliza o alvo, removendo a condição moribundo. Caso o teste de Cura falhe, você deve esperar um minuto ou usar esforço extra para tentar de novo.</p>"
			+ "<p>Você também pode conceder a um alvo um bônus igual à sua graduação em Cura em um teste de salvamento contra efeitos com os descritores doença ou veneno. O bônus se aplica ao próximo salvamento do alvo contra o efeito.</p>"
			+ "<p>Você pode usar Cura em si mesmo, desde que seja capaz de usar a ação padrão exigida. Cura não funciona em alvos incapazes de se recuperar sozinhos, como criaturas sem graduação de Vigor, nem em objetos inanimados.</p>"
			+ "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5013,
			name: "Dano",
			baseCost: 1,
			description: "<p>Você pode causar dano em um alvo realizando um ataque corpo-a-corpo. A natureza exata do seu Dano fica à sua escolha, dependendo da aprovação do mestre. Pode ser qualquer coisa, de um soco poderoso ou garras afiadas a campos de energia. O alvo se defende com Resistência.</p>"
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
			+ "<table style='border: 2px solid black; border-radius: 10px;'>"
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
			+ "<td class='LightGoldenCells'><b>Corda, gelo, vidro</b>:</td>"
			+ "<td class='LightGoldenCells'>1</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Corda, gelo, vidro</td>"
			+ "<td class='NoBGCells'>1</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Madeira</td>"
			+ "<td class='LightGoldenCells'>3</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Pedra</td>"
			+ "<td class='NoBGCells'>5</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Ferro</td>"
			+ "<td class='LightGoldenCells'>7</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Concreto reforçado</td>"
			+ "<td class='NoBGCells'>8</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Aço</td>"
			+ "<td class='LightGoldenCells'>9</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='NoBGCells'>Titânio</td>"
			+ "<td class='NoBGCells'>15</td>"
			+ "</tr>"
			+ "<tr>"
			+ "<td class='LightGoldenCells'>Super-ligas</td>"
			+ "<td class='LightGoldenCells'>20+</td>"
			+ "</tr>"
			+ "</table>"
			+ "<br>"
			+ "<p><b>RECUPERAÇÃO</b></p>"
			+ "<hr>"
			+ "<p>Alvos vivos removem uma condição de dano por minuto de descanso, começando pela pior condição e voltando. Assim, um personagem ferido se recupera de estar incapacitado, então abatido, tonto e, finalmente, remove a penalidade de Resistência de –1.</p>"
			+ "<p>Os efeitos Cura e Recuperação podem acelerar esse processo. Ferimentos duradouros ou mais sérios são tratados como complicações (veja Ferimentos Duradouros).</p>"
			+ "<p>Objetos, que não têm Vigor, não se recuperam de dano. A menos que tenham um efeito como Regeneração, precisam ser consertados (veja a perícia Tecnologia).</p>"
			+ "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5014,
			name: "Deflexão",
			baseCost: 1,
			description: "<p>Você pode defender ativamente outros personagens além de si mesmo, defletindo ou desviando ataques contra eles à distância, e pode ser capaz de defender mais eficientemente a si mesmo, dependendo de sua graduação. Veja a ação Defender-se para detalhes. Você usa sua graduação de Deflexão no lugar de uma defesa ativa. Você ainda soma 10 a uma rolagem do dado de Deflexão cujo resultado seja 10 ou menos, para uma rolagem mínima de 11.</p>"
			+ "<p>Os modificadores de Deflexão são limitados pelo nível de poder. Como um ataque à distância, se você Defletir à distância média, sofre uma penalidade de circunstância de –2 no teste. À longa distância, você sofre uma penalidade de circunstância de –5. O alcance é medido a partir de você até o alvo do ataque que você está defletindo. Como a ação defletir, Deflexão não funciona contra efeitos de área ou contra ataques à distância baseados em percepção, nem contra ataques mirando defesas que não sejam Esquiva ou Aparar.</p>"
			+ "<p style='padding: 5px; border: 2px solid black;'>Este efeito é principalmente útil para escudos e outros dispositivos usados para ativamente bloquear ou desviar ataques. Note que a configuração padrão de Deflexão é A Distância; qualquer personagem pode \"defletir\" usando a opção de se defender ativamente na página Ações e Manobras. A única razão para ter Deflexão Perto é aplicar modificadores de poder, como Reflexão e Redirecionar.</p>"
			+ "<p>Deflexão foi deliberadamente designada de exigir uma ação padrão para se defender, porque seus benefícios \"quebram\" os limites de nível de poder, concedendo um teste oposto para ataques contra o personagem defendendo-se, o que pode resultar a um bônus de +10 para sua defesa ativa (se o jogador rolar um 20 no teste de defesa). Isso é o porque que um Deflexão \"automático\", exigindo menos que uma ação padrão é proibido; daria ao personagem uma quebra do nível de poder considerável em jogo sem custo (além dos pontos de personagem necessários).</p>"
			+ "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5015,
			name: "Encolhimento",
			baseCost: 2,
			description: "<p>Você pode diminuir de tamanho temporariamente, tornando-se menor e mais difícil de ver — e acertar — ao custo de perder Força e velocidade.</p>"
			+ "<p>Encolhimento aplica os seguintes modificadores: </p>"
			+ "<ul>"
			+ "<li><b>A cada graduação</b> some +1 de bônus circunstancial à seus testes de Furtividade e subtraia -1 na sua graduação de massa (começando em 1).</li>"
			+ "<li><b>A cada 2 graduações</li> some +1 em suas defesas de Aparar e Esquiva e aplique -1 de penalidade circunstancial aos seus testes de Intimidação.</li>"
			+ "<li><b>A cada 4 graduações</b> reduza sua graduação de tamanho em -1 (começando no valor -2 para tamanho de humano normal) e reduza sua graduação de Força em -1.</li>"
			+ "<li><b>A cada 8 graduações</b> subtraia -1 na sua graduação de Velocidade terrestre (valor inicial 0).</li>"
			+ "</ul>",
			exclusiveModifiers: [],
		},
	
		{
			id: 5016,
			name: "Enfraquecer",
			baseCost: 1,
			description: "<p>Você pode diminuir temporariamente uma das características do alvo, escolhida quando este feito é adquirido. Você deve tocar o alvo, fazendo um ataque corpo-a-corpo.</p>"
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
		},
	
		{
			id: 5017,
			name: "Escavação",
			baseCost: 1,
			description: "<p>Você pode escavar através do solo. Você se move através de terra e da areia a uma graduação de velocidade igual à sua graduação de Escavação –5. Então, com Escavação 8, você pode se mover através do chão com graduação de velocidade 3 (mais ou menos 30 km/h). Escavar através de barro duro ou de terra compacta reduz a velocidade em uma graduação. Escavar através de rocha sólida reduz a velocidade em duas graduações. O túnel que você deixa pode ser permanente ou desabar atrás de você imediatamente (você escolhe quando começa a escavar um novo túnel).</p>"
			+ "<p>Perceba que Escavação é diferente do efeito de Movimento Permear, que permite que você passe através de um obstáculo como o chão à sua velocidade normal sem perturbá-lo (veja Movimento para detalhes).</p>"
			+ "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5018,
			name: "Ilusão",
			baseCost: 1,
			description: "<p>Você pode controlar os sentidos de outras pessoas para criar impressões falsas. Isso pode variar de imagens a sons e cheiros falsos, ou até mesmo impressões mentais ou de radar. Suas ilusões afetam um número de tipos de sentido igual ao custo por graduação do efeito: um tipo de sentido para custo de 1 ponto por graduação, dois tipos de sentido para custo de 2 pontos por graduação e assim por diante. Por 5 pontos por graduação, você afeta todos os tipos de sentido. Sentidos visuais contam como dois tipos de sentido. Sua graduação determina o quão convincente é sua ilusão, incluindo a CD para o salvamento de Intuição (10 + graduação).</p>"
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
		},
	
		{
			id: 5019,
			name: "Imortalidade",
			baseCost: 2,
			description: "<p>Você pode se recuperar da morte! Caso sua condição se torne morto, você pode retornar à vida depois de um tempo. Subtraia sua graduação em Imortalidade da graduação de tempo de 19 (um mês) para determinar quanto tempo leva. Assim, Imortalidade 11, por exemplo, retorna você à vida em 30 minutos (19 – 11 = graduação de tempo 8). Com 20 graduações, você retorna à vida no início de cada rodada de ação! Quando ressuscita, todas as suas condições de dano são removidas, mas você também perde todos os Pontos de Vitória acumulados.</p>"
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
+ "			</tr>"
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
		},
	
		{
			id: 5020,
			name: "Imunidade",
			description: "<p>Você é imune a certos efeitos, sendo bem-sucedido automaticamente em testes de salvamento contra eles. Você designa graduações de Imunidade a vários efeitos para ganhar imunidade a eles (com efeitos mais extensos exigindo mais graduações). As graduações designadas são permanentes.</p>"
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
		},
	
		{
			id: 5021,
			name: "Intangibilidade",
			baseCost: 5,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5022,
			name: "Invocar",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5023,
			name: "Leitura Mental",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5024,
			name: "Membros Extras",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5025,
			name: "Morfar",
			baseCost: 5,
			description: "",
			exclusiveModifiers: [],
		},
	
		{
			id: 5026,
			name: "Mover Objetos",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5027,
			name: "Movimento",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5028,
			name: "Natação",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5029,
			name: "Nulificar",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5030,
			name: "Proteção",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5031,
			name: "Rapidez",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5032,
			name: "Regeneração",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5033,
			name: "Salto",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5034,
			name: "Sentido Remoto",
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5035,
			name: "Sentidos",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5036,
			name: "Teleporte",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5037,
			name: "Transformar",
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5038,
			name: "Variável",
			baseCost: 7,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5039,
			name: "Velocidade",
			baseCost: 1,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5040,
			name: "Voo",
			baseCost: 2,
			description: "",
			exclusiveModifiers: [],
		},
		{
			id: 5041,
			name: "- Arranjo -",
			description: "Arranjo é um conjunto de poderes, qual só pode ser usado um por vez."
		},
		{
			id: 5042,
			name: "- Efeitos Ligados -",
			description: "Selecione este poder para adicionar múltiplos efeitos que são todos ativados ao mesmo tempo."
		},
		{
			id: 5043,
			name: "- Múltiplos Efeitos - ",
			description: "Selecione este poder para adicionar vários efeitos a um único poder."
		},
	];