import { createContext, useState,useContext } from "react"




export const userDataContext = createContext()

export const useUserContext = () =>{  // an extra hook that get context and return data directly from here 

    const data = useContext(userDataContext)
    return data
}

export const UserContext = ({children}) => {

   const [user,setUser] = useState({
        fullname:{
            firstname:'',
            lastname:''
        },
        email:'',
        password:''
    })

    return (
        <userDataContext.Provider value={user} >
          {children}
        </userDataContext.Provider>

    )
}