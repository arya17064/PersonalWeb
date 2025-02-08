let testimonials = [
    {
        author: "Amir Muhammad",
        rating: 5,
        caption: "Keren Banget",
        image: "coding.jpg",
    },
    {
        author: "Amel Efendi",
        rating: 3,
        caption: "Keren!",
        image: "coding.jpg",
    },
    {
        author: "Alex Mahmud",
        rating: 4,
        caption: "Mantab Terimakasih",
        image: "my-img.jpg",
    },
    {
        author: "Christiana Adelina",
        rating: 1,
        caption: "Kurang!",
        image: "deploy.png",
    },
    {
        author: "Leo G",
        rating: 5,
        caption: "MANTAB KALIIII!",
        image: "profile-picture-v.jpg",
    },
];

const testimonialsContainer = document.getElementById("testimonialsContainer");

const testimonialsHTML = (array) => {
    return array.map(
        (testimonial) => `
            <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                    <div class="justify-content-center align-items-center">
                        <img
                            class="img-fluid rounded-start"
                            src="assets/img/${testimonial.image}"
                            alt="Blog Image"
                            style="object-fit: cover; width: 100%; height: 200px;"
                        />
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-0">
                            <em>"${testimonial.caption}"</em>
                        </p>
                        <figure class="text-end mt-2 display-6">
                            <figcaption class="blockquote-footer">${testimonial.author}</figcaption>
                        </figure>
                        <p class="text-end">
                            ${testimonial.rating}&nbsp;<i class="tf-icons bx bx-star"></i>
                        </p>
                    </div>
                </div>
            </div>
        `
    )
}

function showAllTestimonials() {
    testimonialsContainer.innerHTML = testimonialsHTML(testimonials).join("")
}

document.addEventListener("DOMContentLoaded", function() {
    showAllTestimonials();
});

function filterTestimonialsByStar(rating) {
    const filteredTestimonials = testimonials.filter(
        (testimonial) => (testimonial.rating === rating)
    );

    if (filteredTestimonials.length === 0) {
        return (testimonialsContainer.innerHTML = `<h1 class="display-3 mb-0 text-center">Tidak Ada Data</h1>`);
    }

    testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonials).join("")
}