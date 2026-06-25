const dataNilai = [
    { id: 1, nilai: 90 },
    { id: 2, nilai: 75 },
    { id: 3, nilai: 60 }
];

function ambilNilaiSiswa(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const siswa = dataNilai.find(siswa => siswa.id === id);

            if (siswa) {
                resolve(siswa);
            } else {
                reject("Siswa tidak ditemukan");
            }
        }, 2000);
    });
}

async function cekKelulusan(id) {
    try {
        const siswa = await ambilNilaiSiswa(id);

        if (siswa.nilai >= 75) {
            console.log(`Nilai: ${siswa.nilai} - Lulus`);
        } else {
            console.log(`Nilai: ${siswa.nilai} - Tidak Lulus`);
        }
    } catch (error) {
        console.log(error);
    }
}

cekKelulusan(2);