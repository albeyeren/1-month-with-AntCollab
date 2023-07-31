/**
Luas = (alas * tinggi) / 2

Objectives
-Memahami konsep bilangan ganjil dan genap
-Menerapkan operasi modulo dalam program

Directions
Buatlah sebuah program yang meminta pengguna memasukkan sebuah bilangan bulat. Program akan mengecek apakah bilangan tersebut ganjil atau genap, kemudian menampilkan pesan yang sesuai.

Buatlah sebuah algoritma dan pseudocode yang menjelaskan langkah-langkah yang perlu dilakukan dalam program tersebut.

algoritma: 
1. Jalankan program
2. Minta user untuk memasukan bilangan bulat
3. Simpan bilangan bulat tersebut kedalam variabel "angka"
4. Program akan mengecek apakah ganjil/genap bilangan bulat tersebut dengan cara dibagikan dengan 2 
5. Jika bilangan tersebut bernilai 0 atau tidak memiliki sisa bagi maka tampilkan genap
6. Jika bilangan tersebut tidak bernilai 0 setelah dibagi dengan 2 maka tampilkan ganjil
7. Selesai

Pseudocode:
START
    DISPLAY "Masukan angka bilangan bulat"
    INPUT angka

    IF angka % 2 = 0 THEN
        OUTPUT "genap"
    ELSE
        OUTPUT "ganjil"
    ENDIF
END
*/

//Implementasi
let angka = 9;

if(angka % 2 === 0) {
    console.log('genap');
}else {
    console.log('ganjil');
}