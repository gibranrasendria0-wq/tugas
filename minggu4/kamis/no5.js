const database = [
    { id: 1, nama: "Budi", premium: true },
    { id: 2, nama: "Ani", premium: false },
    { id: 3, nama: "Dodi", premium: true }
];

function ambilPengguna(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pengguna = database.find(user => user.id === id);

            if (pengguna) {
                resolve(pengguna);
            } else {
                reject("Pengguna tidak ditemukan");
            }
        }, 2000);
    });
}

async function tampilkanPengguna(id) {
    try {
        const pengguna = await ambilPengguna(id);
        console.log("Data Pengguna:");
        console.log(pengguna);
    } catch (error) {
        console.log(error);
    }
}

tampilkanPengguna(2);