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
function laporanKelas() {
    // 1. Jumlah siswa
    const jumlahSiswa = siswa.length;
    
    // 2. Rata-rata nilai
    const totalNilaiKelas = siswa.reduce((sum, s) => sum + s.nilai, 0);
    const rataRataKelas = totalNilaiKelas / siswa.length;
    
    // 3. Nilai tertinggi
    const nilaiTertinggiKelas = Math.max(...siswa.map(s => s.nilai));
    
    // 4. Nilai terendah
    const nilaiTerendahKelas = Math.min(...siswa.map(s => s.nilai));
    
    // 5. Daftar siswa di atas rata-rata
    const siswaAboveAverage = siswa.filter(s => s.nilai > rataRataKelas);
    
    // Tampilkan laporan
    console.log("LAPORAN KELAS");
    console.log("=============");
    console.log(`Jumlah Siswa        : ${jumlahSiswa} orang`);
    console.log(`Rata-rata Nilai     : ${rataRataKelas.toFixed(2)}`);
    console.log(`Nilai Tertinggi     : ${nilaiTertinggiKelas}`);
    console.log(`Nilai Terendah      : ${nilaiTerendahKelas}`);
    console.log(`\nSiswa dengan nilai di atas rata-rata (${rataRataKelas.toFixed(2)}):`);
    
    if (siswaAboveAverage.length > 0) {
        siswaAboveAverage.forEach((s) => {
            console.log(`  - ${s.nama} (${s.nilai})`);
        });
    } else {
        console.log(`  Tidak ada siswa di atas rata-rata.`);
    }
}

// Jalanin function laporan kelas
laporanKelas();