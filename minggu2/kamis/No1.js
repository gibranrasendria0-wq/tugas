function daftarBelanja() {
    return ["beras", "telur", "gula"];
}

let belanja = daftarBelanja();     
belanja.unshift("minyak", "garam");

console.log(belanja); 

let dihapus = belanja.pop(); 
console.log(dihapus); 
console.log(belanja);