var list_icons = document.getElementsByClassName('item-icon')

// Altera o tamanho dos ícones para o menor tamanho de um ícone disponível
function refreshIcons() {
    var min_height = list_icons[0].height

    for (let i=1; i < list_icons.length; i++) {
        // Ignorar ícones não carregados
        if (list_icons_fail.indexOf(i) > -1) { continue }

        if (list_icons[i].height < min_height)
            min_height = list_icons[i].height
    }
    for (let i=0; i < list_icons.length; i++) {
        list_icons[i].width = min_height
        list_icons[i].height = min_height
    }
}