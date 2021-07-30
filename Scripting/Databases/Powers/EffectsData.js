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
			instanceID: 0,
			name: "Aflição",
			baseCost: 1,
		},
	
		{
			id: 5002,
			instanceID: 0,
			name: "Alongamento",
			baseCost: 1,
		},
	
		{
			id: 5003,
			instanceID: 0,
			name: "Ambiente",
			baseCost: 1,
		},
	
		{
			id: 5004,
			instanceID: 0,
			name: "Camuflagem",
			baseCost: 2,
		},
	
		{
			id: 5005,
			instanceID: 0,
			name: "Característica",
			baseCost: 1,
		},
	
		{
			id: 5006,
			instanceID: 0,
			name: "Característica Aumentada",
		},
	
		{
			id: 5007,
			instanceID: 0,
			name: "Compreender",
			baseCost: 2,
		},
	
		{
			id: 5007,
			instanceID: 0,
			name: "Comunicação",
			baseCost: 4,
		},
	
		{
			id: 5008,
			instanceID: 0,
			name: "Controle de Sorte",
			baseCost: 3,
		},
	
		{
			id: 5009,
			instanceID: 0,
			name: "Crescimento",
			baseCost: 2,
		},
	
		{
			id: 5010,
			instanceID: 0,
			name: "Criar",
			baseCost: 2,
		},
	
		{
			id: 5011,
			instanceID: 0,
			name: "Cura",
			baseCost: 2,
		},
	
		{
			id: 5012,
			instanceID: 0,
			name: "Dano",
			baseCost: 1,
		},
	
		{
			id: 5013,
			instanceID: 0,
			name: "Deflexão",
			baseCost: 1,
		},
	
		{
			id: 5014,
			instanceID: 0,
			name: "Encolhimento",
			baseCost: 2,
		},
	
		{
			id: 5015,
			instanceID: 0,
			name: "Enfraquecer",
			baseCost: 1,
		},
	
		{
			id: 5016,
			instanceID: 0,
			name: "Escavação",
			baseCost: 1,
		},
	
		{
			id: 5017,
			instanceID: 0,
			name: "Ilusão",
			baseCost: 1,
		},
	
		{
			id: 5018,
			instanceID: 0,
			name: "Imortalidade",
			baseCost: 2,
		},
	
		{
			id: 5019,
			instanceID: 0,
			name: "Imunidade",
		},
	
		{
			id: 5020,
			instanceID: 0,
			name: "Intangibilidade",
			baseCost: 5,
		},
	
		{
			id: 5021,
			instanceID: 0,
			name: "Invocar",
			baseCost: 2,
		},
	
		{
			id: 5022,
			instanceID: 0,
			name: "Leitura Mental",
			baseCost: 2,
		},
	
		{
			id: 5023,
			instanceID: 0,
			name: "Membros Extras",
			baseCost: 1,
		},
	
		{
			id: 5024,
			instanceID: 0,
			name: "Morfar",
			baseCost: 5,
		},
	
		{
			id: 5025,
			instanceID: 0,
			name: "Mover Objetos",
			baseCost: 2,
		},
		{
			id: 5026,
			instanceID: 0,
			name: "Movimento",
			baseCost: 2,
		},
		{
			id: 5027,
			instanceID: 0,
			name: "Natação",
			baseCost: 1,
		},
		{
			id: 5028,
			instanceID: 0,
			name: "Nulificar",
			baseCost: 1,
		},
		{
			id: 5029,
			instanceID: 0,
			name: "Proteção",
			baseCost: 1,
		},
		{
			id: 5030,
			instanceID: 0,
			name: "Rapidez",
			baseCost: 1,
		},
		{
			id: 5031,
			instanceID: 0,
			name: "Regeneração",
			baseCost: 1,
		},
		{
			id: 5032,
			instanceID: 0,
			name: "Salto",
			baseCost: 1,
		},
		{
			id: 5033,
			instanceID: 0,
			name: "Sentido Remoto",
		},
		{
			id: 5034,
			instanceID: 0,
			name: "Sentidos",
			baseCost: 1,
		},
		{
			id: 5035,
			instanceID: 0,
			name: "Teleporte",
			baseCost: 2,
		},
		{
			id: 5036,
			instanceID: 0,
			name: "Transformar"
		},
		{
			id: 5037,
			instanceID: 0,
			name: "Variável",
			baseCost: 7,
		},
		{
			id: 5038,
			instanceID: 0,
			name: "Velocidade",
			baseCost: 1,
		},
		{
			id: 5039,
			instanceID: 0,
			name: "Voo",
			baseCost: 2,
		}
	];