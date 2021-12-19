/*
CASE: Mengurutkan tinggi badan dari yang tertinggi hingga yang terpendek

input => 3 angka tinggi badan: tinggiA, tinggiB, dan tinggiC
output => urutan nilai tinggi badan dari yang paling tinggi ke yang paling pendek

jika tinggiA === tinggiB atau tinggiA === tinggiC, maka cetak tinggiA

jika tinggiA === tinggiB
cek yang paling tinggi 
jika tinggiA > C, maka cetak tinggiA dan tinggiB, jika tidak cetak tinggiC

cek yang paling pendek
jika tinggiA < C, maka cetak tinggiA dan tinggiB, jika tidak cetak tinggiC 

jika tinggiA === tinggiC
cek yang paling tinggi:
jika tinggiA > tinggiB, maka cetak tinggiA dan tinggiC, jika tidak cetak tinggiB

cek yang paling pendek
jika tinggiA < tinggiB, maka cetak tinggiA dan tinggiC, jika tidak cetak tinggiB

jika tinggiC === tinggiB
cek yang paling tinggi
jika tinggiC > tinggiA, maka cetak tinggiC dan tinggiB, jika tidak cetak tinggiA

cek yang paling pendek
jika tinggiC < tinggiA, maka cetak tinggiC dan tinggiB, jika tidak cetank tinggiA

jika tinggiA !== tinggiB !==tinggiC, maka jalankan:

cek kondisi yang yang punya tinggi badan tertinggi:
jika tinggiA > tinggiB && tinggiA > tinggiC, maka cetak tinggiA
tapi jika tinggiB > tinggiA && tinggiB > tinggiC, maka cetak tinggiB
tapi jika tidak memenuhi 2 kondisi di atas, maka cetak tinggiC

cek kondisi yang punya tinggi badan sedang:
jika tinggiA < tinggiB && tinggiA > tinggiC atau tinggiA > tinggiB && tinggiA < tinggiC, maka cetak tinggiA
tapi jika tinggiB < tinggiA && tinggiB > tinggi atau tinggiB > tinggiA && tinggiB < tinggiC, maka cetak tinggiB
tapi jika tidak memenuhi 2 kondisi di atas, maka cetak tinggiC

cek kondisi yang yang punya tinggi badan terpendek:
jika tinggiA > tinggiB && tinggiA > tinggiC, maka cetak tinggiA
tapi jika tinggiB > tinggiA && tinggiB > tinggiC, maka cetak tinggiB
tapi jika tidak memenuhi 2 kondisi di atas, maka cetak tinggiC

 */

const tertinggiKeTerpendek = (tinggiA, tinggiB, tinggiC) => {
  console.log("Ada 3 orang siswa: A, B, dan C.");
  if (tinggiA === tinggiB && tinggiA === tinggiC) {
    console.log("Ketiganya memiliki tinggi yang sama, yaitu", tinggiA, "cm.");
  } else if (tinggiA === tinggiB) {
    // yang paling tinggi

    if (tinggiA > tinggiC) {
      console.log(
        "A dan B adalah yang paling tinggi, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    } else {
      console.log(
        "C adalah yang paling tinggi, dengan tinggi badan",
        tinggiC,
        "cm."
      );
    }

    // yang paling pendek

    if (tinggiA < tinggiC) {
      console.log(
        "Sementara, A dan B adalah yang paling pendek, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    } else {
      console.log(
        "Sementara, C adalah yang paling pendek, dengan tinggi badan",
        tinggiC,
        "cm."
      );
    }
  } else if (tinggiA === tinggiC) {
    // yang paling tinggi

    if (tinggiA > tinggiB) {
      console.log(
        "A dan C adalah yang paling tinggi, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    } else {
      console.log(
        "B adalah yang paling tinggi, dengan tinggi badan",
        tinggiB,
        "cm."
      );
    }

    // yang paling pendek

    if (tinggiA < tinggiB) {
      console.log(
        "Sementara, A dan C adalah yang paling pendek, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    } else {
      console.log(
        "Sementara, B adalah yang paling pendek, dengan tinggi badan",
        tinggiB,
        "cm."
      );
    }
  } else if (tinggiB === tinggiC) {
    // yang paling tinggi

    if (tinggiB > tinggiA) {
      console.log(
        "B dan C adalah yang paling tinggi, dengan tinggi badan",
        tinggiB,
        "cm."
      );
    } else {
      console.log(
        "A adalah yang paling tinggi, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    }

    // yang paling pendek

    if (tinggiB < tinggiA) {
      console.log(
        "Sementara, B dan C adalah yang paling pendek, dengan tinggi badan",
        tinggiB,
        "cm."
      );
    } else {
      console.log(
        "Sementara, A adalah yang paling pendek, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    }
  } else {
    console.log("Di antara ketiganya:");
    // yang paling tinggi
    if (tinggiA > tinggiB && tinggiA > tinggiC) {
      console.log(
        "A adalah yang paling tinggi, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    } else if (tinggiB > tinggiA && tinggiB > tinggiC) {
      console.log(
        "B adalah yang paling tinggi, dengan tinggi badan",
        tinggiB,
        "cm."
      );
    } else {
      console.log(
        "C adalah yang paling tinggi, dengan tinggi badan",
        tinggiC,
        "cm."
      );
    }

    // tertinggi kedua

    if (
      (tinggiA < tinggiB && tinggiA > tinggiC) ||
      (tinggiA > tinggiB && tinggiA < tinggiC)
    ) {
      console.log(
        "Sementara, A adalah yang tertinggi kedua, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    } else if (
      (tinggiB < tinggiA && tinggiB > tinggiC) ||
      (tinggiB > tinggiA && tinggiB < tinggiC)
    ) {
      console.log(
        "Sementara, B adalah yang tertinggi kedua, dengan tinggi badan",
        tinggiB,
        "cm."
      );
    } else {
      console.log(
        "Sementara, C adalah yang tertinggi kedua, dengan tinggi badan",
        tinggiC,
        "cm."
      );
    }

    // yang paling pendek

    if (tinggiA < tinggiB && tinggiA < tinggiC) {
      console.log(
        "Sedangkan, A adalah yang paling pendek di antara ketiganya, dengan tinggi badan",
        tinggiA,
        "cm."
      );
    } else if (tinggiB < tinggiA && tinggiB < tinggiC) {
      console.log(
        "Sedangkan, B adalah yang paling pendek di antara ketiganya, dengan tinggi badan",
        tinggiB,
        "cm."
      );
    } else {
      console.log(
        "Sedangkan, C adalah yang paling pendek di antara ketiganya, dengan tinggi badan",
        tinggiC,
        "cm."
      );
    }
  }
};

console.log("CASE: A, B, dan C sama tinggi");
tertinggiKeTerpendek(160, 160, 160);
console.log("\n");

console.log("CASE: A dan B sama tinggi dan menjadi yang paling tinggi");
tertinggiKeTerpendek(160, 160, 155);
console.log("\n");

console.log("CASE: A dan B sama tinggi dan menjadi yang paling pendek");
tertinggiKeTerpendek(160, 160, 170);
console.log("\n");

console.log("CASE: A dan C sama tinggi dan menjadi yang paling tinggi");
tertinggiKeTerpendek(160, 155, 160);
console.log("\n");

console.log("CASE: A dan C sama tinggi dan menjadi yang paling pendek");
tertinggiKeTerpendek(160, 170, 160);
console.log("\n");

console.log("CASE: B dan C sama tinggi dan menjadi yang paling tinggi");
tertinggiKeTerpendek(155, 160, 160);
console.log("\n");

console.log("CASE: B dan C sama tinggi dan menjadi yang paling pendek");
tertinggiKeTerpendek(170, 160, 160);
console.log("\n");

console.log("CASE: A, B, dan C beda tinggi");
tertinggiKeTerpendek(170, 155, 160);
console.log("\n");
tertinggiKeTerpendek(155, 160, 170);
console.log("\n");
tertinggiKeTerpendek(160, 170, 155);
console.log("\n");
