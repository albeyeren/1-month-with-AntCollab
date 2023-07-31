// 3. Pemecahan Kata Menggunakan Substring

// Pada tugas ini, kamu diminta untuk "memecah" sebuah kalimat menggunakan metode substring. Ambil potongan dari tiap kata, kemudian tampilkan hasilnya di console.

/**
 * 1. Mulai program
 * 2. Simpan kalimat 'Hairi ini adalah hari yang cerah' ke dalam bariabel "kalimat"
 * 3. Buat perulangan dengan inisialisasi variabel "i" dengan nilai 0
 * 4. Tentukan kondisi perulangan: selama "i" kurang dari panjang "kalimat"
 * 5. Si setiap iterasi perulangan, periksa karakter pada index "i" dari "kalimat"
 * 6. Jika karakter tersebut adalah spasi (' ') atau "i" adalah index terakhir dari "kalimat", maka:
 *    a. Tentukan nilai "endIndex" berdasarkan kondisi "i" sebagai index terakhir atau bukan.
 *    b. Ambil potongan kata dari "startIndex" hingga "endIndex" menggunakan metode 'substring'
 *    c. Cetak potongan kata tersebut di console
 *    d. Atur "startIndex" menjadi 'i + 1' untuk menandai index awal dari kata berikutnya
 * 7. Naikan nilai "i" sebesar 1 untuk berpinah ke karakter berikutnya
 * 8. Perulangan akan terus berlanjut hingga semua karakter dalam "kalimat" telah diperiksa
 * 9. Selesai 
 */

/**
 * PSEUDOCODE 
 * START
 *  INPUT kalimat = 'Hari ini adalah hari yang cerah'
 *  INPUT startIndex = 0
 *  
 *  FOR i = 0 TO kalimat
 *      IF kalimat[i] == ' ' OR i == kalimat -1
 *          INPUT endIndex = 1 === kalimat -1 ? i + 1 : i
 *          INPUT kata = kalimat.substring(startIndex, endIndex)
 *          DISPLAY kata
 *          starIndex = i + 1
 *      ENDIF
 *  ENDFOR
 * END
 */

//Implementasi
let kalimat = "Hari ini adalah hari yang cerah";
let startIndex = 0;

for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === ' ' || i === kalimat.length - 1) {
        let endIndex = i === kalimat.length - 1 ? i + 1 : i;
        let kata = kalimat.substring(startIndex, endIndex);
        console.log(kata);
        startIndex = i + 1;
    }
}
