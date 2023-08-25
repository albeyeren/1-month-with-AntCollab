function tabelPerkalian(angka) {
    // you can only write your code here!
    let hasil = [];

    for (let i = 1; i <= angka / 2; i++) {
        if (angka % i === 0) {
            let faktor = `${i}x${angka / i}`;
            hasil.push(faktor);
        }
    }
    hasil.push(`${angka}x1`);

    return hasil;
}

// TEST CASES
console.log(tabelPerkalian(24)); // [ '1x24', '2x12', '3x8', '4x6' ]
console.log(tabelPerkalian(90)); // [ '1x90', '2x45', '3x30', '5x18', '6x15', '9x10' ]
console.log(tabelPerkalian(20)); // [ '1x20', '2x10', '4x5']
console.log(tabelPerkalian(179)); // [ '1x179' ]
console.log(tabelPerkalian(1)); // [ '1x1' ]