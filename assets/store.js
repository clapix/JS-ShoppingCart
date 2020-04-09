let removeCartItemButtons = document.getElementsByClassName("btn-danger")

// console.log(removeCartItemButtons)

for (let i = 0; i < removeCartItemButtons.length; i += 1) {
  let button = removeCartItemButtons[i]

  button.addEventListener('click', function (event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()

  })
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0]
  let cartRows = cartItemContainer.getElementsByClassName("cart-row")
  // console.log(cartItemContainer, cartRows)

  for (let i = 0; i < cartRows.length; i += 1) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName("cart-price")[0]
    let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
    // console.log(priceElement, quantityElement)
    let price = parseFloat(priceElement.innerText.replace("€", ""))
    let quantity = quantityElement.value
    console.log(price * quantity)

  }
}