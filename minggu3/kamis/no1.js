const perusahaan = "PT Maju Bersama"; // global Scope

function divisiPerusahaan() {
  const divisi = "IT"; // fungsi scop

  function timKerja() {
    const tim = "full stak"; // block scope

    console.log("Perusahaan:", perusahaan);
    console.log("Divisi:", divisi);
    console.log("Tim:", tim);
  }

  timKerja();
  console.log("Perusahaan:", perusahaan);
  console.log("Divisi:", divisi);

}
divisiPerusahaan();
console.log("Perusahaan:", perusahaan);