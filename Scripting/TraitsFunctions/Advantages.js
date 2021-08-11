/*******************************************
 * Abre a função de adicionar Vantagens.
*******************************************/
function AddAdvantage(item){

  let _toBeAddedElement = _MainCharacter.Advantages.list.find( element => element.id == item );

  if (_toBeAddedElement && !( _toBeAddedElement.additionalDescription != undefined ) ){ return; }
  
  let _newAdv = _AllAdvantagesList.find( element => element.id == item );
  _newAdv = Object.assign({}, _newAdv);
  
  if( _newAdv.additionalDescription != undefined ){
      _newAdv.instanceID = _MainCharacter.Advantages.id;
      _MainCharacter.Advantages.id++;
  }

  _MainCharacter.Advantages.list.push(_newAdv);
  
  // Atualiza a lista de Vantagens pra remover as que já tem.
  $(popUpText).html( AvaliableAdvantagesList() );

  UpdateAdvantages();
}

/**
 * @param {int} id
 * @param {int} rankChange
 * @param {int} advInstID
*/
function ChangeAdvantageRank(){
  let id = arguments[0];
  let rankChange = arguments[1];
  let advInstID = arguments[2];

  let desiredAdvantage;
  if(advInstID == undefined)
    desiredAdvantage = _MainCharacter.Advantages.list.find( _Advantage => _Advantage.id == id );
  else
    desiredAdvantage = _MainCharacter.Advantages.list.find( _Advantage => _Advantage.id == id && _Advantage.instanceID == advInstID );
  
  desiredAdvantage.totalRanks += rankChange;

  UpdateAdvantages();
}


/**********************************************************
 * Atualiza a quantidade de pontos gastos em Vantagens.
**********************************************************/
function UpdateAdvantagesSpent() {
    $("#AdvantagesTitle").html("Vantagens (" + _MainCharacter.totalAdvantagesSpent() + " pontos)");

    UpdateTotalSpent();
}

/******************************************************************
 * Constrói o Popup de Vantagens, com todas as vantagens
 * Posso remodelar a forma que é feita a lista de Vantagens.
  * Quer dizer, a forma de remover as Vantagens: ao adicionar a vantagem, a função que adiciona faz as perguntas lá e então remove da lista. 
  * Assim não fica saltando e quando reabrir, ele já tem o IF de perguntar se já tem na lista de vantagens do jogador.
******************************************************************/
function AvaliableAdvantagesList(){
  let content = "";
  content += "<div id='BiLateralListPopUp'>";
  content += "<div id='BiLateralListItem1'>";
  content += "<table class='PopUpItensTable'>";

  let _isPlayerAquiredAdv;
  let _currAdvantage;

  for (let i = 0; i < _AllAdvantagesList.length; i++) {

    _currAdvantage = _AllAdvantagesList[i];

    _isPlayerAquiredAdv = _MainCharacter.Advantages.list.find(element => element.id == _currAdvantage.id );
    
    // Pergunto se tenho a Vantagem em questão. Se tiver, mas não for de campo preenchível, continua o loop.  
    if( (_isPlayerAquiredAdv != undefined) && !_isPlayerAquiredAdv.additionalDescription != undefined ){ continue; }
    // Se for Idiomas, pula também. ID 2059
    if( _AllAdvantagesList[i].id == 2059 ){ continue; }
    
    content += "<tr><td>";
    content += "<button class='PopUpAddItem' value=" + _currAdvantage.id + " onclick='AddAdvantage(this.value)' onmouseover='ShowDescription(this.value, 4)'>";
    content += _currAdvantage.name;
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

/**********************************
 * Apresenta as Vantagens
**********************************/
function UpdateAdvantages(){

  let tableContent = "";
  tableContent += "<table id='PlayerAdvTable'>";
  
  let adv;

  for (let i = 0; i < _MainCharacter.Advantages.list.length; i++) {

    adv = _MainCharacter.Advantages.list[i];

    tableContent += "<tr>";
    
    if(!adv.ranked){
      tableContent += "<td class='PlayerAdvName-Cell' colspan='2' style='width: 100%;' >";
      tableContent += adv.name;
      if( adv.additionalDescription != undefined ) {
        tableContent += "&emsp;";
        tableContent += "<input type='text' value='"+ adv.additionalDescription +"' name='"+ adv.name +"' onchange='updateAdvantageText(this.value, " + adv.id + ", " + adv.instanceID + ")' >";
      }
      tableContent += "</td>";
    }
    else{
      tableContent += "<td class='PlayerAdvName-Cell' style='width: 75%;' >";
      tableContent += adv.name;
      if( adv.additionalDescription != undefined ) {
        tableContent += "&emsp;";
        tableContent += "<input type='text' value='"+ adv.additionalDescription +"' name='"+ adv.name +"' onchange='updateAdvantageText(this.value, " + adv.id + ", " + adv.instanceID + ")' >";
      }
      tableContent += "</td>";

      // Abre Célula de Graduações
      tableContent += "<td class='PlayerAdvRank-Cell'>";

      // Se o rank total é 1, então não diminuo.
      if(adv.totalRanks == 1){
        tableContent += "<button class='minusButton' onclick='ChangeAdvantageRank("+ adv.id +", -1, "+ adv.instanceID +")' disabled>-</button> ";
      }
      else{
        tableContent += "<button class='minusButton' onclick='ChangeAdvantageRank("+ adv.id +", -1, "+ adv.instanceID +")'>-</button>";
      }

      // Total de Graduações
      tableContent += "<span>"+ adv.totalRanks +"</span>";

      // Botão desligado caso esteja no máximo de graduações.
      if( adv.totalRanks == adv.maxRank ){
        tableContent += " <button class='plusButton' onclick='ChangeAdvantageRank("+ adv.id +", 1, "+ adv.instanceID +")' disabled>+</button>";
      }
      else{
        tableContent += " <button class='plusButton' onclick='ChangeAdvantageRank("+ adv.id +", 1, "+ adv.instanceID +")'>+</button>";
      }
    }

    tableContent += "</td>";  
    tableContent += "<td>";
    tableContent += "<button class='DeleteButton' value='" + adv.id + "' ";
    
    // Se tem descrição adicional, tem então tem que avisar com o ID da instância.
    if( !adv.additionalDescription != undefined ) {
      tableContent += " onclick='RemoveTrait(this.value, 4)'>X</button>";
    }
    else {
      tableContent += " onclick='RemoveTrait(this.value, 4, "+ adv.instanceID + ")'>X</button>";
    }
    tableContent += "</td>";

    tableContent += "</tr>";
  }

  tableContent += "</table>";

  // ******************************************************
  // Busco por Vantagens Aumentadas
  // ******************************************************
  if(_MainCharacter.EnhancedAdvantages.length > 0){

    tableContent += "<br><hr><br>"
    tableContent += "<table id='PlayerEnhancedAdvTable'>";
    for (let i = 0; i < _MainCharacter.EnhancedAdvantages.length; i++) {
      
      adv = _MainCharacter.EnhancedAdvantages[i];

      tableContent += "<tr>";
      tableContent += "<td class='PlayerEnhAdvName-Cell' colspan='4'>";
      tableContent += adv.name;
      
      // Se tem se tiver descrição adicional, põe ela.
      if( !adv.ranked && adv.additionalDescription != undefined ){
        tableContent += adv.name + "&emsp;" + adv.additionalDescription + "";
      }
      // Se tiver graduação mas não descrição adicional, põe ela.
      else if( adv.ranked && !adv.additionalDescription != undefined ){
        tableContent += adv.name + "&emsp;" + adv.totalRanks;
      }
      // Se tiver ambos, põe ambos.
      else{
        tableContent += adv.name + "&emsp;" + adv.additionalDescription + "&emsp;" + adv.totalRanks;
      }
      tableContent += "</td>";
      tableContent += "</tr>";
    }
    tableContent += "</table>";
  }

  $("#AdvantagesListTable").html(tableContent);
  
  UpdateAdvantagesSpent();

  // Como vantagens mexem com Defesas, Ofensiva e Outros Traços, chamo atualização.
  UpdateDefenses();
  UpdateOtherTraits();
  UpdateEquipment();

  // Por fim, chamar atualização de Idiomas
  UpdateLanguages();

}

/******************************************
 * Atualiza o texto das Perícias Extras
******************************************/
function updateAdvantageText(advTraitDesc, advID, advInstID){
  let desiredadvIndex = _MainCharacter.Advantages.list.findIndex( _advantage => _advantage.id == advID && _advantage.instanceID == advInstID );
  _MainCharacter.Advantages.list[desiredadvIndex].additionalDescription = advTraitDesc;
}

/************************
 * Adicionar Idioma
************************/
function AddLanguage(){

  _MainCharacter.Languages.list.push( [_MainCharacter.Languages.id++, ""]);

  _MainCharacter.Languages.rank = parseInt( Math.ceil( Math.log2( _MainCharacter.Languages.list.length ) ) );
  $('#LanguagesTitle').text("Idiomas (" + _MainCharacter.Languages.list.length + " Idiomas/ " + _MainCharacter.Languages.rank + " grads.)");

  UpdateAdvantagesSpent();
  UpdateLanguages();
}

/**
 * Atualizar quantos idiomas tem de acordo com a quantidade
 * de vantagens Idiomas.
 */
function UpdateLanguages(){

  let _LanguageList = _MainCharacter.Languages.list;

  let tableContent = "";
  tableContent += "<table>";
  tableContent += "<tr>";
  tableContent += "<td> <input type='text' onChange='OnLanguageTextChange(this.value, this.id)' value='" + _LanguageList[0][1] + "' id='" + _LanguageList[0][0] + "' > </td> <td width='60'></td>";

  for(let i = 1; i < _LanguageList.length; i++){
    if(i % 2 == 0) tableContent += "</tr> <tr>";

    tableContent += "<td> <input type='text' placeholder='Idioma...' onChange='OnLanguageTextChange(this.value, this.id)' value='" + _LanguageList[i][1] + "' id='" + _LanguageList[i][0] + "' > </td>";
    tableContent += "<td> <button class='DeleteButton' value='" + _LanguageList[i][0] + "' onclick='RemoveLanguage(this.value)'>X</button> </td>";
  }
  tableContent += "</tr>";
  tableContent += "</table>";

  $("#LanguagesListTable").html(tableContent);

}

// Armaze ou muda o texto de
function OnLanguageTextChange(text, id){
  let editLanguage = _MainCharacter.Languages.list.find( element => element[0] == id );
  editLanguage[1] = text;

  UpdateLanguages();
}

// Remove Idioma
function RemoveLanguage(id){
  let removeIndex = _MainCharacter.Languages.list.findIndex( element => element[0] == id );
  _MainCharacter.Languages.list.splice(removeIndex, 1);

  _MainCharacter.Languages.rank = parseInt( Math.ceil( Math.log2(_MainCharacter.Languages.list.length) ) );

  if( _MainCharacter.Languages.rank == 0) $('#LanguagesTitle').text("Idiomas");
  else $('#LanguagesTitle').text("Idiomas (" + _MainCharacter.Languages.list.length + " Idiomas/ " + _MainCharacter.Languages.rank + " grads.)");

  UpdateAdvantagesSpent();
  UpdateLanguages();
}

function UpdateEquipment(){
  let equipPoints = _MainCharacter.Advantages.list.find( element => element.id == 4048 );

  if(equipPoints == undefined) {
    $("#EquipamentTitle").text( "Equipamentos" );
  }
  else {
    let equipTitleText = "Equipamentos (" + (equipPoints.totalRanks * 5) + " pontos" ;
    $("#EquipamentTitle").text( "Equipamentos (" + (equipPoints.totalRanks * 5) + " pontos)" );
  }
  
}