/* 
Logic Challenge - Balik Kata

PSEUDOCODE
START
    kata = "AntCollab"
    kataTerbalik = ''

    FOR i = kata TO i
        kataTerbalik += kata[i]
    ENDFOR
    DISPLAY kataTerbalik
END
*/

let kata = 'AntCollab';
let kataTerbalik = '';

for (let i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
}

console.log(kataTerbalik);


