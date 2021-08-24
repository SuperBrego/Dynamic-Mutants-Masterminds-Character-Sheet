// usar listeners em vez de onClicks https://www.w3schools.com/js/js_htmldom_eventlistener.asp

var _MainCharacter;

/******************
 * Popup itens
******************/
let modal;
let popUpClose;
let popUpText;

/* **************************************************************************************** */

$(document).ready(function() {

  $("#defaultOpen").click();
  
  _MainCharacter = Object.assign({}, Character);

  SetPopUp();

  RenderTraits();
  AppendFunctions();

  UpdateTraits();

});

/*********************************************************
 * Renderiza tudo que é dinâmico
*********************************************************/
function RenderTraits(){
  RenderBaseSkillList();
  RenderPersonalTraits();
  RenderOffensiveAttacks();
}

/************************************
 * Agrega Funções a itens criados
************************************/
function AppendFunctions() {
  AppendFunctionsPersonalTraits();
}

/*********************************************************
** Atualiza as características em cada item da ficha.
*********************************************************/
function UpdateTraits() {
  UpdateSpent();
  UpdateDefenses();
  UpdateSkills();
  UpdateAdvantages();
  UpdateOtherTraits();
  UpdateAttacks();
}

/*********************************************************
 * Atualiza o gasto.
*********************************************************/
function UpdateSpent(){
  UpdateAbilitiesSpent();
  UpdateDefensesSpent();
  UpdateSkillsSpent();
  UpdateAdvantagesSpent();
  UpdatePowersSpent();

  UpdateTotalSpent();
}

/********************************
* Atualiza o total de pontos.
********************************/
function UpdateTotalSpent(){
  $("#totalSpentPoints").html( parseFloat( _MainCharacter.totalSpent() ) );
}


/***********************************************************
 * Valida se a graduação é aceitável para o campo
***********************************************************/
function RankValidation(rank, isAbility){
  
  /* Se não for uma Habilidade, tem que voltar 0 caso fique vazio
  * Se não, retorna -5.
  */
  if(rank == "" && !isAbility) return 0;
  else if (rank == "" && isAbility) return -5;

  // Garanto um INT e retorno.
  var _newRank = parseInt(rank);
  return _newRank;

}

function RemoveTrait(){
  let traitID = arguments[0];
  let traitType = arguments[1];
  let traitInstanceID = arguments[2];

  let desiredIndex, lineID;
  let power;

  switch(traitType){
    // Perícias
    case 3: 
      desiredIndex = _MainCharacter.ExtraSkills.list.findIndex( element => element.id == traitID && element.instanceID == traitInstanceID );

      lineID = _MainCharacter.ExtraSkills.list[desiredIndex].instanceID + "Line";

      _MainCharacter.ExtraSkills.list.splice(desiredIndex, 1);
      $('#AdditionalSkillsList tr#' + lineID).remove();

      UpdateSkillsSpent();
    break;
    // Vantagens
    case 4: 
      if(traitInstanceID == undefined )
        desiredIndex = _MainCharacter.Advantages.list.findIndex( element => element.id == traitID );
      else 
        desiredIndex = _MainCharacter.Advantages.list.findIndex( element => element.id == traitID && element.instanceID == traitInstanceID );
        
      _MainCharacter.Advantages.list.splice(desiredIndex,1);
      UpdateAdvantages();
      break;
    //---------------------------------------------------
    // Poderes
    //---------------------------------------------------
    case 5: 
      let powerIndex = _MainCharacter.Powers.list.findIndex( element => element.id == traitID );
      _MainCharacter.Powers.list.splice(powerIndex, 1);

      $("#Power" + traitID).remove();

      UpdatePowersSpent();
      break;

    // Modificadores
    case 6: 
      let modifierIndex;
      power = _MainCharacter.Powers.list.find( element => element.id == traitID );
      let modifier = _ModifiersList.find( element => element.id == traitInstanceID);
      RemovedModifierTreatment(power, modifier);

      if(modifier.flat){
        modifierIndex = power.flats.findIndex(element => element.id == traitInstanceID);
        power.flats.splice(modifierIndex, 1);
      }
      else{
        if(modifier.extra){
          modifierIndex = power.extras.findIndex(element => element.id == traitInstanceID);
          power.extras.splice(modifierIndex, 1);
        }
        else{
          modifierIndex = power.flaws.findIndex(element => element.id == traitInstanceID);
          power.flaws.splice(modifierIndex, 1);
        }
      }

      UpdateKeyTraits(power);
      $("#Power" + traitID + " tr #Mod-"+ traitInstanceID).remove();

      UpdatePowersSpent();
      break;
    // Complicações
    case 8: 
      desiredIndex = _MainCharacter.Complications.list.findIndex( element => element.instanceID == traitInstanceID );
      
      lineID = _MainCharacter.Complications.list[desiredIndex].instanceID + "Line";
      
      _MainCharacter.Complications.list.splice(desiredIndex, 1);
      $('#ComplicationListTable tr.' + lineID).remove();
      break;
    // Opções de Poder.
    case 9:
      power = _MainCharacter.Powers.list.find( element => element.id == traitID );
      desiredIndex = power.powerOptions.findIndex( element => element.id == traitInstanceID );
      let powerOption = power.powerOptions[desiredIndex];

      let effectID = power.effectID;
      // Se é Ambiente, tem que mudar o custo por graduação.
      if(effectID == 5003){ 
        power.baseCost -= powerOption.totalRanks; 
        if(power.baseCost == 0) power.baseRanks = 0;
      }
      // Qualquer outro.
      else{
        if(powerOption.totalRanks == undefined) ChangeRank(traitID, -1);
        else ChangeRank(traitID, -powerOption.totalRanks);
      }

      power.powerOptions.splice(desiredIndex, 1);

      UpdateKeyTraits(power);
      $("#Power" + traitID + " tr #Option-"+ traitInstanceID).remove();

      UpdatePowersSpent();
      break;
    default: return;
  }

}


/*********************************************************
 * Abre página inicial que tenha a ID.
*********************************************************/

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = $(".tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = $(".tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  var sections = $(".SectionTitle");
  for (i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = color;
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
  
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}