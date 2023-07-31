/*
1. Day of the Week

Objectives
- Mengerti Cara Menggunakan If-Else
- Mengerti Logika If-Else
- Menggunakan Operator Evaluasi ===, !==

Directions
Buatlah algoritma dan implementasi di JavaScript untuk menentukan hari dari sebuah angka. Program akan meminta pengguna memasukkan angka 1 - 7, kemudian menampilkan nama hari yang sesuai.

Contoh masukan dan keluaran:

Input: 1 Output: "Hari: Senin"
Input: 2 Output: "Hari: Selasa"
Input: 7 Output: "Hari: Minggu"
Input: 8 Output: "Hari tidak ditemukan"

RESTRICTION : Tidak boleh menggunakan built-in function apapun untuk menentukan hari dari sebuah tanggal.
*/

/* ALGORITMA:
1. Membulai program
2. Minta user untuk memasukan angka untuk menentukan nama hari
3. Angka tersebut ditampung kedalam sebuah variabel "angka"
4. Jika angka tersebut bernilai dari rentang 1 - 7, tampilkan nama hari
5. Jika angka yang diinputkan selain dari rentang 1 - 7 maka tampilkan bukan hari
6. Selesai
*/

/*PSEUDOCODE:
START
    angka = INPUT 

    IF angka = 1 THEN
        OUTPUT "Hari: Senin"
    ELIF angka = 2 THEN
        OUTPUT "Hari: Selasa"
    ...
    ELIF angka = 7 THEN
        OUTPUT "Hari: Minggu"
    ELSE
        OUTPUT "Hari tidak ditemukan!"
    ENDIF
END
*/

//IMPLEMENTASI
let angka = 67;

if (angka === 1) {
    console.log('Hari: Senin');
} else if (angka === 2) {
    console.log('Hari: Selasa');
} else if (angka === 3) {
    console.log('Hari: Rabu');
} else if (angka === 4) {
    console.log('Hari: Kamis');
} else if (angka === 5) {
    console.log('Hari: Jumat');
} else if (angka === 6) {
    console.log('Hari: Sabtu');
} else if (angka === 7) {
    console.log('Hari: Minggu');
} else {
    console.log("Hari tidak ditemukan!")
}