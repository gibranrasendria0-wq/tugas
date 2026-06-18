const produk = [
    {
        nama: "mbg",
        kadaluarsa: "2027-01-01"
    },
    {
        nama: "bolu ketan",
        kadaluarsa: "2026-06-25"
    },
    {
        nama: "susu nenek 60+",
        kadaluarsa: "2026-06-10"
    }
];

const sekarang = new Date();

for (let item of produk) {
    const tanggalKadaluarsa = new Date(item.kadaluarsa);

    const selisihMs = tanggalKadaluarsa - sekarang; //silishhMs itu cuma nama variabel yang berarti "selisih waktu dalam satuan milidetik".
    const sisaHari = Math.floor(
        selisihMs / (1000 * 60 * 60 * 24)
    );

    console.log("Nama Produk :", item.nama);

    if (sisaHari < 0) {
        console.log("Status      : Sudah Kadaluarsa");
    } else {
        console.log("Status      : Belum Kadaluarsa");
        console.log("Sisa Hari   :", sisaHari, "hari");
    }

    console.log("--------------------");
}