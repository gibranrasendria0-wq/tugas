/// ini yang masih awal
function sistem() {

    console.log(user);

    var user = "Ari"; /// var di hoisting sebeblum deklarasi dan hasil hasilnya undifiend

    if (true) {
        let score = 90;
    }

    function tampil() {
        console.log(score);
    }

    tampil();
}

sistem();

/*
=========================================
ANALISIS PROGRAM
=========================================

Masalah 1: Hoisting

console.log(user);

var user = "Ari";

Saat dijalankan, outputnya:
undefined

Karena deklarasi var di-hoist menjadi:

var user;
console.log(user);
user = "Ari";

Masalah 2: Scope

if (true) {
    let score = 90;
}

function tampil() {
    console.log(score);
}
score dibuat dengan let di dalam block if,
sehingga hanya bisa diakses di dalam block tersebut.

Saat tampil() dijalankan akan muncul:

ReferenceError: score is not defined

=========================================
PROGRAM ASLI (DIBERI KOMENTAR AGAR TIDAK ERROR)
=========================================

function sistem() {

    console.log(user);

    var user = "Ari";

    if (true) {
        let score = 90;
    }

    function tampil() {
        console.log(score);
    }

    tampil();
}

sistem();

=========================================
PROGRAM YANG SUDAH DIPERBAIKI
=========================================
*/

function sistem() {
    const user = "Ari";
    const score = 90; ///Scope adalah area tempat sebuah variabel dapat diakses, Variabel score dibuat menggunakan let, Karena let memiliki block scope, maka score hanya bisa digunakan di dalam blok 
                      /// dan ini menggunakan lokal scope
    console.log("User :", user);

    function tampil() {
        console.log("Score:", score);
    }

    tampil();
}

sistem();

/*
=========================================
CONTOH HOISTING
=========================================
*/

console.log("\n=== CONTOH HOISTING VAR ==="); /// \n fungsinya untuk lanjut ke baris berikutnya

console.log(nama); // undefined
var nama = "Ari";

console.log(nama); // Ari

/*
=========================================
CONTOH BLOCK SCOPE
=========================================
*/

console.log("\n=== CONTOH BLOCK SCOPE ==="); /// Variabel yang dideklarasikan menggunakan let atau const di dalam blok {} hanya dapat diakses di dalam blok tersebut termasuk blok if, for, dan while

if (true) {
    let nilai = 100;
    console.log("Di dalam block:", nilai);
}

// console.log(nilai);
// Akan error karena nilai hanya hidup
// di dalam block if

/*
=========================================
KESIMPULAN
=========================================

1. var mengalami hoisting sehingga bisa dipanggil sebelum deklarasi tetapi nilainya undefined
2. let dan const memiliki block scope
3. score tidak bisa diakses oleh tampil()karena berada di dalam block if
4. Solusi terbaik:
   - deklarasikan variabel sebelum digunakan
   - gunakan let/const
   - letakkan variabel pada scope yang tepat
Output program:
User : Ari
Score: 90

=== CONTOH HOISTING VAR ===
undefined
Ari

=== CONTOH BLOCK SCOPE ===
Di dalam block: 100

=========================================
*/