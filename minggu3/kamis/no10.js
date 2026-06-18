function buatVoting(namaKandidat) {
    let jumlahSuara = 0;

    return {
        vote() {
            jumlahSuara++;
            console.log("Vote untuk " + namaKandidat + " berhasil");
        },

        hasil() {
            console.log(
                namaKandidat + " mendapatkan " + jumlahSuara + " suara"
            );
        }
    };
}

const kandidatA = buatVoting("Draxx");

kandidatA.vote();
kandidatA.vote();
kandidatA.vote();
kandidatA.hasil();