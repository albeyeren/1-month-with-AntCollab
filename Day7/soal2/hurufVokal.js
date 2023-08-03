/**
 * ALGORITMA
 * 1. Mulai program
 * 2. Buat variabel 'kalimat' dan isi kalimat yang akan dihitung huruf vokalnya
 * 3. Buat variabel 'jumlahVokal' untuk menampung jumlah huruf vokal dan beri nilai awal 0
 * 4. Lakukan perulangan untuk memeriksa apakah karakter "a", "e", "i", "o", "u" terdapat pada ('kalimat[i]')
 * 5. Jika terdapat huruf vokal, tambahkan 1 ke 'jumlahVokal'
 * 6. setelah loop selesai, cetak 'jumlahVokal'
 * 7. Selesai
 */

/* 
PSEUDOCODE
START
    INPUT kalimat
    SET jumlahVokal = 0

    FOR i = 0 TO kalimat.length THEN
        IF kalimat[i] === "a" OR kalimat[i] === "e" OR kalimat[i] === "i" OR kalimat[i] === "o" OR kalimat[i] === "u"
            jumlahVokal++
        ENDIF
    ENDFOR
    DISPLAY jumlahVokal
END
*/


let kalimat = 'Hello, how are you?';

let jumlahVokal = 0;

for( let i = 0; i < kalimat.length; i++){
    if(kalimat[i] === "a" || kalimat[i] === "e" || kalimat[i] === "i" || kalimat[i] === "o" || kalimat[i] === "u"){
        jumlahVokal++;
    }
}

console.log(jumlahVokal);