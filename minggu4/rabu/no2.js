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
// nyari nilai paling tinggi
const nilaiTertinggi = Math.max(...siswa.map(s => s.nilai));
const siswaNilaiTertinggi = siswa.find(s => s.nilai === nilaiTertinggi);

console.log(`Siswa dengan nilai tertinggi: ${siswaNilaiTertinggi.nama} (${siswaNilaiTertinggi.nilai})`);

// nycari nilai paling rendah
const nilaiTerendah = Math.min(...siswa.map(s => s.nilai));
const siswaNilaiTerendah = siswa.find(s => s.nilai === nilaiTerendah);

console.log(`Siswa dengan nilai terendah: ${siswaNilaiTerendah.nama} (${siswaNilaiTerendah.nilai})`);

// ghitung nilai rata rata
const totalNilai = siswa.reduce((sum, s) => sum + s.nilai, 0);
const rataRataNilai = totalNilai / siswa.length;

console.log(`Rata-rata nilai seluruh siswa: ${rataRataNilai.toFixed(2)}`);