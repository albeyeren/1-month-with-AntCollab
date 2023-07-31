/* 
Andi memiliki sejumlah angka dalam sebuah array, dan dia ingin mengelompokkan angka-angka tersebut menjadi 3 kelompok berdasarkan kondisi berikut:

Kelompok Pertama: Angka-angka yang merupakan kelipatan 3
Kelompok Kedua: Angka-angka yang merupakan kelipatan 5
Kelompok Ketiga: Angka-angka yang bukan kelipatan 3 maupun kelipatan 5
Tampilkan angka-angka tersebut ke dalam kelompok-kelompok tersebut dalam bentuk array.


PSEUDOCODE:
1. START
2. Buat tiga array kosong: kelompokPertama, kelompokKedua, kelompokKetiga
3. Input array angka = [3, 5, 7, 9, 15, 12, 10, 6, 8, 20]
4. Lakukan perulangan pada array "angka"
4. Untuk setiap angka dalam angka, lakukan langkah 4.1 - 4.3:
   4.1 Jika angka merupakan kelipatan 3 dan kelipatan 5, tambahkan angka ke kelompokPertama
   4.2 Jika angka hanya merupakan kelipatan 5 (bukan kelipatan 3), tambahkan angka ke kelompokKedua
   4.3 Jika angka bukan kelipatan 3 maupun kelipatan 5, tambahkan angka ke kelompokKetiga
5. Tampilkan isi dari ketiga kelompok:
   - Kelompok Pertama: tampilkan isi kelompokPertama
   - Kelompok Kedua: tampilkan isi kelompokKedua
   - Kelompok Ketiga: tampilkan isi kelompokKetiga
6. END
*/

/**
 * PSEUDOCODE
 * START
 *      kelompokPertama = []
 *      kelompokKedua = []
 *      kelompokKetiga = []
 *      angka = [3, 5, 7, 9, 15, 12, 10, 6, 8, 20]
 * 
 *      FOR i = 0 to angka
 *          IF angka[i] % 3 == 0 THEN
 *              PUSH TO kelompokPertama
 *          ELIF angka[i] % 5 == 0 THEN
 *              PUSH TO kelompokKedua
 *          ELSE
 *              PUSH TO kelompokKetiga
 *          ENDIF
 *          
 *          DISPLAY kelompokPertama
 *          DISPLAY kelompokKedua
 *          DISPLAY kelompokKetiga
 * END
 */


let kelompokPertama = [];
let kelompokKedua = [];
let kelompokKetiga = [];
let angka = [3, 5, 7, 9, 15, 12, 10, 6, 8, 20];

for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 3 == 0) {
        kelompokPertama.push(angka[i]);
    } else if (angka[i] % 5 == 0) {
        kelompokKedua.push(angka[i]);
    } else {
        kelompokKetiga.push(angka[i]);
    }
}

console.log(kelompokPertama);
console.log(kelompokKedua);
console.log(kelompokKetiga);