// Fungsi hitung nilai akhir
function hitungNilaiAkhir(tugas, uts, uas) {
  return (0.3 * tugas) + (0.3 * uts) + (0.4 * uas);
}

// Fungsi tentukan grade
function tentukanGrade(hasilNilaiAkhir) {
  switch (true) {
    case hasilNilaiAkhir >= 85:
      return "A";
    case hasilNilaiAkhir >= 70:
      return "B";
    case hasilNilaiAkhir >= 55:
      return "C";
    case hasilNilaiAkhir >= 40:
      return "D";
    default:
      return "E";
  }
}

// Data 5 mahasiswa
let mahasiswa = [
  { tugas: 80, uts: 55, uas: 70 },
  { tugas: 90, uts: 65, uas: 85 },
  { tugas: 75, uts: 70, uas: 60 },
  { tugas: 60, uts: 50, uas: 55 },
  { tugas: 95, uts: 85, uas: 90 },
];

// Looping hitung nilai & grade
for (let i = 0; i < mahasiswa.length; i++) {
  let mahsiswa  = mahasiswa[i];
  let nilaiAkhir = hitungNilaiAkhir(mahsiswa.tugas, mahsiswa.uts, mahsiswa.uas);
  let grade = tentukanGrade(nilaiAkhir);

  console.log(
    "Nilai akhir :"+nilaiAkhir.toFixed(2)+"|Grade :"+grade
  );
}
