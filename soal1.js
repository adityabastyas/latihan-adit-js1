function hitungLuas(panjang, lebar) {
  const luas = panjang * lebar;
  console.log(luas);
}

const hitungLuas2 = (panjang, lebar) => {
  const luas = panjang * lebar;
  console.log(luas);
};

hitungLuas(5, 4);
hitungLuas2(7, 9);

const angka = [1, 2, 3];
angkaBaru = [...angka, 4, 5];
console.log(angkaBaru);

const angka2 = { 1: "ha", 2: "hi", 3: "hu" };
angkaBaru2 = { ...angka2, 4: "he", 5: "ho" };
console.log(angkaBaru2);

const user1 = {
  name: "adit",
  sapa() {
    console.log(`Halo, nama saya ${this.name}`);
  },
};

user1.sapa();

let data = [1, "dua", true];
// type data data adalah array
// type data "dua" adalah string of Array
// type data true adalah Boolean of Array

const siswa = {
  nama: "Rina",
  kelas: "10 IPA",
  umur: 16,
};

const { nama, kelas } = siswa;
console.log(nama);
console.log(kelas);

function kerjakanTugas(mapel, calback) {
  console.log(`menerjakan tugas ${mapel}`);
  calback();
}

function sudah() {
  console.log("tugas selesai");
}

kerjakanTugas("matematika", sudah);

const user = {
  name: "adit",
  hobi: ["coding", "gaming", "membaca"],
};

const {
  name,
  hobi: [perama, kedua, ketiga],
} = user;
console.log(name);
console.log(perama);
console.log(kedua);
console.log(ketiga);

const siswa2 = {
  nama1: "Rina",
  alamat: {
    kota: "Bandung",
    provinsi: "jawa Barat",
  },
};

const {
  nama1,
  alamat: { kota, provinsi },
} = siswa2;

console.log(nama1);
console.log(kota);
console.log(provinsi);
