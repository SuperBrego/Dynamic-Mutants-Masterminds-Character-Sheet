var Character = {
	Abilities: [
		Strength = Object.assign({}, taStrength),
		Stamina = Object.assign({}, taStamina),
		Agility = Object.assign({}, taAgility),
		Dexterity = Object.assign({}, taDexterity),
		Fighting = Object.assign({}, taFighting),
		Awareness = Object.assign({}, taAwareness),
		Presence = Object.assign({}, taPresence)
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
	Languages: {
		LanguagesRank: 0,
		LanguageList: [[0, "Idioma Nativo"]],
		LanguagesRank: 1
	},
	totalAbilitySpent: function(){
		let sum = 0;
		for (var i = 0; i < this.Abilities.length; i++) {
			sum += this.Abilities[i].pointsSpent();
		}

		return sum;
	},
	totalSkillsSpent: function() {
		let sum = 0;
		for (var i = 0; i < this.Skills.length; i++) {
			sum += this.Skills[i].pointsSpent();
		}

		for (var i = 0; i < this.ExtraSkills.length; i++) {
			sum += this.ExtraSkills[i].pointsSpent();
		}
		
		return sum;
	},
	totalAdvantagesSpent: function(){
		let sum = 0;

		for(let i = 0; i < Advantages.length; i++){
			if( Advantages[i].ranked )
			  sum += Advantages[i].totalRanks;
			else sum += 1;
		}

		// Soma Idiomas
		sum += _LanguageRanks;

		return sum;
	},
}