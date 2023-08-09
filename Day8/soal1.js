const nums = [3, 2, 1, 1, 4];
let posisiSekarang = 0;

for (let i = 0; i < nums.length; i++) {
    if (posisiSekarang >= nums.length - 1) {
        console.log(true)
    };

    if (i > posisiSekarang) {
        console.log(false)
    };

    posisiSekarang = posisiSekarang > (i + nums[i]) ? posisiSekarang : i + nums[i];
}