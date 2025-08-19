document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
         let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === ""  ) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been sent successfully.\n\nWe will get back to you soon.\n\nContact Info:\nPhone: +977 1-4579939\nEmail: kcmitcollege@gmail.com\nAddress: Basuki Marg, Kathmandu, Nepal");
        document.getElementById("contactForm").reset();
    });
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}