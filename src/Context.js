import React, {createContext, useState} from 'react'

export const CustomContext = createContext();

export const Context = ({children}) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    const value = {
        modal,
        handleModal
    };

    return <CustomContext.Provider value={value}>
        {children}
    </CustomContext.Provider>
};