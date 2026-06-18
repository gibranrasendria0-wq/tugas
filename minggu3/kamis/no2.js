const perusahaan = "PT Mundur Bersama"; // global skopee

function divisi() {
  const namaDivisi = "IT";

  function tim() {
    const namaTim = "Back-and";

    function anggota() {
      const namaAnggota = "Budi";

      console.log(perusahaan);   // bisa
      console.log(namaDivisi);   // bisa
      console.log(namaTim);      // bisa
      console.log(namaAnggota);  // bisa
    }

    anggota();

    console.log(perusahaan); // bisa
    console.log(namaDivisi); // bisa
    console.log(namaTim);    // bisa

  }

  tim();

  console.log(perusahaan); // bisa
  console.log(namaDivisi); // bisa
}

divisi();
console.log(perusahaan); // bisa