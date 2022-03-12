
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async (key, parser = false) => {
    try {
        let result = await AsyncStorage.getItem(key)
        if(parser){
            result = JSON.parse(result)
        }
        return result;
    } catch (error) {
        console.log("Erro  asyncStorage get item", error)
    }
}

export const setItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log("Erro  asyncStorage set item", error)
    }

}