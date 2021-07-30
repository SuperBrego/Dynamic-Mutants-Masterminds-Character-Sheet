function UpdateAttacks(){
    let _Attacks = _MainCharacter.Attacks.list;
    let _attackTrait, _cellID, _cellText;

    for(let i = 0; i < _Attacks.length; i++) {

        // Atualiza o bônus de ataque.
        _cellID = "#Attack-" + _Attacks[i].id + '-Bonus';
        _attackTrait = (_Attacks[i].baseAttackBonus > _Attacks[i].skillBonus) ? _Attacks[i].baseAttackBonus : _Attacks[i].skillBonus;
        _cellText = (_attackTrait >= 0) ? "+" +  _attackTrait : _attackTrait;
        $(_cellID).html(_cellText);

        // Atualiza as graduações
        _cellID = "#Attack-" + _Attacks[i].id + '-Rank';
        _attackTrait = parseInt( _Attacks[i].rank + _Attacks[i].strenghtRank );
        $(_cellID).html(_attackTrait);

        // Atualiza os alcances
    }
}

/**
 * Cria a lista original de ataques iniciais.
 */
function RenderOffensiveAttacks(){
    let _Attacks = _MainCharacter.Attacks.list;
    let attackBonus;
    let _line, _cell, _cellText, _rankSpan;

    let effectName;

    /**
     * Nome: Efeito Graduação, crítico | CD vs Resistência
     */
    for(let i = 0; i < _Attacks.length; i++) {
        
        attackBonus = (_Attacks[i].baseAttackBonus > _Attacks[i].skillBonus) ? _Attacks[i].baseAttackBonus : _Attacks[i].skillBonus;

        _line = document.createElement('tr');

        // Título do Poder.
        _cell = document.createElement('td');
        _cell.className = "OffensiveItemCell";
        _cell.style.textAlign = 'left';
        _cell.innerHTML = "<b>" + _Attacks[i].name + "</b> ";

        _line.append(_cell);

        // Bônus de Ataque
        _cell = document.createElement('td');
        _cell.className = "OffensiveItemCell";
        _cell.id = "Attack-" + _Attacks[i].id + '-Bonus';
        _cell.innerHTML = (attackBonus >= 0) ? "+" +  attackBonus : attackBonus;

        _line.append(_cell);

        // Nome do Efeito e Graduações
        _cell = document.createElement('td');
        _cell.className = "OffensiveItemCell";        

        effectName = effectsList.find( element => element.id == _Attacks[i].effectID );
        // Se não achou ID do efeito, põe só grad. Se não, põe nome do efeito.
        if(effectName == undefined) _cellText = "Grad. ";
        else _cellText = effectName.name + " ";              
        _cell.innerHTML = _cellText;

        // Rank
        _rankSpan = document.createElement('span');
        _rankSpan.id = "Attack-"+ _Attacks[i].id +"-Rank";
        _rankSpan.innerHTML = _Attacks[i].rank;

        _cell.append(_rankSpan);

        _line.append(_cell);

        // Alcance
        _cell = document.createElement('td');
        _cell.className = "OffensiveItemCell";

        switch(_Attacks[i].range){
            case 1: 
                _cellText = "Perto"
                break;
            case 2: 
                _cellText = "A Distância (";
                _cellText += (_Attacks[i].rank * 7.5) + "/";
                _cellText += (_Attacks[i].rank * 15) + "/";
                _cellText += (_Attacks[i].rank * 30);
                _cellText += ")"
                break;
            case 3:
                _cellText = "";
                break;
            default: 
                _cellText = "";
                break;
        }

        _cell.innerHTML = _cellText;
        _line.append(_cell);

        // CD do Dano
        _cell = document.createElement('td');
        _cell.className = "OffensiveItemCell";

        _cellText = "CD ";
        // Se é Dano, CD 15 + grad., se não, CD 10 + grad.
        _cellText += (_Attacks[i].effectID == 5012) ? (15 + _Attacks[i].rank) : (10 + _Attacks[i].rank);
        _cellText += " vs " + _Attacks[i].resistance;

        // Se tiver Área
        if(_Attacks[i].area.isArea){
            _cellText += "<br>CD " + (10 + _Attacks[i].rank) + " vs Esquiva para metade do efeito.";
            // Por as graduações de Área.
        }
        
        _cell.innerHTML = _cellText;

        _line.append(_cell);

        $("#OffensiveList").append(_line);
    }

}

/**
 * Adiciona ataque à lista.
 */
function AddAttack() {

}
