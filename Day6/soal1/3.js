// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

/* 
START
    rows = 5

    FOR i = 1 TO rows
        stars = ''
        FOR j = 1 TO i
            stars += "*"
        ENDFOR
    ENDFOR
    DISPLAY stars
END
*/

let rows = 5;

for(let i = 0; i <= rows; i++){
    let stars = '';
    for(let j = 1; j <= i; j++){
        stars += "*";
    }
    console.log(stars);
}