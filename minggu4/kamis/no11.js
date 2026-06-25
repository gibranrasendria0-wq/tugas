const databaseUser = [
    {
        username: "budi",
        password: "12345",
        nama: "Budi"
    },
    {
        username: "ani",
        password: "abcde",
        nama: "Ani"
    }
];

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = databaseUser.find(
                user =>
                    user.username === username &&
                    user.password === password
            );

            if (user) {
                resolve(`Selamat datang, ${user.nama}`);
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

async function prosesLogin(username, password) {
    try {
        const hasil = await login(username, password);
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}

prosesLogin("budi", "12345");