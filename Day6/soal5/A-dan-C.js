// Logic Challenge - A dan C

// Diberikan sebuah variable kata bertipe String.

// Buatlah program dimana program tersebut akan menghitung jumlah karakter a dan jumlah karakter c. Setelah perhitungan selesai maka tampilkan true jika jumlah karakter a dan c sama dan false jika tidak

/**
ALGORITMA 
1. Mulai program
2. Buat variabel "kata" betrtipe string
3. Isi variabel tersebut dengan string a dan c
4. Lakukan perulangan untuk menghitung jumlah karakter a dan jumlah karakter c
5. Setelah perhitungan selesai, maka:
    5.1. Jika jumlah karakter a dan c sama tampilkan true
    5.2. Jika jumlah karakter a dan c tidak sama tampilkan false
6. Selesai

PSEUDOCODE
START
    INPUT jumlahA
    INPUT jumlahC
    kata = INPUT string a dan c

    FOR i = 0 TO kata
        IF kata[i] = "a" THEN
            jumlahA = jumlahA + 1
        ENDIF
        IF kata[i] = "c" THEN
            jumlahC = jumlahC + 1
        ENDIF
    ENDFOR
    hasil = jumlahA === jumlahC
    DISPLAY hasil
END
*/


let jumlahA = 0;
let jumlahC = 0;

//TRUE
let kata1 = "acacac"; // hasil true karena jumlah a dan c sama

for(let i = 0; i < kata1.length; i++){
    if(kata1[i] === "a"){
            jumlahA++;
        }
    if(kata1[i] === "c"){
        jumlahC++;
    }
}

let hasil1 = jumlahA === jumlahC;
console.log(hasil1);

//FALSE
let kata2 = "acaacac"; // hsil false karena jumlah a dan c tidak sama. a = 4 dan c = 3

for(let j = 0; j < kata2.length; j++){
    if(kata2[j] === "a"){
            jumlahA++;
        }
    if(kata2[j] === "c"){
        jumlahC++;
    }
}

let hasil2 = jumlahA === jumlahC;
console.log(hasil2);