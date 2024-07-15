function calcolaPrezzo() {
    // Valori input
    const age = document.getElementById('age').value;
    const km = document.getElementById('km').value;

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
    document.getElementById('risultato').textContent = `Prezzo: €${prezzoFinale.toFixed(2)}`;
    console.log(`Prezzo del biglietto: €${prezzoFinale.toFixed(2)}`);
}