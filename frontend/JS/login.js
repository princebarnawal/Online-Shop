function valid() {
    var a = document.getElementById("email").value;
    var b = document.getElementById("pass").value;
    if (a.trim() == "" || b.trim() == "") {
        document.getElementById("n1").innerHTML = "**All fields are required**";
        return false;
    }
    else if (!a.includes("@") ) {
        document.getElementById("n5").innerHTML = "**Password Not Match**";
        return false;
    }
    else {
        return true;
    }
}