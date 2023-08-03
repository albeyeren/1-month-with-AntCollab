/**
 * ALGORITMA
 * 1. Mulai program
 * 2. Buat variabel 'kata' dalam tipe string yang akan diuji apakah palindrome atau tidak
 * 3. Buat bariabel 'kataTerbalik' sebagai string kosong yang akan digunakan untuk menyimpan 'kata' yang sudah dialik urutannya
 * 4. Lakukan perulangan dari akhir 'kata' ke awal (dari karakter terakhir ke karakter pertama)
 * 5. Setelah perulangan selesai, cek apakah 'kata' sama dengan 'kataTerbalik'
 * 6. Jika sama cetak true
 * 7. Jika tidak cetak false
 * 8. Selesai
 */

/*
PSEUDOCODE
START
    INPUT kata
    SET kataTerbalik = ""
    
    FOR i = kata.length - 1 
        kataTerbalik += kata[i]
    ENDFOR

    IF kata == kataTerbalik THEN
        DISPLAY true
    ELSE
        DISPLAY false
    ENDIF
END
*/

// let kata = "katak" //output: true
// let kata = "kasur rusak" //output: true
let kata = "makan";
let kataTerbalik = '';

for (let i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
}

if(kata === kataTerbalik){
    console.log(true);
}else{
    console.log(false);
}