// import { useContext, useState } from "react";
// import { createContext } from "react";


// const OpenContext = createContext();

// export function OpenProvider({children}) {
//     const [isOpen , setIsOpen] = useState(null);
//      return (
//         <OpenContext.Provider value={{isOpen , setIsOpen}}>
//              {children}
//         </OpenContext.Provider>
//      )
// }

// //custom hook
// export const useOpen = () => {
//     const context = useContext(useContext);
//     if(context === undefined) throw new Error("OpenContext was used outside of ThemeProvider");
//     return context;
// } 