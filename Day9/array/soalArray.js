let daftarAntrian = ["Dika", "Doddy", "Galih"];


// Antrian

// Diberikan sebuah function antrian yang menerima dua parameter yaitu line bertipe array dan person bertipe string. Function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah diakhir array sesuai dengan parameter person.

function antrian(line, person) {
    line.push(person);
    return line;
}

let orangBaru = "Erik"; //Menambahkan erik ke dalam antrian baru

let arr = antrian(daftarAntrian, orangBaru);
console.log(arr);



// Panggil Antrian

// Diberikan sebuah function panggilAntrian yang menerima parameter line bertipe array. Function ini akan mengembalikan array yang dimana data array tersebut berkurang 1 didepannya.

function panggilAntrian(line) {
    line.shift();
    return line;
}

panggilAntrian(daftarAntrian); //Memanggil "Dika" antrian pertama dari variabel daftar antrian
console.log(daftarAntrian);



// Tumpukan

// Diberikan sebuah function tumpukan yang menerima dua parameter line bertipe array dan title bertipe string. Function ini akan mengembalikan array yang dimana data array sudah bertambah diawal array sesuai dengan parameter title.

function tumpukan(line, title) {
    line.unshift(title);
    return line;
}

tambahTumpukan = 'Sandhika'; // Menumpuk urutan antrian dengan menempatkan "Shandika" ke antrian pertama dari varibel daftar antrian.

let tumpukanBaru = tumpukan(daftarAntrian, tambahTumpukan);
console.log(tumpukanBaru);




// Ganjil Genap

// Diberikan sebuah function ganjilGenap yang menerima satu parameter plat bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).
// Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.

function ganjilGenap(plat) {
    if (plat === '') {
        return 'data tidak ditemukan';
    }

    if (plat === undefined) {
        return 'invalid data';
    }

    let genap = 0;
    let ganjil = 0;

    let platArray = plat.split(';');

    for (let i = 0; i < platArray.length; i++) {
        if (platArray[i] % 2 == 0) {
            genap++;
        } else {
            ganjil++;
        }
    }

    if (genap > 0 && ganjil > 0) {
        return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`;
    } else if (genap > 0) {
        return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`;
    } else if (ganjil > 0) {
        return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`;
    } else {
        return "plat tidak ditemukan";
    }
};

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data