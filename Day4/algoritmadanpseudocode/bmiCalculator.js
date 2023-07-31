// 1. BMI Calculator

/* Objectives
- Memahami pengertian dan penggunaan BMI (Body Mass Index)
- Menerapkan formula BMI dalam program

Directions
Buatlah sebuah program yang dapat menghitung BMI (Body Mass Index) seseorang berdasarkan berat badan (kg) dan tinggi badan (m). Gunakan formula BMI berikut:

BMI = berat_badan / (tinggi_badan^2)

Algoritma:
1. Memulai program
2. Minta pengguna untuk memasukan angka berat badan dan tinggi badan
3. Simpan angka yang dimasukan user kedalam sebuah variabel bernama "inputBeratBadan" dan "inputTinggiBadan"
4. Hitung "inputBeratBadan" dan inputTinggiBadan ke rumus: 
BMI = berat_badan / (tinggi_badan^2)
5. Simpan hasil perhitungan kedalam variabel "BMIResult"
6. Tampilkan nilai "BMIResult" kepada user
7. Selesai

Pseudocode:
START
    INPUT " Masukan berat badan "
    INPUT " Masukan tinggi badan "

    BMIResult = inputBeratBadan / (inputTinggiBadan ^2)

    DISPLAY "Nilai BMI anda : " + BMIResult
END */

//Implementasi

let inputBeratBadan = 30;
let inputTinggiBadan = 140;

let BMIResult = inputBeratBadan / (inputTinggiBadan ** 2);

console.log(BMIResult);