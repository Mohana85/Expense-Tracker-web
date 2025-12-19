function signup(event) {
    event.preventDefault();

    const name = document.getElementById("sname").value.trim();
    const email = document.getElementById("smail").value.trim();
    const password = document.getElementById("spass").value;
    const income = Number(document.getElementById("sincome").value);

    if (!name || !email || !password || !income) {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === email)) {
        alert("Account already exists");
        return;
    }

    users.push({
        name,
        email,
        password,
        income,
        photo: ""
    });

    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "index.html";
}
