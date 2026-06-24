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
const dataBaru = {
    id: 5,
    nama: "Eko",
    umur: 18,
    nilai: 90
};

siswa.push(dataBaru);
console.log("Data baru telah ditambahkan:");
console.log(`Nama  : ${dataBaru.nama}`);
console.log(`Umur  : ${dataBaru.umur}`);
console.log(`Nilai : ${dataBaru.nilai}`);
console.log("--------------------\n");

// Function untuk mencari siswa berdasarkan nama
function cariSiswa(nama) {
    const hasil = siswa.find(s => s.nama.toLowerCase() === nama.toLowerCase());
    
    if (hasil) {
        console.log(`Siswa ditemukan:`);
        console.log(`ID    : ${hasil.id}`);
        console.log(`Nama  : ${hasil.nama}`);
        console.log(`Umur  : ${hasil.umur}`);
        console.log(`Nilai : ${hasil.nilai}`);
    } else {
        console.log(`Siswa dengan nama "${nama}" tidak ditemukan.`);
    }
}

console.log("Test pencarian siswa:");
console.log("Mencari 'Eko':");
cariSiswa("Eko");
console.log("\nMencari 'Ari':");
cariSiswa("Ari");
console.log("\nMencari 'Zara' (tidak ada):");
cariSiswa("Zara");