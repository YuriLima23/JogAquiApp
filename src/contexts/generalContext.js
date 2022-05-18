

import { useNavigation } from '@react-navigation/native';
import React, { createContext, useState, useEffect } from 'react'
import { storageLabel } from '../../config/configs';
import { getItem, removeItem, setItem } from '../cache/storage';
import Loading from '../components/loading/Loading';
import Warning from '../components/warning/Warning';
import { exceptions } from '../utils/Firebase';


const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [warning, setWarning] = useState([false, "", false]);
    const [isLogged, setIsLogged] = useState(2);
    const [tokenUser, setTokenUser] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {

        checkAuth()
      
    }, []);
    
    const autenticate = async (user) => {
    let token = await getItem(storageLabel.token_user)
       setUser(user)
       setIsLogged(1)
       setTokenUser(token)
    }

    const logout = async () => {
        removeItem(storageLabel.token_user)
        setUser(null)
        setTokenUser(null)
        setIsLogged(0)


    }
    const checkAuth = async () =>{
        const token = await getItem(storageLabel.token_user)
        console.log('token', token)
        if(!token){
            logout()
        }
    }





    return (
        <GeneralContext.Provider value={{
            setIsLoading,
            setWarning,
            user,
            setUser,
            isLogged,
            setIsLogged,
            tokenUser,
            setTokenUser,
            logout,
            autenticate,
          
        }}>
            {children}
            <Loading show={isLoading} />
            <Warning show={warning[0]} success={warning[2]} message={warning[1]} setWarning={setWarning} />
        </GeneralContext.Provider>
    )
}


export default GeneralContext;
