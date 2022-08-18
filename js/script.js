const textCrip = document.querySelector('#textareaCrip')
const textDescrip = document.querySelector('#textareaDescrip')
const btnCrip = document.querySelector('[data-btncrip]')
const btnDescrip = document.querySelector('[data-btndescrip]')
const btnCopy = document.querySelector('[data-btncopy]')
const btnMCrip = document.querySelector('[data-btnMcrip]')
const btnMDescrip = document.querySelector('[data-btnMdescrip]')
const aviso = document.querySelector('.aviso')

function encriptarTexto(letra){
    if(letra === 'a'){
        letra = 'ai';
    } else if (letra === 'e'){
        letra = 'enter';
    } else if (letra === 'i'){
        letra = 'imes';
    } else if (letra === 'o'){
        letra = 'ober';
    } else if (letra === 'u'){
        letra = 'ufat';
    }
    return letra
}

function descriptarTexto(letra){
    if (letra === 'ai'){
        letra = 'a'
    } else if (letra === 'enter'){
        letra = 'e'
    } else if (letra === 'imes'){
        letra = 'i'
    } else if (letra === 'ober'){
        letra = 'o'
    } else if (letra === 'ufat'){
        letra = 'u'
    }
    return letra
}

function encriptar(texto){
    const msgEncriptar = texto.replace(/a|e|i|o|u/g, encriptarTexto)
    return msgEncriptar
}

function descriptar(texto){
    const msgDescriptar = texto.replace(/ai|enter|imes|ober|ufat/g, descriptarTexto)
    return msgDescriptar
}

function verificarTexto(texto){
    const verificacao = /[^a-zñ\s]/g
    if(verificacao.test(texto)){
        alert("Apenas Letras Minusculas e sem acentos")
        return false
    } else {
        return true
    }
}

function textoEncriptado(event){
    event.preventDefault()
    const cripInput = textCrip.value.toLowerCase()
    const verificacao = verificarTexto(cripInput)
    const msgFinal = encriptar(cripInput)

    if(verificacao == true){
        textDescrip.value = msgFinal
        textCrip.value = ''

    }
}

function textoDescriptado(event){
    event.preventDefault()
    const descripInput = textDescrip.value.toLowerCase()
    const verificacao = verificarTexto(descripInput)
    const msgFinal = descriptar(descripInput)

    if(verificacao == true){
        textCrip.value = msgFinal
        textDescrip.value = ''

    }
}

function copyText(event){
    event.preventDefault()

    textDescrip.select()
    navigator.clipboard.writeText(textDescrip.value)
}

btnCrip.addEventListener('click', textoEncriptado)
btnMCrip.addEventListener('click', textoEncriptado)
btnDescrip.addEventListener('click', textoDescriptado)
btnMDescrip.addEventListener('click', textoDescriptado)
btnCopy.addEventListener('click', copyText)