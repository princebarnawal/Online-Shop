function valid() {
    var a = document.getElementById("email").value;
    var b = document.getElementById("pass").value;
    if (a.trim() == "" || b.trim() == "") {
        document.getElementById("n1").innerHTML = "**All fields are required**";
        return false;
    }
    else if (!a.includes("@") || !b.includes(".com")) {
        document.getElementById("n5").innerHTML = "**Invalid Email**";
        return false;
    }
    else {
        return true;
    }
}