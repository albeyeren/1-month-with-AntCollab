const kata = 'antcollab';

for (let i = kata.length - 1; i >= 0; i--) {
    let penampung = '';

    for (let j = 0; j < kata.length; j++) {
        if (j >= i) {
            penampung += kata[j];
        } else {
            penampung += ' ';
        }
    }
    console.log(penampung);
}