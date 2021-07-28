const Character = {
	PowerLevel: 10,
	PointsPerLevel: 15,
	ExtraPoints: 0,

	Abilities: [
		Strength = Object.assign({}, taStrength),
		Stamina = Object.assign({}, taStamina),
		Agility = Object.assign({}, taAgility),
		Dexterity = Object.assign({}, taDexterity),
		Fighting = Object.assign({}, taFighting),
		Intellect = Object.assign({}, taIntellect),
		Awareness = Object.assign({}, taAwareness),
		Presence = Object.assign({}, taPresence)
	],

	Defenses: [
		Dodge = Object.assign({}, tdDodge),
		Parry = Object.assign({}, tdParry),
		Fortitude = Object.assign({}, tdFortitude),
		Will = Object.assign({}, tdWill),
		Toughness = Object.assign({}, tdToughness),
	],

	Skills: [
		Acrobatics = Object.assign({}, tsAcrobatics),
		Athletics = Object.assign({}, tsAthletics),
		Deception = Object.assign({}, tsDeception),
		Stealth = Object.assign({}, tsStealth),
		Intimidation = Object.assign({}, tsIntimidation),
		Insight = Object.assign({}, tsInsight),
		Investigation = Object.assign({}, tsInvestigation),
		Perception = Object.assign({}, tsPerception),
		SleightOfHand = Object.assign({}, tsSleightOfHand),
		Technology = Object.assign({}, tsTechnology),
		Treatment = Object.assign({}, tsTreatment),
		Vehicles = Object.assign({}, tsVehicles)
	],

	ExtraSkills: [],

	Advantages: [],

	EnhancedAdvantages: [],

	Languages: {
		id: 1,
		rank: 0,
		list: [[0, "Idioma Nativo"]],
	},

	Equipment: {
		EquipmentPoints: function() {
			let eqpAdv = Advantages.find( element => element.id == 2048 );
			if(eqpAdv) return (eqpAdv.totalRanks * 5);
			else 0;
		},
		EquipmentID: 0,
		EquipmentList: []
	},

	Attacks: {
		// Pois o 0, 1 e 2 estão ocupados.
		id: 3,
		list: [
			{
				id: 0, 
				name: "Desarmado", 
				effectID: 0, 
				rank: 0, 
				range: 1, 
				isDamage: true, 
				resistance: "Resistência", 
				areaID: -1, 
				descriptors: "Contuso", 
				crit: 20, 
				enhancedRanks: 0,
				attackBonus: function() {

					if(this.range == 3 || areaID > -1) {return -1;}
					let sum = 0;
					switch(this.range){
						case 1: 
							sum += this.Fighting.totalRanks();
							break;
						case 2:
							sum += this.Dexterity.totalRanks();
							break;
						default: break;
					}
					sum += this.skillBonus;
					return parseInt(sum);
				},
			},
			{
				id: 1, 
				name: "Agarrar", 
				effectID: 0, 
				rank: 0, 
				range: 1, 
				isDamage: false, 
				resistance: "Esquiva ou Força/Acrobacias ou Atletismo", 
				areaID: -1, 
				crit: 20, 
				enhancedRanks: 0,
				attackBonus: function() {

					if(this.range == 3 || areaID > -1) {return -1;}

					let sum = 0;
					switch(this.range){
						case 1: 
							sum += this.Fighting.totalRanks();
							break;
						case 2:
							sum += this.Dexterity.totalRanks();
							break;
						default: break;
					}
					sum += this.skillBonus;
					return parseInt(sum);

				},
			},
			{
				id: 2, 
				name: "Arremessar", 
				rank: 0, 
				range: 2, 
				isDamage: true, 
				resistance: "Resistência", 
				areaID: -1, 
				descriptors: "Contuso", 
				crit: 20, 
				enhancedRanks: 0,
				attackBonus: function() {

					if(this.range == 3 || areaID > -1) {return -1;}
					let sum = 0;
					switch(this.range){
						case 1: 
							sum += this.Fighting.totalRanks();
							break;
						case 2:
							sum += this.Dexterity.totalRanks();
							break;
						default: break;
					}
					sum += this.skillBonus;
					return parseInt(sum);
				},
			}
		]
	},

	Complications: {
		id: 0,
		list: [],
	},

	PersonalTraits: {
		name: "",
		age: 20,
		genderID: 0,
		genders: ["Outro", "Feminino", "Masculino"],
		genderSpecifics: "",
		height: 170,
		weight: 80,
		massRank: 2,
		sizeRank: -2,
		hair: "",
		eyes: "",
		background: "",
		imageID: 0,
		images: []
	},

	totalSkillsRanks: function (){ 
		let sum = 0;
		for (var i = 0; i < this.Skills.length; i++) {
			sum += this.Skills[i].baseRank;
		}

		for (var i = 0; i < this.ExtraSkills.length; i++) {
			sum += this.ExtraSkills[i].baseRank;
		}

		return sum;
	},

	totalAbilitiesSpent: function(){
		let sum = 0;
		for (var i = 0; i < this.Abilities.length; i++) sum += this.Abilities[i].pointsSpent();

		return parseInt(sum);
	},

	totalDefensesSpent: function(){
		let sum = 0;
		for (var i = 0; i < this.Defenses.length; i++) {
			if(this.Defenses[i].hasOwnProperty('pointsSpent'))
				sum += this.Defenses[i].pointsSpent();
		}
		return parseInt(sum);
	},

	totalSkillsSpent: function() {
		let sum = 0.0;
		for (var i = 0; i < this.Skills.length; i++) {
			sum += this.Skills[i].pointsSpent();
		}

		for (var i = 0; i < this.ExtraSkills.length; i++) {
			sum += this.ExtraSkills[i].pointsSpent();
		}
		
		return parseFloat(sum);
	},

	totalAdvantagesSpent: function(){
		let sum = 0;

		for(let i = 0; i < this.Advantages.length; i++){
			if( this.Advantages[i].ranked )
			  sum += this.Advantages[i].totalRanks;
			else sum += 1;
		}

		// Soma Idiomas
		sum += this.Languages.rank;

		return parseInt(sum);
	},

	totalPowersSpent: function() { return 0; },

	get totalSpent(){
		return parseFloat(parseInt(this.totalAbilitiesSpent() ) + parseFloat(this.totalSkillsSpent()) + parseInt(this.totalDefensesSpent()) + parseInt(this.totalAdvantagesSpent()));
	}
}