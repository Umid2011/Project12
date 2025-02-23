document.getElementById("registrationForm")>addEventListener("submit",function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    localStorage.setItem("username", username);
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    window.location.href = "index2.html"
})