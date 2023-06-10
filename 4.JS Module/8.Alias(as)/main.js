// alias di export (tidak direkomendasikan)
const company = "Belajar JavaScript"
function sum(first,second) {
    return first + second;
}
class Company {

}

export{company as perusahaan,sum as total,Company as Perusahaan}

// alias di export (tidak direkomendasikan)

const nama = "Belajar JavaScript"
function hasil(first,second) {
    return first + second;
}
class Usaha {

}

export{nama,hasil,Usaha};