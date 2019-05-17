

var items = document.getElementsByClassName('form-check-input')

var totalPrice = 0;



function addUpTotal() {
    for (i=0; i<items.length; i++) {
        if (items[i].checked == true){
        totalPrice = totalPrice + parseFloat(items[i].value)}
    }

    document.getElementById('totalPriceDisplay').innerHTML = totalPrice
    console.log(totalPrice)
    totalPrice = 0
}

console.log(totalPrice)

var addToCartButton = document.getElementById('addToCart')
// addToCartButton.addEventListener('click', addUpTotal())
