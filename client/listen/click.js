module.exports = function listenForClick() {

  const state = this
  const $app = document.getElementById('app')
  const {cart} = state

  const getIsFeatured = (id, classList) =>
    id === 'name' ||
    id === 'own' ||
    id === 'continue-shopping' ||
    classList.contains('bang')

  $app.addEventListener('click', event => {
    const {target: $target} = event
    const {classList, dataset} = $target
    const {id: dataId} = dataset
    const id = $target.getAttribute('id')
    const src = $target.getAttribute('src')
    const isPlus = classList.contains('plus')
    const isMinus = classList.contains('minus')
    const isThumbnail = classList.contains('thumbnail')
    if (id === 'catch-me') return state.renderPromo()
    if (id === 'cart-button' || id === 'item-count') state.fetchData('cart')
    if (getIsFeatured(id, classList)) return state.fetchData('featured')
    if (id === 'add-to-cart') return state.addToCart(dataId)
    if (isPlus || isMinus) return state.updateQuantity(dataId, isPlus)
    if (dataId) return state.fetchData('item', dataId)
    if (isThumbnail) {
      const $displayedImage = document.getElementById('display-image')
      return $displayedImage.setAttribute('src', src)
    }
    if (id === 'display-image') return state.renderImage(src)
    if (id === 'full-sized-image') {
      const $itemView = document.getElementById('item')
      const $imageView = document.getElementById('image')
      $imageView.remove()
      return $itemView.classList.remove('hidden')
    }
    if (id === 'checkout-button') return state.alterHistory('checkout')
    if (id !== 'confirm-button') return
    cart.length = 0
    state.saveCart()
    return state.alterHistory('confirmation')
  })
}
