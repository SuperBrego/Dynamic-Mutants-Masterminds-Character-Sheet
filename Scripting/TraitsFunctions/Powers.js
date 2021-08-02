
function AvaliableEffectList(){
    let content = "";
    content += "<div id='BiLateralListPopUp'>";
    content += "<div id='BiLateralListItem1'>";
    content += "<table>";

    for (let i = 0; i < _EffectsList.length; i++) {

        curEffect = _EffectsList[i];

        content += "<tr><td>";
        content += "<button class='PopUpAddItem' value=" + curEffect.id + " onclick='AddPower(this.value)' onmouseover='ShowDescription(this.value, 5)'>";
        content += curEffect.name;
        content += "</button>";
        content += "</td></tr>";
    }

    content += "</table>";
    content += "</div>"; // Fim de Item 1

    // Campo para descrição das Vantagens
    content += "<div id='BiLateralListItem2'> </div>"; 
    content += "</div>"; // Fim de Grid
    return content;
}


function AddPower(effectID){
    let _effect = _EffectsList.Advantages.list.find( element => element.id == effectID );

    // Cria-se um novo poder.
    let _power = Object.assign({}, powerDefault);
    _power.instanceID = _MainCharacter.Powers.id++;
    _power.effectID = effectID;
    _power.baseCost = _effect.baseCost;

    _MainCharacter.Powers.list.push(_power);

    // Append Power.

}

function RemovePower() {


}