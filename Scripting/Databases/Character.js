/**
 APP.
	Characters
		Magnetu.
			Display
			Sheet
		Batatinha 
			Display
			Sheet
 */

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

	ExtraSkills: {
		id: 0,
		list: []
	},

	Advantages: {
		id: 0,
		list: []
	},

	EnhancedAdvantages: [],

	Languages: {
		id: 1,
		rank: 0,
		list: [[0, "Idioma Nativo"]],
	},

	Equipment: {
		EquipmentPoints: function() {
			let eqpAdv = this.Advantages.find( element => element.id == 2048 );
			if(eqpAdv) return (eqpAdv.totalRanks * 5);
			else 0;
		},
		id: 0,
		list: []
	},

	CloseRangeBonus: function() {
		let totalCloseRank = this.Advantages.list.find( element => element.id == 2013 );
		if(totalCloseRank != undefined)
			return parseInt(this.Abilities[4].totalRanks() + parseInt( totalCloseRank.totalRanks) );
		else return parseInt( this.Abilities[4].totalRanks() );
	},

	RangedRangeBonus: function() {
		let totalRangedBonus = this.Advantages.list.find( element => element.id == 2011 );
		if(totalRangedBonus != undefined)
			return parseInt(this.Abilities[3].totalRanks() + parseInt(totalRangedBonus.totalRanks) );
		else return parseInt(this.Abilities[3].totalRanks());
	},

	Attacks: {
		// Pois o 0, 1 e 2 estão ocupados.
		id: 3,
		list: [
			{
				id: 0, 
				effectID: 5013, 
				name: "Desarmado", 
				rank: 0,
				range: 1, 
				isStrenghtBased: true,
				strengthRanks: 0,
				resistance: "Resistência", 
				area: {
					isArea: false,
					areaRank: 0
				},
				descriptors: "Contuso", 
				crit: 20, 
				enhancedRanks: 0,
				baseAttackBonus: 0,
				skillBonus: 0,
			},
			{
				id: 1, 
				effectID: -1, 
				name: "Agarrar", 
				rank: 0, 
				range: 1, 
				isStrenghtBased: true,
				strengthRanks: 0,
				resistance: "Esquiva ou Força/Acrobacias ou Atletismo", 
				area: {
					isArea: false,
					areaRank: 0
				},
				crit: 20, 
				enhancedRanks: 0,
				baseAttackBonus: 0,
				skillBonus: 0,
			},
			{
				id: 2, 
				effectID: 5013, 
				name: "Arremessar", 
				rank: 0,
				range: 2, 
				isStrenghtBased: true,
				strengthRanks: 0,
				resistance: "Resistência", 
				area: {
					isArea: false,
					areaRank: 0
				},
				descriptors: "Contuso", 
				crit: 20, 
				enhancedRanks: 0,
				baseAttackBonus: 0,
				skillBonus: 0,
			},
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

	Powers: {
		id: 0,
		list: []
	},

	totalSkillsRanks: function (){ 
		let sum = 0;
		for (var i = 0; i < this.Skills.length; i++) {
			sum += this.Skills[i].baseRank;
		}

		for (var i = 0; i < this.ExtraSkills.list.length; i++) {
			sum += this.ExtraSkills.list[i].baseRank;
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

		for (var i = 0; i < this.ExtraSkills.list.length; i++) {
			sum += this.ExtraSkills.list[i].pointsSpent();
		}
		
		return parseFloat(sum);
	},

	totalAdvantagesSpent: function(){
		let sum = 0;

		for(let i = 0; i < this.Advantages.list.length; i++){
			if( this.Advantages.list[i].ranked )
			  sum += this.Advantages.list[i].totalRanks;
			else sum += 1;
		}

		// Soma Idiomas
		sum += this.Languages.rank;
		
		return parseInt(sum);
	},

	totalPowersSpent: function() { 
		let sum = 0;

		for (var i = 0; i < this.Powers.list.length; i++) 
			sum += parseInt(this.Powers.list[i].totalPointSpent());

		return sum;
	},

	totalSpent: function() {
		return parseFloat(
			parseInt(this.totalAbilitiesSpent() ) 
			+ parseFloat(this.totalSkillsSpent()) 
			+ parseInt(this.totalDefensesSpent()) 
			+ parseInt(this.totalAdvantagesSpent()) 
			+ parseInt(this.totalPowersSpent())
		);
	}
}