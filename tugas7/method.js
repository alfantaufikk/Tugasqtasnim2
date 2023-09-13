const fruits = ['apple', 'banana', 'cherry'];
fruits.push('orange');

console.log(fruits)
// fruits sekarang berisi ['apple', 'banana', 'cherry', 'orange']

const fruits2 = ['aplle', 'banana', 'cherry']; 
fruits2.pop('guava');

console.log(fruits2)
// removedFruit sekarang berisi 'cherry', dan fruits berisi ['apple', 'banana']

const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 3);// Mengambil elemen dari indeks 1 hingga 2

console.log(slicedNumbers)
// slicedNumbers sekarang berisi [2, 3], dan numbers tetap [1, 2, 3, 4, 5]

const person = { name: 'John', age: 30, job: 'developer' };
const keys = Object.keys(person);

console.log(keys)
// keys sekarang berisi ['name', 'age', 'job']

const person2 = { name: 'Alfan', age: 30 };
const hasName = person.hasOwnProperty('name'); // true
const hasJob = person.hasOwnProperty('job'); // false

let data = {
    nama : "Alfan",
    umur : 15,
    pekerjaan : "Pengusaha",
    tambahUmur : function(tahun) {
        this.umur += tahun;
    },
    ubahPekerjaan: function(pekerjaanBaru) {
        this.pekerjaan = pekerjaanBaru;
    },
    tampilkanInfo: function(){
        return `Nama: ${this.nama}, Umur: ${this.umur}, Pekerjaan: ${this.pekerjaan}, Alamat ${this.alamat}`;
    },
    tambahData: function(key, value) {
        this[key] = value;
    },
    hapusData: function(key) {
        delete this[key];
    },
}

// Method tambah data
data.tambahUmur(3);
// Method tambah data
data.ubahPekerjaan("Direktur Skincare");
// Method tambah data
data.tambahData("alamat", "Cipacing");
// Method tambah data
data.hapusData("");
// Method tambah data
console.log(data.tampilkanInfo());