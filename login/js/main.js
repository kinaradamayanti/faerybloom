(function($) {

	"use strict";

	$(".toggle-password").click(function() {

		$(this).toggleClass("fa-eye fa-eye-slash");

		var input = $($(this).attr("toggle"));

		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}

	});

})(jQuery);


// LOGIN LOGOUT NAVBAR
document.addEventListener("DOMContentLoaded", function () {

    const username = localStorage.getItem("username");

    const authButton = document.getElementById("authButton");

    const userInfo = document.getElementById("userInfo");

    // kalau elemen tidak ada, hentikan
    if (!authButton || !userInfo) return;

    if (username) {

        // tampilkan username
        userInfo.innerText = "Halo, " + username;

        // ubah tombol jadi logout
        authButton.innerText = "Logout";

        authButton.href = "#";

        authButton.addEventListener("click", function (e) {

            e.preventDefault();

            localStorage.removeItem("username");

            location.reload();

        });

    } else {

        userInfo.innerText = "Belum Login";

        authButton.innerText = "Login";

        authButton.href = "login/index.html";

    }

});
