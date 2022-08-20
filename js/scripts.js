import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculatorIMC, notANumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value

    const result = calculatorIMC (weight, height)

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }

    AlertError.close()

    //const message = ` Seu IMC é de ${result}`

    //Modal.message.innerText = message
   // Modal.open()

    if(result <= 18.4 ){
        const message = ` Seu IMC é de ${result}
                           Classificação é: 
                          ( MAGREZA )`

    Modal.message.innerText = message
    Modal.open()

    }else if(result >= 18.5 & result <= 24.9 ){
        const message = ` Seu IMC é de ${result}
                          Classificação é: 
                          ( NORMAL )`

    Modal.message.innerText = message
    Modal.open()

    }else if(result >= 25 & result <= 29.9 ){
        const message = ` Seu IMC é de ${result}
                          Classificação é: 
                          ( ACIMA DO PESO )`

    Modal.message.innerText = message
    Modal.open()

    }else if(result >= 30 & result <= 39.9 ){
       const message = ` Seu IMC é de ${result}
                          Classificação é: 
                          ( OBESIDADE )`

    Modal.message.innerText = message
    Modal.open()

    }else if(result >= 40 ){
        const message = ` Seu IMC é de ${result}
                          Classificação é: 
                          ( OBESIDADE GRAVE )`

    Modal.message.innerText = message
    Modal.open()

    }



    inputHeight.value = ""
    inputWeight.value = ""
}
