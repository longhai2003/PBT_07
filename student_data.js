const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = null;
let minStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

console.log("| STT | Tên | TB | Xếp loại |");

students.forEach((student, index) => {

    let avg =
        student.math * 0.4 +
        student.physics * 0.3 +
        student.cs * 0.3;

    student.avg = avg.toFixed(1);

    let rank = "";

    if (avg >= 8) {
        rank = "Giỏi";
        gioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    } else if (avg >= 5) {
        rank = "Trung bình";
        trungBinh++;
    } else {
        rank = "Yếu";
        yeu++;
    }

    console.log(
        `| ${index + 1} | ${student.name} | ${student.avg} | ${rank} |`
    );

    if (!maxStudent || avg > maxStudent.avg) {
        maxStudent = { ...student, avg };
    }

    if (!minStudent || avg < minStudent.avg) {
        minStudent = { ...student, avg };
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;
});

console.log("\nSố lượng xếp loại:");
console.log("Giỏi:", gioi);
console.log("Khá:", kha);
console.log("Trung bình:", trungBinh);
console.log("Yếu:", yeu);

console.log("\nSinh viên cao điểm nhất:", maxStudent.name);
console.log("Sinh viên thấp điểm nhất:", minStudent.name);

console.log("\nTB môn Toán:", (totalMath / students.length).toFixed(2));
console.log("TB môn Lý:", (totalPhysics / students.length).toFixed(2));
console.log("TB môn CS:", (totalCS / students.length).toFixed(2));