// Simulasi login
function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                username: "gibran",
                password: "12345",
                nama: "Gibran"
            };

            if (
                username === user.username &&
                password === user.password
            ) {
                resolve(user);
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

// Simulasi cek status premium
function cekPremium(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...user,
                premium: true
            });
        }, 1500);
    });
}

// Program utama
async function aksesPremium(username, password) {
    try {
        const user = await login(username, password);
        console.log(`Selamat datang, ${user.nama}`);

        const statusUser = await cekPremium(user);

        if (statusUser.premium) {
            console.log("Mengakses fitur premium...");
        } else {
            console.log("Fitur premium tidak tersedia.");
        }
    } catch (error) {
        console.log(error);
    }
}

// Menjalankan program
aksesPremium("gibran", "12345");