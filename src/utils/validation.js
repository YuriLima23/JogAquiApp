export const validationPhone = (phone) => {
    phone = phone.replace(/\D/g,"")
    console.log(`phonnne`, phone)
    if (phone && phone.length == 11) {
        return true
    }
    return false

}