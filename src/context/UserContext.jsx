import { createContext,useEffect,useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [auth,setAuth] = useState(()=>{
        const storedValue = localStorage.getItem('auth');
        return storedValue ? JSON.parse(storedValue) : false;
    })

    useEffect(()=>{
        localStorage.setItem('isAuth', JSON.stringify(auth));
    },[auth])

    return (
        <UserContext.Provider value={{auth,setAuth}}>
          {children}
        </UserContext.Provider>
      );
}

export default UserProvider;
