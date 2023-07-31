// 2. Pemecahan Kata - Karakter per Karakter

// Pada tugas ini, kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata secara per karakter. Gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Tampilkan hasilnya di console.

/**
 * ALGORITMA
 * 1. Mulai program
 * 2. Buat variabel "kalimat" dengan isi 'Hari ini adalah hari yang cerah.'
 * 3. Buat perulangan dengan inisialisasi variabel "i" dengan nilai 0
 * 4. Tentukan kondisi perulangan: selama variabel "i" kurang dari panjang variabel "kalimat"
 * 5. Jika karakter tadak sama dengan spasi (' '), maka cetak karakter tersebut
 * 6. Naikan nilai variabel "i" untuk berpindah ke karakter berikut nya
 * 7. Perulangan akan terus berlanjut hingga semua karakter dalam variabel "kalimat" telah diperiksa
 * 8. Selesai
 */

/**
 * PSEUDOCODE
 * START
 *      INPUT kalimat = 'Hari ini adalah hari yang cerah.'    
 *      FOR i = 0 TO kalimat 
 *          IF kalimat[i] !==  ' ' THEN
 *              OUTPUT kalimat[i]
 *          ENDIF
 *      ENDFOR
 * END
 */


//Implementasi
let kalimat = 'Hari ini adalah hari yang cerah';

for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] !== ' ') {
        console.log(kalimat[i]);
    }
}