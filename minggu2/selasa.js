//nomor-no1
console.log("tugas" + "Nomor 1");
function hitungBiayaParkir(lamaParkir) {
    let totalBiaya = 0;

    // parkir 2 jam pertaman 3k per-jam
    if (lamaParkir <= 2) {
        totalBiaya = lamaParkir * 3000;
    } 
    // jika lama parkir lebih dari 2 jam
    else {
        // 2 jam pertama dikali 3000, sisanya dikali 2000
        totalBiaya = (2 * 3000) + ((lamaParkir - 2) * 2000);
    }

    // maksimal biaya parkir Rp25.000
    if (totalBiaya > 25000) {
        totalBiaya = 25000;
    }

    return totalBiaya;
}

// beberapa contoh lama parkir 
console.log("Parkir 1 jam  : Rp" + hitungBiayaParkir(1));   // Hasil: Rp3000
console.log("Parkir 2 jam  : Rp" + hitungBiayaParkir(2));   // Hasil: Rp6000
console.log("Parkir 3 jam  : Rp" + hitungBiayaParkir(3));   // Hasil: Rp8000 (6000 + 2000)
console.log("Parkir 5 jam  : Rp" + hitungBiayaParkir(5));   // Hasil: Rp12000 (6000 + 6000)
console.log("maximal parkir : Rp" + hitungBiayaParkir(15));  // Hasil: Rp25000 (Mencapai batas maksimal)


// tugas-no2
console.log("tugas" + "Nomor 2");
for (let baris = 1; baris <= 5; baris++) {
    
    let teks = "";
    
    // menambahkan angka dari 1 sampai sebanyak nilai baris
    for (let angka = 1; angka <= baris; angka++) {
        teks = teks + angka;
    }
    
    console.log(teks);
}

// tugas-no3
console.log("tugas" + "Nomor-3");
// Simulasi Transaksi Bank

// Saldo awal
let saldo = 100000;

console.log("Saldo awal : Rp" + saldo.toLocaleString("id-ID"));//toLocalString("id-ID) digunakan untuk mata uang rupiah

// Daftar transaksi: [jenis, jumlah]
// tarik = saldo berkurang
// setor = saldo bertambah
let transaksi = [
    ["tarik", 20000],
    ["setor", 50000],
    ["tarik", 30000],
    ["tarik", 150000]
];

// Loop untuk memproses setiap transaksi satu per satu
for (let i = 0; i < transaksi.length; i++) {

    let jenis  = transaksi[i][0];
    let jumlah = transaksi[i][1];

    if (jenis == "setor") {
        // Transaksi setor: saldo bertambah
        saldo = saldo + jumlah;
        console.log("Setor : Rp" + jumlah.toLocaleString("id-ID"));
        console.log("Saldo : Rp" + saldo.toLocaleString("id-ID"));

    } else if (jenis == "tarik") {

        if (saldo < jumlah) {
            // Saldo tidak mencukupi: transaksi gagal
            console.log("Tarik       : Rp" + jumlah.toLocaleString("id-ID"));
            console.log("Status      : TRANSAKSI GAGAL, saldo tidak mencukupi!");
            console.log("Saldo       : Rp" + saldo.toLocaleString("id-ID"));
        } else {
            // Saldo cukup: saldo berkurang
            saldo = saldo - jumlah;
            console.log("Tarik       : Rp" + jumlah.toLocaleString("id-ID"));
            console.log("Saldo       : Rp" + saldo.toLocaleString("id-ID"));
        }

    }

   
}

console.log("Saldo akhir : Rp" + saldo.toLocaleString("id-ID"));

// tugas-no4
console.log("tugas" + "Nomor-4");
// Soal 4 - FizzBuzz Modifikasi

//  1 sampai 50
for (let i = 1; i <= 50; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        // Habis dibagi 3 DAN 5 → FizzBuzz
        // Harus dicek PERTAMA sebelum yang lain
        console.log(i + " → FizzBuzz");

    } else if (i % 3 == 0) {
        // Habis dibagi 3 saja → Fizz
        console.log(i + " → Fizz");

    } else if (i % 5 == 0) {
        // Habis dibagi 5 saja → Buzz
        console.log(i + " → Buzz");

    } else {
        // Tidak habis dibagi 3 maupun 5 → tampilkan angkanya
        console.log(i);
    }

}
// Soal 5 - Password Validator
console.log("tugas" + "Nomor-5");

let password = "abcdef12";   // untuk menguji pasword dan bisa di ganti sesuai keinginan

let adaAngka = false;
let adaHuruf = false;
let panjang  = password.length;  // menghitung jumlah karakter

// Loop untuk memeriksa setiap karakter satu per satu
for (let i = 0; i < panjang; i++) {

    let karakter = password[i];  // ambil karakter ke-i

    if (karakter >= "0" && karakter <= "9") {
        // Karakter adalah angka (0-9)
        adaAngka = true;

    } else if (karakter >= "a" && karakter <= "z") {
        // Karakter adalah huruf kecil
        adaHuruf = true;

    } else if (karakter >= "A" && karakter <= "Z") {
        // Karakter adalah huruf besar
        adaHuruf = true;
    }
}

console.log("Password     : " + password);
console.log("Panjang      : " + panjang + " karakter");
console.log("Ada angka?   : " + adaAngka);
console.log("Ada huruf?   : " + adaHuruf);

// Cek semua syarat
if (panjang < 8) {
    console.log("Status : TIDAK VALID - kurang dari 8 karakter ");
} else if (adaAngka == false) {
    console.log("Status : TIDAK VALID - tidak mengandung angka ");
} else if (adaHuruf == false) {
    console.log("Status : TIDAK VALID - tidak mengandung huruf ");
} else {
    console.log("Status : PASSWORD VALID ");
}
// Soal 6 - Tebak Angka Tanpa Input
console.log("tugas" + "Nomor-6");

let angkaRahasia = 27;   // angka yang dicari
let percobaan    = 0;    // menghitung berapa kali loop berjalan
let tebakan      = 1;    // mulai tebak dari angka 1

// Loop terus sampai tebakan == angkaRahasia
while (tebakan <= angkaRahasia) {

    percobaan = percobaan + 1;  // hitung setiap percobaan

    if (tebakan == angkaRahasia) {
        // Angka ditemukan dan break fungsinya adalah untuk menghentikan loop
        console.log("Mencoba angka : " + tebakan + " → MANETEP BOSS!!! ");
        break;

    } else {
        // Belum ketemu → lanjut ke angka berikutnya
        console.log("Mencoba angka : " + tebakan + " → salah oyy");
        tebakan = tebakan + 1;
    }
}
console.log("Angka ditemukan  : " + tebakan);
console.log("Jumlah percobaan : " + percobaan + " kali");


// Soal 7 - Kasir Diskon
console.log("tugas: Nomor-7");

// Daftar total belanja setiap pelanggan
let belanja = [80000, 120000, 275000, 600000];

// Loop untuk memproses setiap pelanggan satu persatu
for (let i = 0; i < belanja.length; i++) {

    let totalBelanja = belanja[i];
    let persen       = 0;    // persen diskon
    let diskon       = 0;    // nominal diskon
    let bayar        = 0;    // total yang harus dibayar

    // Tentukan persen diskon berdasarkan total belanja
    if (totalBelanja >= 500000) {
        // Belanja >= Rp500.000 → diskon 20%
        persen = 20;

    } else if (totalBelanja >= 250000) {
        // Belanja >= Rp250.000 → diskon 10%
        persen = 10;

    } else if (totalBelanja >= 100000) {
        // Belanja >= Rp100.000 → diskon 5%
        persen = 5;

    } else {
        // Belanja < Rp100.000 → tidak dapat diskon
        persen = 0;
    }

    // Hitung nominal diskon dan total bayar
    diskon = totalBelanja * persen / 100;
    bayar  = totalBelanja - diskon;

    // Tampilkan hasil setiap pelanggan
    console.log("Pelanggan " + (i + 1));
    console.log("Total belanja : Rp" + totalBelanja.toLocaleString("id-ID"));
    console.log("Diskon        : " + persen + "% = Rp" + diskon.toLocaleString("id-ID"));
    console.log("Total bayar   : Rp" + bayar.toLocaleString("id-ID"));
    
}
// Soal 8 - Analisis Nilai Siswa
console.log("tugas: Nomor-8");

// Data nilai siswa
let nilai = [90, 75, 60, 85, 40, 100, 70];

// variabel awal
let jumlahSiswa  = nilai.length;   // langsung hitung dari array
let tertinggi    = nilai[0];       // anggap nilai pertama tertinggi dulu
let terendah     = nilai[0];       // anggap nilai pertama terendah dulu
let totalNilai   = 0;              // untuk menghitung rata-rata
let jumlahLulus  = 0;              //  siswa lulus
let jumlahTidak  = 0;              //  siswa tidak lulus

// Loop untuk memproses setiap nilai satu per satu
for (let i = 0; i < nilai.length; i++) {

    let n = nilai[i];   // ambil nilai siswa ke-i

    // Akumulasi total nilai untuk rata-rata
    totalNilai = totalNilai + n;

    // Cek nilai tertinggi
    if (n > tertinggi) {
        tertinggi = n;
    }

    // Cek nilai terendah
    if (n < terendah) {
        terendah = n;
    }

    // Cek lulus atau tidak lulus
    if (n >= 75) {
        jumlahLulus = jumlahLulus + 1;
    } else {
        jumlahTidak = jumlahTidak + 1;
    }
}

// Hitung rata-rata
let rataRata = totalNilai / jumlahSiswa;

// Tampilkan semua hasil
console.log("Data nilai    : " + nilai);
console.log("Jumlah siswa  : " + jumlahSiswa + " siswa");
console.log("Nilai tertinggi : " + tertinggi);
console.log("Nilai terendah  : " + terendah);
console.log("Rata-rata     : " + rataRata.toFixed(2));
console.log("Siswa lulus   : " + jumlahLulus + " siswa");
console.log("Siswa tidak lulus : " + jumlahTidak + " siswa");

// Soal 9 - Puzzle Pola Bintang
console.log("tugs: Nomor-9");

// Bagian 1: cetak bintang turun dari 3 ke 1
for (let i = 3; i >= 1; i--) {

    let bintang = "";

    // Loop dalam: tambahkan bintang sebanyak nilai i
    for (let j = 1; j <= i; j++) {
        bintang = bintang + "*";
    }

    console.log(bintang);
}

// Bagian 2: cetak 2 bintang lalu 1 bintang
for (let i = 2; i >= 1; i--) {

    let bintang = "";

    // Loop dalam: tambahkan bintang sebanyak nilai i
    for (let j = 1; j <= i; j++) {
        bintang = bintang + "*";
    }

    console.log(bintang);
}
// Soal 10 - Tantangan Logika Bilangan Spesial
console.log("tugas: Nomor-10");

let jumlahSpesial = 0;   // counter bilangan spesial

// Loop dari 1 sampai 100
for (let i = 1; i <= 100; i++) {

    let aturan1 = (i % 2 == 0) && (i % 4 != 0); // habis bagi 2 tapi tidak bagi 4
    let aturan2 = (i % 7 == 0);                  // habis dibagi 7

    if (aturan1 || aturan2) {
        // Memenuhi salah satu aturan → SPESIAL
        jumlahSpesial = jumlahSpesial + 1;
        console.log(i + " → SPESIAL ");
    }
}
console.log("Total bilangan spesial : " + jumlahSpesial);