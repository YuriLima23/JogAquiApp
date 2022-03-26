

import React, { createContext, useState } from 'react'
import { storageLabel } from '../../config/configs';
import { getItem, removeItem, setItem } from '../cache/storage';
import Loading from '../components/loading/Loading';
import Warning from '../components/warning/Warning';


const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState([false, "", false]); // mostrar, mensagem, sucesso
    const [isLogged, setIsLogged] = useState(false); // mostrar, mensagem, sucesso

    const isAutenticate = async () => {
        try {
            let loggin = await getItem(storageLabel.token_user)
            if (loggin) {
                setIsLogged(true)
            } else {
                setIsLogged(false)
            }
            return
        } catch (error) {
            console.log('Erro ao verificar autenticacao', error)
            return null
        }
    }

    const logout = async () => {
        removeItem(storageLabel.token_user)
        isAutenticate()
    }



    return (
        <GeneralContext.Provider value={{
            setIsLoading,
            setWarning,
            isAutenticate,
            isLogged,
            logout
        }}>
            {children}
            <Loading show={isLoading} />
            <Warning show={warning[0]} success={warning[2]} message={warning[1]} setWarning={setWarning} />
        </GeneralContext.Provider>
    )
}


export default GeneralContext;
