export const validationPhone = (phone, setErrorState) => {
    phone = phone.replace(/\D/g, "")
    if (!phone || phone.length != 11) {
        setErrorState([true,"Campo telefone invalido"])
        return false
    }
    return true

}
export const validationName = (name = null, setErrorState) => {
    if (name == null || name == "") {
        setErrorState([true, "Campo nome invalido !"])
        return false
    }
    if (name.length <= 2) {
        console.log('name', name);
        setErrorState([true, "Campo nome precisa de no minimo 3 caracteres !"])
        return false
    }

    return true

}

export const validationPassword = (password = null, setErrorState) => {
    
    if (password == null || password == "") {
        setErrorState([true, "Campo senha invalido !"])
        return false
    }

    if (password.length < 6) {
        setErrorState([true, "Campo senha deve conter no minimo 6 digitos"])
        return false
    }

    return true

}


export const validationConfimPassword= (confirmPassword = null, password, setErrorState) => {
    
    if (confirmPassword == null || confirmPassword == "") {
        setErrorState([true, "Campo confirmar senha  invalido !"])
        return false
    }

    if (password != confirmPassword) {
        setErrorState([true, "Senhas diferem !"])
        return false
    }

    return true

}

export const checkValue = (value) => {
    if(value == "" || value == undefined || value == null){
        return false
    }
    return true

}

