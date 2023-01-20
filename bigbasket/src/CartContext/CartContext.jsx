import React, { Context, useState } from "react";


export let cartContext=React.createContext([])

export default function CartContextProvider({children}){

    let [item,setItem]=useState([])

    return (
        <cartContext.Provider value={{item,setItem}}>
            {children}
        </cartContext.Provider>
    )
}