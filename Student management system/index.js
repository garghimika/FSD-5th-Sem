// Get elements
const studentName = document.querySelector("#studentName");
const rollNo = document.querySelector("#rollNo");
const course = document.querySelector("#course");
const marks = document.querySelector("#marks");

const submitBtn = document.querySelector(".submit-btn");
const searchInput = document.querySelector(".search");

const tableBody = document.querySelector("tbody");
const totalStudents = document.querySelector(".stat-box:nth-child(1) strong");
const averageMarks = document.querySelector(".stat-box:nth-child(2) strong");


// Add Student
submitBtn.addEventListener("click", function () {

    // Get values
    const name = studentName.value.trim();
    const roll = rollNo.value.trim();
    const selectedCourse = course.value;
    const studentMarks = Number(marks.value);

    // Validation
    if (name === "" || roll === "" || selectedCourse === "Select Course" || marks.value === "") {
        alert("Please fill all the fields!");
        return;
    }

    if (studentMarks < 0 || studentMarks > 100) {
        alert("Marks should be between 0 and 100!");
        return;
    }

    // Create new row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${roll}</td>
        <td>${name}</td>
        <td>${selectedCourse}</td>
        <td>${studentMarks}</td>
        <td>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    // Add row to table
    tableBody.appendChild(row);

    // Clear form
    studentName.value = "";
    rollNo.value = "";
    course.value = "Select Course";
    marks.value = "";

    // Update statistics
    updateStatistics();
});


// Delete Student
tableBody.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {

        event.target.parentElement.parentElement.remove();

        updateStatistics();
    }
});


// Search Student
searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase();

    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const roll = row.cells[0].textContent.toLowerCase();
        const name = row.cells[1].textContent.toLowerCase();

        if (roll.includes(searchValue) || name.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});


// Calculate Total Students and Average Marks
function updateStatistics() {

    const rows = tableBody.querySelectorAll("tr");

    let total = rows.length;
    let sum = 0;

    rows.forEach(function (row) {
        sum += Number(row.cells[3].textContent);
    });

    let average = total === 0 ? 0 : sum / total;

    totalStudents.textContent = total;
    averageMarks.textContent = average.toFixed(2);
}


// Initial statistics
updateStatistics();