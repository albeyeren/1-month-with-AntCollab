/*
2. Graduates

Objectives
- Mengerti Cara Menggunakan If-Else
- Mengerti Logika If-Else
- Mengerti Cara Menggunakan Operator Evaluasi ===, !==

Directions
Diberikan 3 variable yang me-representasikan seorang murid:

nama
nilai
absen

Buatlah algoritma/pseudocode dan implementasi sebuah kondisional yang menentukan apakah murid tersebut lulus atau tidak.

Murid dinyatakan lulus jika:

- nilainya 70 keatas
- absennya dibawah 5 kali

Tampilkan nama murid dan keterangan apakah murid tersebut 'lulus' atau 'tidak lulus'

RESTRICTION : Tidak boleh menggunakan built-in function apapun
*/

// ALGORITMA:
// 1. Mulai Program
// 2. Membuat variabel "nama, nilai, dan absen"
// 3. Mengeksekusi variabel "nama, nilai dan absen"
// 4. Jika nilai lebih besar atau sama dengan 70 dan jika nilai absen kurang dari 5, maka cetak nama + "lulus"
// 5. Jika nilai dan absen tidak memenuhi statement diatas maka, cetak nama + "tidak lulus"
// 6. selesai

// PSEUDOCODE: 
// START
//     INPUT nama
//     INPUT nilai
//     INPUT absen
//
//     IF nilai >= 70 AND absen < 5 THEN
//         OUTPUT "Nama siswa" + nama + "keterangan Lulus"
//     ELSE
//         OUTPUT OUTPUT "Nama siswa" + nama + "keterangan Tidak Lulus"
//     ENDIF
// END


// IMPLEMENTASI
let nama = 'John Doe';
let nilai = 69;
let absen = 3;

if (nilai >= 70 && absen < 5) {
    console.log(`Nama siswa ${nama}. Keterangan Lulus dengan nilai: ${nilai} dan absen sebanyak ${absen}!`);
} else {
    console.log(`Nama siswa ${nama}. Keterangan Tidak Lulus dengan nilai: ${nilai} dan absen sebanyak ${absen}!`);
}