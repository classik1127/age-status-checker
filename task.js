const btn = document.getElementById("btn");

btn.onclick = function () {
    const nameInput = document.getElementById("name").value;
    const ageInput = Number(document.getElementById("age").value);

    const isStudent = document.getElementById("student").checked;
    const isWorker = document.getElementById("worker").checked;

    const result = document.getElementById("result");

    // Reset
    result.textContent = "";
    result.style.color = "red";

    // Validation
    if (nameInput === "" || ageInput <= 0 || ageInput > 120 || (!isStudent && !isWorker)) {
        result.textContent = "Please fill all fields correctly.";
        return;
    }

    // Format name
    let name = nameInput.toLowerCase();
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1);

    // Age category
    let ageCategory;
    if (ageInput < 13) {
        ageCategory = "Child";
    } else if (ageInput < 20) {
        ageCategory = "Teen";
    } else if (ageInput < 60) {
        ageCategory = "Adult";
    } else {
        ageCategory = "Senior";
    }

    // Status
    let status;
    if (isStudent && isWorker) {
        status = "Student & Worker";
    } else if (isStudent) {
        status = "Student";
    } else {
        status = "Worker";
    }

    // Display result
    result.style.color = "green";
    result.textContent = `Hello ${formattedName}, you are a ${ageCategory} ${status}.`;
};
