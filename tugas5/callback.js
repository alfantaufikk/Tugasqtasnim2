function halo(nama) {
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback) {
    const nama = prompt('Masukan Nama :');
    callback(nama);
}

tampilkanPesan(halo);