function buatTim(ketua, wakil, ...anggota) {
    if (anggota.length < 3) {
        console.log("Jumlah anggota minimal 3 orang!");
        return;
    }

    return {
        ketua,
        wakil,
        anggota
    };
}

const tim = buatTim("Ari", "Bima", "Citra", "Dewi", "Eko");

console.log(tim);