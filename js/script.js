$(document).ready(function(){
    $(".bg-loader").hide();

    // Menggunakan jQuery untuk menangani event submit pada form
    $("form").submit(function(event) {
        event.preventDefault(); // Menghentikan perilaku default submit form

        // Menampilkan notifikasi SweetAlert setelah tombol "Daftar" diklik
        Swal.fire(
            'Kamu berhasil mendaftar',
            '',
            'success'
        );
    });
});
