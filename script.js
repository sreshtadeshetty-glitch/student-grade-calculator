document.getElementById("calculatebtn").onclick = function () {
    const studentName = document.getElementById("stdname").value.trim();
    const maths = Number(document.getElementById("math").value);
    const physics = Number(document.getElementById("physics").value);
    const chemistry = Number(document.getElementById("chemistry").value);
    const english = Number(document.getElementById("english").value);
    const computersci = Number(document.getElementById("computer").value);
    if (studentName === "") {
        document.getElementById("errorMessage").textContent =
            "Please enter the student name.";
        return;
    }
    if (
        document.getElementById("math").value === "" ||
        document.getElementById("physics").value === "" ||
        document.getElementById("chemistry").value === "" ||
        document.getElementById("english").value === "" ||
        document.getElementById("computer").value === ""
    ) {
        document.getElementById("errorMessage").textContent =
            "Please enter marks for all subjects.";
        return;
    }
    if (
        maths < 0 || maths > 100 ||
        physics < 0 || physics > 100 ||
        chemistry < 0 || chemistry > 100 ||
        english < 0 || english > 100 ||
        computersci < 0 || computersci > 100
    ) {
        document.getElementById("errorMessage").textContent =
            "Marks must be between 0 and 100.";
        return;
    }

    document.getElementById("errorMessage").textContent = "";
    const total = maths + physics + chemistry + english + computersci;

    const percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "O";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else if (percentage >= 40) {
        grade = "E";
    }
    else {
        grade = "F";
    }

    let result;

    if (
        maths >= 30 &&
        physics >= 30 &&
        chemistry >= 30 &&
        english >= 30 &&
        computersci >= 30
    ) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }

    document.getElementById("studentResult").textContent = studentName;

    document.getElementById("mathResult").textContent = maths;
    document.getElementById("physicsResult").textContent = physics;
    document.getElementById("chemistryResult").textContent = chemistry;
    document.getElementById("englishResult").textContent = english;
    document.getElementById("computerResult").textContent = computersci;

    document.getElementById("totalResult").textContent = total;

    document.getElementById("percentageResult").textContent =
        percentage.toFixed(2);

    document.getElementById("gradeResult").textContent = grade;

    document.getElementById("statusResult").textContent = result;

    if (result === "PASS") {
        document.getElementById("statusResult").style.color = "green";
    }
    else {
        document.getElementById("statusResult").style.color = "red";
    }

};

document.getElementById("resetBtn").onclick = function () {

    document.getElementById("stdname").value = "";
    document.getElementById("math").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
    document.getElementById("english").value = "";
    document.getElementById("computer").value = "";

    document.getElementById("errorMessage").textContent = "";

    document.getElementById("studentResult").textContent = "-";

    document.getElementById("mathResult").textContent = "-";
    document.getElementById("physicsResult").textContent = "-";
    document.getElementById("chemistryResult").textContent = "-";
    document.getElementById("englishResult").textContent = "-";
    document.getElementById("computerResult").textContent = "-";
    document.getElementById("totalResult").textContent = "-";
    document.getElementById("percentageResult").textContent = "-";
    document.getElementById("gradeResult").textContent = "-";
    document.getElementById("statusResult").textContent = "-";
};