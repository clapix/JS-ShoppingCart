let removeCartItemButtons = document.getElementsByClassName("btn-danger")

console.log(removeCartItemButtons)

for (let i = 0; i < removeCartItemButtons.length; i += 1) {
  let button = removeCartItemButtons[i]

  button.addEventListener('click', function () {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()

  })
}