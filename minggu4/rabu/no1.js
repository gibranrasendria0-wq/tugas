const siswa = [
    {
        id: 1,
        nama: "Ari",
        umur: 17,
        nilai: 85
    },
    {
        id: 2,
        nama: "Bima",
        umur: 18,
        nilai: 72
    },
    {
        id: 3,
        nama: "Citra",
        umur: 17,
        nilai: 95
    },
    {
        id: 4,
        nama: "Dewi",
        umur: 16,
        nilai: 68
    }
];

//  nampilin Data
siswa.forEach((s) => {
    console.log(`Nama  : ${s.nama}`);
    console.log(`Umur  : ${s.umur}`);
    console.log(`Nilai : ${s.nilai}`);
    console.log(`-------------------`);
});