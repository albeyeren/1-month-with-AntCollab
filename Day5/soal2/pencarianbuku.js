//Pencarian Buku
/*
Petunjuk
Seorang pengunjung perpustakaan direpresentasikan dalam JavaScript dengan memiliki variable nama, usia, dan jumlahUang. Pengunjung tersebut datang ke perpustakaan untuk mencari buku yang dia inginkan, namun perpustakaan memiliki kondisi sebagai berikut:

Jika nama dari pengunjung kosong, tampilkan di console "Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu." dan program selesai.
Jika usia dari pengunjung kurang dari 10 tahun, maka dia hanya boleh mencari buku cerita anak-anak. Jika usia 10 tahun ke atas, dia boleh mencari buku apapun.
Jika jumlahUang yang dimiliki kurang dari 100000, maka tampilkan di console "Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang.". Jika uang cukup, tampilkan "Anda dapat mencari buku. Sisa uang anda: [...]", dan ganti [...] dengan sisa uang yang telah dikurangi oleh harga buku yang ingin dicari.
*/

/* 
ALGORITMA: 
1. Input variabel nama, usia, dan jumlahUang dari pengunjung perpustakaan.
2. Jika nama kosong, tampilkan pesan "Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu." dan program selesai.
3. Jika usia kurang dari 10 tahun:
   3.1. Tampilkan pesan "Anda hanya boleh mencari buku cerita anak-anak."
   3.2. Keluar dari kondisi usia.
4. Jika usia 10 tahun ke atas:
   4.1. Tampilkan pesan "Anda boleh mencari buku apapun."
5. Buat variabel "hargaBuku" untuk menampung harga dari buku yang akan dibeli.
6. Jika jumlahUang kurang dari harga buku: //(dimana harga dari buku adalah sebesar 100000)
   6.1. Tampilkan pesan "Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang."
   6.2. Program selesai.
7. Jika uang cukup:
   7.1. Buat variabel "sisaUang" untuk menampung sisa dari uang yang digunakan untuk membeli buku dengan cara: sisaUang = "jumlahUang - hargaBuku"
   7.2. Tampilkan pesan "Anda dapat mencari buku. Sisa uang anda: [sisaUang]", dan ganti [sisaUang] dengan (jumlahUang - hargaBuku).
8. Program selesai.


PSEUDOCODE
START
    INPUT nama
    INPUT usia
    INPUT jumlahUang

    IF nama = "" THEN
        DISPLAY "Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu." 
    ELSE
        IF usia < 10 THEN
            DISPLAY  "Anda hanya boleh mencari buku cerita anak-anak."
        ELSE 
            DISPLAY "Anda boleh mencari buku apapun."
        ENDIF
    ENDIF

    hargaBuku = 100000
    IF jumlahUang < hargaBuku THEN
        DISPLAY "Maaf, uang anda tidak mencukupi untuk mencari buku. Anda harus pulang."
    ELSE  
        sisaUang = jumlahUang - hargaBuku
        DISPLAY "Anda dapat mencari buku. Sisa uang anda: + sisaUang"
    ENDIF
END
*/

let nama = 'Budi';
let usia = 7;
let jumlahUang = 150000;

if (nama == '') {
    console.log("Anda tidak dapat mencari buku. Silakan isi nama anda terlebih dahulu.")
} else {
// validasi usia
    if (usia < 10) {
        console.log(`Halo ${nama}, saya lihat usiamu kurang dari 10 tahun. Oleh karena itu kamu hanya boleh mencari buku ceria anak-anak!`)
    } else {
        console.log('Silahkan mencari buku.')
    }
// jumlah uang
let hargaBuku = 100000;

    if (jumlahUang < hargaBuku) {
        console.log(`Maaf ${nama}, uang anda tidak mencukupi. Anda harus pulang!`)
    } else {
        let sisaUang = jumlahUang - hargaBuku;
        console.log('Buku telah dibeli. Sisa uang anda :' + sisaUang)
    }
}