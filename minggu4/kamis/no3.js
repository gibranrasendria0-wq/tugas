function ambilMateri() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const berhasil = Math.random() > 0.5;

            if (berhasil) {
                resolve("Materi berhasil dimuat");
            } else {
                reject("Gagal mengambil materi");
            }
        }, 2000);
    });
}

ambilMateri()
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Proses selesai");
    });