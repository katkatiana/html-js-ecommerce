
//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const changeTag = function() {
    const myTitle = document.querySelector(`h1#mambo`)
    console.log(myTitle.innerText)
    myTitle.innerText = "DO NOT PHONE ME"
    event.stopPropagation()
}


const changeColor = function() {
    const myPage = document.querySelector(`body`)
    myPage.style.backgroundColor = "lightblue"
}

const changeAddress = function() {
    const newAddress = document.querySelector(`.address`)
    newAddress.innerText = "Via dei Sani di mente, 1 - unknown"
    event.stopPropagation()
}

const createClass = function() {
    const newClass = document.querySelectorAll(`a`)
    for (let i = 0; i < newClass.length; i++) {
        newClass[i].classList.toggle("nameLink")
    }
    event.stopPropagation()
}    


