function easterOkClick() {
  history.back()
}

setTimeout(() => {
  var main = document.getElementsByTagName('main')[0]
  var easterbox = document.getElementsByClassName('easterbox')[0]
  document.body.style = 'margin: 0'
  main.style = 'display: none'
  easterbox.style = 'display: flex'
}, 15000)
