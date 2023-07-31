/**
 * 4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping
 * 
 * Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, jumlah bintang sesuai dengan value dari letiabel rows4. Baris kedua jumlah bintang berkurang 1, dan seterusnya hingga bintang hanya sisa 1. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
 */

/* 
START
    rows = 5

    FOR i = rows TO i
        stars = ''
        FOR j = 0 TO i
            stars = "*"
        ENDFOR
    ENDFOR
END
*/

let rows = 5;

for(let i = rows; i >= 1; i--){
    let stars = '';
    for(let j = 0; j < i; j++){
        stars += "*";
    }
    console.log(stars);
}