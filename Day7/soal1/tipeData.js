let nilai = "Hello World";

if(typeof nilai === "string"){
    if(typeof nilai === "string" && nilai.length === 0){
        console.log(`Nilai adalah empty string`); //jika nilai string kosong
    }else{
        console.log(`Nilai bertipe string: ${nilai}`); //jika nilai string ada isinya
    }
}else if(typeof nilai === "number"){
    if(isNaN(nilai)){
        console.log(`Nilai adalah ${nilai}`); //jika nilai merupakan NaN (Not-a-Number)
    }else if(nilai === 0){
        console.log(`Nilai adalah angka ${nilai}`); // jika bernilai 0
    }else{
        console.log(`Nilai bertipe number: ${nilai}`); // jika nilai berisi angka
    }
}else if(typeof nilai === "boolean"){
    if(nilai === "true"){
        console.log(`Nilai bertipe boolean: ${nilai}`); // jika nilai true
    }else{
        console.log(`Nilai bertipe boolean: ${nilai}`); // jika nilai false
    }
}else if(nilai === null){
    console.log(`Nilai adalah ${nilai}`); // jika nilai null
}else if(nilai === undefined){
    console.log(`Nilai adalah ${nilai}`); // jika undifined
}else{
    console.log(`Nilai tidak dikenali`); // 
}



