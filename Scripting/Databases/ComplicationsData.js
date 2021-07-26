const _PlayerComplication = {
	instanceID: 0,
	name: "",
	description: ""
}

const _DefaultComplicationList = [];
_DefaultComplicationList.push({
	id: 8000,
	name: "- Complicação Personalizada -",
	description: "Adicione uma complicação personalizada referente ao seu personagem."
});

_DefaultComplicationList.push({
	id: 8001,
	name: "Aceitação",
	description: "O herói sente-se diferente ou isolado (talvez seja um não-humano numa sociedade humana) e faz o bem para ganhar a confiança e aceitação dos outros e talvez descobrir o que significa ser um humano. Alguns heróis veem seus poderes como uma maldição em vez de uma benção, mas tenta fazer algo de bom com elas em esperança de ter uma vida normal."
});

_DefaultComplicationList.push({
	id: 8002,
	name: "Acidente",
	description: "Você causa ou sofre algum tipo de acidente usando seus poderes. Talvez um disparo de energia que acerte um prédio ou fira um inocente, seus poderes de fogo acione o sistema de irrigadores ou você faz com que elementos químicos exploda ao redor. Um herói com essa complicação está regularmente propenso a acidentes, inexperiente com seus poderes ou até azarado! O Mestre define os efeitos do acidente, mas eles devem ser problemáticos. Acidentes podem levar até mais complicações, como um complexo de culpa, obsessão ou até fobia envolvendo o acidente."
});

_DefaultComplicationList.push({
	id: 8003,
	name: "Deficiência",
	description: "Você é limitado por uma deficiência em particular, seja cego, surdo ou paraplégico. Quando sua deficiência causa um desafio sério no seu caminho, sua complicação entra em jogo. Muitos heróis “deficientes” tem poderes ou outras compensações para sua deficiência, como um herói cego ter outros sentidos aguçados ou um herói paraplégico ser um psíquico com mobilidade inigualável da mente sobre o corpo. Mesmo que seus poderes as vezes compensem pela deficiência, essa complicação ainda é apropriada de tempos em tempos."
});

_DefaultComplicationList.push({
	id: 8004,
	name: "Emoção",
	description: "Para alguns, a vida de super-herói é toda sobre os perigos, a emoção e os desafios. Esses heróis estão mais pela ação do que qualquer outra coisa."
});

_DefaultComplicationList.push({
	id: 8005,
	name: "Fama",
	description: "Você é uma figura pública, conhecida em quase qualquer lugar que for, perseguido pela mídia, inundado por fãs e bem desejado, e problemas similares, quais causam várias complicações."
});

_DefaultComplicationList.push({
	id: 8006,
	name: "Fazer o Bem",
	description: "Alguns heróis lutam pelo bem simplesmente porque é a coisa certa fazer e eles acreditam em fazer a coisa certa, não importa o que. Seu forte código moral pode vir de uma boa educação (ou uma ruim, mostrando o que não fazer) ou a orientação e inspiração de um mentor ou ídolo."
});

_DefaultComplicationList.push({
	id: 8007,
	name: "Fobia",
	description: "Você tem medo irracional de algo. Quando confrontado com isso, você tem que lutar para controlar seu medo, causando-o hesitar, fugir ou agir irracionalmente."
});

_DefaultComplicationList.push({
	id: 8008,
	name: "Fraqueza",
	description: "Algumas coisas conseguem lhe ferir, bem seriamente. Você pode ter uma fraqueza que supera suas poderosas defesas, como um lobisomem vulnerável à prata, ou sofrer ferimentos de coisas que são inofensivas para outros, como água ou até ferro ou energias e materiais exóticos. Uma fraqueza pode adicionar graus de um efeito ou impor um efeito totalmente diferente sobre o personagem. Aflição (veja Poderes) é o efeito mais comum, mas algumas fraquezas causam direto Dano, Drenar o alvo ou algum outro efeito. Você e o Mestre podem discutir o efeito em comum antes e o Mestre decide o que acontece quando a fraqueza entra em jogo. Quando o Mestre usa a fraqueza contra você, é uma complicação."
});

_DefaultComplicationList.push({
	id: 8009,
	name: "Ganância",
	description: "Esses motivados por nada mais que a oportunidade de fazer lucro de sua carreira heroica. Eles podem ser mercenários ou “heróis propaganda” que fazem boas ações, mas também ganham em fazer aparências públicas e taxas de licenciamento. A maioria dos heróis altruístas tendem a menosprezar esses colegas gananciosos."
});

_DefaultComplicationList.push({
	id: 8010,
	name: "Honra",
	description: "Você tem um forte código pessoal de honra. Isso geralmente significa que você não vai tomar oportunidades injustas de seus oponentes ou usar trapaças, mas você pode definir exatamente os termos de seu código de honra com o Mestre. Sua honra se torna uma complicação quando ela o amarra ou na ponta de um dilema moral."
});

_DefaultComplicationList.push({
	id: 8011,
	name: "Identidade",
	description: "Heróis geralmente mantém identidades secretas, criando várias complicações quando tentam de manter ela segredo de seus amigos e inimigos. Dupla identidade pode ir além de um disfarce para os heróis que realmente se transformam em uma pessoa diferente, criando complicações ao redor de controlar essa transformação ou a falta de poderes ou habilidades naquela persona."
});

_DefaultComplicationList.push({
	id: 8012,
	name: "Inimigo",
	description: "Você tem um inimigo ou inimigos que tentam te ferir. O Mestre pode ter seu inimigo aparecer para causar problemas e suas aventuras envolvendo seu inimigo tendem a serem mais complicadas para você; até mesmo revanches, se a inimizade for dos dois lados. Quando ter um inimigo causa problemas para você (como abduzir alguém amado ou deixar uma armadilha para você), você ganha um ponto de vitória."
});

_DefaultComplicationList.push({
	id: 8013,
	name: "Justiça",
	description: "Uma insaciável sede de justiça conduz alguns heróis, a necessidade de ver os inocentes protegidos e os culpados punidos, mesmo quando estiverem além do alcance da lei. Esses heróis andam numa linha tênue. Para alguns, a justiça vira uma sede por vingança por causa de uma ferida no passado do herói, como a morte de um ente querido."
});

_DefaultComplicationList.push({
	id: 8014,
	name: "Obsessão" ,
	description: "Você é obcecado com um assunto em particular e o persegue a ponto de excluir o resto, o que pode criar algumas complicações."
});

_DefaultComplicationList.push({
	id: 8015,
	name: "Ódio",
	description: "Você tem ódio irracional de algo, levando-o a agir contra o alvo de seu desgosto em alguma maneira, não importa as consequências. Complicações envolvendo seu ódio tendem a confundir seu julgamento."
});

_DefaultComplicationList.push({
	id: 8016,
	name: "Patriotismo",
	description: "Heróis geralmente são devotos a ideais de sua nação natal (ou adotada) e buscam preservar essa nação e suas pessoas. Heróis patrióticos geralmente são honrados como campeões de sua terra natal, mas seu serviço, e não o reconhecimento, que importa."
});

_DefaultComplicationList.push({
	id: 8017,
	name: "Peculiaridades",
	description: "Complicações podem ser várias peculiaridades de personalidade: gostos, desgostos, hobbies, neuroses, e assim em diante. Por exemplo, o herói pode ter a peculiaridade de sempre deixar um “cartão profissional” junto com os criminosos presos para as autoridades. Isso seria uma complicação se alguém começar o imitar ou causar problema ao herói."
});

_DefaultComplicationList.push({
	id: 8018,
	name: "Perda de Poder" ,
	description: "Algumas circunstâncias causam alguns ou todos seus poderes pararem de funcionar ou falhar, ou até serem roubados. Você pode depender de um objeto em particular que outros podem roubar ou tomar de você, ou você pode perder seus poderes no lado escuro da lua, ou exposto por radiação exótica. Você pode até perder fé em si mesmo, causando uma fraqueza temporária. Quando isso acontece e causa um desafio para você, sua complicação entra em jogo."
});

_DefaultComplicationList.push({
	id: 8019,
	name: "Preconceito",
	description: "Você faz parte de uma minoria sujeita a preconceito de outros, que pode gerar problemas. Também, personagem com origens incomuns ou aparências estranhas podem ser alvos de preconceito, como um personagem com aparência demoníaca que pode ser considerado suspeito. Alguns Mestres e grupos de jogos podem preferir não trabalhar com esses problemas em seus jogos, no caso, o Mestre está livre de banir essa complicação."
});

_DefaultComplicationList.push({
	id: 8020,
	name: "Reconhecimento",
	description: "Alguns heróis apenas buscam reconhecimento ou atenção, se vestindo em uniformes brilhantes e lutando contra o crime é certamente uma maneira de notarem você. O herói pode ser um ninguém tímido sem uniforme ou até mesmo um louco por glória que adora estar nos holofotes."
});

_DefaultComplicationList.push({
	id: 8021,
	name: "Relacionamentos" ,
	description: "Pessoas importantes na vida do herói são sua fonte de força, mas também podem ser assuntos complicados de lidar. Se eles não sabem da identidade do herói, então ele provavelmente ficar fazendo malabarismo nas duas vidas e manter os entes queridos seguros sem saber. Em outra mão, se as pessoas na vida do herói sabem a verdade, elas estão em perigo se os vilões descobrirem."
});

_DefaultComplicationList.push({
	id: 8022,
	name: "Reputação",
	description: "Você tem uma má reputação, afetando o que os outros acham de você (seja se merece ou não). Ter alguém tendo uma má atitude contra você por causa de sua reputação é uma complicação. Você pode se esforçar para superar essa reputação, tomando riscos ou enfrentando dificuldades que outros não sofrem como resultado."
});

_DefaultComplicationList.push({
	id: 8023,
	name: "Responsabilidades",
	description: "A responsabilidade de ter grandes poderes pode ser um peso, mas para alguns heróis sentem que é seu dever usar esses poderes que receberam para o bem maior. Geralmente, esses heróis estão tentando alcançar um ideal, como um mentor ou predecessor que os inspirou.<br><br>Como Complicação, você tem várias demandas que tomam seu tempo e atenção. Responsabilidades incluem obrigações familiares, deveres profissionais e coisas do gênero. Falhar essas responsabilidades pode resultar na perda de relacionamentos, emprego e outros problemas."
});

_DefaultComplicationList.push({
	id: 8024,
	name: "Rivalidade",
	description: "Você tem um forte sentimento de competição com uma pessoa ou grupo e tenta seu melhor para superar seu rival em toda oportunidade."
});

_DefaultComplicationList.push({
	id: 8025,
	name: "Segredo" ,
	description: "Você tem algo particularmente perigoso ou vergonhoso que está escondendo do mundo. O mais comum é identidade secreta de seu herói, mas também pode ser uma fraqueza secreta (outra complicação) ou um segredo do seu passado sombrio. Ocasionalmente, algo (ou alguém) pode ameaçar de revelar seu segredo."
});

_DefaultComplicationList.push({
	id: 8026,
	name: "Temperamento",
	description: "Certas coisas simplesmente te tiram do sério. Quando perde sua cabeça, você ataca o que tiver lhe provocado."
});

_DefaultComplicationList.push({
	id: 8027,
	name: "Vício",
	description: "Você precisa de algo, seja por razões física ou psicológicas. Você faz o que for necessário para satisfazer seu vício e, quando incapaz de o satisfazer, poderá levar a outras complicações, seja com sua própria sanidade ou sua relação com as pessoas. Vários heróis de quadrinhos já enfrentaram vícios em suas vidas e seus efeitos."
});