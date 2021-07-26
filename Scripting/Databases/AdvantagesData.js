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

var _AllAdvantagesList = [];
_AllAdvantagesList.push({
	id: 2001,
	name: "Ação de Movimento", 
	ranked: false,
	description: "Quando tomando uma ação padrão e uma ação de movimento, você pode se mover antes e depois de sua ação, desde que a distância percorrida não seja maior que sua velocidade normal."
});

_AllAdvantagesList.push({
	id: 2002,
	name: "Agarrar Aprimorado", 
	ranked: false,
	description: "Você pode fazer ataques de agarrar com apenas um braço, deixando o outro livre. Você também pode manter o agarrar enquanto usa a outra mão para realizar ações. Você não fica vulnerável enquanto agarra (veja <i>Agarrar</i> em Ação & Aventura)."
});

_AllAdvantagesList.push({
	id: 2003,
	name: "Agarrar Preciso", 
	ranked: false,
	description: "Você pode usar seu bônus de Destreza, em vez do seu bônus de Força, para fazer testes de agarrar. Você não fica vulnerável enquanto agarra (veja <i>Agarrar</i>). Essa é uma boa vantagem para combatentes desarmados habilidosos que dependem mais de velocidade do que força."
});

_AllAdvantagesList.push({
	id: 2004,
	name: "Agarrar Rápido", 
	ranked: false,
	description: "Quando acerta um ataque desarmado, você pode fazer um teste de agarrar imediatamente contra o alvo como uma ação livre. Seu ataque desarmado causa dano normal e conta como o teste de ataque inicial exigido para agarrar seu oponente."
});

_AllAdvantagesList.push({
	id: 2005,
	name: "Ambiente Favorito", 
	ranked: false, 
	description: "Há um ambiente que você é especialmente adequado em lutar. Exemplos incluem ar, debaixo d’água, no espaço, em extremo calor ou extremo frio, na selva, nas florestas e assim em diante. Enquanto estiver no seu ambiente favorito, você ganha bônus circunstancial de +2 em testes de ataque ou sua defesa ativa. Escolha no início da rodada se o bônus se aplicará ao ataque ou à defesa. A escolha fica até o início da próxima rodada. Esse bônus circunstancial não é afetado pelo nível de poder.",
	instanceID: 0,
	additionalDescription: ""
});

_AllAdvantagesList.push({
	id: 2006,
	name: "Armação", 
	ranked: true, 
	totalRanks: 1,
	description: "Você pode transferir benefícios de um testes de interação de perícia com sucesso para seu(s) colega(s). Por exemplo, você pode fintar e ter seu alvo vulnerável para os ataques de um ou mais aliados próximos. Cada graduação nesta vantagem permite que você transfira um benefício para um aliado. O teste de interação requer sua ação normal e os aliados afetados devem ser capazes de interagir com você (ou ao menos capaz de ver a armação) para beneficiá-los."
});

_AllAdvantagesList.push({
	id: 2007,
	name: "Armas Improvisadas", 
	ranked: true, 
	totalRanks: 1,
	description: "Quando manejando uma arma improvisada corpo-a-corpo – qualquer coisa desde uma cadeira para um poste telefônico ou um carro – você pode usar sua perícia Combate Corpo-a-corpo: Desarmado para os testes de ataque com a “arma” em vez de depender do seu total de bônus de acerto corpo-a-corpo. Graduações adicionais nesta vantagem lhe dão o bônus de +1 em Dano com sua arma improvisada, por graduação. Seu dano máximo ainda está limitado pelo nível de poder, como de costume."
});

_AllAdvantagesList.push({
	id: 2008,
	name: "Artífice", 
	ranked: false,
	description: "Você pode usar a perícia <i>Especialidade: Magia</i> para criar dispositivos mágicos temporários. Veja <b>Invenções Mágicas</b> para mais detalhes."
})

_AllAdvantagesList.push({
	id: 2009,
	name: "Assistente", 
	ranked: false,
	description: "Quando você pega esta vantagem, escolha uma Vantagem que normalmente concede um bônus de circunstância. Você não ganha esta Vantagem, mas uma vez por rodada, como uma ação livre, você pode conceder o benefício dessa Vantagem a um aliado capaz de interagir com você. Se você tem a Vantagem normalmente, então você também ganha seu benefício normalmente."
	+ "<br><br> Pense na Vantagem Assistente como uma versão da Vantagem escolhida que afeta apenas os outros. Se o alvo da Vantagem Assistente já tiver um bônus de circunstância equivalente, o Assistente melhora até um bônus de +5, após o isso não tem efeito. Assim, um sujeito com Evasão que recebe um Assistente de Evasão ganha os benefícios da Evasão Melhorada: um bônus de +5 circunstâncias. As vantagens que são elegíveis para esta Vantagem: Memória Eidética, Evasão, Ambiente Favorito, Oponente Favorito, Mira Aprimorada e Trabalho em Equipe."
	+ "<br><br> A critério do Mestre, Assistente pode ser estendido para proporcionar os benefícios de qualquer Vantagem não limitada pelo Nível de Poder, desde que o jogador forneça uma explicação adequada  dentro do jogo para compartilhar o benefício. Neste caso, o aliado assistido deve gastar quaisquer Pontos de Vitória necessários para a Vantagem."
	+ "<br><br> <b>Material</b>: Super Teams Handbook"
})

_AllAdvantagesList.push({
	id: 2010,
	name: "Assustar", 
	ranked: false,
	description: "Você pode usar Intimidar em vez de Enganação para fintar em combate (veja <i>Fintar</i> na descrição da perícia <b>Enganação</b>). O alvo resiste com Intimidação, Intuição ou Vontade."
})

_AllAdvantagesList.push({
	id: 2011,
	name: "Ataque A Distância", 
	ranked: true, 
	totalRanks: 1,
	description: "Você tem o bônus de +1 em ataques à distância por graduação nesta vantagem. Seu bônus de ataque total ainda é limitado pelo nível de poder."
})

_AllAdvantagesList.push({
	id: 2012,
	name: "Ataque Acurado", 
	ranked: false,
	description: "Quando fizer um ataque acurado (veja em <b>Manobras</b>), você pode receber penalidade de até -5 no bônus do efeito do ataque e somar o mesmo número (no máximo até +5) no seu bônus de acerto."
})

_AllAdvantagesList.push({
	id: 2013,
	name: "Ataque Corpo-a-corpo", 
	ranked: true,
	totalRanks: 1,
	description: "Você tem um bônus de +1 para testes de ataques corpo-a-corpo por graduação nesta vantagem. Seu bônus total ainda está limitado pelo nível de poder. Esta vantagem encaixa melhor para personagens com um nível geral de combate corpo-a-corpo, seja armado ou desarmado. Para capacidade de combate em um tipo de ataque em particular, use a perícia Combate Corpo-a-corpo."
})

_AllAdvantagesList.push({
	id: 2014,
	name: "Ataque de Equipe", 
	ranked: true, 
	totalRanks: 1,
	description: "Você pode contribuir para um ataque em equipe mesmo se a resistência do seu ataque não estiver dentro de 5 graduações dos outros ataques (consulte Ataque de Equipe em <b>Ações e Manobras</b>). Se você tiver duas graduações desta Vantagem, seu ataque nem precisa ter o mesmo efeito dos outros ataques, embora o ataque em equipe combinado ainda tenha o efeito do ataque principal."
	+ "<br><br> <b>Material</b>: Super Teams Handbook"
})

_AllAdvantagesList.push({
	id: 2015,
	name: "Ataque de Equipe Variável", 
	ranked: false,
	description: "Quando você contribui com sucesso para um ataque em equipe, ao invés de contribuir com um bônus de circunstância da graduação do ataque, você pode aplicar os benefícios de um Descritor Variável de 1 ponto extra ao ataque (veja <i>Descritor Variável</i> em <b>Modificadores</b>). Se seu teste de coordenação para o ataque da equipe tiver três ou mais graus de sucesso, você pode aplicar um Descritor Variável de 2 pontos ao ataque."
	+ "<br><br> <b>Material</b>: Super Teams Handbook"
})

_AllAdvantagesList.push({
	id: 2016,
	name: "Ataque Defensivo", 
	ranked: false,
	description: "Quando realizar um ataque defensivo (veja <b>Manobras</b>), você pode receber penalidade de até -5 no bônus de acerto e somar o mesmo número (no máximo até +5) no seu bônus de defesas ativas (Esquiva e Aparar)."
})

_AllAdvantagesList.push({
	id: 2017,
	name: "Ataque Dominó", 
	ranked: true, 
	maxRank: 2, 
	totalRanks: 1,
	description: "Se você deixar um capanga incapacitado com um ataque, você recebe imediatamente um ataque extra como ação livre contra outro capanga dentro do seu alcance e adjacente à localização do alvo anterior. O ataque extra possui o mesmo acerto e bônus do efeito igual ao primeiro. Você pode continuar usando essa vantagem até você errar ou não ter mais capangas dentro do alcance do seu ataque ou do seu último alvo."
	+ "<br><br> Uma segunda graduação nesta vantagem permite atacar capangas não adjacentes, movendo-se entre ataques se necessário. Você não pode mover mais que sua velocidade total em uma rodada, independentemente do número de ataques que realizar. Você para de atacar uma vez que errar, acabar o movimento ou não haver mais capangas dentro do alcance de seus ataques."
})

_AllAdvantagesList.push({
	id: 2018,
	name: "Ataque Imprudente", 
	ranked: false,
	description: "Quando realizar um ataque imprudente (veja <b>Manobras</b>), você pode receber penalidade de até -5 nas suas defesas ativas (Esquiva e Aparar) e somar o mesmo número (no máximo até +5) no seu bônus de ataque."
})

_AllAdvantagesList.push({
	id: 2019,
	name: "Ataque Poderoso", 
	ranked: false,
	description: "Quando realizar um ataque poderoso (veja <b>Manobras</b>), você pode receber penalidade de até -5 no bônus de acerto e somar o mesmo número (no máximo até +5) no bônus do efeito de seu ataque."
})

_AllAdvantagesList.push({
	id: 2020,
	name: "Ataque Preciso (A Distância: Cobertura)", 
	ranked: false,
	description: "Quando for realizar um ataque corpo-a-corpo ou à distância (escolha um) você ignora penalidades no teste de ataque contra cobertura ou camuflagem (escolha um), apesar que cobertura total ainda previne você de realizar ataques. Cada graduação adicional permite uma opção adicional, então Ataque Preciso 4, todos seus ataques (corpo-a-corpo e à distância) ignoram penalidades tanto por cobertura quanto camuflagem."
})

_AllAdvantagesList.push({
	id: 2021,
	name: "Ataque Preciso (A Distância: Camuflagem)", 
	ranked: false,
	description: "Quando for realizar um ataque corpo-a-corpo ou à distância (escolha um) você ignora penalidades no teste de ataque contra cobertura ou camuflagem (escolha um), apesar que cobertura total ainda previne você de realizar ataques. Cada graduação adicional permite uma opção adicional, então Ataque Preciso 4, todos seus ataques (corpo-a-corpo e à distância) ignoram penalidades tanto por cobertura quanto camuflagem."
})

_AllAdvantagesList.push({
	id: 2022,
	name: "Ataque Preciso (Corpo-a-corpo: Cobertura)", 
	ranked: false,
	description: "Quando for realizar um ataque corpo-a-corpo ou à distância (escolha um) você ignora penalidades no teste de ataque contra cobertura ou camuflagem (escolha um), apesar que cobertura total ainda previne você de realizar ataques. Cada graduação adicional permite uma opção adicional, então Ataque Preciso 4, todos seus ataques (corpo-a-corpo e à distância) ignoram penalidades tanto por cobertura quanto camuflagem."
})

_AllAdvantagesList.push({
	id: 2023,
	name: "Ataque Preciso (Corpo-a-corpo: Camuflagem)", 
	ranked: false,
	description: "Quando for realizar um ataque corpo-a-corpo ou à distância (escolha um) você ignora penalidades no teste de ataque contra cobertura ou camuflagem (escolha um), apesar que cobertura total ainda previne você de realizar ataques. Cada graduação adicional permite uma opção adicional, então Ataque Preciso 4, todos seus ataques (corpo-a-corpo e à distância) ignoram penalidades tanto por cobertura quanto camuflagem."
})

_AllAdvantagesList.push({
	id: 2024,
	name: "Atraente", 
	ranked: true, 
	totalRanks: 1, 
	maxRank: 2,
	description: "Você é particularmente atraente, concedendo-lhe um bônus circunstancial de +2 em testes de Enganação e Persuasão para enganar, seduzir ou mudar a atitude de qualquer um que lhe achar atraente. Com uma segunda graduação, você é Muito Atraente, aumentando para +5. Esse bônus não conta seu bônus comum em graduações para o nível de poder, mas pode não aplicar em certas pessoas ou situações (ao critério do Mestre) que não seriam influenciadas por sua aparência."
	+ "<br><br> Enquanto super-heróis tendem a ser bonitos, essa vantagem é reservada para personagens com aparências particularmente impressionantes."
})

_AllAdvantagesList.push({
	id: 2025,
	name: "Avaliação", 
	ranked: false,
	description: "Você é rápido em medir as capacidades de combate do oponente. Escolha um alvo que possa perceber exatamente e tenha o Mestre fazer um teste em segredo de Intuição para você como ação livre oposta pelo teste de Enganação do alvo. <br><br> Se você vencer, o Mestre lhe informa os bônus de ataque e defesa do alvo relativo a você (menor, maior, igual). Com cada grau de sucesso adicional, você descobre um dos bônus do alvo com valores exatos. Se você perder na rolagem oposta, não descobre nada. Com mais de um grau de falha, o Mestre pode mentir ou até exagerar os bônus do alvo."
})

_AllAdvantagesList.push({
	id: 2026,
	name: "Bem Equipado", 
	ranked: true, 
	totalRanks: 1,
	description: "Você está bem equipado e preparado para quase todas as situações. Para cada graduação nesta Vantagem, você pode ter um único equipamento à mão (ver Equipamento Disponível) uma vez por aventura. Se você for membro de uma equipe,você pode compartilhar os benefícios desta Vantagem para permitir que um colega de equipe tenha um equipamento à mão, implicando que você ajude a equipar e fornecer seus amigos."
	+ "<br><br> <b>Material</b>: Super Teams Handbook"
})

_AllAdvantagesList.push({
	id: 2027,
	name: "Bem Informado", 
	ranked: false,
	description: "Você é excepcionalmente bem informado. Quando encontrando um individual, grupo ou organização pela primeira vez, você pode fazer imediatamente um teste de Investigação ou Persuasão para ver se seu personagem ouviu algo sobre o assunto. Use os guias de obter informações da descrição da perícia Investigação a fins de determinar o nível de informação que recebe. Você tem apenas um teste por alvo no primeiro encontro, entretanto o Mestre pode permitir outro teste se tempo significativo passou desde que se encontraram."
})

_AllAdvantagesList.push({
	id: 2028,
	name: "Bem Relacionado", 
	ranked: false,
	description: "Você conhece pessoas que podem lhe ajudar de tempos em tempos. Pode ser um conselho, informação, ajuda com assuntos legais ou acesso a recursos. Você pode pedir tais favores fazendo um teste de Persuasão. O Mestre define a CD do teste baseado na ajuda solicitada. Um favor simples é CD 10, subindo até CD 25 ou maior para favores difíceis, perigosos ou caros."
	+ "<br><br> Você pode gastar um ponto de Vitória para assegurar o favor, se o Mestre permitir. O Mestre tem o direito de vetar qualquer pedido que possa estragar a aventura. Uso dessa vantagem requer alguns minutos (geralmente muito mais) e significa que entra em contato com seus aliados para pedir ajuda."
})

_AllAdvantagesList.push({
	id: 2029,
	name: "Benefício (Geral)", 
	ranked: true, 
	totalRanks: 1,
	description: "Você pode gastar um ponto de Vitória para assegurar o favor, se o Mestre permitir. O Mestre tem o direito de vetar qualquer pedido que possa estragar a aventura. Uso dessa vantagem requer alguns minutos (geralmente muito mais) e significa que entra em contato com seus aliados para pedir ajuda. Os benefícios podem ter graduações para níveis maiores do mesmo benefício. O mestre tem a palavra final sobre o que constitui ou não um Benefício na campanha. Tenha em mente que algumas qualidades podem constituir Benefícios em algumas campanhas, mas não em outras, dependendo do seu impacto real sobre o jogo.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2030,
	name: "Benefício (Acesso de Segurança)", 
	ranked: false,
	description: "Você tem acesso a informação confidenciais, instalações e possivelmente equipamentos e staff do governo.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2031,
	name: "Benefício (Ambidestria)", 
	ranked: false,
	description: "Você é igualmente adepto a usar qualquer mal, não sofrendo nenhuma penalidade circunstancial de usar a sua mão inábil (como se não tivesse)."
})

_AllAdvantagesList.push({
	id: 2032,
	name: "Benefício (Cifrado)", 
	ranked: true, 
	totalRanks: 1,
	description: "Sua história verdadeira é bem escondida, fazendo difícil buscar informações sobre você. Testes de Investigação relacionados a você são feitos com uma penalidade circunstancial de -5 por graduação no benefício."
})

_AllAdvantagesList.push({
	id: 2033,
	name: "Benefício (Identidade Alternativa)", 
	ranked: false,
	description: "Você tem uma identidade alternativa, completa com documentação (licença de motorista, certificado de nascimento, etc.). Isso é diferente da identidade heroica, que não tem necessariamente algum status especial legal (mas pode ter dependendo do cenário).",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2034,
	name: "Benefício (Imunidade Diplomática)", 
	ranked: false,
	description: "Devido seu status diplomático, você não pode ser processado por crimes em nações além de sua própria. Tudo que as outras nações podem fazer é deportá-lo de volta para sua nação natal."
})

_AllAdvantagesList.push({
	id: 2035,
	name: "Benefício (Riqueza)", 
	ranked: false, 
	maxRank: 5,
	description: "Você tem uma riqueza maior que o normal ou recursos naturais, como bem de vida (grad. 1), rico independente (grad. 2), um milionário (grad. 3), multimilionário (grad. 4) ou bilionário (grad. 5).",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2036,
	name: "Benefício (Status)", 
	ranked: false, 
	maxRank: 5,
	description: "Por virtude de nascimento ou conquista, você tem um status especial. Exemplos incluem nobreza, cavalheirismo, aristocracia e assim em diante.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2037,
	name: "Capanga", 
	ranked: true, 
	totalRanks: 1,
	description: "Você tem um seguidor ou capanga. Esse capanga é um personagem independente com pontos de Personagem total igual a (vantagem x 15). Capangas são sujeitos aos limites de nível de poder e não podem ter capangas para eles. Seus capangas (se capazes de livre-arbítrio) automaticamente tem atitude prestativa diante de você. Eles são sujeitos as regras normais para capangas (veja <i>Capangas</i>). Capangas não ganham pontos de Personagem. Em vez disso, você deve gastar seus pontos de personagem ganhos para aumentar a vantagem para aumentar o número de pontos de Personagem no total e outras características. Capangas também não tem pontos de Vitória. Quaisquer capangas perdidos são substituídos entre aventuras com outros seguidores com habilidades semelhantes, ao critério do Mestre."
})

_AllAdvantagesList.push({
	id: 2038,
	name: "Contatos", 
	ranked: false,
	description: "Você tem uma rede de contatos extensa e bem informada para que consiga fazer teste de Investigação para obter informações ocorra em apenas um minuto, assumindo que você tenha os meios de entrar em contato com seus contatos. Futuros testes de Investigação sobre o mesmo assunto vão necessitar o tempo normal de busca, uma vez que terá que ir além de sua rede de contatos imediata."
})

_AllAdvantagesList.push({
	id: 2039,
	name: "Crítico Aprimorado", 
	ranked: true, 
	totalRanks: 1, 
	description: "Aumente a ameaça de crítico com um ataque em particular (escolhida quando adquirir esta vantagem) por 1, permitindo causar um acerto crítico em um dado natural 19 ou 20. Apenas um 20 natural é um acerto automático, entretanto, e um ataque que erre não é um crítico. Cada graduação adicional aplica-se a um ataque diferente ou aumenta a ameaça do ataque por 1 amais, para um máximo de 16-20 com 4 graduações."
	// Preciso de uma função para selecionar um poder
})

_AllAdvantagesList.push({
	id: 2040,
	name: "De Pé", 
	ranked: false, 
	description: "Você pode ir de caído para em pé como ação livre, sem necessidade do teste de Acrobacias."
})

_AllAdvantagesList.push({
	id: 2041,
	name: "Defesa Aprimorada", 
	ranked: false,
	description: "Quando realizar uma ação de defesa (veja Defender-se em <b>Ações e Manobras</b>), recebe um bônus circunstancial de +2 nas suas defesas ativas para durante a rodada."
})

_AllAdvantagesList.push({
	id: 2042,
	name: "Derrubar Aprimorado", 
	ranked: false,
	description: "Você não tem penalidade ao seu teste de ataque para derrubar um oponente e eles não ganham a oportunidade de derrubar a você. Quando realizar o teste de acerto de agarrar, faça um teste oposto por sua Acrobacia ou Atletismo contra o Acrobacia ou Atletismo do oponente, você escolhe qual das perícias o seu oponente usará para se defender, em vez do alvo (veja Derrubar em <b>Ações e Manobras</b>). Isso é uma boa vantagem marcial para lutadores desarmados."
})

_AllAdvantagesList.push({
	id: 2043,
	name: "Desarme", 
	ranked: true, 
	maxRank: 10, 
	totalRanks: 1,
	description: "Tudo começou com mamãe e papai, da maneira que você podia convencê-los a com um olhar de cachorrinho triste. Você é bonito e inocente e, quando quiser, pode deixar os vilões realmente culpados por bater em você. Ah, eles ainda vão te explodir se for necessário - eles são maus, afinal -, mas provavelmente darão um soco porque atacá-lo é como explodir um coelhinho ou um gatinho fofo."
	+ "<br><br> Ao gastar um ponto de vitória, você pode causar esse feitiço de inocência em um vilão, forçando o malvado a fazer um teste de Vontade (CD 10 + duas vezes sua graduação nessa vantagem). Se o vilão falhar, ele ainda ataca, mas ele 'se segura', reduzindo o dano do ataque em 2 em um grau de falha, 5 para dois graus de falha ou 10 em três ou mais graus de falha. O efeito dura até você atacar e machucar o vilão. Se o teste for bem sucedido ou você atacar e ferir o vilão, ele não poderá ser afetado pela vantagem Desarme pelo resto do encontro."
	+ "<br><br> <b>Material</b>: Hero's High"
})

_AllAdvantagesList.push({
	id: 2044,
	name: "Desarmar Aprimorado", 
	ranked: false, 
	description: "Você não tem penalidade nos seus testes quando tentar desarmar um oponente e eles não tem a oportunidade de lhe desarmar (veja <i>Desarme<i> em <b>Ações e Manobras</b>)."
})

_AllAdvantagesList.push({
	id: 2045,
	name: "Destemido", 
	ranked: false,
	description: "Você é imune a todos os tipos de medo, essencialmente o mesmo que Imunidade a Efeitos de Medo (veja <i>Imunidade<i> em <b>Poderes</b>)."
})

_AllAdvantagesList.push({
	id: 2046,
	name: "Duro de Matar", 
	ranked: false,
	description: "Quando sua condição se tornar moribundo (veja <b>Condições</b>), você automaticamente se estabiliza na rodada seguinte sem necessidade de testes de Vigor, entretanto, danos subsequentes – como um golpe de misericórdia – ainda pode matá-lo."
})

_AllAdvantagesList.push({
	id: 2047,
	name: "Empatia com Animais", 
	ranked: false,
	description: "Você tem uma conexão especial com animais. Você pode usar perícias de interação normalmente com animais e não precisa falar idioma dos animais entende; você comunica sua intenção através de gestos e linguagem corporal e aprendem coisas estudando comportamento dos animais. Personagens normalmente tem penalidade circunstancial de -10 em perícias de interação com animais, dado seu Intelecto e ausência de idioma."
})

_AllAdvantagesList.push({
	id: 2048,
	name: "Equipamento", 
	ranked: true, 
	totalRanks: 1,
	description: "Você tem 5 pontos para gastar em equipamentos por graduação nesta vantagem. Isso inclui veículos e quartéis-generais. Veja <b>Apetrechos & Equipamento</b> para detalhe em equipamentos e seus custos. Muitos heróis dependem somente em Equipamento em conjunto de suas perícias e outras vantagens."
})

_AllAdvantagesList.push({
	id: 2049,
	name: "Esconder-se a Plena Vista", 
	ranked: false,
	description: "Você consegue se esconder (veja <i>Escondendo-se</i> na descrição de <b>Furtividade</b>, em <b>Perícias</b>) sem necessidade de um teste de Enganação ou Intimidação ou qualquer tipo de distração e sem penalidade no seu teste de Furtividade. Você literalmente está ali em um momento e some no próximo. Você ainda deve ter alguma forma de cobertura ou camuflagem no alcance do seu movimento normal para se esconder."
})

_AllAdvantagesList.push({
	id: 2050,
	name: "Esforço Extraordinário", 
	ranked: false,
	description: "Quando usando esforço extra (veja <i>Esforço Extra</i> no <b>Básico</b>), você pode ganhar dois dos benefícios listados, ou até acumulando dois do mesmo benefício. Entretanto, você também recebe o dobro do custo do esforço; você estará exausto no turno seguinte após seu esforço extraordinário. Se já estiver fatigado, você fica incapacitado. Se já estiver exausto, você não pode usar esforço extraordinário. Gastando um ponto de Vitoria no início do próximo turno reduz o custo do seu esforço extraordinário para apenas fatigado, igual ao uso comum de esforço extra."
})

_AllAdvantagesList.push({
	id: 2051,
	name: "Esforço Supremo", 
	ranked: false,
	description: "Você pode gastar um ponto de Vitória em um teste em particular e rolar como um 20 (significando que não há necessidade de rolar o dado, apenas aplicar resultado 20 ao seu modificador). Isso não é um 20 natural, mas é tratado como 20 em outros aspectos. Você escolhe o teste em particular qual essa vantagem se aplica quando adquiri-la e o Mestre deve aprová-la. Você pode escolher Esforço Supremo várias vezes, cada vez aplicando a um teste diferente. Essa vantagem não pode ser usada depois que você rolou o dado para determinar o sucesso."
	+ "<br><br> <b>EXEMPLOS DE ESFORÇO SUPREMO</b>"
	+ "<br><br> Os seguintes são alguns exemplos de Esforço Supremos. O Mestre está livre de adicionar outros que encaixem à campanha."
	+ "<br><br> ● <b>Mira Suprema</b>: Quando realizar uma ação padrão para mirar um ataque (veja <b>Mirar</b>), você pode gastar um ponto de Vitória para aplicar 20 ao resultado do teste de ataque na rodada seguinte. Uma vez que Mira Suprema não é um 20 natural, também não qualifica como um crítico."
	+ "<br><br> ● <b>Perícia Suprema</b>: Você pode gastar um ponto de Vitória para aplicar 20 aos resultados de uma perícia em particular."
	+ "<br><br> ● <b>Resistência Suprema</b>: Você pode gastar um ponto de Vitória para aplicar 20 ao resultado de um teste de salvamento com uma defesa determinada ao momento de aquisição dessa vantagem.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2052,
	name: "Esquiva Fabulosa", 
	ranked: false,
	description: "Você é especialmente sintonizado com perigo. Você não é vulnerável quando surpreso de qualquer forma. Você ainda fica vulnerável por efeitos que limitem sua mobilidade."
})

_AllAdvantagesList.push({
	id: 2053,
	name: "Estrangular", 
	ranked: false,
	description: "Se obtiver sucesso em agarrar e imobilizar um oponente (veja <i>Agarrar</i> em <b>Ações e Manobras</b>) você pode estrangulá-lo, fazendo que seu oponente comece a sufocar enquanto mantiver a imobilização do alvo (veja <b>Sufocamento</b>)."
})

_AllAdvantagesList.push({
	id: 2054,
	name: "Evasão", 
	ranked: true, 
	maxRank: 2, 
	totalRanks: 1,
	description: "Você tem um bônus circunstancial de +2 para testes de salvamento de Esquiva para evitar efeitos em área (veja extra <i>Área</i> em <b>Modificadores</b>). Se tiver 2 graduações nesta vantagem, o bônus aumenta para +5."
})

_AllAdvantagesList.push({
	id: 2055,
	name: "Fascinar", 
	ranked: false, 
	description: "Uma das suas perícias de interação é tão eficaz que você pode capturar e manter a atenção de outros com ela. Escolha entre Enganação, Intimidação ou Persuasão quando adquirir esta vantagem. Você também usar Fascinar com a perícia de Especialidade apropriada, como um músico ou cantor, ao critério do Mestre."
	+ "<br><br> Você é sujeito as diretrizes normais para perícias de interação e combate ou qualquer outro perigo imediato faz essa vantagem ser ineficaz. Como uma ação padrão, faça um teste de perícia de interação contra o teste oposto de se alvo (Intuição ou Vontade). Se tiver sucesso, o alvo fica fascinado. Você pode manter o efeito com uma ação padrão cada rodada, dando ao alvo um novo teste de salvamento. O efeito acaba quando parar a façanha, o alvo resistir com sucesso ou qualquer perigo imediato se apresentar. Como todas perícias de interação, você pode usar Fascinar em um grupo, mas você deve afetar todo o grupo da mesma maneira.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2056,
	name: "Faz-Tudo", 
	ranked: false,
	description: "Você pode usar qualquer perícia sem treinamento, até perícias ou aspectos de perícias que normalmente não podem ser usadas destreinadas, entretanto, ainda deve ter as ferramentas necessárias delas."
})

_AllAdvantagesList.push({
	id: 2057,
	name: "Ferramentas Improvisadas", 
	ranked: false, 
	description: "Você ignora a penalidade circunstancial de usar perícias sem as ferramentas apropriadas, uma vez que consegue improvisar ferramentas suficientes do que estiver à mão. Se você é forçado a trabalhar sem ferramenta alguma, você sofre apenas uma penalidade de -2."
})

_AllAdvantagesList.push({
	id: 2058,
	name: "Finta Ágil", 
	ranked: false,
	description: "Você pode usar seu bônus de Acrobacia ou seu valor de movimento no lugar de enganação para fazer fintas e truques em combate como seu bônus de perícia ou valor de velocidade fossem seu bônus de Enganação (veja perícia <b>Enganação</b>). Seu oponente resiste a tentativa com Acrobacias ou Intuição (o que for maior)."
})

_AllAdvantagesList.push({
	id: 2059,
	name: "Idiomas", 
	ranked: true,
	totalRanks: 1,
	description: "Você pode falar e entender idiomas adicionais. Com uma graduação nesta vantagem, você sabe um idioma adicional. Para cada graduação, você dobra a quantidade de idiomas conhecidos: 2 com duas graduações, quatro com 3 graduações, oito com 4, etc. Então, um personagem com Idiomas 7 é fluente em 64 idiomas! Assume-se que personagens são fluentes em qualquer idioma que conhecem, inclusive serem capazes de ler e escrever neles."
	+ "<br><br> Para a habilidade de entender qualquer idioma, veja o efeito <i>Compreender</i> em <b>Poderes</b>."
	+ "<br><br> <b>Alfabetização</b> <br> Assume-se que os personagens são alfabetizados no seu idioma nativo e qualquer outro idioma que conheçam. Ao critério do Mestre, os personagens podem ter que gastar um ponto adicional em Idiomas para ser alfabetizados em um idioma com estilo ou alfabeto diferente do idioma natal do personagem (como árabe, kanji japonês ou cirílico russo para nativo em Inglês). Personagens completamente analfabetos estão diante de uma potencial complicação de Deficiência durante o jogo."
	+ "<br><br> <b>A Barreira Linguística</b>"
	+ "<br>De um modo geral, idiomas não são terrivelmente importantes em histórias de quadrinhos de super-heróis, exceto para adicionar cor à história ou as complicações ocasionais na trama. Mestres deem permitir jogadores fluentes em outros idiomas terem a oportunidade de se exibirem ou por em bom uso de vez em quando. Se definiu a barreira linguística como um obstáculo para confrontar jogadores com um idioma que não é possível entenderem, isso deve contar como uma complicação e valer um ponto de Vitória."
})

_AllAdvantagesList.push({
	id: 2060,
	name: "Imobilizar Aprimorado", 
	ranked: false,
	description: "Seus ataques de agarrar são difíceis de escapar. Oponentes agarrados sofrem uma penalidade circunstancial de -5 em testes para escapar."
})

_AllAdvantagesList.push({
	id: 2061,
	name: "Iniciativa Aprimorada", 
	ranked: true, 
	totalRanks: 1,
	description: "Você tem um bônus de +4 nos testes de iniciativas por graduação nesta vantagem."
})

_AllAdvantagesList.push({
	id: 2062,
	name: "Inspirar", 
	ranked: true, 
	totalRanks: 1, 
	maxRank: 5,
	description: "Você pode inspirar seus aliados a grandeza. Uma vez por cena, como uma ação padrão e gastando um ponto de Vitória, aliados que são capazes de interagir com você ganham um bônus circunstancial de +1, por graduação em Inspirar, em todos os testes até o início da próxima rodada, com bônus máximo de +5. Você não ganha o bônus, apenas seus aliados. O bônus de inspiração ignora os limites do nível de poder, como outros usos de pontos de Vitória. Múltiplos usos de Inspirar não se acumulam, apenas o bônus maior se aplica."
})

_AllAdvantagesList.push({
	id: 2063,
	name: "Interpor-se", 
	ranked: false,
	description: "Uma vez por rodada, quando um aliado no alcance de seu deslocamento normal é atingido por um ataque, você pode escolher de colocar você entre ele e o atacante como uma reação, fazendo com que você se torne o alvo do ataque no lugar. O ataque atinge você em vez de seu aliado e sofre os efeitos normalmente. Você não pode usar esta vantagem contra efeitos em área ou efeitos de alcance de percepção, apenas aqueles com teste de ataque."
})

_AllAdvantagesList.push({
	id: 2064,
	name: "Inventor", 
	ranked: false,
	description: "Você pode usar a perícia Tecnologia para criar invenções. Veja <i>Inventando</i> ou <i>Inventando (Guia de Bugigangas)</i> para detalhes."
})

_AllAdvantagesList.push({
	id: 2065,
	name: "Liderança", 
	ranked: false,
	description: "Sua presença tranquiliza e empresta coragem aos seus aliados. Com uma ação padrão, você pode gastar um ponto de Vitória para remover uma das seguintes condições de seus aliados qual consegue interagir: atordoado, fadigado e tonto."
})

_AllAdvantagesList.push({
	id: 2066,
	name: "Luta no Chão", 
	ranked: false,
	description: "Você não sofre penalidades a testes de ataques por estar caído e oponentes adjacentes não ganham o bônus circunstancial para ataques corpo-a-corpo contra você."
})

_AllAdvantagesList.push({
	id: 2067,
	name: "Maestria em Arremesso", 
	ranked: true, 
	totalRanks: 1, 
	description: "Você tem bônus de +1 em dano com armas arremessadas por graduação nesta vantagem. Você também pode arremessar objetos inofensivos – cartas, canetas, clips e assim em diante – como armas com dano igual a graduação desta vantagem e alcance baseado no maior entre o valor da vantagem e sua Força (veja <i>Alcance</i> em <b>Poderes</b>). O seu dano máximo com qualquer arma ou ataque ainda é limitado pelo nível de poder."
})

_AllAdvantagesList.push({
	id: 2068,
	name: "Maestria em Perícia", 
	ranked: false,
	description: "Escolha uma perícia. Você pode fazer testes rotineiros com essa perícia mesmo sob pressão (veja <i>Testes Rotineiros</i> no <b>Básico</b>). Esta vantagem não permite você fazer testes rotineiros com perícias que normalmente não permitiriam. Você pode pegar esta vantagem várias vezes para perícias diferentes.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2069,
	name: "Memória Eidética", 
	ranked: false, 
	description: "Você se lembra perfeitamente de tudo que já passou na vida. Você tem um bônus de +5 em testes para lembrar de eventos, incluindo testes de salvamento contra efeitos que alteram ou apagam memórias. Você também pode fazer testes de perícias Especialidade para responder perguntas e prover informações como se fosse treinado, significando que pode responder perguntas conhecimento difícil e obscuro mesmo sem graduação na perícia, dado a quantidade de trivialidades que você absorveu com tempo."
})

_AllAdvantagesList.push({
	id: 2070,
	name: "Maneiro", 
	ranked: false,
	description: "Você tem um certo estilo e um método calmo para as suas ações que funciona em qualquer pessoa com menos de 20 anos de idade. Isto dá-lhe um bônus de +5 circunstâncias sobre uma perícias relacionada com a Presença quando rolar cheques (Engano, Intimidação, Persuasão, ou Perícia baseada em Prontidão) envolvendo adolescentes. Os adultos não 'percebem', e são assim imunes ao seu encanto da anca. Cada graduação nesta vantagem acrescenta uma perícia adicional relacionada com a Presença, e o bônus dado nunca pode dar a você um bônus de perícia total efetivo maior do que os limites de nível de poder da série.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2071,
	name: "Mira Aprimorada", 
	ranked: false,
	description: "Você tem um olho ainda mais aguçado quando é questão de ataques à distância. Quando realizar uma ação padrão para mirar, você ganha o dobro do bônus normal: +10 para ataques corpo-a-corpo ou ataques à distância em alvos adjacentes, +5 para ataques à distância em grandes distâncias. Veja <i>Mirar</i> em <b>Ações e Manobras</b> para detalhes."
})

_AllAdvantagesList.push({
	id: 2072,
	name: "Oponente Favorito", 
	ranked: false,
	description: "Você tem um oponente específico que estudou ou é especialmente efetivo contra. Pode ser um tipo de criatura (alienígenas, animais constructos, mortos-vivos, mutantes, etc.), uma profissão (soldados, policiais, Yakuza, etc.) ou qualquer outra categoria que o Mestre aprovar. Categorias muito amplas como 'humanos' ou 'vilões' não são permitidas. Você ganha bônus de +2 em testes de Enganação, Intimidação, Intuição e Percepção quando lidando com seu Oponente Favorito. Esse bônus não é limitado por nível de poder."
})

_AllAdvantagesList.push({
	id: 2073,
	name: "Orientação", 
	ranked: false,
	description: "Você pode torcer ou aconselhar os aliados para a vitória. Quando você gasta um Ponto de Vitória e realiza uma ação livre para oferecer orientação, um aliado de sua escolha que pode se comunicar com você ganha uma única Vantagem de sua escolha até o final do seu próximo turno. Caso contrário, isso funciona como o benefício Feito Heroicos de um Ponto de Vitória."
})

_AllAdvantagesList.push({
	id: 2074,
	name: "Parceiro", 
	ranked: true, 
	totalRanks: 1, 
	description: "Você tem outro personagem servindo como seu parceiro e ajudante. Crie seu parceiro como um personagem independente com pontos de personagem igual a (graduação da vantagem x 5) e sujeito ao nível de poder da campanha. O total de pontos de Personagem de um parceiro deve ser menor que o seu. Seu parceiro é um PNJ, mas é prestativo e leal a você. Mestres geralmente permitem que controle seu parceiro, entretanto parceiros continuam como PNJs e o Mestre tem a palavra final quanto suas ações"
	+ " <br><br> Parceiros não ganham pontos de Personagem. Em vez disso, você deve gastar pontos de Personagem ganhos para aumentar sua graduação em Parceiro para melhorar a quantidade de pontos de Personagem total e suas características. Parceiros não tem pontos de Vitória, mas você pode gastar seus próprios a favor do Parceiro, com os benefícios em comum. Parceiros não são capangas, mas personagens por completo, então não são sujeitos as regras de capangas."
})

_AllAdvantagesList.push({
	id: 2075,
	name: "Prender Arma", 
	ranked: false, 
	description: ""
	+ "s pessoas esperam que você melhorem em usar seus poderes, eventualmente, mas você é especial; você nem começou a explorar toda a extensão de suas habilidades. <br><br> Com o potencial desconhecido, você pode empurrar seus poderes além dos limites atuai se tocar nessa grandeza por um curto momento. Ao usar um Esforço Extra, você pode aumentar um poder em 3 graduações ao invés de 2. "
})

_AllAdvantagesList.push({
	id: 2076,
	name: "Prender Arma", 
	ranked: false,
	description: "Se tomar uma ação defensiva (veja Defender-se em <b>Ações e Manobras</b>) e se defender com sucesso de um ataque de uma arma corpo-a-corpo, você pode fazer a tentativa de desarmar automaticamente como uma reação. A tentativa de desarme é feita normalmente, incluindo o oponente ter a oportunidade de lhe desarmar."
})

_AllAdvantagesList.push({
	id: 2077,
	name: "Quebrar Aprimorado", 
	ranked: false,
	description: "Você não tem penalidade em ataques para acertar um objeto segurado por outro personagem (veja Quebrar em <b>Ações e Manobras</b>)."
})

_AllAdvantagesList.push({
	id: 2078,
	name: "Quebrar Arma", 
	ranked: false,
	description: "Se tomar uma ação defensiva (veja Defender-se em <b>Ações e Manobras</b>) e se defender com sucesso de um ataque de uma arma corpo-a-corpo, você pode fazer um ataque contra a arma imediatamente como uma reação. Isso requer um teste de ataque e causa dano normal na arma se atingir (veja Quebrar em <b>Ações e Manobras</b>)."
})

_AllAdvantagesList.push({
	id: 2079,
	name: "Rastrear", 
	ranked: false,
	description: "Você pode usar a perícia Percepção para visualmente acompanhar rastros, como o efeito Sentido (Rastrear) (veja Poderes)."
})

_AllAdvantagesList.push({
	id: 2080,
	name: "Redirecionar", 
	ranked: false,
	description: "Se conseguir enganar um oponente com sucesso (veja Trapacear na perícia Enganação), você pode redirecionar um ataque falho deste oponente contra você para outro alvo, como uma reação. O novo alvo deve estar adjacente a você, e dentro do alcance do ataque. O atacante faz uma nova rolagem de ataque com os mesmos modificadores da primeira contra o novo alvo."
})

_AllAdvantagesList.push({
	id: 2081,
	name: "Retenção", 
	ranked: true, 
	totalRanks: 1, 
	maxRank: 6,
	description: "Retenção significa que você possui muito mais poder do que está deixando transparecer, mas não o utilizará por uma precaução legítima. Você pode destruir edifícios com uma palavra impensada? Você pode explorar um poço sem fim de escuridão para se alimentar? Você pode se render a uma fúria indiscriminatória em batalha que o transforma em um tornado letal de morte e destruição? Você pode explorar e usar habilidades acima e além dos níveis de poder da campanha. De fato, os níveis de poder atuais estão impedindo que você chegue ao seu máximo. Essa é, no entanto, uma manobra perigosa e um deslize pode ser pior do que a ameaça que você enfrenta agora."
	+ "<br><br> Com a Retenção, você deve gastar um ponto de vitória e duas condições devem ser atendidas antes de poder acessar esta reserva de poder inexplorada: mais de metade da equipe deve estar incapacitada para que você considere fazer esse sacrifício, ou muitas vidas inocentes devem estar em risco (possivelmente incluindo a sua) e você deve fazer um teste de Vontade com um CD de 10 + sua defesa de Vontade para superar seus próprios anos de treinamento de autocontrole. Você recebe um bônus de +1 na rolagem para cada graduação nesta vantagem após a primeira (até um máximo de +5 com 6 graduações). "
	+ "Se ambas as condições forem atendidas, você terá acesso a maiores poderes durante essa cena. Quando você supera seus bloqueios mentais se torna mais poderoso, seu nível de poder aumenta em 4 e ganha 60 pontos para gastar em suas características (durante a criação do personagem faça duas fichas de personagem, uma para o herói normal e uma para a forma realmente perigosa; isso impede que você pare o jogo pra fazer esses detalhes). O ruim disso tudo é que, depois de liberar todo o seu potencial, há um preço a pagar. Você sofre uma complicação escolhida pelo Mestre por liberar todo o seu poder, pelo qual você não recebe nenhum ponto de vitória. Veja abaixo algumas possibilidades."
	+ "<br><br> <b>Exemplos de Complicações</b>"
	+ "<br> Observe que em qualquer um desses casos, você pode gastar um ponto de vitória para impedir que seus poderes ou ações matem alguém."
	+ "<br> ● <b>Caçado</b>: alguém lá fora está procurando por você, seja a corporação que lhe deu seus poderes, o cientista louco que o construiu ou seu pai demônio tentando abrir um portal através de você. De qualquer forma, são más notícias. Liberando seus poderes a todo vapor dá aos seus caçadores uma maneira de localizá-lo. Eles o encontrarão e o atacarão para tentar recuperá-lo. Se tiver sorte, pode ter algumas horas para se preparar. Se tiver azar, eles já estão batendo na sua porta. Os Mestres devem criar esse(s) inimigo(s) com antecedência e mantê-los prontos para uso."
	+ "<br> ● <b>Desencadear o Poder</b>: seu poder é explosivo e liberá-lo é como abrir as comportas de uma represa. Se você não conseguir contê-lo, seu poder mais ofensivo ataca aleatoriamente com força total até você ficar inconsciente."
	+ "<br> ● <b>Fúria</b>: você perde seu autocontrole e entra em um estado selvagem. Seu Intelecto cai para -4 e, até ser parado, você fica em uma fúria. Isso pode até acontecer no início do combate, com seu objetivo principal sendo a ameaça que iniciou o combate."
	+ "<br> ● <b>Hospedeiro</b>: seus poderes existem porque você é anfitrião de alguma entidade terrível e maligna. Pode ser extraterrestre, extra-dimensional ou mágico, mas liberar seu poder significa que ele surge e temporariamente assume o controle do seu corpo. Pode ser um inferno de destruição, ou talvez ele trabalhe discretamente com sua própria agenda secreta enquanto sua mente está inconsciente. Você acorda, sem saber o que foi feito ou quem foi morto, mas temendo a verdade iminente. Independente, recuperar o controle de seu corpo acontecer depois de algumas horas, ao amanhecer ou ao entardecer ou quando o seu corpo precisar dormir. Cabe a você e ao Mestre para decidir."
	+ "<br> ● <b>Inerte</b>: você alcança grandezas com seu poder, apenas para cair com ainda mais força no chão. Com essa complicação, você 'desliga', perde a coesão, se torna uma estátua, ou entra em coma. De qualquer forma, você está fora do ar e só se recupera depois de uma hora."
	+ "<br> ● <b>Monstruosidade</b>: seu poder o transforma em um monstro por várias horas. E não, não é uma criatura fofa e peludinha, mas algo extremamente nojento ou horrível que faria H.P. Lovecraft levantar uma sobrancelha. É tão ruim que policiais vão atirar em você e as forças armadas serão chamadas para lidar com você como uma ameaça. Mesmo as pessoas que te conhecem e lhe amam não serão as mesmas após ver isso. Durante até uma semana depois de voltar ao normal, você sofre uma penalidade de -5 em todas as jogadas relacionadas à Presença ao lidar com alguém que o viu nessa forma monstruosa."
	+ "<br><br> <b>Material</b>: Hero's High."
})

_AllAdvantagesList.push({
	id: 2082,
	name: "Ritualista", 
	ranked: false, 
	description: "Você pode usar a perícia Especialidade: Magia para criar e lançar rituais mágicos (veja Rituais Mágicos ou Rituais Mágicos (Guia de Bugigangas)). Esta vantagem geralmente é um back-up ou fonte secundária de magia para alguns feiticeiros sobre-humanos e pode ser a única forma de magia disponível para alguns 'amadores'."
})

_AllAdvantagesList.push({
	id: 2083,
	name: "Rolamento Defensivo", 
	ranked: true, 
	totalRanks: 1, 
	description: "Você pode desviar de dano através de agilidade e “rolar” com um ataque. Você recebe bônus para sua Resistência igual a sua graduação nesta vantagem, mas é considerado uma defesa ativa, igual a Esquiva e Aparar (veja Defesas Ativas), então, você perde este bônus se estiver vulnerável ou indefeso. Seu bônus total em Resistência, incluindo desta vantagem, ainda é limitado pelo nível de poder. Esta vantagem é comum para heróis que não possuem velocidade ou resistência sobre-humanas, dependendo exclusivamente de sua habilidade e treinamento para evitar ferimentos."
})

_AllAdvantagesList.push({
	id: 2084,
	name: "Saque Rápido", 
	ranked: false,
	description: "Você pode sacar sua arma do coldre ou da bainha como uma ação livre, em vez de uma ação de movimento."
})

_AllAdvantagesList.push({
	id: 2085,
	name: "Segunda Chance", 
	ranked: false, 
	description: "Escolha um perigo específico, como cair, ser derrubado, ativar armadilhas, controle mental (ou outro efeito específico, como Dano com descritor de fogo) ou uma perícia com consequências falha. Se você falhar teste contra aquele perigo, pode fazer outro imediatamente e utilizar o melhor dos dois resultados. Você só tem uma segunda chance dado qualquer teste e o Mestre determina se o perigo ou perícia é um foco apropriado para esta vantagem. Você pode pegar esta vantagem várias vezes, cada uma para um perigo diferente.",
	instanceID: 0,
	additionalDescription: ""
})

_AllAdvantagesList.push({
	id: 2086,
	name: "Sorte", 
	ranked: true, 
	totalRanks: 1, 
	maxRank: 5,
	description: "Uma vez por rodada, você pode escolher rolar novamente um dado, como gastasse um ponto de Vitória (veja <b>Pontos de Vitória</b>), incluindo a soma de 10 a rolagens com 10 ou menos. Você pode fazer isso um número de vezes por sessão igual a sua graduação em Sorte, com um máximo igual a metade do nível de poder da campanha (arredondado para baixo). Suas graduações em Sorte recarrega quando seus pontos de Vitória recarregam no início da aventura. O mestre pode escolher um limite diferente nas graduações desta vantagem dependendo da campanha."
})

_AllAdvantagesList.push({
	id: 2087,
	name: "Sorte de Principiante", 
	ranked: false,
	description: "Gastando um ponto de Vitória, você ganha 5 pontos de graduação em uma perícia a sua escolha que tenha 4 graduações ou menos, incluindo perícias que você não possui graduação alguma, mesmo que não possam ser usadas destreinadas. Esses pontos temporários duram até o final da cena e concedem seus benefícios normais."
})

_AllAdvantagesList.push({
	id: 2088,
	name: "Tolerância Maior", 
	ranked: false, 
	description: "Você tem um bônus de +5 para evitar ficar fatigado e testes para segurar seu ar, evitar danos de fome ou sede, evitar danos de ambientes frios e quentes e resistir sufocamento e afogamento. Veja Ameaças Ambientais para detalhes nesses testes."
})

_AllAdvantagesList.push({
	id: 2089,
	name: "Tontear (Enganação)", 
	ranked: false,
	description: "Você pode fazer um teste de Enganação ou de Intimidação (escolha qual perícia ao comprar esta vantagem) para fazer com que seu oponente hesite em combate. Faça um teste de perícia como uma ação padrão contra o teste de salvamento do alvo (a mesma perícia, Intuição ou a defesa Vontade, o que tiver o bônus mais alto). Se você vencer, seu alvo fica tonto (capaz de realizar apenas uma ação padrão) até o fim da sua próxima rodada."
})

_AllAdvantagesList.push({
	id: 2090,
	name: "Tontear (Intimidação)", 
	ranked: false,
	description: "Você pode fazer um teste de Enganação ou de Intimidação (escolha qual perícia ao comprar esta vantagem) para fazer com que seu oponente hesite em combate. Faça um teste de perícia como uma ação padrão contra o teste de salvamento do alvo (a mesma perícia, Intuição ou a defesa Vontade, o que tiver o bônus mais alto). Se você vencer, seu alvo fica tonto (capaz de realizar apenas uma ação padrão) até o fim da sua próxima rodada."
})

_AllAdvantagesList.push({
	id: 2091,
	name: "Tomar Iniciativa", 
	ranked: false,
	description: "Você pode gastar um ponto de Vitória para ir automaticamente primeiro na ordem de iniciativa. Você só pode fazer isso no início do combate, onde fariam o teste de iniciativa. Se mais de um personagem usar essa vantagem, eles todos fazem testes de iniciativa e agem em ordem do seu resultado, seguido de todos outros que não possuem esta vantagem."
})

_AllAdvantagesList.push({
	id: 2092,
	name: "Trabalho em Equipe", 
	ranked: false,
	description: "Você é eficaz em ajudar seus amigos. Quando você ajuda em testes em grupo (veja Testes em Grupo no O Básico) você tem um bônus de +5 no eu teste. Esse bônus também aplica-se a ação de Ajudar e Ataques em Time."
})

_AllAdvantagesList.push({
	id: 2093,
	name: "Transe", 
	ranked: false,
	description: "Através do controle de sua respiração e de seu corpo, você consegue entrar em um transe profundo. Isso requer um minuto ininterrupto de meditação e uma CD 15 de um teste de Consciência. Enquanto em transe, você adiciona seu valor em Prontidão para seu Vigor para determinar quanto tempo consegue segurar seu ar e você usa o maior entre sua Fortitude ou Vontade para salvamentos contra sufocamento (veja Sufocamento)."
	+ "<br><br> Venenos e doenças são suspensas durante o transe. Isto requer um teste de Percepção com CD igual sua Prontidão para determinar que você não está morto, por que suas funções corporais estão tão lentas. Você percebe o ambiente ao seu redor e pode sair a qualquer momento a vontade. Você não pode realizar nenhuma ação enquanto em transe, mas seu Mestre pode permitir se comunicar mentalmente enquanto em transe."
})

_AllAdvantagesList.push({
	id: 2094,
	name: "Tratamento Aprimorado", 
	ranked: false,
	description: "Quando você usa a perícia Tratamento para reviver um alvo, você pode fornecer benefícios adicionais. Para cada grau de sucesso em seu teste de Tratamento CD 15, você pode fazer um dos seguintes: ● Remover uma penalidade de -1 nos testes de resistência à Resistência devido a danos. <br> ● Remover uma das seguintes condições: cego, tonto, surdo, fadigado ou prejudicado. <br> ● Reduzir uma das seguintes condições: Desabilitado, Exausto ou Atordoado. A condição é reduzida a Prejudicado, Fatigado ou Tonto, respectivamente. <br> ● Restaurar uma graduação perdido para uma habilidade enfraquecida."
	+ "<br><br> <b>Material</b>: Super Teams Handbook"
})

_AllAdvantagesList.push({
	id: 2095,
	name: "Treinamento Tático", 
	ranked: false,
	description: "Graças ao conhecimento tático e horas de treinamento ao lado de seus companheiros,vocês trabalham juntos no combate como uma máquina. Você pode executar as funções de Finta, Insinuar e Ludibriar da perícias de Enganação e a função Desmoralizar da perícia de Intimidação usando sua graduação de Perícia de Especialidade (Tática). Você só pode compartilhar este benefício com outros personagens (como enviar mensagens codificadas com Insinuar ou transferir os benefícios de uma   finta usando a vantagem de Armação) se esses personagens também tiverem a vantagem de treinamento tático e você tiver treinado com eles por pelo menos algumas horas."
	+ "<br><br> <b>Material</b>: Super Teams Handbook"
})

_AllAdvantagesList.push({
	id: 2096,
	name: "Zombar", 
	ranked: false,
	description: "Você pode desmoralizar seu oponente com Enganação em vez de Intimidação (veja Desmoralizar em Intimidação), menosprezando e minando a confiança em vez de ameaçar. Alvos resistem usando Enganação, Intuição ou Vontade."
})