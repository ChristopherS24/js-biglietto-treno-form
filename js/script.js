function calcolaPrezzo() {
    // Valori input
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;

    // Prezzo base
    const prezzoBase = km * 0.21;
    let sconto = 1;

    // Applica gli sconti
    if (age <= 18) {
        sconto = 0.8;
    }
    else if (age >= 65) {
        sconto = 0.6;
    }

    let prezzoFinale = prezzoBase * sconto;
    

    // Stampa il risultato in console
    console.log(`Prezzo del biglietto: €${prezzoFinale.toFixed(2)}`);
}