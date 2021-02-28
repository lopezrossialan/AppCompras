var windowLoad = new bootstrap.Modal(document.getElementById('windowLoad'), {})
let windowEmpty = document.getElementById('windowEmpty')
let windowLoadList = document.getElementById('windowLoadList')
let windowList = document.getElementById('windowList')
let windowDetail = document.getElementById('windowDetail')
let windowLoadIcon = document.getElementById('windowLoadIcon')
let windowLoadProduct = document.getElementById('windowLoadProduct')
let windowLoadInfo = document.getElementById('windowLoadInfo')
let windowDetailProduct = document.getElementById('windowDetailProduct')
let windowDetail__icon = document.getElementById('windowDetail__icon')
let windowDetailInfo = document.getElementById('windowDetailInfo')

let guardar = document.getElementById('windowLoadAdd').addEventListener('click', function() {
    let producto = windowLoadProduct.value
    let icono = windowLoadIcon.value
    let info = windowLoadInfo.value
    windowLoadProduct.value = ""
    windowLoadIcon.value = ""
    windowLoadInfo.value = ""
    let modelo = ` <li class="list-group-item" data-producto="${producto}" data-icon="${icono}"  data-info="${info}"> <img class="img_nopoint" src="${icono}" alt="${producto}" class="windowList__icon"> ${producto}</li> `
    windowLoadList.innerHTML += modelo
    windowLoad.hide()
    windowEmpty.style.display = 'none'
    windowList.style.display = 'block'
})

let windowLoadListClick = document.getElementById('windowLoadList').addEventListener('click', function(e) {
    windowDetailProduct.innerHTML = e.target.getAttribute('data-producto')
    windowDetail__icon.src = e.target.getAttribute('data-icon')
    windowDetailInfo.innerHTML = e.target.getAttribute('data-info')
    windowList.style.display = 'none'
    windowDetail.style.display = 'block'

})

let windowDetaiLClose = document.getElementById('windowDetailClose').addEventListener('click', () => {
    windowList.style.display = 'block'
    windowDetail.style.display = 'none'

})