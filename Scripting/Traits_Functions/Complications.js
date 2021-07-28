

function ComplicationsList(){
  let content = "";
  content += "<div id='BiLateralListPopUp'>";
  content += "<div id='BiLateralListItem1'>";
  content += "<table>";

  let _currComp;

  for (let i = 0; i < _DefaultComplicationList.length; i++) {
      _currComp = _DefaultComplicationList[i];

  	content += "<tr><td>";
    	content += "<button class='PopUpAddItem' value=" + _currComp.id;
      content += " ondblclick='AddComplication(this.value)' onmouseover='ShowDescription(this.value, 8)'>";
    	content += _currComp.name;
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

/*******************************************
 * Abre a função de adicionar Vantagens.
*******************************************/
function AddComplication(itemID){

  let complicationName = _DefaultComplicationList.find( element => element.id == itemID ).name;
  let _NewComplication = Object.assign({}, _PlayerComplication);

  _NewComplication.name = complicationName;
  _NewComplication.instanceID = _MainCharacter.Complications.id++;

  _MainCharacter.Complications.list.push(_NewComplication);

  UpdateComplications();
}

/******************************************
 * Apresenta as complicações adicionadas
******************************************/
function UpdateComplications(){
  let tableContent = "";
  tableContent += "<table>"

  let _comp;

  for(let i = 0; i < _MainCharacter.Complications.list.length; i++){

    _comp = _MainCharacter.Complications.list[i];

    tableContent += "<tr> <td class='ComplicationTitleCell'>"
    tableContent += "<input type='text' value='" + _comp.name + "' " 
    tableContent += " onchange='ChangeComplicationTitle(this.value, " + _comp.id + ")' '>";
    tableContent += "</td>";
    tableContent += "<td class='ComplicationTitleCell' style='text-align: center;'>";
    tableContent += "<button class='DeleteButton' value='" + _comp.id + "' onclick='RemoveTrait(this.value, 8)'>X</button>";
    tableContent += "</td>";
    tableContent += "</tr>";

    tableContent += "<tr> <td class='ComplicationTextCell' colspan='2'> ";
    tableContent += "<textarea class='ComplicationDescription'"
    tableContent += "onchange='ChangeComplicationText(this.value, " + _comp.id + ")'></textarea>";
    tableContent += "</td>";
    tableContent += "</tr>";
  }
  tableContent += "</table>"

  $("#ComplicationListTable").html(tableContent);
}

function ChangeComplicationTitle(text, itemID){
  let _QueryComplication = _MainCharacter.Complications.list.find( element => element.id == itemID );
  _QueryComplication.name = text;
}

function ChangeComplicationText(text, itemID){
  let _QueryComplication = _MainCharacter.Complications.list.find( element => element.id == itemID );
  _QueryComplication.description = text;
}