


// Input: nilai tugas, nilai UTS, nilai UAS.
// Rumus: Nilai Akhir = (0.3 * tugas) + (0.3 * UTS) + (0.4 * UAS)
// Grade:
// A = 85 – 100
// B = 70 – 84
// C = 55 – 69
// D = 40 – 54
// E = < 40

/*
Start
Input nilai akhir = (0.3 * tugas) + (0.3 * UTS) + (0.4 * UAS)
If  nilai akhir >= 85 
    Print "grade A"
Else
    If  nilai akhir >= 70 
    Print "grade B"
else 
    If  nilai akhir >= 55 
    Print "grade C"
else
    If  nilai akhir >= 40 
    Print "grade D"
else 
    If  nilai akhir < 40 
    Print "grade E"
End
End if
*/


// A







function rumusNilaiAkhir (tugas, uts, uas){
    return (0.3*tugas)+(0.3*uts)+(0.4*uas)
}

function grade  (nilaiakhir){
switch (true){
case grade >= 85:
    console.log ("Grade = A")
break
case grade >= 70:
    console.log ("Grade = B");
break;
case grade >= 55:
    console.log ("Grade C")
break;
case grade >= 40 :
    console.log ("Grade = D")
break
case grade <= 40 :
    console.log ("Grade = E")
break;
default:
    console.log('default');
}
}
let mahasiswa = [
{tugas :56, uas:77, uts:90},
{tugas :67, uas:77,uts:66},
{tugas :56, uas:77, uts:90},
{tugas :56, uas:77, uts:90},
{tugas :56, uas:77, uts:90}
]
for (let i = 0; 1< mahasiswa.length;i ++){
    let siswa = mahasiswa [1];
    let nilaiAkhir = rumusNilaiAkhir(mahasiswa) 
    let peringkat = grade (nilaiAkhir)

console.log('nilai akhir', nilaiAkhir, peringkat)
}



/*
input nilai uas )=
input nilI uts  =
input nilai tugas  =
    nilai akhir = ((0.4* nilai uas)+(0.3*nilai uts)+(0.3*nilai tugas))
let grade = nilai akhir
if (nilai >=85 = "grade A")
else if (nilai >=70 = Grade B)
else


*/
