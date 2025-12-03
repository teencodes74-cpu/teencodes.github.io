function checkPass() {
    let pass = document.getElementById("password").value;
    if (pass === "7A") {
        window.location.href = "gallery.html";
    } else {
        document.getElementById("msg").innerText = "Wrong password!";
    }
}
