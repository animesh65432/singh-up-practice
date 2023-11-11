const button = document.getElementById("but");

button.addEventListener("click", clicker);

function clicker(e) {
    e.preventDefault();

    let name = document.getElementById("firstInput").value;
    let password = document.getElementById("passwordInput").value;

    const user_details = {
        username: name,
        userpassword: password
    }

    const user_details_json = JSON.stringify(user_details);

    localStorage.setItem("userdetails", user_details_json);

    
}

function resetForm() {
    document.getElementById("firstInput").value = "";
    document.getElementById("lastInput").value = "";
    document.getElementById("passwordInput").value = "";

    localStorage.removeItem("userdetails");
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetForm);
