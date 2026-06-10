ringkasanBab8(array)
Array itu ibarat loker bernomor — satu variabel bisa menyimpan banyak nilai sekaligus, dan setiap nilai punya nomor urut yang disebut indeks, dimulai dari 0.
Untuk mengakses atau mengubah isinya, cukup tulis nama array diikuti nomor indeksnya: siswa[0] artinya ambil elemen pertama.
Soal method (perintah bawaan), ada dua kelompok besar:

Tambah/hapus di ujung → push() tambah ke belakang, pop() hapus dari belakang, unshift() tambah ke depan, shift() hapus dari depan.
Cari & potong → indexOf() untuk mencari posisi elemen, slice() untuk mengambil sebagian tanpa mengubah array asli, splice() untuk menyisip atau menghapus elemen di tengah.

Klik setiap tombol method di widget di atas — kamu bisa langsung lihat visualnya berubah biar lebih gampang nempel di kepala.
(MethodFungsiUbah array) asli?push()Tambah elemen ke belakang 
Yapop()Hapus elemen dari belakang 
Yaunshift()Tambah elemen ke depan 
Yashift()Hapus elemen dari depan 
YaindexOf()Cari posisi elemen, return angka indeks 
Tidakslice()Ambil sebagian elemen (hasil copy) 
Tidaksplice()Hapus / sisip elemen di posisi tertentu


RingkasanBab9(function)
Jadi intinya, Function itu simpel banget. Bayangin kamu punya kode yang sering kamu pakai berulang-ulang, nah daripada nulis ulang terus, mending dibungkus jadi satu function.
Kayak gini contohnya, misalnya kamu mau nyapa orang:
javascriptfunction sapa(nama) {
    return "Halo, " + nama + "!";
}

sapa("Budi");  // "Halo, Budi!"
sapa("Asep");  // "Halo, Asep!"

Konsep	    :: Penjelasan
Function  Declaration	  ::Mendefinisikan fungsi dengan kata kunci function
Function Expression       ::menyimpan fungsi ke dalam variabel
Arrow Function	          ::Penulisan fungsi ringkas menggunakan => (ES6)
Parameter	              ::Variabel penerima data yang didefinisikan saat deklarasi funsi
Argumen	                  ::Nilai nyata yang diberikan saat fungsi dipanggil
return	                  ::Mengembalikan nilai dari fungsi ke pemanggil; menghentikan eksekusi fungsi
Nilai default	          ::Nilai parameter yang digunakan jika argumen tidak diberikan