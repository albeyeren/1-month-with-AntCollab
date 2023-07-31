// 4. Pemecahan Kata dan Perhitungan Panjangnya

// Pada tugas ini, kamu diminta untuk "memecah" sebuah kalimat menggunakan metode substring. Tampilkan juga panjang kata masing-masingnya di samping kata tersebut di console.

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
 *          panjangKata = endIndex - startIndex
 *          DISPLAY kata + " panjang: " panjangKata
 *          starIndex = i + 1
 *      ENDIF
 *  ENDFOR
 * END
 */

let kalimat = 'Hari ini adalah hari yang cerah';

let startIndex = 0;

for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === ' ' || i === kalimat.length - 1) {
        let endIndex = i === kalimat.length - 1 ? i + 1 : i;
        let kata = kalimat.substring(startIndex, endIndex);
        let panjangKata = endIndex - startIndex;
        console.log(`${kata} (panjang: ${panjangKata})`);
        startIndex = i + 1;
    }
}