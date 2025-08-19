function valid() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("pass").value;
    let d = document.getElementById("conf").value;


    if (a == "" || b == "" || c == "" || d == "") {
        alert("fill all the form");
        return false;
    }

    let isValid = true;

    // Name check
    if (a === "") {
        document.getElementById("n2").innerHTML = "Name is required.";
        isValid = false;
    }

    // Email check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (b === "") {
        document.getElementById("n3").innerHTML = "Email is required.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("n3").innerHTML = "Enter a valid email.";
        isValid = false;
    }

    // Password check
    if (c.length < 6) {
        document.getElementById("n4").innerHTML = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Confirm Password
    if (d !== c) {
        document.getElementById("n5").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}
