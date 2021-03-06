module.exports = function renderConfirmationView() {

  const {renderElement: r} = this
  const number = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'confirmation', class: 'container'}, [
      r('div', {id: 'thank-you', class: 'jumbotron'}, [
        r('h2', {class: 'text-center'}, 'Thank you.'),
        r('h3', {id: 'order-completed', class: 'text-center'}, 'Your order has been completed.'),
        r('h5', {class: 'number'}, 'Your confirmation number is ' + number),
        r('button', {id: 'continue-shopping', class: 'btn btn-default own button text-center'}, 'CONTINUE SHOPPING')
      ])
    ])
  )
}
