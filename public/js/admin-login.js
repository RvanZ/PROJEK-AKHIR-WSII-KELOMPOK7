$(document).ready(function () {
    $('#adminLoginForm').submit(function (event) {
        event.preventDefault();
        const formData = $(this).serialize();

        $.post('/admin/login', formData, function (response) {
            console.log(response);

            // Handle the response
            if (response.token) {
                // Simpan token di local storage atau tempat yang sesuai
                localStorage.setItem('adminToken', response.token);

                // Arahkan pengguna ke halaman utama atau halaman yang sesuai
                window.location.href = '/'; // Ganti '/' dengan halaman yang sesuai
            } else {
                // Handle login failure
                console.error('Login failed');
            }
        });
    });
});