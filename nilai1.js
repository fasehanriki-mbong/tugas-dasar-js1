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
  { nama: "Riki", absen: 22, tugas: 80, uts: 55, uas: 70 },
  { nama: "Ani", absen: 5, tugas: 90, uts: 65, uas: 85 },
  { nama: "Budi", absen: 11, tugas: 75, uts: 70, uas: 60 },
  { nama: "Citra", absen: 14, tugas: 60, uts: 50, uas: 55 },
  { nama: "Dewi", absen: 18, tugas: 95, uts: 85, uas: 90 },
];

// Looping hitung nilai & grade
for (let i = 0; i < mahasiswa.length; i++) {
  let mhs = mahasiswa[i];
  let nilaiAkhir = hitungNilaiAkhir(mhs.tugas, mhs.uts, mhs.uas);
  let grade = tentukanGrade(nilaiAkhir);

  console.log(
    "Nilai akhir :"+nilaiAkhir.toFixed(2)+"|Grade :"+grade
  );
}
