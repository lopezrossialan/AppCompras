var windowLoad = new bootstrap.Modal(document.getElementById('windowLoad'), {})
let windowEmpty = document.getElementById('windowEmpty')
let windowLoadList = document.getElementById('windowLoadList')
let windowList = document.getElementById('windowList')
let windowDetail = document.getElementById('windowDetail')

let guardar = document.getElementById('windowLoadAdd').addEventListener('click', function() {
    let producto = document.getElementById('windowLoadProduct').value
    let icono = document.getElementById('windowLoadIcon').value
    let info = document.getElementById('windowLoadInfo').value
    document.getElementById('windowLoadProduct').value = ""
    document.getElementById('windowLoadIcon').value = ""
    document.getElementById('windowLoadInfo').value = ""
    let modelo = ` <li class="list-group-item" data-producto="${producto}" data-icono="${icono}"  data-info="${info}"> <img class="img-nopoint" src="${icono}" alt="${producto}" class="windowList__icon"> ${producto}</li> `
    console.log("hola", producto, icono, info, windowLoadList)
    windowLoadList.innerHTML += modelo
    windowLoad.hide()
    windowEmpty.style.display = 'none'
    windowList.style.display = 'block'
})

let windowLoadListClick = document.getElementById('windowLoadList').addEventListener('click', function(e) {
    document.getElementById('windowDetailProduct').innerHTML = e.target.getAttribute('data-producto')
    document.getElementById('windowDetail__icon').src = e.target.getAttribute('data-icono')
    document.getElementById('windowDetailInfo').innerHTML = e.target.getAttribute('data-info')
    windowList.style.display = 'none'
    windowDetail.style.display = 'block'

})

let windowDetaiLClose = document.getElementById('windowDetailClose').addEventListener('click', () => {
    windowList.style.display = 'block'
    windowDetail.style.display = 'none'

})