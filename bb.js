window.onload = function zeigeWillkommen() {
    console.log("Willkommen auf der Seite der Apotheke zur Gesundheit!");
};

function zeigeDetails(){
    document.getElementById("details").text = "adsf asdf adsf";
}


function check(){

    if(document.getElementById("email").value == "")
        alert("Bitte geben Sie einen Text ein");

}

function schleife(){

    //For-Schleife in JS

    text = "";

    for(var i=0;i <10; i++){

       text = text + "Ich bin Zeile "+i;
  
    }
    document.getElementById("email").value = text;

}//#endregion


