// CONSOLE LOG
// let greetings = "Selamat pagi!";
// console.log(greetings);

// let warning = "Jangan lupa makan!";

// let todos = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
// ];

// console.table(todos);
// console.log(warning);
// console.warn(warning); // peringatan
// console.error(warning); // error

// ALERT
// alert("Selamat pagi!");

// CONFIRM
// memberikan pilihan kepada user untuk klik OK atau Cancel
// if (confirm("Apakah anda ingin menghapus?") === true) {
//   // perintah ketika OK di klik
//   console.log("Berhasil hapus");
// } else {
//   // perintah ketika Cancel di klik
//   console.log("Tidak jadi hapus");
// }

// PROMPT
// let name = prompt("Masukkan nama anda");
// console.log(name);

// var, let dan const
// VAR
// var greetings = "Selamat pagi!";
// var age = 25;
// var age = null;
// var age = "dua puluh lima";
// var age = {
//   number: 25,
// };
// console.log(greetings);

// var greetings = "Selamat siang!";
// console.log(greetings);

// LET
// let food = "Ketoprak";

// let food = "Bubur ayam";
// food = "Bubur ayam";
// food = null;
// food = {
//   rasa: "asin",
//   bahan: ["nasi", "ayam", "sayur"],
// };
// console.log("Aku pagi ini makan ", food);

// name = "Jaya Saleh";
// let name = "Alex Josua";
// console.log(name);

// CONST => konstanta => variable yang tidak bisa di ubah isinya setelah di deklarasi
// const kapasitasBus = 59;
// const kapasitasBus = 49; // tidak boleh
// kapasitasBus = 49;

// console.log(kapasitasBus);

// operator aritmetika ==> + , - , * , / , %
let jumlah = 10 + 2;
// console.log(jumlah);

let kurang = 10 - 2;
// console.log(kurang);

let kali = 10 * 2;
// console.log(kali);

let bagi = 10 / 2;
// console.log(bagi);

let modulo = 25 % 3; // 25 dibagi 3 sisanya berapa? ===> 25 - 24 = 1
// console.log(modulo);

// operator logika/pembanding ===> AND , OR
// == (EQUAL) , === (EQUAL) , != (NOT EQUAL) , > , < , <= , >=, &&, ||

// let suhu = 18;

// let suhuNormal = suhu > 20 && suhu < 30;
// console.log(suhuNormal ? "suhunya normal" : "suhunya tidak normal");

// const nilaiUTS = 80;
// const nilaiUAS = 80;

// let lulus = nilaiUTS > 80 || nilaiUAS > 80;
// console.log(lulus ? "lulus" : "tidak lulus");

// let username = "Arya";
// let password = 1234;

// if (username == "Arya" && password === "1234") {
//   console.log("berhasil masuk");
// } else {
//   console.log("username atau password salah");
// }

// let member = 5;

// if (member != 5) {
//   console.log("peserta harus terdiri dari 5 orang");
// } else {
//   console.log("memenuhi syarat jumlah peserta");
// }

// let name = "Leo";

function greetings(name, food) {
  console.log("selamat pagi!");
  console.log("Nama saya :", name);
  console.log("Saya suka makan :", food);
}

let name1 = "Arya";
let food1 = "Soto Ayam";

greetings(name1, food1);

// PR => switch, for loop, while, do while