/**************************
 * Variáveis
**************************/
var _PlayerAdvantages = [];
var _PlayerEnhancedAdvantages = [];
var _GenAdvantageID = 0;
var _LanguageRanks = 0;
var _LanguagesID = 1;
var _LanguageList = [[0, "Idioma Nativo"]];

/*******************************************
 * Abre a função de adicionar Vantagens.
*******************************************/
function AddAdvantage(item){

  let _toBeAddedElement = _PlayerAdvantages.find( element => element.id == item );

  if (_toBeAddedElement && !( _toBeAddedElement.hasOwnProperty('additionalDescription') ) ){ return; }
  
  //_advantageID++;
  let _newAdv = _AllAdvantagesList.find( element => element.id == item );
  _newAdv = Object.assign({}, _newAdv);
  
  if( _newAdv.hasOwnProperty('additionalDescription') ){
      _newAdv.instanceID = _GenAdvantageID;
      _GenAdvantageID++;
  }

  _PlayerAdvantages.push(_newAdv);
  
  // Atualiza a lista de Vantagens pra remover as que já tem.
  popUpText.innerHTML = AvaliableAdvantagesList();

  UpdateAdvantages();
}
  
/**************************************
 * Função para remover Vantagens
**************************************/
function RemoveAdvantage(id) {

  let desiredIndex = _PlayerAdvantages.findIndex( _Advantage => _Advantage.id == id );
  _PlayerAdvantages.splice(desiredIndex,1);

  UpdateAdvantages();
}


/**************************************
 * Remove Vantagem, com instâncias.
**************************************/
function RemoveAdvantage(id, advInstID) {

  let desiredIndex = _PlayerAdvantages.findIndex( _Advantage => _Advantage.id == id && _Advantage.instanceID == advInstID );
  _PlayerAdvantages.splice(desiredIndex,1);

  UpdateAdvantages();
}

/**************************************
 * Aumenta a graduação da Vantagem
**************************************/
function increaseRank(id){
  let desiredAdvantage = _PlayerAdvantages.find( _Advantage => _Advantage.id == id );
  desiredAdvantage.totalRanks = desiredAdvantage.totalRanks + 1;

  UpdateAdvantages();
}

function increaseRank(id, advInstID){
  let desiredAdvantage = _PlayerAdvantages.find( _Advantage => _Advantage.id == id && _Advantage.instanceID == advInstID );
  desiredAdvantage.totalRanks = desiredAdvantage.totalRanks + 1;

  UpdateAdvantages();
}

/**************************************
 * Reduz a graduação da Vantagem
**************************************/
function decreaseRank(id){
  let desiredAdvantage = _PlayerAdvantages.find( _Advantage => _Advantage.id == id );
  desiredAdvantage.totalRanks = desiredAdvantage.totalRanks - 1;

  UpdateAdvantages();
}

function decreaseRank(id, advInstID){
  let desiredAdvantage = _PlayerAdvantages.find( _Advantage => _Advantage.id == id && _Advantage.instanceID == advInstID );
  desiredAdvantage.totalRanks = desiredAdvantage.totalRanks - 1;

  UpdateAdvantages();
}

/**********************************************************
 * Atualiza a quantidade de pontos gastos em Vantagens.
**********************************************************/
function UpdateAdvantagesSpent() {
    let sum = 0;

    for(let i = 0; i < _PlayerAdvantages.length; i++){
      if( _PlayerAdvantages[i].ranked )
        sum += _PlayerAdvantages[i].totalRanks;
      else sum += 1;
    }

    // Soma Idiomas
    sum += _LanguageRanks;

    // Vantagens = 3.
    spentPoints[3][1] = sum;
    $("#AdvantagesTitle").html("Vantagens (" + sum + " pontos)");

    UpdateTotalSpent();
}

/******************************************************************
 * Constrói o Popup de Vantagens, com todas as vantagens
******************************************************************/
function AvaliableAdvantagesList(){
    let content = "";
    content += "<div id='advantagesPopUp'>";
    content += "<div id='advantagesPopUpGridItem1'>";
    content += "<table>";
  
    let _isPlayerAquiredAdv;
    let _currAdvantage;

    for (let i = 0; i < _AllAdvantagesList.length; i++) {
  
      _currAdvantage = _AllAdvantagesList[i];
  
      _isPlayerAquiredAdv = _PlayerAdvantages.find(element => element.id == _currAdvantage.id );
      
      // Pergunto se tenho a Vantagem em questão. Se tiver, mas não for de campo preenchível, continua o loop.  
      if( (_isPlayerAquiredAdv != undefined) && !_isPlayerAquiredAdv.hasOwnProperty('additionalDescription') ){ continue; }
      // Se for Idiomas, pula também. ID 2059
      if( _AllAdvantagesList[i].id == 2059 ){ continue; }
      
      content += "<tr><td class=''>";
      content += "<button class='addAdvItem' value=" + _currAdvantage.id + " onclick='AddAdvantage(this.value)' onmouseover='showAdvDesc(this.value)'>";
      content += _currAdvantage.name;
      content += "</button>";
      content += "</td></tr>";
    }
    content += "</table>";
    content += "</div>"; // Fim de Item 1

    // Campo para descrição das Vantagens
    content += "<div id='advantagesPopUpGridItem2'>";
    content += "</div>"; // Fim de Item 2
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

  for (let i = 0; i < _PlayerAdvantages.length; i++) {

    adv = _PlayerAdvantages[i];

    tableContent += "<tr>";
    
    if(!adv.ranked){
      tableContent += "<td class='PlayerAdvName-Cell' colspan='2' style='width: 100%;' >";
      tableContent += adv.name;
      if( adv.hasOwnProperty('additionalDescription') ) {
        tableContent += "&emsp;";
        tableContent += "<input type='text' value='"+ adv.additionalDescription +"' name='"+ adv.name +"' onchange='updateAdvantageText(this.value, " + adv.id + ", " + adv.instanceID + ")' >";
      }
      tableContent += "</td>";
    }
    else{
      tableContent += "<td class='PlayerAdvName-Cell' style='width: 75%;' >";
      tableContent += adv.name;
      if( adv.hasOwnProperty('additionalDescription') ) {
        tableContent += "&emsp;";
        tableContent += "<input type='text' value='"+ adv.additionalDescription +"' name='"+ adv.name +"' onchange='updateAdvantageText(this.value, " + adv.id + ", " + adv.instanceID + ")' >";
      }
      tableContent += "</td>";

      // Abre Célula de Graduações
      tableContent += "<td class='PlayerAdvRank-Cell'>";

      // Se o rank total é 1, então não diminuo.
      if(adv.totalRanks == 1){
        tableContent += "<button class='minusButton' onclick='decreaseRank("+ adv.id +", "+ adv.instanceID +")' disabled>-</button> ";
      }
      else{
        tableContent += "<button class='minusButton' onclick='decreaseRank("+ adv.id +", "+ adv.instanceID +")'>-</button>";
      }

      // Total de Graduações
      tableContent += "<span>"+ adv.totalRanks +"</span>";

      // Botão desligado caso esteja no máximo de graduações.
      if( adv.totalRanks == adv.maxRank ){
        tableContent += " <button class='plusButton' onclick='increaseRank("+ adv.id +", "+ adv.instanceID +")' disabled>+</button>";
      }
      else{
        tableContent += " <button class='plusButton' onclick='increaseRank("+ adv.id +", "+ adv.instanceID +")'>+</button>";
      }
    }

    tableContent += "</td>";  
    tableContent += "<td>";
    tableContent += "<button class='DeleteButton' value='" + adv.id + "' ";
    
    // Se tem descrição adicional, tem então tem que avisar com o ID da instância.
    if( !adv.hasOwnProperty('additionalDescription') ) {
      tableContent += " onclick='RemoveAdvantage(this.value)'>X</button>";
    }
    else {
      tableContent += " onclick='RemoveAdvantage(this.value, "+ adv.instanceID + ")'>X</button>";
    }
    tableContent += "</td>";

    tableContent += "</tr>";
  }

  tableContent += "</table>";

  // ******************************************************
  // Busco por Vantagens Aumentadas
  // ******************************************************
  if(_PlayerEnhancedAdvantages.length > 0){

    tableContent += "<br><hr><br>"
    tableContent += "<table id='PlayerEnhancedAdvTable'>";
    for (let i = 0; i < _PlayerEnhancedAdvantages.length; i++) {
      
      adv = _PlayerEnhancedAdvantages[i];

      tableContent += "<tr>";
      tableContent += "<td class='PlayerEnhAdvName-Cell' colspan='4'>";
      tableContent += adv.name;
      
      // Se tem se tiver descrição adicional, põe ela.
      if( !adv.ranked && adv.hasOwnProperty('additionalDescription') ){
        tableContent += adv.name + "&emsp;" + adv.additionalDescription + "";
      }
      // Se tiver graduação mas não descrição adicional, põe ela.
      else if( adv.ranked && !adv.hasOwnProperty('additionalDescription') ){
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

  // Por fim, chamar atualização de Idiomas
  UpdateLanguages();

}

/******************************************
 * Atualiza o texto das Perícias Extras
******************************************/
function updateAdvantageText(advTraitDesc, advID, advInstID){
  let desiredadvIndex = _PlayerAdvantages.findIndex( _advantage => _advantage.id == advID && _advantage.instanceID == advInstID );
  _PlayerAdvantages[desiredadvIndex].additionalDescription = advTraitDesc;
}

/************************
 * Adicionar Idioma
************************/
function AddLanguage(){

  _LanguageList.push( [_LanguagesID++, ""]);

  _LanguageRanks = parseInt( Math.ceil( Math.log2(_LanguageList.length) ) );
  $('#LanguagesTitle').text("Idiomas (" + _LanguageList.length + " Idiomas/ " + _LanguageRanks + " grads.)");

  UpdateAdvantagesSpent();
  UpdateLanguages();
}

/**
 * Atualizar quantos idiomas tem de acordo com a quantidade
 * de vantagens Idiomas.
 */
function UpdateLanguages(){

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
  let editLanguage = _LanguageList.find( element => element[0] == id );
  editLanguage[1] = text;

  UpdateLanguages();
}

// Remove Idioma
function RemoveLanguage(id){
  let removeIndex = _LanguageList.findIndex( element => element[0] == id );
  _LanguageList.splice(removeIndex, 1);

  _LanguageRanks = parseInt( Math.ceil( Math.log2(_LanguageList.length) ) );
  if( _LanguageRanks == 0) $('#LanguagesTitle').text("Idiomas");
  else $('#LanguagesTitle').text("Idiomas (" + _LanguageList.length + " Idiomas/ " + _LanguageRanks + " grads.)");

  UpdateAdvantagesSpent();
  UpdateLanguages();
}