const timMerah = ["Ari", "Bima"];
const timBiru = ["Citra", "Dewi"];

const timGabungan = [...timMerah, ...timBiru];
console.log(timGabungan);

const timLengkap = [...timMerah, "Kapten", ...timBiru];
console.log(timLengkap);