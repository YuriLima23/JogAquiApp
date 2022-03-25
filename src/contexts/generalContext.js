

import React, { createContext, useState } from 'react'
import { storageLabel } from '../../config/configs';
import { getItem, setItem } from '../cache/storage';
import Loading from '../components/loading/Loading';
import Warning from '../components/warning/Warning';


const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState([false, "", false]); // mostrar, mensagem, sucesso
   
    const isAutenticate = async () =>{
        try {
            return await getItem(storageLabel.token_user)
        } catch (error) {
            console.log('Erro ao verificar autenticacao', error)
            return null
        }
    }

    const logout = () =>{
        setItem(storageLabel.token_user, "")
    }



    return (
        <GeneralContext.Provider value={{
            setIsLoading,
            setWarning,
            isAutenticate
        }}>
            {children}
            <Loading show={isLoading}/>
            <Warning show={warning[0]} success={warning[2]} message={warning[1]} setWarning={setWarning} />
        </GeneralContext.Provider>
    )
}


export default GeneralContext;
