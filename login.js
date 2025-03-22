document.addEventListener("DOMContentLoaded", function() {
    updateNavbar();

    function updateNavbar() {
        const loginLink = document.getElementById("login-logout");
        if (localStorage.getItem("name") != null) {
            loginLink.innerHTML = '<a href="#" id="logout">Hi, ' + localStorage.getItem("name") + '</a>';
            document.getElementById("logout").addEventListener("click", logout);
        } else {
            loginLink.innerHTML = '<a href="loginpage.html">Login</a>';
        }
    }

    function logout(event) {
        event.preventDefault();
        localStorage.removeItem("name");
        updateNavbar();
    }
});
