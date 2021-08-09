
const _ModifiersList = [
	{
		id: 10001,
		name: "Acurado",
		extra: true,
		flat: true,
		ranked: true,
		ranks: 1,
		description: "<p>Um efeito com este extra é especialmente acurado; você ganha +2 por graduação de Acurado nos testes de ataque feitos com ele. O nível de poder limita o bônus de ataque máximo ganho com qualquer efeito.</p>",
	},
	{
		id: 10002,
		name: "Afeta Corpóreo",
		extra: true,
		flat: true,
		ranked: true,
		ranks: 1,
		description: "<p>Um ser intangível pode usar um efeito com este extra no mundo corpóreo (veja o efeito Intangibilidade). Quando um efeito é usado contra um alvo corpóreo, a graduação do efeito é igual à graduação deste extra, até um máximo igual à graduação total do efeito. Personagens com graduações baixas de Intangibilidade, como 1 a 3, não precisam deste extra para que seus efeitos funcionem no mundo físico, embora possam aplicá-lo à sua graduação de Força para poder exercer Força quando Intangíveis.</p>",
	},
	{
		id: 10003,
		name: "Afeta Intangível",
		extra: true,
		flat: true,
		ranked: true,
		ranks: 1,
		maxRank: 2,
		description: "<p>Um efeito com este extra funciona contra alvos intangíveis, além de ter seus efeitos normais contra alvos corpóreos. Com 1 graduação, o efeito funciona à metade de sua graduação normal contra alvos intangíveis (arredondado para baixo); com 2 graduações, funciona à sua graduação total contra eles.</p>",
	},
	{
		id: 10004,
		name: "Afeta Apenas Objetos",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 0,
		description: "<p>Este modificador permite que efeitos normalmente resistidos por Fortitude funcionem em objetos não vivos (sem Vigor). No geral, este extra se aplica a efeitos como Cura ou Enfraquecer, permitindo que eles afetem objetos da mesma forma que afetam criaturas vivas. Caso o efeito Afete Apenas Objetos, funcionando em objetos mas não em criaturas vivas, tem um modificador geral de +0.</p>"
		+ "<p>Objetos não fazem testes de salvamento; o efeito funciona no objeto alvo com seu grau máximo de sucesso. De acordo com o mestre, alguém segurando, carregando ou vestindo um objeto pode fazer um teste de salvamento de Esquiva contra o efeito, representando a retirada do objeto da linha de efeito no último momento.</p>"
		+ "",
	},
	{
		id: 10005,
		name: "Afeta Objetos",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>Este modificador permite que efeitos normalmente resistidos por Fortitude funcionem em objetos não vivos (sem Vigor). No geral, este extra se aplica a efeitos como Cura ou Enfraquecer, permitindo que eles afetem objetos da mesma forma que afetam criaturas vivas. Caso o efeito Afete Apenas Objetos, funcionando em objetos mas não em criaturas vivas, tem um modificador geral de +0.</p>"
		+ "<p>Objetos não fazem testes de salvamento; o efeito funciona no objeto alvo com seu grau máximo de sucesso. De acordo com o mestre, alguém segurando, carregando ou vestindo um objeto pode fazer um teste de salvamento de Esquiva contra o efeito, representando a retirada do objeto da linha de efeito no último momento.</p>"
		+ "",
	},
	{
		id: 10006,
		name: "Afeta Apenas Outros",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 0,
		description: "<p>Este extra permite que você conceda a outra pessoa o uso de um efeito pessoal. Você deve tocar o alvo como uma ação padrão, e ele tem controle do uso do efeito, embora você possa tomá-lo de volta quando desejar, como uma ação livre. Caso você seja incapaz de manter o efeito, ele deixa de funcionar, mesmo que outra pessoa o esteja usando. Tanto você quanto seu(s) alvo(s) podem usar o efeito simultaneamente.</p>"
		+ "<p>Caso o efeito Afeta Outros Apenas, mas não você, tem um modificador geral de +0.</p>"
		+ "",
	},
	{
		id: 10007,
		name: "Afeta Outros",
		extra: true,
		flat: false,
		ranked: false, 
		ranks: 1,
		description: "<p>Este extra permite que você conceda a outra pessoa o uso de um efeito pessoal. Você deve tocar o alvo como uma ação padrão, e ele tem controle do uso do efeito, embora você possa tomá-lo de volta quando desejar, como uma ação livre. Caso você seja incapaz de manter o efeito, ele deixa de funcionar, mesmo que outra pessoa o esteja usando. Tanto você quanto seu(s) alvo(s) podem usar o efeito simultaneamente.</p>"
		+ "<p>Caso o efeito Afeta Outros Apenas, mas não você, tem um modificador geral de +0.</p>"
		+ "",
	},
	{
		id: 10008,
		name: "Alcance",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Sempre que você aplicar este modificador a um efeito de alcance perto, estende seu alcance em 1,5 metros. Isso pode representar um efeito de curto alcance, como um chicote, lança ou arma semelhante.</p>"
		+ "",
	},
	{
		id: 10009,
		name: "Alcance Estendido",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Este modificador estende a distância de um efeito à distância. Cada graduação de Alcance Estendido dobra todas as categorias de alcance de um efeito. Então, 1 graduação tem alcance curto de (graduação x 15 metros), alcance médio de (graduação x 30 metros) e alcance longo de (graduação x 60 metros). Cada graduação adicional dobra o alcance mais uma vez. O mestre define o limite máximo de Alcance Estendido que um efeito pode ter; como regra geral, efeitos usados na superfície do planeta estão limitados pela distância do horizonte (além do qual a curvatura do planeta faz com que seja impossível ver qualquer coisa para mirá-los). Na Terra ao nível do mar, isso é mais ou menos 6 km (graduação de distância 10).</p>"
		+ "",
	},
	{
		id: 10010,
		name: "Área",
		extra: true,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Este extra permite que um efeito que normalmente funciona em um único alvo afete uma área. Não é necessário nenhum teste de ataque; o efeito simplesmente preenche a área designada, baseado no tipo de modificador. Alvos em potencial na área pode fazer um teste de salvamento de Esquiva (CD 10 + graduação do efeito) para evitar parte do efeito (representando abaixar-se para obter cobertura, sair do caminho, e assim por diante). Um teste de salvamento bem-sucedido reduz o efeito Área para a metade de sua graduação normal contra o alvo (arredondado para baixo, mínimo 1 graduação).</p>"
		+ "<p><h2>Forma</h2></p>"
		+ "<p>Escolha uma das opções a seguir.</p>"
		+ "<ul>"
		+ 	"<li><b>Cone</b>: o efeito preenche um cone com comprimento, largura e altura de 15 metros (graduação de distância 1), espalhando-se a partir do ponto inicial do efeito. Cones no nível da superfície têm sua altura final diminuída pela metade.</li>"
		+ 	"<li><b>Cilindro</b>: o efeito preenche um cilindro de 8 metros de raio e de altura (graduação de distância 0).</li>"
		+ 	"<li><b>Explosão</b>: o efeito preenche uma esfera com 8 metros de raio (graduação de distância 0). Explosões na superfície (como no chão) criam hemisférios de 8 metros de raio e de altura.</li>"
		+ 	"<li><b>Linha</b>: o efeito preenche uma trilha de 1,5 metros de largura e 8 metros de comprimento (graduação de distância 0) em linha reta. Para aumentar largura, compre graduações para isso.</li>"
		+ 	"<li><b>Moldável</b>: o efeito preenche um volume de 1.000 litros, ou 1 m³ (graduação de volume 5), e você pode moldar o volume como quiser, desde que ele permaneça contíguo.</li>"
		+ 	"<li><b>Nuvem</b>: o efeito preenche uma esfera de 4 metros de raio (graduação de distância –1) que permanece na área por uma rodada depois de sua duração expirar (afetando todos os alvos na área normalmente durante a rodada adicional). Nuvens na superfície (como no chão) criam hemisférios de 4 metros de raio e de altura.</li>"
		+ 	"<li><b>Percepção</b>: o efeito funciona sobre qualquer um capaz de perceber o alvo com um sentido específico, escolhido quando você aplica este extra, como um efeito Dependente de Sentido (veja o modificador Dependente de Sentido). Os alvos podem fazer um teste de Esquiva, como sempre, mas se o teste for bem-sucedido, não sofrem efeito nenhum (em vez da metade). Camuflagem que proteja um alvo de perceber o efeito também o bloqueia. Este modificador inclui a falha Dependente de Sentido (veja Falhas), então ela não pode ser aplicada de novo. Caso seja aplicado a um efeito já Dependente de Sentido, custa 2 pontos por graduação em vez de apenas 1.</li>"
		+ "</ul>"
		+ "<p>Cada aumento de +1 no custo por graduação aumenta a graduação de distância da área em 1. Assim, uma Área de Explosão com custo de +2 por graduação tem um raio de 15 metros (graduação de distância 1), um raio de 30 metros tem custo +3 por graduação (graduação de distância 2) e assim por diante.</p>"
		+ "",
	},
	{
		id: 10011,
		name: "Ataque",
		extra: true,
		flat: false, 
		ranks: 0,
		description: "<p>Este extra se aplica a efeitos de alcance pessoal, transformando-os em efeitos de ataque. Exemplos incluem Encolhimento e Teleporte. Diferente da maioria dos extras, o custo do efeito não muda, mas seu funcionamento sim.</p>"
		+ "<p>O efeito não funciona mais em você (então, um Ataque de Teleporte não pode ser usado para teleportar você mesmo, por exemplo). Ele afeta uma criatura de qualquer tamanho ou 25 kg de massa inanimada. O efeito tem alcance perto e exige uma ação padrão e um teste de ataque para tocar o alvo. O alcance pode ser melhorado com o extra À Distância, e a ação exigida, com o extra Ação. O alvo pode fazer um salvamento, determinado quando o efeito é transformado em ataque. No geral, Esquiva ou Vontade são os mais apropriados. Um teste bem-sucedido nega o efeito.</p>"
		+ "<p>Você também deve definir uma circunstância relativamente comum que nega um efeito de Ataque por completo, como campos de força ou a habilidade de bloquear teleportes de um Ataque de Teleporte. Você controla o efeito, e o mantém, caso ele tenha duração mais longa que instantânea</p>"
		+"<p>Caso você deseje ambas versões de um efeito de Ataque, como ser capaz de Teleportar a si mesmo e de Teleportar os outros também como um ataque, pegue os dois como Efeitos Alternativos. Para a habilidade de usar os dois simultaneamente — para teleportar o alvo e a si mesmo ao mesmo tempo, por exemplo — pegue os efeitos como poderes separados.</p>"
		+ "",
	},
	{
		id: 10012,
		name: "Aumentar Massa",
		extra: true,
		flat: true, 
		ranked:true,
		ranks: 1,
		description: "<p>Este modificador pode ser aplicado a um efeito que permite que você carregue ou afete uma certa quantidade de massa, normalmente um efeito de movimento como Teleporte ou Viagem Dimensional. Cada graduação deste extra aumenta a graduação de massa que você pode carregar ou mover com o efeito em 1. Aumentar Massa 3 para Teleporte permite que você carregue até 250 kg de massa extra consigo quando se teleporta, por exemplo.</p>"
		+ "",
	},
	{
		id: 10013,
		name: "Característica",
		instanceID: 0,
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>O efeito Característica também pode servir de modificador de efeito, em essência adicionando habilidades ou benefícios menores a um efeito básico. Embora listado aqui como um extra, isso é em essência o mesmo que ter Característica Ligada ao efeito básico (veja o modificador Ligado a seguir); a Característica é parte intrínseca do poder geral, em vez de algo separado.</p>"
		+ "<p>Da mesma forma que com o efeito Característica, um extra Característica deveria ser significante o suficiente para valer pelo menos 1 ponto de personagem e não ser apenas baseado no descritor do poder. Por exemplo, um efeito de Dano À Distância não precisa de uma Característica para atear fogo; isso é parte do descritor \"fogo\" e pode ser igualmente vantajoso e problemático. Um efeito de Dano À Distância que \"marca\" de maneira duradoura seu alvo com uma marca visível e rastreável, por outro lado, é um efeito com uma Característica.</p>"
		+ "",
		additionalDescription: ""
	},
	{
		id: 10013,
		name: "Contagioso",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>Efeitos contagiosos funcionam tanto no alvo quanto em qualquer um entrando em contato com o alvo. Novos alvos resistem ao efeito normalmente. Eles também podem se tornar contagiosos, e o efeito dura até que todos os seus traços tenham sido eliminados. Um efeito Contagioso também é eliminado caso sua duração expire. Exemplos de feitos com este extra incluem Aflições \"pegajosas\" que prendem qualquer um que as toque, efeitos de Enfraquecer baseados em toxinas ou doenças, ou até mesmo um efeito Nulificar que se espalha de uma vítima para outra.</p>"
		+ "",
	},
	{
		id: 10014,
		name: "Descritor Variável",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		maxRank: 2,
		description: "<p>Você pode mudar os descritores de um efeito com este modificador, alterando-os como uma ação livre uma vez por rodada. Com 1 graduação, você pode aplicar qualquer descritor de um grupo pequeno de descritores relacionados, como clima, eletromagnético, temperatura, e assim por diante. Com 2 graduações, você pode aplicar qualquer descritor de um grupo amplo, como qualquer descritor de metal, magia ou tecnológico. O mestre decide se determinado descritor é apropriado em conjunção com um efeito específico e este modificador.</p>"
		+ "",
		additionalDescription: "",
	},
	{
		id: 10015,
		name: "Dimensional",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		maxRank: 3,
		description: "<p>Este modificador permite que um efeito funcione em alvos em outras dimensões (caso exista alguma na série). Você afeta sua localização aproximada na outra dimensão como se estivesse lá, calculando modificadores de alcance a partir desse ponto. Para muitos efeitos, você pode precisar de um Sentido Remoto Dimensional para mirá-los. Alvos em outras dimensões que você não pode perceber têm camuflagem total contra você. Uma graduação em Dimensional afeta uma única outra dimensão. Duas graduações afetam qualquer dimensão de um grupo relacionado (dimensões místicas, planos demoníacos, etc.). Três graduações afetam qualquer dimensão do cenário.</p>"
		+ "",
		additionalDescription: "",
	},
	{
		id: 10016,
		name: "Distância Aumentada",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 1,
		maxRank: 2,
		description: "<p>Efeitos têm um alcance padrão: pessoal, perto, à distância ou percepção. Veja Alcance em Poderes para detalhes. Este modificador aumenta o alcance de um efeito. Escolha uma das opções a seguir. Aumentar o alcance de um efeito de pessoal para perto exige o extra Afeta Outros ou o extra Ataque. Transformar um efeito perto em um efeito de percepção à distância exige duas aplicações deste extra, para um total de +2 por graduação.</p>"
		+ "<ul>"
		+	"<li><b>À Distância</b>: aplicado a um efeito perto, este modificador o transforma em um efeito à distância."
		+	"</li>"
		+	"<li><b>Percepção</b>: quando aplicado a um efeito à distância, este modificar aumenta seu alcance para percepção."
		+	"</li>"
		+ "<ul>"
		+ "",
	},
	{
		id: 10017,
		name: "Duração Aumentada",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>Efeitos têm uma duração padrão: instantâneo, sustentado, contínuo ou permanente. Veja Duração em Poderes para detalhes. Este modificador aumenta a duração de um efeito. Escolha uma das opções abaixo.</p>"
		+ "<p>Cada graduação adicional deste modificador permite que o poder seja dividido mais uma vez, então 2 graduações permitem que um efeito seja dividido entre três alvos. Um efeito não pode ser dividido para menos de 1 graduação por alvo, e não pode se aplicar mais de uma divisão contra o mesmo alvo</p>"
		+ "<ul>"
		+	"<li><b>Concentração</b>: quando aplicado a um efeito instantâneo, este modificador faz com que ele possa ser mantido através de concentração, usando uma ação padrão por turno para isso. Caso o efeito exija um ataque inicial, nenhum outro ataque é necessário para mantê-lo sobre um alvo, mas rodadas posteriores de efeito também não se beneficiam de acertos críticos. O alvo é afetado em cada um dos turnos do usuário, fazendo um salvamento normal (se algum). Uma vez que o usuário pare de se concentrar, o efeito termina e o alvo se recupera normalmente, incluindo testes de salvamento para remover efeitos em andamento."
		+	"</li>"
		+	"<li><b>Contínuo</b>: quando aplicado a um efeito de duração sustentada, este modificador o torna Contínuo."
		+	"</li>"
		+ "<ul>"
		+ "",
	},
	{
		id: 10018,
		name: "Efeito Secundário",
		extra: true,
		flat: false, 
		ranked: true,
		ranks: 1,
		maxRank: 3,
		description: "<p>Um efeito com duração instantânea com este modificador afeta o alvo uma vez de imediato (quando o efeito é usado) e então de novo na rodada seguinte, no final do turno do atacante. O alvo pode fazer testes de salvamento normais contra o efeito secundário.</p>"
		+ "<p>Os Efeitos Secundários não se somam; então, se você ataca um alvo com seu Efeito Secundário na rodada seguinte a um acerto crítico, ele não afeta o alvo duas vezes; simplesmente atrasa o segundo efeito por mais uma rodada. Você pode atacar o alvo com um efeito diferente, entretanto. Assim, por exemplo, caso você acerte um alvo com um Efeito Secundário de Dano e, na rodada seguinte, acerte com uma Aflição, o alvo sofre tanto o efeito da Aflição quanto do Dano Secundário.</p>"
		+ "<p>Em <i>Guia de Bugigangas</i> (Pág. 42) apresenta a possibilidade de aumentar o Efeito Secundário. Como um extra de +2, o efeito continua por mais duas rodadas e, como um extra de +3, ele continua até ser contra-atacado ou o alvo estiver Incapacitado</p>"
		+ "",
	},
	{
		id: 10019,
		name: "Engatilhado",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Você pode \"setar\" que um efeito com duração instantânea com este modificador se ative em circunstâncias específicas, como em resposta a um perigo específico, após um determinado período de tempo, em resposta a um evento específico e assim por diante - escolhido quando você aplica o modificador. Uma vez escolhido, o gatilho não pode ser alterado.</p>"
		+ "<p>As circunstâncias devem ser detectáveis por seus sentidos. Você pode adquirir efeitos de Sentidos Limitado e Ligado a Engatilhado, se desejar. Armar o efeito requer a mesma ação que usá-lo normalmente.</p>"
		+ "<p>Um efeito Engatilhado em espera pode ser detectado com um teste de Percepção (CD 10 + graduação de efeito) e em alguns casos desarmado com um teste de perícia ou poder bem sucedido (como Prestidigitação, Tecnologia, Nulificar ou outro efeito de neutralização) com uma CD de (10 + graduação de efeito).</p>"
		+ "<p>Um efeito Engatilhado funciona por uma vez por graduação neste modificador. Após sua última ativação, ele para de funcionar.</p>"
		+ "<p>Você pode aplicar uma graduação adicional de Engatilhado para ter um Gatilho Variável, permitindo que você altere o acionador do efeito cada vez que você setá-lo.</p>"
		+ "",
	},
	{
		id: 10020,
		name: "Impenetrável",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Uma defesa com este modificador é altamente resistente. Qualquer efeito com um modificador de dificuldade de salvamento igual ou menor que a metade da graduação de Impenetrável (arredondado para cima) não tem efeito. Então, por exemplo, Resistência Impenetrável 9 ignora Dano com 5 graduações ou menos. Efeitos Penetrantes podem atravessar Resistência Impenetrável (veja a descrição do extra Penetrante). Impenetrável foi pensado primariamente para salvamento de Resistência, para lidar com personagens imunes a certas quantidades de dano, mas pode ser aplicado a outras defesas com a permissão do mestre, para refletir personagens com defesas confiáveis contra perigos específicos.</p>"
		+ "",
	},
	{
		id: 10021,
		name: "Inato",
		extra: true,
		flat: true, 
		ranked: false,
		ranks: 1,
		description: "<p>Um efeito com este modificador é parte inata de sua natureza e não é afetado por Nulificar. O mestre deveria ter cuidado ao permitir a aplicação de Inato; o efeito deve ser uma característica essencial ou nascida com o personagem, como o tamanho de um elefante ou a natureza intangível de um fantasma. Caso o efeito não seja algo normal à espécie ou tipo do personagem, provavelmente não é inato.</p>"
		+ "",
	},
	{
		id: 10022,
		name: "Incurável",
		extra: true,
		flat: true, 
		ranked: false,
		ranks: 1,
		description: "<p>Efeitos como Cura e Regeneração não podem curar o dano causado por um efeito com este modificador; o alvo deve se recuperar à razão normal. Efeitos com o extra Persistente podem curar dano Incurável.</p>"
		+ "",
	},
	{
		id: 10023,
		name: "Indireto",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		maxRank: 4,
		description: "<p>Um efeito à distância com este modificador pode se originar de um ponto que não seja o usuário, ignorando cobertura entre o usuário e o alvo, como paredes e outras barreiras, desde que o impedimento não conceda cobertura entre o ponto de origem do efeito e o alvo. Um efeito Indireto normalmente se origina de um ponto fixo longe de você. Em alguns casos, um efeito Indireto pode contar como um ataque surpresa.</p>"
		+ "<ul>"
		+ 	"<li><b>Indireto 1</b>: o efeito se origina em um ponto fixo longe de você. </li>"
		+ 	"<li><b>Indireto 2</b>: o efeito pode vir de qualquer ponto longe de você ou de um ponto fixo em uma direção fixa (mas não longe de você).</li>"
		+ 	"<li><b>Indireto 3</b>: o efeito pode vir de qualquer ponto em uma direção fixa (mas não de longe de você) ou de um ponto fixo de qualquer direção.</li>"
		+ 	"<li><b>Indireto 4</b>: o efeito pode se originar de qualquer ponto e mirar em qualquer direção, incluindo na sua direção (acertando um alvo à sua frente pelas costas, por exemplo).</li>"
		+ "</ul>"
		+ "",
		chosenRankDescription: "",
		fieldPerRank: [
			"<input type='text' placeholder='Dimensão(ões)'>",
			"<input type='text' placeholder='Dimensão(ões)'>",
			"Todas Dimensões",
		],
	},
	{
		id: 10024,
		name: "Ligado",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 0,
		description: "<p>Este modificador se aplica a dois ou mais efeitos, ligando-os para que funcionem em conjunção como se fossem um só. Os efeitos Ligados devem operar ao mesmo alcance. A ação exigida para usar os efeitos combinados é a mais longa entre os componentes e eles usam um único teste de ataque (caso isso seja necessário) e um único teste de salvamento (caso ambos os efeitos usem o mesmo tipo de teste). Se os efeitos tiverem salvamentos diferentes, os alvos testam contra cada efeito em separado. Efeitos Alternativos diferentes não podem ser Ligados, uma vez que não podem ser usados ao mesmo tempo por definição. No geral, o mesmo efeito não pode ser Ligado a si mesmo para \"multiplicar\" os resultados de um teste de salvamento falho (como dois efeitos de Dano Ligado que causam “o dobro do dano” no caso de um teste falho).</p>"
		+ "<p>Este modificador não muda o custo dos efeitos componentes; ele simplesmente soma seus custos juntos para obter o custo do efeito combinado.</p>"
		+ "<p><i><b>Exemplo:</b> Capitão Trovão tem a habilidade de disparar relâmpagos que causam choque em seus alvos com eletricidade e ensurdecem com trovões poderosos. Isso é um efeito de Dano À Distância (relâmpago), que custa 2 pontos por graduação, Ligado a uma Aflição À Distância (trovão ensurdecedor), que custa 2 pontos por graduação. O efeito combinado custa 4 pontos por graduação."
		+ "Uma vez que os dois efeitos são à distância e exigem uma ação padrão para serem usados, o mesmo vale para o efeito combinado. Uma vez que Dano exige um teste de Resistência e Aflição exige um teste de salvamento de Esquiva, o alvo testa contra elas em separado, fazendo um teste de salvamento de Resistência contra o dano do relâmpago e um teste de Esquiva para evitar ficar surdo pelo trovão. Uma vez que os dois efeitos são Ligados, Capitão Trovão não pode arremessar um relâmpago sem o trovão ensurdecedor, nem pode tentar simplesmente ensurdecer um alvo sem acertá-lo com um relâmpago (para fazer essas coisas, Cap teria de atacar com esses efeitos sozinhos, não com Efeitos Alternativos)!</i></p>"
		+ "",
		chosenRankDescription: "",
	},
	{
		id: 10025,
		name: "Multiataque",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 0,
		description: "<p>Um efeito multiataque permite que você acerte múltiplos alvos, ou um único alvo múltiplas vezes, com a mesma ação padrão. Multiataque pode se aplicar a qualquer efeito que exija um teste de ataque. Há três maneiras de um efeito Multiataque ser usado.</p>"
		+ "<p><h2>Único Alvo</h2></p>"
		+ "<p>Para usar Multiataque contra um único alvo, faça seu teste de ataque normalmente. Caso seja bem-sucedido, aumente a CD do teste de salvamento do ataque em +2 para cada dois graus de sucesso, e +5 para três graus ou mais. Este bônus de circunstância não conta contra os limites de nível de poder.</p>"
		+ "<p>Se uma Resistência Impenetrável puder ignorar o ataque antes de qualquer aumento na CD, então o ataque não tem efeito; uma saraivada de múltiplos disparos não tem mais chance de penetrar uma Resistência Impenetrável do que apenas um tiro.</p>"
		+ "<p><h2>Alvos Múltiplos</h2></p>"
		+ "<p>Você pode usar Multiataque para acertar múltiplos alvos de uma vez só com uma rajada em arco. Role um teste de ataque por alvo no arco. Você sofre uma penalidade para cada ataque igual ao número total de alvos. Assim, realizar um multiataque contra cinco alvos tem uma penalidade de –5 para cada teste de ataque. Caso você erre um alvo, ainda assim pode tentar acertar os outros.</p>"
		+ "<p><h2>Ataque de Cobertura</h2></p>"
		+ "<p>Um Multiataque pode conceder cobertura para um aliado. Use uma ação padrão e escolha um aliado em sua linha de visão, que recebe os benefícios de cobertura contra inimigos em sua linha de visão e ao alcance de seu Multiataque (você deve ser capaz de disparar neles para manter as cabeças deles abaixadas ou esta manobra não funciona). Você não pode realizar um ataque de cobertura para um aliado em combate corpo-a-corpo. Um oponente pode ignorar a cobertura concedida por seu ataque ao custo de ser automaticamente atacado por ele; faça um teste de ataque normal para acertar o oponente.</p>"
		+ "",
	},
	{
		id: 10026,
		name: "Penetrante",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Seu efeito ignora Resistência Impenetrável até certo grau; o alvo deve fazer um teste de salvamento contra uma graduação de efeito igual à sua graduação de Penetrante. Assim, caso um efeito de graduação 4 (Penetrante 2) acerte um alvo com Impenetrável 9, o alvo deve resistir um efeito de graduação 2 (igual à graduação de Penetrante). Se o efeito fosse de graduação 6, o alvo teria de resistir contra o efeito total de qualquer maneira, uma vez que a graduação é maior que metade da graduação de Impenetrável.</p>"
		+ "<p>Você não pode ter uma graduação de Penetrante maior que sua graduação no próprio efeito.</p>"
		+ "",
	},
	{
		id: 10027,
		name: "Personalizado",
		extra: true,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Um extra de poder personalizado que pode ser usado para qualquer fim.</p>"
		+ "",
	},
	{
		id: 10028,
		name: "Personalizado",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Um extra de poder personalizado que pode ser usado para qualquer fim.</p>"
		+ "",
	},
	{
		id: 10029,
		name: "Resistência Alternativa",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>Um efeito com este modificador tem uma salvamento diferente do normal. A dificuldade do teste de salvamento continua a mesma, apenas o salvamento em si é que muda. Caso a mudança seja para um salvamento em geral mais baixa (e, assim, mais vantajosa), este extra aumenta o custo por graduação em +1. Se, na opinião do mestre, não houver aumento real na eficácia, apenas uma mudança no salvamento, ele tem modificador de +0.</p>"
		+ "",
		chosenRankDescription: "",
		fieldPerRank: [
			"Esquiva",
			"Aparar",
			"Fortitude",
			"Resistência",
			"Vontade",
		],
	},
	{
		id: 10030,
		name: "Reversível",
		extra: true,
		flat: true, 
		ranked: false,
		ranks: 1,
		description: "<p>Você pode remover condições causadas por um efeito Reversível à vontade como uma ação livre, desde que o alvo esteja dentro do alcance do efeito. Exemplos incluem remover as condições de dano causadas por um efeito de Dano ou remover uma Aflição instantaneamente. Você normalmente não tem controle sobre os resultados desses efeitos.</p>"
		+ "",
	},
	{
		id: 10031,
		name: "Ricochetear",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Você pode ricochetear ou desviar um efeito de ataque com este modificador de uma superfície sólida para mudar sua direção. Isso permite que você ataque dobrando esquinas, supere cobertura e possivelmente realize ataques surpresa contra um oponente. Isso não permite que você afete múltiplos alvos. O “desvio” não tem efeito além de mudar a direção do ataque.</p>"
		+ "<p>Você deve ser capaz de definir uma trilha clara para seu ataque, que deve seguir uma linha reta entre cada ricochete. Cada graduação em Ricochetear permite que você desvie o ataque uma vez antes de ele acertar. Ricochetear pode conceder um bônus para acertar devido à surpresa, de acordo com o mestre.</p>"
		+ "",
	},
	{
		id: 10032,
		name: "Seletivo",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>Um efeito resistível com este extra é discriminante, permitindo que você decida quem é ou não afetado por ele. Isso é muito útil para efeitos de área (veja o extra Área). Você deve ser capaz de perceber de maneira acurada um alvo para decidir se ele vai ou não ser afetado. Para um grau de seletividade com efeitos não resistíveis, use o modificador Preciso.</p>"
		+ "",
	},
	{
		id: 10033,
		name: "Sustentado",
		extra: true,
		flat: false, 
		ranked: false,
		ranks: 0,
		description: "<p>Aplicado a um efeito de duração permanente, este modificador torna sua duração em sustentada, o que exige uma ação livre para ser usado (em vez de nenhuma, como outros efeitos permanentes). O benefício é que o efeito sustentado pode ser melhorado usando esforço extra, inclusive para realizar façanhas de poder. O problema é que o efeito exige uma ação livre todo turno para ser mantido, e caso você seja incapaz disso, o efeito é desligado.</p>"
		+ "<p><i><b>Exemplo:</b> o efeito Proteção é permanente, o que significa que sempre protege o personagem, mas concentrar-se ou esforçar-se não torna o efeito mais protetor, e o personagem também não pode usá-lo para façanhas de poder. Proteção Sustentada pode ser ligado e desligado, melhorado com esforço extra e usado para façanhas de poder. Isso pode representar um poder como um campo de força ou densidade ampliada.</i></p>"
		+ "",
	},
	{
		id: 10034,
		name: "Sutil",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		maxRank: 2,
		description: "<p>Efeitos sutis não são perceptíveis. Um efeito sutil pode ser usado para pegar um alvo desatento e em alguns casos se qualifica para um ataque surpresa. Com 1 graduação, o efeito se torna difícil de ser percebido; um teste de Percepção com CD 20 é necessário, ou o efeito é perceptível apenas a certos sentidos exóticos (de acordo com o mestre). Com 2 graduações, o efeito se torna completamente não detectável.</p>"
		+ "",
		additionalDescription: "",
	},
	{
		id: 10035,
		name: "Teleguiado",
		extra: true,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Este modificador concede a um efeito de ataque à distância uma oportunidade adicional de atingir o alvo. Caso um teste de ataque com um efeito Teleguiado falhe, ele tenta acertar o alvo de novo no início do seu próximo turno, o que exige apenas uma ação livre para manter e permite que você realize outras ações, incluindo fazer outro ataque. Cada graduação em Teleguiado concede ao efeito um teste de ataque adicional, mas ainda assim ele só ganha um teste por rodada.</p>"
		+ "<p>O efeito Teleguiado usa o mesmo sentido acurado que o ataque original para \"rastrear\" seu alvo, então camuflagem eficaz contra esse sentido pode confundir o efeito e fazer com que ele erre. Caso um ataque Teleguiado erre devido à camuflagem, ele perde a “trava” no alvo e não ganha nenhuma nova tentativa de acertar. Você pode pegar Sentidos Ligados ao efeito Teleguiado, caso desejado (para criar coisas como mísseis guiados por calor ou por radar, por exemplo). Caso um ataque Teleguiado seja contra-atacado antes de acertar, ele perde quaisquer chances de acertar. O mesmo vale caso ele acerte um alvo diferente.</p>"
		+ "",
	},
	{
		id: 10036,
		name: "Traiçoeiro",
		extra: true,
		flat: true, 
		ranked: false,
		ranks: 1,
		description: "<p>Este modificador é parecido com o modificador Sutil (veja esta mesma seção), exceto pelo fato de que Traiçoeiro torna o resultado de um efeito mais difícil de detectar em vez de tornar o próprio efeito mais difícil de ser detectado. Por exemplo, um alvo sofrendo de Dano Traiçoeiro não está nem mesmo consciente de que foi ferido. Alguém afetado por um Enfraquecer Traiçoeiro sente-se bem até que algum tipo de deficiência deixe óbvio que o indivíduo está mais fraco, e assim por diante. O alvo de um efeito traiçoeiro pode ficar sem saber do perigo até que seja tarde demais!</p>"
		+ "<p>Um efeito Traiçoeiro é detectável tanto por um teste de perícia de CD 20 (normalmente Percepção, embora perícias como Especialidade, Intuição e Tratamento também se apliquem em outros casos) quanto por um sentido especialmente incomum, como um efeito mágico Traiçoeiro perceptível através de Detectar Magia ou de Consciência de Magia. Perceba que Traiçoeiro não torna o efeito em si mais difícil de ser notado; aplique o modificador Sutil para isso. Então, é possível para um efeito Traiçoeiro ativo ser percebido: o alvo pode perceber o uso do efeito, mas não seus resultados: o efeito parece \"inofensivo\" ou não parece “fazer nada”, uma vez que o alvo não consegue detectar seus resultados.</p>"
		+ "",
	},
	// ----------------------------------------------
	// Falhas
	// ----------------------------------------------
	{
		id: 11000,
		name: "Ação Aumentada",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		maxRank: 3,
		description: "<p>Usar um efeito exige um dos seguintes tipos de ação: padrão, movimento, livre ou reação. Cada aumento na ação exigida do tipo de ação básica de um efeito (livre para movimento, por exemplo) vale –1 por modificador de graduação.</p>"
		+ "",
	},
	{
		id: 11001,
		name: "Alcance Diminuído",
		extra: false,
		flat: true, 
		ranked: true,
		ranks: 1,
		maxRank: 3,
		description: "<p>Cada graduação em Alcance Reduzido diminui os alcances curto, médio e longo de um efeito. Uma graduação nesta falha dá a um efeito um alcance curto de 3 metros x graduação de poder, um alcance médio de 7,5 metros x graduação de poder, e um alcance longo de 15 metros x graduação de poder. Uma segunda graduação diminui os multiplicadores para 1,5 metros, 3 metros e 7,5 metros, e uma terceira graduação os diminui para 60 centímetros, 1,5 metros e 3 metros. Três graduações é o máximo que um personagem pode ter nesta falha.</p>"
		+ "",
	},
	{
		id: 11002,
		name: "Alcance Reduzido",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		maxRank: 2,
		description: "<p>Efeitos têm alcance perto, à distância ou percepção. Diminuir o alcance de um efeito em um passo (de à distância para perto, por exemplo) vale 1 ponto por graduação. Alguns efeitos têm seu alcance determinado pela graduação. Para alterar o alcance do efeito, aumente ou diminua sua graduação; esta falha então não se aplica. Efeitos que têm alcance perto como padrão não podem ter seu alcance diminuído ainda mais.</p>"
		+ "",
	},
	{
		id: 11003,
		name: "Ativação",
		extra: false,
		flat: true, 
		ranked: true,
		ranks: 1,
		maxRank: 2,
		description: "<p>Um poder com esta falha exige uma ação para ser preparado ou ativado antes que seus efeitos sejam utilizáveis. Caso o poder exija uma ação de movimento para ser ativado, a falha é de –1 ponto. Caso exija uma ação padrão, a falha é de –2 pontos. Uma Ativação que leve menos de uma ação de movimento não é uma falha, embora possa se qualificar como uma complicação (veja Perda de Poder para detalhes de complicações).</p>"
		+ "<p>Ativação não tem outro efeito além de fazer com que todos os efeitos de um poder estejam disponíveis. Os efeitos em si mesmos ainda exigem suas ações normais para serem usados. Você pode usar os efeitos de um poder no mesmo turno em que os ativa, desde que tenha ações suficientes para fazê-lo. Caso o poder seja desativado — voluntariamente ou involuntariamente via efeitos como Nulificar — você deve ativá-lo de novo para usar qualquer um de seus efeitos.</p>"
		+ "<p>Ativação se aplica a um poder inteiro e a todos os seus efeitos. Ativar o poder faz com que todos os seus efeitos estejam \"online\" e os torna disponíveis. Caso você tenha de ativar efeitos diferentes separadamente, aplique esta falha a cada um deles, o que exige ações separadas para cada um. Caso a Ativação não seja automática, aplique também a falha Exige Teste no poder inteiro e faça com que o jogador realize os testes necessários para ativar o poder. Caso o teste falhe, o poder não é ativado, e o personagem tem de usar a ação de ativação de novo.</p>"
		+ "<p><h2>Ativação e Efeitos Permanentes</h2></p>"
		+ "<p>A falha Ativação permite que efeitos permanentes que são parte de um poder sejam desligados, mas apenas quando o poder como um todo for desativado. Ela não afeta os outros aspectos de duração permanente, nem mesmo a incapacidade de melhorar o efeito com esforço extra. O mestre deveria decidir se permitir que um efeito permanente tenha uma Ativação é apropriado, baseado no efeito específico e em quaisquer outros com que ele seja combinado no poder.</p>"
		+ "<p><i><b>Exemplo:</b> Muralha tem o poder de assumir uma forma rochosa superforte. Isso é uma combinação dos efeitos Força Aumentada, Proteção Impenetrável, e Poder de Carga. O jogador de Muralha aplica a falha Ativação ao poder, dizendo que Muralha tem de se concentrar e usar uma ação padrão para assumir sua forma rochosa. Isso reduz o custo total dos três efeitos em 2 pontos de personagem e significa que a menos que Muralha use uma ação padrão para ativar sua forma rochosa, ele não pode usar os efeitos do poder, incluindo-se aí aqueles permanentes, como Proteção.</i></p>"
		+ "",
	},
	{
		id: 11004,
		name: "Baseado em Agarrar",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Um efeito de ataque com esta falha exige que você agarre com sucesso um alvo antes de usar o efeito (veja Agarrar). No geral, isso se aplica a um efeito que tenha alcance perto, uma vez que você tem de estar em combate corpo-a-corpo para agarrar. Caso o alcance padrão do efeito não seja perto, aplique também o modificador Perto. Caso falhe em agarrar, você não pode usar o efeito. Se a tentativa de agarrar for bem sucedida, o efeito ocorre automaticamente como uma reação.</p>"
		+ "<p><i><b>Exemplo:</b> Lampreia tem um toque drenador que é um efeito baseado em Agarrar com Enfraquecer Força. Assim, o monstruoso vilão tem que usar uma ação padrão para agarrar antes de usá-lo. Caso seu teste de ataque corpo-a-corpo acerte, o alvo faz um teste de salvamento de Esquiva ou de Fortitude contra o teste de Força de Lampreia. Caso falhe, o alvo então faz um teste de salvamento de Fortitude contra o efeito Enfraquecer do vilão, para ver quanta Força Lampreia consegue drenar.</i></p>"
		+ "<p>Em essência, esta falha é uma forma de Resistível, com um teste de agarrar em vez de um teste de salvamento normal (veja a falha Resistível para mais detalhes).</p>"
		+ "",
	},
	{
		id: 11005,
		name: "Cansativo",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Um efeito com esta falha faz com que você sofra um nível de fatiga quando o usa. Você se recupera dessa fatiga normalmente, e pode usar pontos de vitória para sobrepujá-la, gastando o ponto de vitória no início da rodada seguinte a usar o efeito cansativo. Em essência, o poder exige esforço extra para ser usado (veja Esforço Extra). Isso torna Cansativo em uma falha útil para criar um efeito que você só possa usar com esforço extra.</p>"
		+ "<p>Cansativo é normalmente aplicado a apenas algumas graduações de um efeito, para representar um nível mais alto do efeito, utilizável apenas com esforço extra. Por exemplo, um herói pode ter um efeito de Dano com 12 graduações, mas normalmente usa apenas 8 graduações. As 4 graduações restantes são Cansativas, então usá-las deixa o herói fatigado rápido. Um efeito Cansativo pode ser combinado com esforço extra, mas a fatiga se soma, causando no mínimo dois níveis de fatiga por uso.</p>"
		+ "",
	},
	{
		id: 11006,
		name: "Dependente de Sentido",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>O alvo de um efeito Dependente de Sentido deve ser capaz de perceber o efeito para que ele funcione. O alvo ganha um teste de salvamento de Esquiva. Sucesso significa que o alvo consegue olhar para o lado, cobrir os ouvidos, etc., e o efeito não funciona. Caso contrário, o efeito funciona normalmente e o alvo faz o teste de salvamento de sempre contra o efeito, se houver algum.</p>"
		+ "<p>Oponentes conscientes de um efeito Dependente de deliberadamente: olhar para o lado, cobrir ou bloquear os ouvidos, etc. Isso concede um bônus de +10 em testes de salvamento contra o efeito, mas também dá camuflagem parcial contra o sentido em questão. Um oponente incapaz de usar um sentido (cego, surdo, etc.) é imune a todos os efeitos dependentes dele. Oponentes podem fazer isso fechando os olhos, usando plugues nos ouvidos ou nariz, ou usando outro efeito, como Camuflagem.</p>"
		+ "<p>Isso concede camuflagem total contra o sentido em questão. Efeitos sensoriais são Dependentes de Sentido por definição, e não podem receber esta falha. Para dar a um alvo salvamento adicional contra um efeito sensorial, use a falha Resistível Sentido também podem bloquear o sentido em questão.</p>"
		+ "",
		additionalDescription: "",
	},
	{
		id: 11007,
		name: "Dissipação",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Sempre que você usa um efeito com esta falha, ele perde 1 graduação de eficiência. Para efeitos com duração mais longa que instantâneo, cada rodada é considerada \"um uso\". Quando o efeito alcançar 0 graduações, ele deixa de funcionar. Um efeito dissipado pode ser \"recuperado\" de alguma forma, sendo recarregado, com descanso, reparos, e assim por diante. O mestre decide quando e como um efeito dissipado se recupera, mas no geral deve ser algo que ocorra fora de combate e que leve pelo menos uma hora. O mestre deve permitir que um herói recupere um efeito dissipado imediata e completamente gastando um ponto de vitória.</p>"
		+ "",
		additionalDescription: "",
	},
	{
		id: 11008,
		name: "Distração",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Usar um efeito com Distração exige mais concentração que o normal, fazendo com que você fique vulnerável quando usa o efeito, até o início do seu próximo turno.</p>"
		+ "",
		additionalDescription: "",
	},
	{
		id: 11009,
		name: "Efeito Colateral",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Falhar no uso de um efeito com esta falha causa algum efeito colateral problemático. Falhas incluem errar um efeito de ataque, ou o alvo resistir com sucesso contra o efeito. Caso o efeito colateral ocorra sempre que você usar o efeito, seja você bem-sucedido ou não, ele vale –2 por graduação.</p>"
		+ "<p>A natureza exata do efeito colateral fica a seu cargo e do mestre. Como regra geral, deveria ser um efeito de mais ou menos com o mesmo valor que o efeito com esta falha. Então, um efeito com um custo de 20 pontos deveria ter um efeito colateral de 20 pontos. Efeitos colaterais típicos incluem Aflição, Dano ou Enfraquecer, ou o efeito básico em si mesmo (em essência, ele rebate e afeta você). O Efeito Colateral não exige um teste de ataque e afeta apenas você, embora o mestre possa permitir alguns Efeitos Colaterais com o modificador Área, em uma avaliação caso a caso. Você pode fazer um teste de salvamento normal contra o Efeito Colateral. Caso você seja imune a seus próprios poderes, você não é imune a seus efeitos colaterais.</p>"
		+ "<p>O mestre também pode permitir uma Complicação Efeito Colateral que, em essência, impõe uma complicação sobre você sem recompensá-lo com um ponto de vitória. Veja Complicações.</p>"
		+ "",
		additionalDescription: "",
	},
	{
		id: 11010,
		name: "Exige Teste",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Um efeito com esta falha exige um teste de algum tipo — normalmente um teste de perícia — com uma classe de dificuldade igual a 10 + graduações em Exige Teste. Caso o teste falhe, o efeito não funciona, embora a ação exigida para usá-lo tenha sido gasta (então, tentar ativar um efeito com uma ação padrão leva uma ação padrão, tenha o teste sido bem-sucedido ou não).</p>"
		+ "<p>Caso o teste seja bem-sucedido, o personagem ganha o uso de 1 graduação do efeito por ponto que o teste supere a CD. Assim, um teste com resultado 14 permite que o personagem use até 4 graduações do efeito. Caso uma graduação menor do efeito não faça nada, então é como se o teste tivesse falhado.</p>"
		+ "<p>O teste exigido ocorre como parte da ação para usar o efeito e não concede outro benefício que não seja ajudar a ativá-lo. Modificadores normais se aplicam ao teste, e caso você seja incapaz de fazer o teste exigido por alguma razão, o efeito não funciona.</p>"
		+ "<p>Um 1 natural rolado no teste significa que ele falha automaticamente, independente do resultado do teste. Assim, há uma pequena chance de que o efeito não vai funcionar, independente do bônus no teste do personagem.</p>"
		+ "<p>Este teste deve ser em adição a qualquer teste normalmente exigido para o efeito. Assim, por exemplo, o teste normal de Percepção feito em conjunção com um efeito sensorial não conta como uma aplicação desta falha, e aplicá-la significa que um teste adicional é exigido antes do(s) teste(s) normalmente exigido(s).</p>"
		+ "<p><i><b>Exemplo:</b> um conjurador tem Sentidos 4 (Detectar Magia, À Distância, Acurado, Analisar) com Teste Exigido 4 de Especialidade: Magia. O jogador precisa fazer um teste de perícia de CD 14 (10 + 4 graduações de falha) para ser bem-sucedido em conjurar magias, seguido de um teste normal de Percepção para perceber qualquer coisa presente, e talvez até outro teste de Especialidade para interpretar o que seu personagem percebeu.</i></p>"
		+ "<p><h2>Exemplos</h2></p>"
		+ "<p>Testes de perícia que podem ser exigidos por um efeito incluem:</p>"
		+ "<ul>"
		+ 	"<li><b>Acrobacia</b>: adequado a efeitos que exigem alguma medida de coordenação ou manobras complexas. </li>"
		+ 	"<li><b>Enganação</b>: bom para efeitos voltados para enganar, especialmente para efeitos sensoriais como Camuflagem ou Ilusão, e efeitos de disfarce ou de alteração de forma, como Morfar.</li>"
		+ 	"<li><b>Especialidade</b>: um teste da perícia Especialidade pode representar ter de saber alguma coisa sobre o alvo do efeito ou ter de saber algo sobre o próprio efeito.</li>"
		+ 	"<li><b>Furtividade</b>: mais apropriado para efeitos sensoriais, especialmente Camuflagem.</li>"
		+ 	"<li><b>Intimidação</b>: útil para efeitos voltados para causar medo e também para efeitos igualmente ofensivos como Aflição</li>"
		+ 	"<li><b>Tecnologia</b>: operar um dispositivo complexo pode exigir um teste de Tecnologia.</li>"
		+ "</ul>"		
		+ "",
		additionalDescription: "",
	},
	{
		id: 11011,
		name: "Inconstante",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Um efeito Inconstante não funciona o tempo todo. Role um dado a cada rodada antes de usar ou de manter o efeito. Caso o resultado seja 10 ou menos, ele não funciona nesta rodada, mas ainda assim você gastou a ação exigida pelo efeito. Você pode rolar de novo na próxima rodada para ver se ele funciona, embora deva gastar a ação normal necessária para ativar o efeito de novo. Gastar um ponto de personagem em seu \"teste de constância\" permite que você seja bem-sucedido automaticamente (uma vez que o resultado será no mínimo 11).</p>"
		+ "<p>Como alternativa, em vez de ter de fazer um teste de constância, você pode escolher ter cinco usos em que seu efeito funciona normalmente, então ele deixa de funcionar por completo até que você possa se \"recuperar\" de alguma forma (veja a falha Dissipação para mais sobre isso). O mestre pode permitir que você gaste um ponto de vitória para recuperar automaticamente um poder Inconstante usado.</p>"
		+ "<table class='BehindTheMask-Table'>"
		+ 	"<tr> <th class='BehindTheMask-Header'>Recarregando e Reiniciando</th> </tr>"
		+ 	"<tr> <td class='BehindTheMask-Body'>" 
		+ 	"<p>Uma aplicação possível da falha Inconstante é refletir armas ou equipamento que ocasionalmente ficam sem munição, “emperram” ou “travam” e devem ser recarregados ou reiniciados de alguma forma. Ela só se aplica realmente a efeitos onde isso acontece com alguma frequência, como dado na descrição da falha Inconstante. Altas capacidades de munição e de combustível, que só de vez em quando acabam ou atrapalham o personagem, são mais bem tratadas como descritores e complicações ocasionais quando realmente se mostram problemáticas.</p>"
		+ 	"<p><i><b>Exemplo:</b> Calibre, um vigilante com arma em punho, tem uma variedade de armas (adquiridas via a vantagem Equipamento). No geral, ele tem munição suficiente para não se preocupar, não importa quantos tiros ele dispare ou quantos bandidos ele despache com suas armas. Mas, quando o mestre decide que as armas de Calibre ficam sem munição no meio de um tiroteio, o jogador ganha um ponto de vitória pela complicação, forçando o herói a bolar um novo plano de ação, e rápido!</i></p>"
		+ 		"</td>"
		+ 	"</tr>"
		+ "",
	},
	{
		id: 11012,
		name: "Incontrolável",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		description: "<p>Você não tem controle de um efeito com esta falha. O mestre é quem decide quando e como seu efeito funciona (em essência, tornando-o uma ferramenta de trama). Esta falha é mais adequada para poderes misteriosos fora do controle do jogador ou para efeitos com os quais o mestre e sente mais à vontade de ter sob seu controle direto.</p>"
		+ "",
	},
	{
		id: 11013,
		name: "Impreciso",
		extra: false,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Um efeito com esta falha é difícil de controlar ou completamente impreciso. Cada graduação impõe uma penalidade de –2 nos testes de ataque com o efeito.</p>"
		+ "",
	},
	{
		id: 11014,
		name: "Limitado",
		extra: false,
		flat: false, 
		ranked: true,
		ranks: 1,
		maxRank: 2,
		description: "<p>Um efeito com esta falha não é eficaz o tempo todo. Poderes limitados se dividem em dois tipos: aqueles utilizáveis apenas em certas situações, e aqueles utilizáveis apenas em certas coisas. Por exemplo, Utilizável Apenas Quando Cantando Alto, Apenas Quando Voando, Apenas em Homens (ou Mulheres), Apenas contra Fogo, Não Utilizável em Coisas Amarelas e assim por diante. Como regra geral, o efeito deve perder mais ou menos metade de sua utilidade para se qualificar para este modificador. Qualquer coisa menos limitante é mais bem tratada como uma complicação ocasional.</p>"
		+ "",
	},
	{
		id: 11015,
		name: "Limitado a Resistência",
		extra: false,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>As graduações de um efeito com esta falha se limitam a aumentar a classe de dificuldade de teste de resistência do efeito apenas e não aumentam qualquer outro aspecto do efeito. Este efeito não se aplica a efeitos — como uma aflição ou Dano — onde o grau de falha de um teste de resistência determina o resultado. É destinado principalmente para efeitos não ofensivos com o modificador de Ataque, como o Teletransporte de ataque, onde os graus Limitado à Resistência aumentam a CD do teste mas não afetam o alcance do teleporte, por exemplo.</p>"
		+ "",
	},
	{
		id: 11016,
		name: "Peculiaridade",
		extra: false,
		flat: true, 
		ranked: true,
		ranks: 1,
		description: "<p>Uma Peculiaridade é algum incômodo menor ligado ao efeito, em essência o reverso de uma Característica (veja Característica em Extras). Uma peculiaridade vale, no geral, 2 ou 3 pontos de personagem, e pode ser tão simples quanto uma falha de 1 ponto.</p>"
		+ "<p>Como acontece com as Características, o mestre deve garantir que uma Peculiaridade é realmente uma falha embora uma falha menor) e não simplesmente parte dos descritores de um poder. Por exemplo, o fato de que um ataque com o descritor \"sônico\" não viaja através do vácuo não é uma Peculiaridade, mas simplesmente parte do descritor \"sônico\" (ainda mais considerando que tal ataque pode ser melhorado por um meio como a água). Por outro lado, um metamorfo incapaz de mudar de cor, ou um telepata incapaz de mentir quando usa Comunicação Mental, têm poderes com Peculiaridades.</p>"
		+ "<p>O mestre define a graduação (e, assim, o valor) de qualquer Peculiaridade atribuída a um efeito, baseado em quão problemática ela pode ser, de maneira semelhante a definir as graduações da vantagem Benefício e do efeito Característica (vejas essas características para detalhes.</p>"
		+ "",
	},
	{
		id: 11017,
		name: "Perceptível",
		extra: false,
		flat: true, 
		ranked: false,
		ranks: 1,
		description: "<p>Um efeito contínuo ou permanente com este modificador é perceptível de alguma forma (veja Percebendo Efeitos de Poder em Poderes). Escolha uma forma de exibição do efeito. Por exemplo, Proteção Perceptível pode tomar a forma de placas de armadura ou de um couro grosso, deixando claro que o personagem é mais resistente que o normal.</p>"
		+ "",
	},
	{
		id: 11018,
		name: "Permanente",
		extra: false,
		flat: true, 
		ranked: false,
		ranks: 1,
		maxRank: 2,
		description: "<p>A duração de um efeito contínuo com esta falha se torna permanente. Ele não pode ser desligado, e está sempre ligado como padrão. Caso alguma força externa — normalmente o efeito Nulificar — consiga desligá-lo, ele volta a ser ativado na próxima oportunidade. Além disso, você não pode melhorar um efeito permanente usando esforço extra.</p>"
		+ "<p>Efeitos permanentes podem ser inconvenientes algumas vezes (incluindo-se aí coisas como ficar permanentemente intangível ou com 8 metros de altura o tempo todo); isso está incluído no valor desta falha.</p>"
		+ "",
	},
	{
		id: 11019,
		name: "Removível",
		extra: false,
		flat: true, 
		ranked: false,
		ranks: 1,
		maxRank: 2,
		description: "<p>Efeitos com esta falha podem ser \"tirados\" de você, impedindo seu acesso aos efeitos até que você os recupere. No geral, isso significa um poder que reside em um objeto, chamado de dispositivo, que outra pessoa pode pegar. Há duas versões diferentes desta falha cobertas nos parágrafos a seguir; o primeiro é Removível e o segundo é Facilmente Removível.</p>"
		+ "<p>Um poder removível só pode ser removido quando você está tanto atordoado quanto indefeso, em essência incapaz de resistir, e não pode ser removido durante o tempo de ação. Isso significa que os oponentes em geral só podem remover o poder depois de derrotá-lo (deixando-o incapacitado) ou através de algum tipo de plano por trás do conflito, como uma trama para invadir seu quartel general e roubar o dispositivo mantido lá, por exemplo.</p>"
		+ "<p>Um poder facilmente removível pode ser roubado com uma ação desarmar ou agarrar (veja o Ação & Aventura). Isso normalmente representa um dispositivo carregado nas mãos (como uma arma, varinha ou controle remoto) ou vestido (como um chapéu ou capa).</p>"
		+ "<p><h2>Valor em Pontos de Removível</h2></p>"
		+ "<p>Removível se aplica a poderes como um todo e não a efeitos individuais, embora possa se aplicar a um poder com apenas um efeito. A falha vale –1 ponto (–2 pontos para Facilmente Removível) para cada 5 pontos de personagem no custo final do poder, depois de aplicar todos os extras e falhas a seus efeitos.</p>"
		+ "<p><i><b>Exemplo:</b> a armadura Ultrafuzileiro concede a Verônica certa quantidade de efeitos, incluindo Dano, Força Aumentada, Voo, Proteção e Sentidos. O custo total em pontos de personagem de todos os efeitos da armadura é de 98 pontos, incluindo extras e falhas aplicadas a esses efeitos. O resultado de dividir o custo total por 5 é 20. Então, a falha Removível reduz o custo da armadura Ultrafuzileiro em 20 pontos, de 98 para 78 pontos de personagem. No entanto, a armadura pode ser roubada, desabilitada, e assim por diante, e o jogador não recebe pontos de vitória por uma complicação quando isso acontece devido à natureza da falha.</i></p>"
		+ "<p><h2>Removível e Dano</h2></p>"
		+ "<p>Dispositivos removíveis podem ser danificados, possivelmente até mesmo destruídos (veja a descrição do efeito Dano para detalhes). Enquanto o personagem tiver pontos de personagem investidos no dispositivo, ele pode ser consertado em algum momento. Isso normalmente exige tempo entre aventuras, talvez até mesmo uma aventura especial para encontrar certas partes raras, ajuda especializada, ou outros componentes.</p>"
		+ "<p>Para uma redução permanente de 1 ponto no valor da falha Removível, você pode definir um dispositivo como Indestrutível. Ele ainda pode ser roubado, mas não pode ser danificado nem destruído, exceto como uma complicação imposta pelo mestre (concedendo ao jogador um ponto de vitória, como sempre). Essa redução pode diminuir o valor da falha para 0, em cujo caso o personagem não ganha pontos de personagem pelo dispositivo.</p>"
		+ "<p><h2>Removível e Complicações</h2></p>"
		+ "<p>A perda temporária de um poder removível não constitui uma complicação, não mais do que o resultado de qualquer outra falha. Você pode ter um dispositivo ou objeto de poder como descritor sem esta falha, caso assim desejar, em cujo caso o poder não pode ser removido nem retirado de você sem uma complicação aplicada pelo mestre (concedendo a você um ponto de vitória) ou o uso de um efeito como Nulificar, que tem condições predefinidas de recuperação.</p>"
		+ "<table class='BehindTheMask-Table'>"
		+ 	"<tr> <th class='BehindTheMask-Header'>'''Por Trás da Máscara''': Removível e Equipamento </th> </tr>"
		+	"<tr> <td class='BehindTheMask-Body'>Itens fornecidos pela vantagem Equipamento (veja o [[Apetrechos & Equipamento]]) são, na prática, efeitos e outras características com a falha Facilmente Removível, juntamente com as outras limitações descritas no [[Apetrechos & Equipamento]], resultando em uma redução de –4 pontos por 5 pontos de personagem do custo final. Assim, a vantagem Equipamento fornece 5 pontos de equipamento por graduação (1 ponto de personagem).</td> </tr>"
		+ "</table>"
		+ "",
	},
	{
		id: 11020,
		name: "Resistível",
		extra: false,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>Quando aplicado a um efeito que normalmente não permite um teste de salvamento, esta falha concede um. Escolha a defesa quando a falha for aplicada. Uma vez que efeitos que funcionam sobre outras pessoas permitem um teste de salvamento por definição, isso quase sempre se aplica a efeitos pessoais que permitem que alguém interagindo com eles evite o efeito no caso de um teste bem-sucedido.</p>"
		+ "<p>Por exemplo, um efeito de defesa Aparar Aumentado pode refletir a leitura da mente do alvo para antecipar e evitar seus ataques. Isso permite um teste de salvamento de Vontade para evitar o efeito, negando a você o bônus de defesa contra o oponente (e aplicando esta falha ao efeito). Da mesma forma, seu efeito Camuflagem pode ser ilusório em vez de uma verdadeira transformação física, permitindo um teste de salvamento de Vontade para ver através dele. Um efeito de Proteção sustentado pode ser algum tipo de \"campo cinético\" que permite que um atacante faça um teste de salvamento de Fortitude para sobrepujá-lo.</p>"
		+ "<p>Quando aplicado a um efeito que normalmente já permite teste de salvamento, esta falha concede um teste de salvamento adicional, que pode ser o mesmo, ou outro diferente. O alvo faz os dois testes de salvamento e aplica o melhor dos dois para determinar o resultado do efeito.</p>"
		+ "<p>Por exemplo, um efeito de Dano pode envolver lâminas giratórias que um oponente pode driblar com um teste de salvamento de Esquiva bem-sucedido, evitando a necessidade de um teste de Resistência contra o dano. De maneira semelhante, um efeito de Enfraquecer baseado em um dardo envenenado pode adicionar um teste de Resistência para verificar se o dardo penetra a pele do alvo além do teste normal de Fortitude contra o efeito.</p>"
		+ "",
	},
	{
		id: 11021,
		name: "Retroalimentação",
		extra: false,
		flat: false, 
		ranked: false,
		ranks: 1,
		description: "<p>Você sofre dano quando uma manifestação de seu efeito sofre dano. Esta falha se aplica apenas a efeitos com manifestações físicas (ou aparentemente físicas), como Criar, Ilusão, ou Invocar, por exemplo. Caso a manifestação de seu poder sofra dano, faça um teste de salvamento contra a graduação de dano do ataque, usando a graduação de seu efeito como bônus no teste de salvamento. Por exemplo, caso a manifestação de um efeito de graduação 10 seja atacado por dano 12, você deve fazer um teste de salvamento contra dano 12 com um bônus de 10 (a graduação do efeito) no lugar de sua Resistência normal.</p>"
		+ "",
	},
]