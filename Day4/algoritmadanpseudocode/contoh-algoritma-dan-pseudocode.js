/**
Contoh - Celsius to Fahrenheit Converter

Buatlah sebuah program yang dapat mengkonversi suhu dari skala Celsius ke Fahrenheit. Gunakan formula konversi berikut:

F = (C * 9/5) + 32

Buatlah sebuah algoritma dan pseudocode yang menjelaskan langkah-langkah yang perlu dilakukan dalam program tersebut.

Algoritma:
1. Memulai program
2. Masukkan angka suhu dalam format celcius
3. Simpan angka yang dimasukkan user kedalam sebuah variabel bernama "userInputCelcius"
4. Hitung "userInputCelcius" ke Fahrenheit menggunkana rumus: Fahrenheit = (Celsius * 9/5) + 32.
5. Simpan hasil perhitungan kedalam variabel bernama "fahrenheitResult"
6. Tampilkan nilai "fahrenheitResult" kepada user
7. Selesai

Pseudocode:
START
   INPUT userInputCelcius
   
   fahrenheitResult = (userInputCelcius * 9/5) + 32
   
   DISPLAY "Suhu dalam Fahrenheit: " + userInputCelcius
END
*/

//Implementasi

let userInputCelcius = 10;

let fahrenheitResult = (userInputCelcius * 9/5) + 32;
console.log(fahrenheitResult);