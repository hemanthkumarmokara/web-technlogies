function validateForm() {
    var phone = document.forms[0]["phone"].value;
    var password = document.forms[0]["password"].value;
    var email = document.forms[0]["email"].value;

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

function validatePhone(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?!.*\s).{8,}$/;
    return passwordRegex.test(password);
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}