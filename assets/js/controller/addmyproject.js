// Deklarasi array blogs dan ambil dari localStorage jika ada
let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function saveBlogsToLocalStorage() {
    localStorage.setItem("blogs", JSON.stringify(blogs));
}

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
        postedAt: new Date()
    };

    blogs.push(blog);
    saveBlogsToLocalStorage();
    renderBlog();

    showNotification("Blog berhasil diunggah!");
    document.getElementById("create-blog").reset();
}

function openDeleteModal(index) {
    document.getElementById("delete-index").value = index;
    let deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
    deleteModal.show();
}

function deleteBlog() {
    let index = document.getElementById("delete-index").value;
    blogs.splice(index, 1);
    saveBlogsToLocalStorage();
    renderBlog();
    showNotification("Blog berhasil dihapus!");
    bootstrap.Modal.getInstance(document.getElementById("deleteModal")).hide();
}

function openEditModal(index) {
    document.getElementById("edit-index").value = index;
    document.getElementById("edit-title").value = blogs[index].title;
    document.getElementById("edit-content").value = blogs[index].content;
    let editModal = new bootstrap.Modal(document.getElementById("editModal"));
    editModal.show();
}

function editBlog() {
    let index = document.getElementById("edit-index").value;
    blogs[index].title = document.getElementById("edit-title").value;
    blogs[index].content = document.getElementById("edit-content").value;
    saveBlogsToLocalStorage();
    renderBlog();
    showNotification("Blog berhasil diperbarui!");
    bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
}

function renderBlog() {
    let blogListElement = document.getElementById("blogList");
    blogListElement.innerHTML = firstBlogContent();
    blogs.forEach((blog, index) => {
        blogListElement.innerHTML += `
            <div class="card mb-3">
              <div class="row g-0 align-items-center">
                <div class="col-md-4 d-flex justify-content-center align-items-center">
                  <img class="img-fluid rounded-start" src="${blog.image}" alt="Blog Image" style="object-fit: cover; width: 100%; height: 200px;" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <p class="card-text">${blog.content}</p>
                    <footer class="blockquote-footer">Created By: <cite>${blog.author}</cite></footer>
                    <p class="card-text"><small class="text-muted">${formatDateToWIB(blog.postedAt)}</small></p>
                    <button type="button" class="btn btn-outline-warning" onclick="openEditModal(${index})">
                        <span class="tf-icons bx bx-pencil"></span>&nbsp; Edit
                    </button>
                    <button type="button" class="btn btn-outline-danger" onclick="openDeleteModal(${index})">
                        <span class="tf-icons bx bx-trash"></span>&nbsp; Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>`;
    });
}

function formatDateToWIB(dateString) {
    let date = new Date(dateString);
    let options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' };
    return date.toLocaleString('id-ID', options) + ' WIB';
}

function showNotification(message) {
    let notification = document.getElementById("notification");
    let notificationMessage = document.getElementById("notification-message");
    notificationMessage.innerText = message;
    notification.style.display = "block";
    notification.style.opacity = "1";
    setTimeout(() => hideNotification(), 3000);
}

function hideNotification() {
    let notification = document.getElementById("notification");
    notification.style.opacity = "0";
    setTimeout(() => { notification.style.display = "none"; }, 500);
}

document.addEventListener("DOMContentLoaded", function() { renderBlog(); });
