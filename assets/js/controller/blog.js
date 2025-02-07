let blogs = [];

function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("image");

    let imageFileName = URL.createObjectURL(image.files[0]);

    let blog = {
        title: title,
        content: content,
        image: imageFileName,
        author: "Arya",
        postedAt: new Date(),
    };

    blogs.push(blog);

    console.log(blog);

    renderBlog();

    showNotification("Blog berhasil diunggah!");
    document.getElementById("create-blog").reset();
}

// Fungsi untuk membuka modal konfirmasi hapus
function openDeleteModal(index) {
    document.getElementById("delete-index").value = index;
    let deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
    deleteModal.show();
}

// Fungsi untuk menghapus blog berdasarkan index
function deleteBlog() {
    let index = document.getElementById("delete-index").value;
    blogs.splice(index, 1);
    renderBlog();
    showNotification("Blog berhasil dihapus!");

    bootstrap.Modal.getInstance(document.getElementById("deleteModal")).hide();
}

function renderBlog() {
    let blogListElement = document.getElementById("blogList");
    
    // Pastikan untuk menghapus isi sebelumnya agar tidak terjadi duplikasi
    blogListElement.innerHTML = firstBlogContent();
    
    blogs.forEach((blog, index) => {
        blogListElement.innerHTML += `
            <div class="card mb-3">
              <div class="row g-0 align-items-center">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    class="img-fluid rounded-start"
                    src="${blog.image}"
                    alt="Blog Image"
                    style="object-fit: cover; width: 100%; height: 200px;"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <p class="card-text">
                        ${blog.content}
                    </p>
                    <footer class="blockquote-footer">
                      Created By:
                      <cite title="Source Title">${blog.author}</cite>
                    </footer>
                    <p class="card-text">
                      <small class="text-muted">${blog.postedAt}</small>
                    </p>
                    <button
                        type="button"
                        class="btn btn-outline-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        >
                        <span class="tf-icons bx bx-pencil"></span>&nbsp; Edit
                    </button>
                    <button
                        type="button"
                        class="btn btn-outline-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        >
                        <span class="tf-icons bx bx-trash"></span>&nbsp; Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `;
    });
}

function firstBlogContent() {
    return `
        <div class="card mb-3">
            <div class="row g-0 align-items-center">
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <img
                class="img-fluid rounded-start"
                src="../assets/img/blog-img.png"
                alt="Blog Image"
                style="object-fit: cover; width: 100%; height: 200px;"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">First Blog</h5>
                <p class="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                </p>
               <footer class="blockquote-footer">
                      Created By:
                      <cite title="Source Title">Arya</cite>
                </footer>
                <p class="card-text">
                    <small class="text-muted">
                    ${getRelativeTime(
                        new Date(
                            "Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"
                        )
                    )}
                </small>
                </p>
                <button
                    type="button"
                    class="btn btn-outline-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    >
                    <span class="tf-icons bx bx-pencil"></span>&nbsp; Edit
                </button>
                <button
                    type="button"
                    class="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    >
                    <span class="tf-icons bx bx-trash"></span>&nbsp; Delete
                </button>
                </div>
            </div>
            </div>
        </div>
    `;
}

function formatDateToWIB() {
    let date = new Date();
    // 01 Feb 2025 11:22 WIB
    let monthList = [
      "Jan", // bukan 1, tapi 0 ==> bukan nama bulan, bukan angka bulannya, tapi index
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt", // bukan 10 tapi 9, karena yang diambil indexnya
      "Nov",
      "Des",
    ];
  
    let day = date.getDate().toString().padStart(2, "0");
    let month = monthList[date.getMonth()];
    let year = date.getFullYear();
  
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
  
    let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;
  
    return formattedDate;
  }
  
  function getRelativeTime(postTime) {
    let now = new Date();
    console.log("WAKTU SEKARANG :", now);
  
    console.log("WAKTU USER POST :", postTime);
  
    let diffTime = now - postTime;
    console.log("selisih waktu :", diffTime);
  
    let diffInSeconds = Math.floor((now - postTime) / 1000);
    console.log("selisih detik", diffInSeconds);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }
  
    let diffInMinutes = Math.floor(diffInSeconds / 60);
  
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    }
  
    let diffInHours = Math.floor(diffInMinutes / 60);
  
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    }
  
    let diffInDays = Math.floor(diffInHours / 24);
  
    if (diffInDays < 30) {
      return `${diffInDays} days ago`;
    }
  
    let diffInMonth = Math.floor(diffInDays / 30);
    return `${diffInMonth} month${diffInMonth === 1 ? "" : "s"} ago`;
}

function showNotification(message) {
    let notification = document.getElementById("notification");
    let notificationMessage = document.getElementById("notification-message");

    notificationMessage.innerText = message;
    notification.style.display = "block";
    notification.style.opacity = "1";

    setTimeout(() => {
        hideNotification();
    }, 3000); // Notifikasi hilang setelah 3 detik
}

function hideNotification() {
    let notification = document.getElementById("notification");
    notification.style.opacity = "0";

    setTimeout(() => {
        notification.style.display = "none";
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    renderBlog();
});