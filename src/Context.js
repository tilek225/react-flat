import React, {createContext, useState} from 'react'

export const CustomContext = createContext();

export const Context = ({children}) => {
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    const handleOpen = () => {
        setOpen(!open)
    };

    const value = {
        modal,
        handleModal,
        open,
        handleOpen
    };

    return <CustomContext.Provider value={value}>
        {children}
    </CustomContext.Provider>
};