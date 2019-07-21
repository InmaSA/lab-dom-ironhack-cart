

let calculate_button = document.getElementById("calculateButton")  

let product_container = document.getElementsByClassName('productContainer')
// con esto saco un array que tiene por elementos los divs de clase productContainer
// que contiene cada uno a cada elemento en el html

let calcTotalPrice = 0 // la inicializo aquí por el scope y la uso luego fuera del loop

calculate_button.onclick = () => {
  
  for (let i = 0; i < product_container.length; i++) {
    // en esta función itero sobre el array de los divs con los productos
    let product_cost = document.getElementsByClassName('productCost')[i]
    let user_input = document.getElementsByClassName('userInput')[i] 
    let costOfAllUnits= product_cost.innerHTML * user_input.value
    let total_product_cost = document.getElementsByClassName('totalProductCost')
    total_product_cost[i].innerHTML = costOfAllUnits
    // y ahora hago que sume todo
    calcTotalPrice += costOfAllUnits
  }
    // y que salga en el campo de totalPrice del html
    let totalPriceDisplay = document.getElementById('totalPrice')
    totalPriceDisplay.innerHTML = calcTotalPrice
}

// voy a hacer que los bototes delete borren cada uno lo suyo

let deleteButtons = document.getElementsByClassName('buttonDelete') // array con los botones


// a continuación la función para que reconozca el botón de delete pulsado y borre todo el producto:
// 1. saco arriba el array con todos los botones delete
// 2. hago la función e.currentTarget para que seleccione de todos sólo el que se ha pulsado
// 3. identifico los parent y childs para poder aplicar el parent.removeChild(child)
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function (e) { // esto es el e.currentTarget
    let divButton = deleteButtons[i].parentNode // Me selecciona el div que contiene ese botón (está en un div por el display flex)
    let div = divButton.parentNode // Me selecciona el div que contiene todo el producto
    let allTheDivs = div.parentNode // Me selecciona el div que contiene todos los div individuales de cada producto
    allTheDivs.removeChild(div) //Me borra todo el div child del parent que contiene a todos
    console.log(div)
    console.log(allTheDivs)
  }  
}


let create_button = document.getElementById('createButton')

let new_item = document.getElementsByClassName('newItem')[0]
let new_item_unit_price = document.getElementsByClassName('newItemUnitPrice')[0]

let body = document.getElementsByTagName("body")[0]
let addNewProdDiv = document.getElementsByClassName('addNewProd')[0]
let div = document.createElement('div')
let noClassDiv1 = document.createElement('div')
let noClassDiv2 = document.createElement('div')
let noClassDiv3 = document.createElement('div')
let noClassDiv4 = document.createElement('div')
let noClassDiv5 = document.createElement('div')
let spanProductName = document.createElement('span')
let spanProductCost = document.createElement('span')
let totalProductCost = document.createElement('span')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let label = document.createElement('label')
let input = document.createElement('input')
let button = document.createElement('button')

create_button.onclick = () => {
  
    body.insertBefore(div, addNewProdDiv)
    div.className = 'productContainer'
    div.appendChild(noClassDiv1)
    noClassDiv1.appendChild(spanProductName)
    spanProductName.className = 'productName'
    spanProductName.innerHTML = new_item.value
    div.appendChild(noClassDiv2)
    noClassDiv2.appendChild(p1)
    p1.innerHTML = '$'
    p1.appendChild(spanProductCost)
    spanProductCost.className = 'productCost'
    spanProductCost.innerHTML = new_item_unit_price.value
    div.appendChild(noClassDiv3)
    noClassDiv3.appendChild(label)
    label.innerHTML = 'Qty'
    noClassDiv3.appendChild(input)
    div.appendChild(noClassDiv4)
    noClassDiv4.appendChild(p2)
    p2.innerHTML = '$'
    p2.appendChild(totalProductCost)
    totalProductCost.className = 'totalProductCost'
    spanProductCost.innerHTML = '0'
    div.appendChild(noClassDiv5)
    noClassDiv5.appendChild(button)
    button.className= 'button buttonDelete'
    button.innerHTML = 'Delete'

}



