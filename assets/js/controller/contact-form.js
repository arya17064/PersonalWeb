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

  let emailTujuan = "aryaafdhil2002@gmail.com";

  let mailtoLink = `mailto:${emailTujuan}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Halo, Nama Saya ${name}. Silahkan Hubungi saya di ${email}. Berikut yang ingin saya sampaikan: ${message}`
  )}`;

  // Buat elemen <a> untuk mengirim email
  let a = document.createElement("a");
  a.href = mailtoLink;
  a.click();

  // Menampilkan notifikasi sukses jika elemen ada
  let notificationElement = document.getElementById("notification");
  if (notificationElement) {
      notificationElement.classList.remove("d-none");
  }

  // Mengosongkan form setelah submit jika elemen form ditemukan
  let contactForm = document.getElementById("contactForm");
  if (contactForm) {
      contactForm.reset();
  }
}
