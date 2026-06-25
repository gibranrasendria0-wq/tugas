function ambilMateri() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const berhasil = Math.random() > 0.5; // 50% berhasil, 50% gagal

            if (berhasil) {
                resolve("Materi berhasil dimuat");
            } else {
                reject("Gagal mengambil materi");
            }
        }, 2000); // 2 detik
    });
}

ambilMateri()
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => {
        console.log(error);
    });