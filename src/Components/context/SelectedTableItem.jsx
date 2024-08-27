/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const selectedContext = createContext()

const SelectedProvider = ({children}) => {
    const [itemId, setId] = useState(0) 

    return (
        <selectedContext.Provider value={{
            itemId,
            setId
        }}>
            {children}

        </selectedContext.Provider>
    )
}

function UseSelected(){
    const Context = useContext(selectedContext)
    if(Context === undefined) throw new Error("Context was used in a wrong place")
    return Context
    
}

export {SelectedProvider, UseSelected}