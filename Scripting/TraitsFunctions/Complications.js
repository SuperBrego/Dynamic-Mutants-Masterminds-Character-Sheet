

function ComplicationsList(){
  let content = "";
  content += "<div id='BiLateralListPopUp'>";
  content += "<div id='BiLateralListItem1'>";
  content += "<table width='100%'>";

  let _currComp;

  for (let i = 0; i < _DefaultComplicationList.length; i++) {
      _currComp = _DefaultComplicationList[i];

  	content += "<tr><td>";
    	content += "<button class='PopUpAddItem' value=" + _currComp.id;
      content += " onclick='AddComplication(this.value)' onmouseover='ShowDescription(this.value, 8)'>";
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

  UpdateComplications(_NewComplication);
}

/******************************************
 * Apresenta as complicações adicionadas
******************************************/
function UpdateComplications(complication){

  let _line, _cell, _input, _delButton, _textArea;

  _line = document.createElement('tr');
  _line.className = complication.instanceID + "Line";

  _cell = document.createElement('td');
  _cell.className = "ComplicationTitleCell";

  _input = document.createElement('input');
  _input.setAttribute('type', 'text');
  _input.setAttribute('value', complication.name);
  _input.setAttribute('onchange', "ChangeComplicationTitle(this.value, " + complication.instanceID + ")");

  _cell.append(_input);

  _line.append(_cell);

  _cell = document.createElement('td');
  _cell.className = "ComplicationTitleCell";
  _cell.style.textAlign = "center";

  _delButton = document.createElement('button');
  _delButton.className = 'DeleteButton';
  _delButton.setAttribute('value', complication.instanceID);
  _delButton.setAttribute('onclick', "RemoveTrait(this.value, 8, "+ complication.instanceID +")");
  _delButton.innerHTML = 'X';

  _cell.append(_delButton);
  _line.append(_cell);

  $("#ComplicationListTable").append(_line);

  _line = document.createElement('tr');
  _line.className = complication.instanceID + "Line";

  _cell = document.createElement('td');
  _cell.className = "ComplicationTextCell";
  _cell.setAttribute('colspan', '2');

  _textArea = document.createElement('textarea');
  _textArea.className = "ComplicationDescription";
  _textArea.setAttribute('onchange',  "ChangeComplicationText(this.value, " + complication.instanceID + ")");

  _cell.append(_textArea);

  _line.append(_cell);

  $("#ComplicationListTable").append(_line);

}

function ChangeComplicationTitle(text, itemID){
  let _QueryComplication = _MainCharacter.Complications.list.find( element => element.instanceID == itemID );
  _QueryComplication.name = text;
}

function ChangeComplicationText(text, itemID){
  let _QueryComplication = _MainCharacter.Complications.list.find( element => element.instanceID == itemID );
  _QueryComplication.description = text;
}