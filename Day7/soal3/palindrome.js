let kata = "makan";
let kataTerbalik = '';

for (let i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
}

if(kata === kataTerbalik){
    console.log(true);
}else{
    console.log(false);
}