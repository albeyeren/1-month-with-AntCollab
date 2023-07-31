/* 
Permainan Tebak Angka

Dalam permainan tebak angka ini, seorang pemain dapat menekan tombol untuk mengacak angka 1 - 5.

Jika pemain mendapatkan angka:

1. Akan menampilkan "Coba lagi ya."
2. Akan mendapatkan jumlah kupon/karcis sebanyak 5 dan menampilkan "Selamat kamu mendapatkan kupon sebanyak 5."
3. Akan mendapatkan jumlah kupon/karcis sebanyak 15 dan menampilkan "Selamat kamu mendapatkan kupon sebanyak 15."
4. Akan mendapatkan jumlah kupon/karcis sebanyak 50 dan menampilkan "Selamat kamu mendapatkan kupon sebanyak 50."
5. Akan mendapatkan jumlah kupon/karcis sebanyak 100 dan menampilkan "WOW 100 ticket, kamu menang jackpot! Selamat!!"

Buatlah pseudocode dan implementasikan menggunakan SWITCH-CASE.
*/

/* 
PSEUDOCODE:
    START
        angka = Math.floor(Math.random() * 5) + 1

        SWITCH angka
            CASE OF 1
                DISPLAY "Coba lagi"
            ENDCASE
            CASE OF2
                DISPLAY "Selamat kamu mendapatkan kupon sebanyak 5."
            ENDCASE
            CASE OF 3
                DISPLAY "Selamat kamu mendapatkan kupon sebanyak 15."
            ENDCASE
            CASE OF 4
                DISPLAY "Selamat kamu mendapatkan kupon sebanyak 50."
            ENDCASE
            CASE OF 2
                DISPLAY "WOW 100 ticket, kamu menang jackpot! Selamat!!"
            ENDCASE
            DEFAULT
                DISPLAY "Angka yang ditebak harus antara 1 hingga 5."
        ENDSWITCH
    END
*/

let angka = Math.floor(Math.random() * 5) + 1;

console.log(angka);
switch (angka) {
    case 1:
        console.log("Coba lagi ya...");
        break;
    case 2:
        console.log("Selamat kamu mendapatkan kupon sebanyak 5.");
        break;
    case 3:
        console.log("Selamat kamu mendapatkan kupon sebanyak 15.");
        break;
    case 4:
        console.log("Selamat kamu mendapatkan kupon sebanyak 50.");
        break;
    case 5:
        console.log("WOW, kamu menang jackpot! Selamat!!");
        break;
    default:
        console.log("Angka yang ditebak harus antara 1 hingga 5.");
}