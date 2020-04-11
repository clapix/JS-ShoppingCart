if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName("btn-danger")
  for (let i = 0; i < removeCartItemButtons.length; i += 1) {
    let button = removeCartItemButtons[i]

    button.addEventListener('click', removeCartItem)
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}



function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0]
  let cartRows = cartItemContainer.getElementsByClassName("cart-row")
  // console.log(cartItemContainer, cartRows)
  let total = 0
  for (let i = 0; i < cartRows.length; i += 1) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName("cart-price")[0]
    let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
    // console.log(priceElement, quantityElement)
    let price = parseFloat(priceElement.innerText.replace("€", ""))
    let quantity = quantityElement.value
    // console.log(price * quantity)
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = "€" + total
}