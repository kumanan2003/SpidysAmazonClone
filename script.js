function authenticate(event) {
    event.preventDefault(); // prevent form from refreshing

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("pwd").value.trim();

    const storedUsername = localStorage.getItem("storedUsername");
    const storedPassword = localStorage.getItem("storedPassword");

    console.log("Entered:", username, password);
    console.log("Stored:", storedUsername, storedPassword);

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Invalid Spidy Id or Spidy Code.");
    }
}
