
function buatKelompok() {
    // Ambil nama
    let nama = document.getElementById("namaInput").value
        .split("\n")
        .map(n => n.trim())
        .filter(n => n !== "");

    // Jumlah kelompok
    let jumlahKelompok = parseInt(document.getElementById("maxKelompok").value);

    // Validasi
    if (nama.length === 0) {
        alert("Masukkan daftar nama terlebih dahulu.");
        return;
    }

    if (!jumlahKelompok || jumlahKelompok < 1) {
        alert("Masukkan jumlah kelompok yang benar.");
        return;
    }

    if (jumlahKelompok > nama.length) {
        alert("Jumlah kelompok tidak boleh lebih banyak dari jumlah nama.");
        return;
    }

    // Acak nama (Fisher-Yates Shuffle)
    for (let i = nama.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nama[i], nama[j]] = [nama[j], nama[i]];
    }

    // Hitung pembagian anggota
    let anggotaPerKelompok = Math.floor(nama.length / jumlahKelompok);
    let sisa = nama.length % jumlahKelompok;

    let index = 0;
    let hasilHTML = "";

    for (let i = 0; i < jumlahKelompok; i++) {

        // Kelompok awal mendapat tambahan anggota jika masih ada sisa
        let jumlahAnggota = anggotaPerKelompok;

        if (sisa > 0) {
            jumlahAnggota++;
            sisa--;
        }

        hasilHTML += `
            <div class="kelompok">
                <strong>Kelompok ${i + 1}</strong><br><br>
        `;

        for (let j = 0; j < jumlahAnggota; j++) {
            hasilHTML += `${j + 1}. ${nama[index]}<br>`;
            index++;
        }

        hasilHTML += `</div>`;
    }

    document.getElementById("hasil").innerHTML = hasilHTML;
}

// Tombol kembali
function goToOtherScriptIndex() {
    window.location.href = "index.html";
}

function goToOtherScriptIndex() {
    window.location.href = "Index.html";
}