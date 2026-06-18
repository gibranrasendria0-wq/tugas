// Masalah 1 var dipanggil sebelum diberi nilai
console.log(nama);

var nama = "Gibran";


// Masalah 2 let dipanggil sebelum deklarasi
console.log(umur);

let umur = 18;


// Masalah 3 function expression dipanggil sebelum dibuat
salam();

const salam = function () {
    console.log("assalamualaikum wrwb");
};




/// program yg bener

var nama = "Gibran";
console.log(nama);

let umur = 20;
console.log(umur);

const sapa = function () {
    console.log("Halo");
};

sapa();

/// dan yap hasilnya adalah error aaarggghhhh!!!!