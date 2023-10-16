import { createContext, useContext, useState } from "react";



const toastContext = createContext(null); 

export const ToastProvider = ({children})=>{
    const [ toast ,setToast] = useState({
        message : "" , 
        success : false , 
        error : false
    }); 
    return(
     <toastContext.Provider value={{toast,setToast}}>
        {children}
     </toastContext.Provider>
    )
}


export const useToast = () => useContext(toastContext); 