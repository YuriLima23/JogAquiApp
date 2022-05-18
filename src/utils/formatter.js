export const PhoneFormatter = (phone) => {
    phone = phone.replace(/\D/g, "");             //Remove tudo o que não é dígito
    phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    phone = phone.replace(/(\d{5})(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos

    console.log(phone.length)
    return phone
}

export const formatterOnlyStrings = (value) => {
    value = value.replace(/[^a-zA-Z\s]/g, "")
    return value
}

export const formatDate = (oldDate) => {
    const date = new Date(Date.parse(oldDate));
    console.log('oldaDate', oldDate)

    if (date) {
        return date.toLocaleDateString("pt-br")
    }
    return false

}


export const formatHour = (oldDate) => {
    const date = new Date(Date.parse(oldDate));
    let minute = date.getMinutes()
    
    if (date) {
        return `${date.getHours()}:${minute < 10 ? `0${minute}` : minute}`
       

    }
    return false
}
