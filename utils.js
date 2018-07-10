var cart = {}

function saveCart(){
    var cart_json = JSON.stringify(cart);
    sessionStorage.setItem("cart", cart_json);
}

function loadCart(){
    var cart_json = sessionStorage.getItem("cart");
    cart  = JSON.parse(cart_json) || {};
}

function displayCart(){
    $("#cart").html("")
    for(productId in cart){
        $("#cart").append($(`<li>${catalog[productId].name} x ${cart[productId]}</li>`))
    }
}