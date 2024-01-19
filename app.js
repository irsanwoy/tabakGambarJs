// isi nilai maksimum
let maksimum = parseInt(prompt('masukan nilai maksimal untuk ditebak'))
let percobaan = 1;
while(!maksimum){
    let maksimum = parseInt(prompt('masukan nilai maksimal untuk ditebak'))
}
// isi dan bulatkan nilai target
let target = Math.floor(Math.random() * maksimum + 1)
console.log(target)
// isi tebakan dan ifnya tinggi dan rendah
let tebak = parseInt(prompt('masukan percobaan pertama mu'))
while(parseInt(tebak) !== target){
    percobaan ++;
    if(tebak > target){
        tebak = parseInt(prompt('tebakan mu terlalu tinggi coba lagi'))
    }else if(tebak < target){
        tebak = parseInt(prompt('tebakan mu terlalu rendah coba lagi'))
    }else{
        console.log(`selamat tebakan anda benar !! dengan percobaan ${percobaan} kali`)
    }
    
}


    // console.log(`selamat tebakan anda benar !! dengan percobaan ${percobaan} kali`)

// alert selamat