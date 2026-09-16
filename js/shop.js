const cartButtons = document.querySelectorAll(".add-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.getAttribute("data-name");
        const productPrice = Number(button.getAttribute("data-price"));

        const product = {
            name: productName,
            price: productPrice
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(productName + " has been added to your cart!");
    });

});