// import { useContext, useState } from "react";
// import { createContext } from "react";


// const UserContext = createContext();

// export function UserProvider({children}) {
//     const [isLogin , setIslogin] = useState(null);
//      return (
//         <UserContext.Provider value={{isLogin , setIslogin}}>
//              {children}
//         </UserContext.Provider>
//      )
// }

// //custom hook
// export const useUser = () => {
//     const context = useContext(useContext);
//     if(context === undefined) throw new Error("UserContext was used outside of ThemeProvider");
//     return context;
// } 