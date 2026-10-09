
"use strict";

const form = document.getElementById("enrollment-form");
const courseSelect = document.getElementById("course");
const message = document.getElementById("form-message");

document.getElementById("year").textContent = new Date().getFullYear();

// Course-card buttons select a course and take the visitor to the form.
document.querySelectorAll(".enroll-course").forEach((button) => {
  button.addEventListener("click", () => {
    courseSelect.value = button.dataset.course;
    document.getElementById("enroll").scrollIntoView({ behavior: "smooth" });
    courseSelect.focus({ preventScroll: true });
  });
});

// Temporary frontend demonstration.
// This does NOT save data. We will replace it with a Flask API request.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const student = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim(),
    course: courseSelect.value
  };

  if (!student.name || !student.email || !student.course) {
    message.className = "form-message error";
    message.textContent = "Please complete all fields.";
    return;
  }

  message.className = "form-message success";
  message.textContent =
    `Demo only: ${student.name}, your ${student.course} enrollment form is working. ` +
    "No data has been saved yet.";

  console.log("Demo enrollment payload:", student);
});

