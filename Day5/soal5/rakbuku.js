/**
 * ALGORITMA
 * 1. Memulai program
 * 2. Lakukan perulangan sebanyak 10 kali (Menandakan Budi memasukan buku ke dalam raknya)
 * 3. Jika buku yang disimpan itu belum 10, maka tampilkan banyak buku BUdi sekarang
 * 4. Jika buku yang disimpan sudah 10, maka tampilkan "Rak sudah penuh, Budi tidak bisa menyimpan buku baru"
 *  5. Selesai
 */

/* 
PSEUDOCODE 
START
    FOR bukuBudiSekarang = 1 TO 10
        IF bukuBudiSekarang < 10 THEN
            DISPLAY "Budi memiliki " + bukuBudiSekarang + " buku di rak buku"
        ENDIF
    ENDFOR
    DISPLAY "Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru"
END
*/

for(let bukuBudiSekarang = 1; bukuBudiSekarang <= 10; bukuBudiSekarang++){
    if(bukuBudiSekarang <= 10) {
        console.log("Budi memiliki " + bukuBudiSekarang + " buku di rak buku");
    }
}
console.log("Rak buku sudah penuh, Budi tidak apat menyimpan buku baru");






/* 
START
    rakBuku = 0

    WHILE rakBuku < 10
        DISPLAY "Budi memiliki " + rakBuku + " buku di rak buku"
        rakBuku = rakBuku + 1
        DISPLAY "Budi menyimpan buku baru ke rak buku."
    ENDWHILE
    DISPLAY "Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru"
END
*/

// let rakBuku = 0;

// while (rakBuku < 10) {
//     console.log(`Budi memiliki ${rakBuku} buku di rak buku.`);
//     rakBuku++;
//     console.log("Budi menyimpan buku baru ke rak buku.");
// }
// console.log(`Budi memiliki ${rakBuku} buku. Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru.`);


/* 
START
    rakBuku = 0

    WHILE rakBuku > 0
        DISPLAY "Budi memiliki " + rakBuku + " buku di rak buku"
        rakBuku = rakBuku - 1
        DISPLAY "Budi mengambil satu buku dari rak buku."
    ENDWHILE
    DISPLAY "Rak buku kosong, Budi tidak dapat mengambil buku lagi."
END
*/


// while (rakBuku > 0) {
//     console.log(`Budi memiliki ${rakBuku} buku di rak buku.`);
//     rakBuku--;
//     console.log("Budi mengambil satu buku dari rak buku.");
// }
// console.log("Rak buku kosong, Budi tidak dapat mengambil buku lagi.");