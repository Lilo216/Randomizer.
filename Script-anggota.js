function buatKelompok() {
    let nama = document.getElementById("namaInput").value
        .split("\n")
        .map(n => n.trim())
        .filter(n => n !== "");

    let max = parseInt(document.getElementById("maxAnggota").value);

    if (nama.length === 0 || !max) {
        alert("Isi nama dan jumlah maksimal anggota terlebih dahulu");
        return;
    }

    // Acak nama
    for (let i = nama.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nama[i], nama[j]] = [nama[j], nama[i]];
    }

    // Bagi kelompok
    let hasil = "";
    let nomor = 1;

    for (let i = 0; i < nama.length; i += max) {
        let grup = nama.slice(i, i + max);

        hasil += `
            <div class="kelompok">
                <strong>Kelompok ${nomor}</strong><br>
                ${grup.join("<br>")}
            </div>
        `;

        nomor++;
    }

    document.getElementById("hasil").innerHTML = hasil;
}


function goToOtherScriptIndex() {
    window.location.href = "Index.html";
}