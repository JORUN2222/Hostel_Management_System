    function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwords");
    var confirmpass = document.getElementById("confirm-password")
    var showPasswordCheckbox = document.getElementById("showPassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        confirmpass.type = "text";
    } else {
        passwordInput.type = "password";
        confirmpass.type = "password";
    }
}
    document.getElementById('adminBtn').onclick = function() {
    window.location.href = 'assets/pages/admin-staff-login.html';
};
    document.getElementById('studBtn').onclick = function() {
    window.location.href = '../../index2.html';
};

