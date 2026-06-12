const lampu = {
  status: "mati", 

  nyalakan: function () {
    this.status = "menyala";
    console.log("Lampu dinyalakan.");
  },
  matikan: function () {
    this.status = "mati";
    console.log("Lampu dimatikan.");
  },
  toggle: function () {
    if (this.status === "menyala") {
      this.status = "mati";
    } else {
      this.status = "menyala";
    }
    console.log(`Toggle dilakukan. Status sekarang: ${this.status}`);
  },
  cekStatus: function () {
    console.log(`Status lampu saat ini: ${this.status}`);
  }
};
lampu.cekStatus();  
lampu.nyalakan(); 
lampu.cekStatus();
lampu.toggle();    
lampu.cekStatus();
lampu.toggle();     
lampu.cekStatus();
lampu.matikan();    
lampu.cekStatus();