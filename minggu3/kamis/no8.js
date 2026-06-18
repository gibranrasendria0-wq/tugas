function buatDompet(saldoAwal) {
    let saldo = saldoAwal;

    return {
        tambahSaldo(jumlah) {
            saldo += jumlah;
            console.log("Saldo telah ditambah");
        },

        kurangiSaldo(jumlah) {
            if (jumlah > saldo) {
                console.log("Saldo kurang");
            } else {
                saldo -= jumlah;
                console.log("Saldo telah berkurang");
            }
        },

        cekSaldo() {
            console.log("Saldo saat ini: Rp" + saldo);
        }
    };
}

const dompet = buatDompet(100000);

dompet.cekSaldo();
dompet.tambahSaldo(50000);
dompet.cekSaldo();
dompet.kurangiSaldo(30000);
dompet.cekSaldo();

/// saldonya di tambah kemudian berkurang 