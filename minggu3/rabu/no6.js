const harga = 125499.789;
const bulatKeAtas = Math.ceil(harga); //Math.ceil() untuk membulatkan angka ke atas ke bilangan bulat terdekat
console.log("1. Bulat ke atas        :", bulatKeAtas);

const bulatKeBawah = Math.floor(harga); //untuk membulatkan angka ke bawah ke bilangan bulat terdekat
console.log("2. Bulat ke bawah       :", bulatKeBawah);

const bulatTerdekat = Math.round(harga);Math.floor() 
console.log("3. Bulat terdekat       :", bulatTerdekat);

const duaDesimal = harga.toFixed(2); //toFixed(2) untuk menampilkan angka dengan 2 digit di belakang koma
console.log("4. Dua angka desimal    :", duaDesimal);

const formatRupiah = harga.toLocaleString("id-ID", { //toLocaleString() untuk mengubah angka menjadi format mata uang Indonesia
  style: "currency",
  currency: "IDR",
});
console.log("5. Format Rupiah        :", formatRupiah);