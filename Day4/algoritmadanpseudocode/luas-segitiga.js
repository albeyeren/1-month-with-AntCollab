/**
2. Triangle Area Calculator

Objectives
-Memahami konsep perhitungan luas segitiga
-Menerapkan formula perhitungan luas segitiga dalam program

Directions
Buatlah sebuah program yang dapat menghitung luas segitiga berdasarkan panjang alas dan tinggi segitiga. Gunakan formula perhitungan luas segitiga berikut:

Luas = (alas * tinggi) / 2


Algoritma: 
1. Memulai program
2. minta user untuk menentukan panjang alas dan tinggi dari sebuah segitiga
3. simpan nilai alas pada variabel "a" dan nilai tinggi pada variabel "t"
4. Hitung luas segitiga menggunakan rumus: Luas = (a * t) / 2
5. Simpan hasil perhitungan kedalam variabel "Luas"
6. Tampilkan nilai "Luas" kepada user
7. Selesai

Pseudocode: 
START
    INPUT alas
    INPUT tinggi

    Luas = (alas * tinggi) / 2

    DISPLAY Luas
END
 */

//Implementasi

let a = 5; // a = alas
let t = 10; // t = tinggi

let luas = (a * t) / 2;
console.log(luas);