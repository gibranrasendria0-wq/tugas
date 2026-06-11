function cariAngka(array, angka) {
    let ditemukan = array.includes(angka);
    let posisi = array.indexOf(angka);

    if (ditemukan) {
        console.log("Angka " + angka + " ditemukan!");
        console.log("Posisi indeksnya: " + posisi);
    } else {
        console.log("Angka " + angka + " tidak ditemukan.");
    }
}

let angka = [12, 5, 7, 20, 9];
cariAngka(angka, 20);