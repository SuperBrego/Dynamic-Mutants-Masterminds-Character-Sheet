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

