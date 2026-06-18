// A
console.log("PROGRAM A");

sapaA();

function sapaA() {
  console.log("fungsi deklarasi sebelum pertama");
}





// B
console.log("\nPROGRAM B"); //\n membuat teks setelahnya pindah ke baris berikutnya.

try {
  sapaB();
} catch (error) {
  console.log("Error:", error.message);
}

const sapaB = function () {
  console.log("Halo dari Function Expression");
};