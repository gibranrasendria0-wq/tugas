//tugas no 1
let tugasNo1 = "nomor 1";
console.log('tugasNo1' + tugasNo1);
console.log(10 + 5 * 2)  //2 di kali 5 dulu baru di tambah 10
console.log((10 + 5) * 2)  //10 di tambah 5 dulu baru di kali 2
console.log(20 / 2 + 3)  //20 di bagi 2 dulu baru di tambah 3
console.log(20 / (2 + 3))  //2 di tambah 3 dulu baru di bagi 20
console.log(10 % 3)  //10 di bagi 3 sisanya 1

//tugas no 2
let tugasNo2 = "nomor 2";
console.log('tugasNo2' + tugasNo2);
let a = 15;  //deklarasi variabel a dengan nilai 15
let b = 20;  //deklarasi variabel b dengan nilai 20
let c = 15;  //deklarasi variabel c dengan nilai 15
console.log(a == b);  //membandingkan apakah nilai a sama dengan nilai b, hasilnya false
console.log(a == c);  //membandingkan apakah nilai a sama dengan nilai c, hasilnya true
console.log(a != b);  //membandingkan apakah nilai a tidak sama dengan nilai b, hasilnya true
console.log(a > b);  //membandingkan apakah nilai a lebih besar dari nilai b, hasilnya false
console.log(a <= b);  //membandingkan apakah nilai a kurang dari atau sama dengan nilai b, hasilnya true

// tugas no 3
let tugasNo3 = "nomor 3";
console.log('tugasNo3' + tugasNo3);
let umur = 18;  //variabel umur dengan nilai 18
let memilikiTiket = true;  //deklarasi variabel memilikiTiket dengan nilai true
console.log( umur >= 17 && memilikiTiket);  //memeriksa apakah umur lebih besar atau sama dengan 18 dan memiliki tiket, hasilnya true

// tugas no 4
let tugasNo4 = "nomor 4";
console.log('tugasNo4' + tugasNo4);
let admin = false;
let moderator = true;
console.log(admin || moderator);  //memeriksa apakah admin atau moderator, hasilnya true

// tugas no 5
let tugasNo5 = "nomor 5";
console.log('tugasNo5' + tugasNo5);
let listrikMati = false;
let internetPutus = true;
console.log(!listrikMati);  //memeriksa apakah listrik tidak mati, hasilnya true

// tugas no 6
let tugasNo6 = "nomor 6";
console.log('tugasNo6' + tugasNo6);
console.log(true && true);  //true
console.log(true && false);  //false
console.log(false || true);  //true
console.log(false || false);  //false
console.log(!true);  //false
console.log(!false);  //true
console.log(!(true && false));  //true

// tugas no 7
let tugasNo7 = "nomor 7";
console.log('tugasNo7' + tugasNo7);
let x = 8;
let y = 12;
let z = 15;

console.log(x < y && y < z); // true
console.log(x > y && y < z); // false

// tugas no 8
let tugasNo8 = "nomor 8";
console.log('tugasNo8' + tugasNo8);
let nilai = 85;
let kehadiran = 90;
let tugas = 70;

// Ekspresi 1
console.log(nilai > 80 && kehadiran > 85); // true

// Ekspresi 2
console.log(tugas > 75 || nilai > 90); // false

// Ekspresi 3
console.log(nilai >= 85 && tugas >= 70); // true

// tugas no 9
let tugasNo9 = "nomor 9";
console.log('tugasNo9' + tugasNo9);
let A = 20;
let B = 10;
let C = 25;
console.log(A > B && B < C); // true
console.log(A < B && B > C); // false

// tugas no 10
let tugasNo10 = "nomor 10";
console.log('tugasNo10' + tugasNo10);
let d = 6;
let e = 2;
console.log(d * e > 10 && e % 2 == 0);
// (6 * 2 > 10) && (2 % 2 == 0)
// (12 > 10) && (0 == 0)
// true && true →  true
let f = 10;
let g = 8;
console.log(f > g || g % 2 == 0);
// (10 > 8) || (8 % 2 == 0)
// true || true →  true
let h = 100;
let i = 44;
console.log(h * 2 > 10 && i % 2 == 0);
// (100 * 2 > 10) && (44 % 2 == 0)
// (200 > 10) && (0 == 0)
// true && true →  true
