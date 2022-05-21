

import React, { createContext,useState } from 'react'



const CreateSolicitationContext = createContext();



export const CreateSolicitationProvider = ({ children }) => {
    const [solicitation, setSolicitation] = useState(null);

    return (
        <CreateSolicitationContext.Provider value={{ solicitation, setSolicitation }}>
            {children}
        </CreateSolicitationContext.Provider>
    )
}


export default CreateSolicitationContext;
