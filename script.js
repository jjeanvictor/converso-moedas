const button = document.getElementById("convert-button")

const bitcoin = 347.464

const convertValeus = () => {
  const inputReal = document.getElementById('input-real').value
  const realValeuText = document.getElementById("real-valeu")
  const biticoin = document.getElementById("biticoin")


  realValeuText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputReal)

  biticoin.innerHTML = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'BTC'
  }).format(inputReal / bitcoin)
}

button.addEventListener('click', convertValeus)
