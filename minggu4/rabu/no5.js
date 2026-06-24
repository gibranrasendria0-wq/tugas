// ================================
// TUGAS PRAKTIK JSON DASAR
// ================================

// DATA AWAL
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
// ngurutin siswa dari nilai paling tinggi ke paling rendah
const siswaRanking = [...siswa].sort((a, b) => b.nilai - a.nilai);

console.log("Ranking Siswa Berdasarkan Nilai:");
siswaRanking.forEach((s, index) => {
    console.log(`Peringkat ${index + 1} : ${s.nama} (${s.nilai})`);
});