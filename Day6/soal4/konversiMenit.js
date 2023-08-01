// Logic Challenge - Konversi Menit

// Diberikan sebuah letiable detik yang bertipe number.

// Buatlah program yang akan menghasilkan String waktu dalam format menit:detik

/*
PSEUDOCODE
START
    INPUT detik

    menit = Math.floor(detik / 60)

    sisaDetik = detik % 60

    DISPLAY waktu = menit + ":" + (sisaDetik < 10 ? "0" : "") + sisaDetik 
END
*/

let detik = 44;

menit = Math.floor(detik / 60);

sisaDetik = detik % 60;

waktu = menit + ":" + (sisaDetik < 10 ? "0" : "") + sisaDetik;

console.log(waktu);