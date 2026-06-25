function ambilProfil() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Profil"), 1000);
    });
}

function ambilKursus() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Kursus"), 2000);
    });
}

function ambilNilai() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Nilai"), 1500);
    });
}

async function versiA() {
    console.time("Versi A");

    const profil = await ambilProfil();
    const kursus = await ambilKursus();
    const nilai = await ambilNilai();

    console.log(profil);
    console.log(kursus);
    console.log(nilai);

    console.timeEnd("Versi A");
}

versiA();

function ambilProfil() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Profil"), 1000);
    });
}

function ambilKursus() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Kursus"), 2000);
    });
}

function ambilNilai() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Nilai"), 1500);
    });
}

async function versiB() {
    console.time("Versi B");

    const [profil, kursus, nilai] =
        await Promise.all([
            ambilProfil(),
            ambilKursus(),
            ambilNilai()
        ]);

    console.log(profil);
    console.log(kursus);
    console.log(nilai);

    console.timeEnd("Versi B");
}

versiB();