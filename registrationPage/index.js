const email = document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const div = document.getElementById("students");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(email.value);
    console.log(name.value);
    console.log(password.value);
    const innerdiv = ddocument.createElement("div");
    innerdiv.innerText = `${email.value}.${name.value}.${password.value}`;
    div.appendChild(innerdiv);
})

// const form = document.getElementById("registrationForm");
// const email = document.getElementById("email");
// const name = document.getElementById("name");
// const password = document.getElementById("password");
// const students = document.getElementById("students");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // const studentName = name.value.trim();
//     // const studentEmail = email.value.trim();
//     // const studentPassword = password.value.trim();

//     if (!studentName || !studentEmail || !studentPassword) {
//         alert("Please fill in all the fields.");
//         return;
//     }
//     students.innerHTML = `
//     <h2>Student Details</h2>
//     <p>Name: ${name.value}</p>
//     <p>Email: ${email.value}</p>
//     <p>Password: ${password.value}</p>
//   `;

//     // const innerdiv = document.createElement("div");
//     // innerdiv.className = "student-card";
//     // innerdiv.innerHTML = `
//     //     <h4>${studentName}</h4>
//     //     <p>${studentEmail}</p>
//     // `;

//     // students.appendChild(innerdiv);

//     // name.value = "";
//     // email.value = "";
//     // password.value = "";
// });