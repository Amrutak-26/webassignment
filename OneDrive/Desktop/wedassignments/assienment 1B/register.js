document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = { name, email, password };

        // Send data via AJAX POST request
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true); // Mock API URL
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                alert("Registration successful!");

                // Save user to localStorage
                let users = JSON.parse(localStorage.getItem("users")) || [];
                users.push(userData);
                localStorage.setItem("users", JSON.stringify(users));

                form.reset(); // Clear form fields
            }
        };

        xhr.send(JSON.stringify(userData));
    });
});
