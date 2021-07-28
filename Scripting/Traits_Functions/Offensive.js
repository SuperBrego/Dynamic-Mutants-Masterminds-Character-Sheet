function UpdateOffensiveTraits(){
    RenderOffensiveAttacks();
}


function RenderOffensiveAttacks(){
    let tableContent = "";
    let _Attacks = _MainCharacter.Attacks.list;
    
    tableContent += "<table>";
    tableContent += "<tr> <th colspan='4' class='SectionTitle' id='OffensiveTitle'>Ofensiva</th> </tr>"

    /**
     * Nome: Efeito Graduação, crítico | CD vs Resistência
     */
    for(let i = 0; i < _Attacks.length; i++){
        tableContent += "<tr>";
        tableContent += "<td class='OffensiveItemCell'>";
        tableContent += "<b>" + _Attacks[i].name + "</b>:"
        tableContent += "</td>";

        tableContent += "<td class='OffensiveItemCell'>";
        tableContent += "Efeito ";
        tableContent += _Attacks[i].rank;
        tableContent += "</td>";

        tableContent += "<td class='OffensiveItemCell'>";
        tableContent += "CD ";
        // Se é Dano, CD 15 + grad., se não, CD 10 + grad.
        tableContent += (_Attacks[i].isDamage) ? (15 + _Attacks[i].rank) : (10 + _Attacks[i].rank);
        tableContent += " vs " + _Attacks[i].resistance;
        // Se tiver Área
        tableContent += (_Attacks[i].areaID > -1) ? "CD " + (10 + _Attacks[i].rank) + " vs Esquiva para metade do efeito." : "";
        tableContent += "</td>";

        tableContent += "</tr>";
    }

    tableContent += "</table>";

    $("#OffensiveList").html(tableContent);
}

// {id: 0, name: "Desarmado", effectID: 0, attackBonus: 0, rank: this.Strength.totalRanks(), range: 1, isDamage: true, resistance: "Resistência", areaID: -1, descriptors: "Contuso", enhancedRanks: 0},