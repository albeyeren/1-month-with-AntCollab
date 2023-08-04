/**
 * Agoritma
 * 1. Mulai program
 * 2. Buat sebuah variabel 'angka' untuk menampung nilai angka
 * 3. Lakukan perulangan while, dan jika selama kondisi true, lakukan:
 * 4. Buat variabel 'angkaStr' dengan value variabel 'angka' dikonversi menjadi string menggunakan toString()
 * 5. Buat variabel 'balikAngka' dan beri nilai string kosong "" untuk menampung nilai 'angkaStr' secara terbalik
 * 6. Lakukan perulangan for dari karakter terakhir hingga ke karakter pertama dalam variabel 'angkaStr'
 * 7. Setelah selesai tambahkan hasil nya ke variabel 'balikAngka' 
 * 8. Ubah 'angkaStr' dan 'balikAngka' kembali menjadi tipe angka menggunakan Number()
 * 9. Setelah keluar dari perulangan, berarti angka palindrome telah ditemukan.
 * 10. Tampilkan angka palindrome selajutnya menggunakan console.log()
 * 11. Selesai
 */

/* 
PSEUDOCODE
START
    INPUT angka

    WHILE true
        SET angka++

        SET angkaStr = angka.toString()
        SET balikAngka = ""

        FOR i = angkaStr.length - 1 TO 0
            SET balikAngka += angkaStr[i]
        ENDFOR

        IF Number(angkaStr) === Number(balikAngka) THEN
            break
        ENDIF
    ENDWHILE
    
    DISPLAY "Angka palindrome selajutnya adalah:" + angka
END
*/

let angka = 20;

while(true){
    angka++;

    let angkaStr = angka.toString();
    let balikAngka = "";

    for(let i = angkaStr.length - 1; i >= 0; i--){
        balikAngka += angkaStr[i];
    }
    
    if(Number(angkaStr) === Number(balikAngka)){
        break;
    }
}
console.log(`Angka palindrome selajutnya adalah: ${angka}`);