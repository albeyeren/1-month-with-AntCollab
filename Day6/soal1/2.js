// 2. Menyusun Barisan Bintang Dengan Nested Looping

// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

/* 
START
    rows = 5

    FOR i = 0 TO rows
        bintang = ''
        FOR j = 0 TO rows
            bintang += '*'
        ENDFOR
    ENDFOR
    DISPLAY bintang
END
*/

let rows2 = 5;

for (let i = 0; i < rows2; i++) {
    let star = '';
    for (let j = 0; j < rows2; j++) {
        star += '*';
    }
    console.log(star);
}
