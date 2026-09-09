document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {

        let sname = document.getElementById("sname").value.trim();
        let fname = document.getElementById("fname").value.trim();
        let mname = document.getElementById("mname").value.trim();
        let dob = document.getElementById("dob").value;
        let blood = document.getElementById("blood").value;
        let studentClass = document.getElementById("class").value;
        let section = document.getElementById("section").value;
        let phone = document.getElementById("phone").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let password = document.getElementById("password").value;
        let confirm = document.getElementById("confirm").value;

        let gender = document.querySelector('input[name="gender"]:checked');

        if (sname === "") {
            alert("Please enter Student Name.");
            event.preventDefault();
            return;
        }

        if (fname === "") {
            alert("Please enter Father's Name.");
            event.preventDefault();
            return;
        }

        if (mname === "") {
            alert("Please enter Mother's Name.");
            event.preventDefault();
            return;
        }

        if (dob === "") {
            alert("Please select Date of Birth.");
            event.preventDefault();
            return;
        }

        if (!gender) {
            alert("Please select Gender.");
            event.preventDefault();
            return;
        }

        if (blood === "") {
            alert("Please select Blood Group.");
            event.preventDefault();
            return;
        }

        if (studentClass === "") {
            alert("Please select Class.");
            event.preventDefault();
            return;
        }

        if (section === "") {
            alert("Please select Section.");
            event.preventDefault();
            return;
        }

        if (!/^[0-9]{11}$/.test(phone)) {
            alert("Phone number must contain exactly 11 digits.");
            event.preventDefault();
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid Email Address.");
            event.preventDefault();
            return;
        }

        if (address === "") {
            alert("Please enter your Address.");
            event.preventDefault();
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            event.preventDefault();
            return;
        }

        if (password !== confirm) {
            alert("Password and Confirm Password do not match.");
            event.preventDefault();
            return;
        }

        alert("Student Registration Successful!");

    });

});