import { log, convertToReal as toReal } from './utils'


//draw only posible combination  of origin and destination DDD from tableCallValues
let drawAvailableDDD = (available) => {
  
  var layout = '<div class="input-group mb-3"> <div class="input-group-prepend"></div> <select class="custom-select input-promo-form" id="input-ddd-destination"><option selected value="null">-- Escolha o DDD Destino --</option>'
  var layoutEnd = '</select></div></div>'
  
  available.forEach(function(value,key){
    layout += '<option value="'+value.dddDestination+'">'+value.dddDestination+'</option>'
  })
  
  layout += layoutEnd
  return layout
}

//------------ popupResult-----------
let drawPopupResult = (result) => {
  var r = result
  
  var divFreeTax = document.querySelector("#result-is-free-tax")
  var divNotFreeTax = document.querySelector("#result-not-free-tax")
  
  var resultDiscountMessage = document.querySelector("#result-discount-message")
  var resultDiscountValue = document.querySelector("#result-discount-final-value")
  var resultNoDiscountValue = document.querySelector("#result-no-discount-final-value")
  var resultDiscountFreeTax = document.querySelector("#result-discount-free-tax")
  
  if(r.discountValue>0){//if isnt tax free
    
    var savedValue = (r.noDiscountValue - r.discountValue).toFixed(2)
    
    var percentSavedValue = ((savedValue*100)/r.noDiscountValue).toFixed(2)
    
    var resultDiscountMessageTxt = "Você economiza R$"+toReal(savedValue)+"<br>"+percentSavedValue+"% de desconto ao usar nosso plano"
    
    resultDiscountMessage.innerHTML = resultDiscountMessageTxt
    
    var discountValue = toReal(r.discountValue.toFixed(2))
    var noDiscountValue = toReal(r.noDiscountValue.toFixed(2))
    
    resultDiscountValue.innerHTML = "R$"+discountValue
    resultNoDiscountValue.innerHTML = "R$"+noDiscountValue
    
    divNotFreeTax.style.display = "initial"
    divFreeTax.style.display = "none"
    
  }else{//if is tax free
    
    divFreeTax.style.display = "initial"
    divNotFreeTax.style.display = "none"
    
    var resultDiscountMessageTxt = "Falando até "+r.promo+" minutos você não paga nada"
    
    resultDiscountMessage.innerHTML = resultDiscountMessageTxt
    
    resultDiscountFreeTax.innerHTML = "R$"+toReal((r.discountValue).toFixed(2))
  }
}//drawPopupResult


export { drawAvailableDDD, drawPopupResult }