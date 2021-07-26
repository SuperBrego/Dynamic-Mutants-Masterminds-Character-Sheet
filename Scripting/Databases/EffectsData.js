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

const effect = {
	name: "Nome",
	baseCost: 0,
	baseRanks: 0,
	enhancedRanks: 0,
	extrasModifiers: [],
	flawsModifiers: [],
	extraFlatModifiers: [],
	flawFlatModifiers: [],
	alteredCost: (this.baseCost + this.extrasCosts - this.flawsCosts), // Isto não funciona
	totalSpent: (this.alteredCost * this.baseRanks) + this.extraFlatModifiers - this.flawFlatModifiers // Nem isto
	// ^ Nem uma função com os dois.
}

