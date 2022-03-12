

import React, { createContext } from 'react'

const user = {
    name: "",
    phone: "",
    cpf: "",
    password: "",
    confirmPassword: "",
}

const RegisterUserContext = createContext(user);



export const registerUserProviderContext = ({ children }) => {
    const [user, setUser] = useState(user);

    const updateData = (params) => {
        setUser({ params, ...user })
    }

    return (
        <RegisterUserContext.Provider value={{ updateData, user }}>
            {children}
        </RegisterUserContext.Provider>
    )
}


export default RegisterUserContext;
