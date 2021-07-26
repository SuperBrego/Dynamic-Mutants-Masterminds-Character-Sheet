/********************
 * 
********************/
var otherGenderInput = "<input type='text' placeholder='Ponha detalhes aqui...' value='" + _PersonalTraits.genderSpecifics + "' id='GenderSpecifics' onChange='ChangeGenderInfo(this.value)'>";

function AppendFunctionsPersonalTraits(){
    $("#GenderSelection").on( "change", function(){
        changeGender(this.value)
    } );
}

function RenderPersonalTraits() {

    RenderGender();
    RenderAge();
    RenderHeightWeight();
    RenderCharacterBackground();
    RenderGallery();
}

/**
 * Funções de Gênero
 */
function RenderGender(){
    if(_PersonalTraits.genderID == 0){   
        $("#GenderSelectionCell").append(otherGenderInput);
    }
    else{
        $("#GenderSelectionCell #GenderSpecifics").remove();
        _PersonalTraits.genderSpecifics = "";
    }

    let _GenderItens = "";
    for(let i = 0; i < _PersonalTraits.genders.length; i++){
        _GenderItens += "<option value='" + i + "'> " + _PersonalTraits.genders[i] + "</option>"
    }
    
    $("#GenderSelection").html(_GenderItens);
    $("#GenderSelection").val(_PersonalTraits.genderID);
}

function changeGender(genderID){
    _PersonalTraits.genderID = genderID;
    RenderPersonalTraits();
}

function ChangeGenderInfo(text){
    _PersonalTraits.genderSpecifics = text;
}

/**
 * Funções de Idade
 */
function RenderAge(){
    $("#CharacterAge").val(_PersonalTraits.age);
}

function ChangeAge(_newAge){
    _PersonalTraits.age = _newAge;
}

/**
 * Funções de Altura e Peso
 */
function RenderHeightWeight(){
    
    let _stringDisplay = "" + _PersonalTraits.height;
    _stringDisplay = (Math.floor(_PersonalTraits.height / 100)) + "," + (_PersonalTraits.height % 100) + "m";
    $("#heightInMeters").text(_stringDisplay);

    $("#CharacterHeight").val(_PersonalTraits.height);
    $("#CharacterWeight").val(_PersonalTraits.weight);
}

function ChangeHeight(_newHeight){
    _PersonalTraits.height = _newHeight;

    let _stringDisplay = "" + _PersonalTraits.height;
    _stringDisplay = (Math.floor(_PersonalTraits.height / 100)) + "," + (_PersonalTraits.height % 100) + "m";
    $("#heightInMeters").text(_stringDisplay);
}

function ChangeWeight(_newWeight){
    _PersonalTraits.weight = _newWeight;
}

function RenderCharacterBackground(){
    $("#BackgroundDescription").text( _PersonalTraits.background );
}

function ChangeCharacterBackground(_newBGInfo){
    _PersonalTraits.background = _newBGInfo;
}

function AddImage(){

    _PersonalTraits.images.push( [_PersonalTraits.imageID, ""] );
    _PersonalTraits.imageID++;

    RenderGallery();
}

function ChangeImageGallery(imgID, imgURL){
    let _img = _PersonalTraits.images.find( element => element[0] == imgID );
    _img[1] = imgURL;

    console.log(_PersonalTraits.images);

    RenderGallery();
}

function RenderGallery(){
    let tableURLs = "";
    let tableImages = "";

    let _imgID;
    let _imgURL;

    let imgRegex = new RegExp(/\.(jpeg|jpg|gif|png)$/);
    tableURLs += "<table>";
    tableImages += "<table>";
    
    tableURLs += "<tr>";
    tableImages += "<tr>";
    for(let i = 0; i < _PersonalTraits.images.length; i++){
        _imgID = _PersonalTraits.images[i][0];
        _imgURL = _PersonalTraits.images[i][1];
        
        if(i % 2 == 0){
            tableURLs += "</tr>";
            tableURLs += "<tr>";
            tableImages += "</tr>";
            tableImages += "</tr>";
        }
        tableURLs += "<td class='URLInputCell'>";
        tableURLs += "<input type='text' class='ImageURLInput' id='" + _imgID + "' placeholder='Ponha o URL...' value='" + _imgURL + "' onchange='ChangeImageGallery(this.id, this.value)'>"
        tableURLs += "<button class='DeleteButton' value='" + _imgID + "' onclick='RemoveImage(this.value)'>X</button>";
        tableURLs += "</td>";

        tableImages += "<td class='GalleryImageCell' colspan='2'>";
        if(_imgURL.match(imgRegex))
            tableImages += "<img src='" + _imgURL + "' class='GalleryImage' alt='Imagem " + _imgID + "'>"
        tableImages += "</td>";
        
    }
    tableURLs += "</tr>";
    tableImages += "</tr>";

    tableURLs += "</table>";
    tableImages += "</table>";

    $("#GalleryURLs").html(tableURLs);
    $("#ImageGallery").html(tableImages);
}

function RemoveImage(removeImgID){
    let removeIndex = _PersonalTraits.images.findIndex( element => element[0] == removeImgID );
    _PersonalTraits.images.splice(removeIndex, 1);

    RenderGallery();
}