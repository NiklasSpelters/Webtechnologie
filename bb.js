window.onload = function zeigeWillkommen() {
    console.log("Willkommen auf der Seite der Apotheke zur Gesundheit!");
};

function zeigeDetails() {
    alert("Wir bieten auch Beratungen zu Medikamenten und alternativen Behandlungsmethoden an.");
}

function überprüfeFormular() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const nachricht = document.getElementById("nachricht").value.trim();
    let fehlermeldung = "";

    if (name === "") fehlermeldung += "Bitte geben Sie Ihren Namen ein.\n";
    if (email === "") fehlermeldung += "Bitte geben Sie Ihre E-Mail-Adresse ein.\n";
    if (nachricht === "") fehlermeldung += "Bitte geben Sie eine Nachricht ein.\n";

    if (fehlermeldung !== "") {
        alert(fehlermeldung);
        return false;
    }
    alert("Formular erfolgreich abgesendet!");
    return true;
}


function checkForm() {

    var anz_fehler = 0;

    for (var i=0; i<3; i++)
    {
        if (document.forms[0].elements[i].value == "")
            anz_fehler += 1;
    }

    if (anz_fehler > 0) {
        alert(`Es gibt mindestens ${anz_fehler} Fehler im Formular`);
        return false;
    }
    alert("Formular erfolgreich abgesendet!");
    return true;
}





function hervorheben() {
    const farben = ["red", "green", "blue", "orange", "purple"];
    const zufallsFarbe = farben[Math.floor(Math.random() * farben.length)];
    document.querySelector("ul").style.color = zufallsFarbe;
}

function zeigeTeamInfo(beschreibung) {
    alert(beschreibung);
}

// Liste der Dienstleistungen
const dienstleistungen = [
    "Beratung zu Medikamenten",
    "Blutdruckmessung",
    "Impfberatung",
    "ErnÃ¤hrungsberatung",
    "Lieferservice fÃ¼r Medikamente"
];

// Funktion zur dynamischen Erzeugung der Dienstleistungsliste bei Klick
function zeigeDienstleistungen() {
    const liste = document.getElementById("dienstleistungen-liste");
    
    // ÃœberprÃ¼fen, ob die Liste bereits Elemente enthÃ¤lt
    if (liste.children.length > 0) {
        alert("Die Dienstleistungen sind bereits angezeigt.");
        return;
    }

    // Schleife Ã¼ber die Dienstleistungen
    for (let i = 0; i < dienstleistungen.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = dienstleistungen[i];
        liste.appendChild(listItem);  // HinzufÃ¼gen des Listenelements zur HTML-Liste
    }
}


