// Text kecil menjadi besar
const text = "Hello, World!";
const upperCaseText = text.toUpperCase();

console.log(upperCaseText)

// Text besar menjadi kecil
const text2 = "Hello, World!";
const lowerCaseText = text.toLowerCase();

console.log(lowerCaseText)

// Mengambil karakter pada posisi tertentu dalam sebuah string('H')
const text3 = "Hello, World!";
const character = text.charAt(0); 

console.log(character)

// Mengubah kata "Hello" menjadi "JavaScript"
const text4 = "Hello, World!";
const newText = text.replace("World", "JavaScript");

console.log(newText)

// Mengambil potongan ('Hello')
const text5 = "Hello, World!";
const subText = text.substring(0, 5); 

console.log(subText)

// Memisahkan menjadi array ('Hello Word')
const text6 = "Hello, World!";
const words = text.split(" ");

console.log(words)

// Mengembalikan 7
const text7 = "Hello, World!";
const index = text.indexOf("World"); 

console.log(index)

// Mengambil kata ('World')
const text8 = "Hello, World!";
const sub = text.slice(7);

console.log(sub)

// Menghasilkan kata ('Hello, World)
const text1 = "Hello, ";
const text9 = "World!";
const combinedText = text1.concat(text9);

console.log(combinedText)

// Mengembalikan 65 (kode Unicode untuk 'A')
const text0 = "A";
const unicode = text.charCodeAt(0);

console.log(unicode)
