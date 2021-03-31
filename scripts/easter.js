var main = document.getElementsByTagName('main').item(0)
var easterbox = document.getElementsByClassName('easterbox').item(0)

function easterOkClick() {
  document.body.style.margin = ''
  main.style.display = ''
  easterbox.style.display = 'none'

  history.back()
}

setTimeout(() => {
  document.body.style.margin = '0px'
  main.style.display = 'none'
  easterbox.style.display = 'flex'
}, 15000)
