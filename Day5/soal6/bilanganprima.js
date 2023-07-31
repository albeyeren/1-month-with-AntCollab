//BILANGAN PRIMA DARI ANGKA 1 - 50

/**
 * ALGORITMA
 * 1. Memulai Program
 * 2. Melakukan perulangan sebanyak 50 kali [Loop1] untuk mendapatkan angka 1 sampai 50
 * 3. membuat variabel penanda angka prima untuk kita perbarui menjadi false jika itu bilangan itu tidak bilangan prima
 * 4. Melakakukan perulangan sebanyak dari angka di [Loop1] dan dimulai dari 2 untuk melakukan pengecekan apakah bilangan itu bisa dibagi angka selain 1 / bilangannya sendiri [Loop2]
 * 5. Jika terdapat kondisi yang bisa membuat angka % index di [Loop2] = 0 maka update penanda prima menjadi false
 * 6. Tampilkan angka dari [Loop1] jika penanda primanya tetap true
 */

/**
 * PSEUDOCODE
 * 
 * START
 *  FOR angka = 1 TO 50
 *    IF angka !== 1
 *      penandaAngkaPrima = true
 *      
 *      FOR index = 2 TO angka
 *        IF anga % index === 0
 *          penandaAngkaPrima = false
 *        ENDIF
 *      ENDFOR
 *      
 *      IF penandaAngkaPrima === true
 *        DISPLAY angka
 *      ENDIF
 *    ENDIF
 *  ENDFOR
 * END
 */

for (let angka = 1; angka <= 50; angka++) {
    if (angka !== 1) {
        let penandaAngkaAdalahPrima = true;

        for (let index = 2; index < angka; index++) {
            if (angka % index === 0) {
                penandaAngkaAdalahPrima = false;
            }
        }

        if (penandaAngkaAdalahPrima) {
            console.log(angka);
        }
    }
}