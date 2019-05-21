

var items = document.getElementsByClassName('form-check-input')

var totalPrice = 0;
var totalPriceString = ""


function addUpTotal() {
    for (i=0; i<items.length; i++) {
        if (items[i].checked == true){
        totalPrice = totalPrice + parseFloat(items[i].value)}
    }

    document.getElementById('totalPriceDisplay').innerHTML = totalPrice
    
    totalPriceString = totalPrice.toString()
    console.log(totalPriceString)
    totalPrice = 0
    
}

console.log(totalPrice)

var addToCartButton = document.getElementById('addToCart')
// addToCartButton.addEventListener('click', addUpTotal())

function checkOut() {
    alert("the total comes to" + totalPriceString)
    totalPrice = 0
}
