function handleContactFormSubmit(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil nilai dari input form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const skill = document.getElementById("skill").value;
  const message = document.getElementById("message").value;

  // Validasi input (opsional)
  if (!name || !email || !subject || !skill || !message) {
      alert("Harap isi semua field!");
      return;
  }

  // Menampilkan alert saat form berhasil dikirim
  alert(`
    Nama : ${name}\n
    Email : ${email}\n
    subject : ${subject}\n
    Skil : ${skill}\n
    Pesan : ${message}\n      
    `);
  
  // Menampilkan notifikasi sukses
  document.getElementById("notification").classList.remove("d-none");

  // Mengosongkan form setelah submit
  document.getElementById("contactForm").reset();
}