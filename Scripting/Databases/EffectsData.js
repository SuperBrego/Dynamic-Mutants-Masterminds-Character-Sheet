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

