// Logic Challenge - Bandingkan Angka

/**
 * Buatlah program yang membandingkan kedua angka tersebut, jika angka2 lebih besar dari angka1 maka tampilkan nilai true, dan false jika sebaliknya. Jika kedua angka bernilai sama, maka tampilkan -1.

Contoh 1: let angka1 = 5 let angka2 = 3

maka output adalah false

Contoh 2: let angka1 = 5 let angka2 = 5

maka output adalah -1
 */

/* 
ALGORITMA
1. Mulai program
2. Buat variabel "angka1" dan "angka2"
3. Buat program untuk membandingkan kedua angka tersebut
4. Jika angka2 lebih besar dari angka1 maka, tampilkan True dan False jika sebaliknya
5. Jika kedua angka bernilai sama, maka tampilkan -1
6. Selesai

PSEUDOCODE
START
    INPUT angka1
    INPUT angka2

    IF angka1 === angka2 THEN
        DISPLAY "-1"
    ELIF angka1 > angka2 THEN
        DISPLAY false
    ELSE 
        DISPLAY true
    ENDIF
END
*/

let angka1 = 3;
let angka2 = 3;

if(angka1 === angka2){
    console.log(-1);
}else if(angka1 > angka2){
    console.log(false);
}else{
    console.log(true);
}