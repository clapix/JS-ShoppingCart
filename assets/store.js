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
  let quantityInputs = document.getElementsByClassName("cart-quantity-input")
  for (let i = 0; i < quantityInputs.length; i += 1) {
    let input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  let addToCartButtons = document.getElementsByClassName("item-button")
  for (let i = 0; i < addToCartButtons.length; i += 1) {
    let button = addToCartButtons[i]
    button.addEventListener("click", addToCartClicked)
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  } else {
    updateCartTotal()
  }
}

function addToCartClicked(event) {
  let button = event.target
  let ShopItem = button.parentElement.parentElement
  let title = ShopItem.getElementsByClassName("item-title")[0].innerText
  let price = ShopItem.getElementsByClassName("item-price")[0].innerText
  let image = ShopItem.getElementsByClassName("shop-item-img")[0].src
  // console.log(title, price, image)
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
  total = (Math.round(total * 100) / 100).toFixed(2)
  document.getElementsByClassName("cart-total-price")[0].innerText = "€" + total
}