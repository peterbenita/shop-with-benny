const reviewForm = document.getElementById("reviewForm");

reviewForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const message = document.getElementById("reviewMessage").value;
    const rating = document.getElementById("rating").value;

    if (name === "" || message === "") {
        alert("Please enter your name and review.");
        return;
    }

    const newReview = document.createElement("div");

    newReview.classList.add("review");

    newReview.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p class='stars'>" + "⭐".repeat(Number(rating)) + "</p>" +
        "<p>\"" + message + "\"</p>";

    document.querySelector(".review-list").appendChild(newReview);

    alert("Thanks for your review!");

    reviewForm.reset();
});
