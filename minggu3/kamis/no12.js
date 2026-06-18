function hitungUmur(tanggalLahir) {
    const lahir = new Date(tanggalLahir);
    const sekarang = new Date();

    const selisihMs = sekarang - lahir;
    const nama = "Gibran";
    const umurHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));
    const umurBulan = Math.floor(umurHari / 30);
    const umurTahun = Math.floor(umurHari / 365);
    

    console.log(nama)
    console.log("Umur dalam tahun :", umurTahun, "tahun");
    console.log("Umur dalam bulan :", umurBulan, "bulan");
    console.log("Umur dalam hari  :", umurHari, "hari");
}

hitungUmur("2008-04-28");