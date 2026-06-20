/// MBG!!!
function buatSistemMakanan() {

    /// Closure + Scope
    /// Closure Variabel riwayat berada di dalam function buatSistemMakanan() sehingga tidak bisa diakses langsung dari luar
    /// Scope riwayat hanya hidup atau jalan di dalam scope function
    let riwayat = [];

    return {

        tambahMakanan(...makanan) { // Rest Parameter Memungkinkan kita menambahkan banyak makanan sekaligus

            makanan.forEach(item => {

                // Destructuring Mengambil properti dari object secara langsung
                const { nama, kalori } = item;

                // String Method to Uppercase agar mengubah suatu nama menjadi kapital
                const namaMakanan = nama.toUpperCase();

                // Number Method agar tidak ada atau hilang bilangan desimal
                const kaloriFix = kalori.toFixed(0);

                riwayat.push({
                    nama: namaMakanan,
                    kalori: kaloriFix,
                    waktu: new Date() // Date Object untuk waktu yang sekarang
                });
            });
        },

        lihatRiwayat() {

            // Spread Operator di gunakan untuk menyalin  data
            return [...riwayat];
        }
    };
}

const sistem = buatSistemMakanan();

sistem.tambahMakanan(
    {
        nama: "nasi",
        kalori: 250.75
    },
    {
        nama: "telur",
        kalori: 120.45
    },
    {
        nama: "brokoli",
        kalori: 45.25
    }
);

console.log(sistem.lihatRiwayat());