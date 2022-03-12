

import React, { createContext, useState } from 'react'
import Loading from '../components/loading/Loading';
import Warning from '../components/warning/Warning';


const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState([false, "", false]); // mostrar, mensagem, sucesso

    return (
        <GeneralContext.Provider value={{
            setIsLoading,
            setWarning
        }}>
            {children}
            <Loading show={isLoading}/>
            <Warning show={warning[0]} success={warning[2]} message={warning[1]} setWarning={setWarning} />
        </GeneralContext.Provider>
    )
}


export default GeneralContext;
