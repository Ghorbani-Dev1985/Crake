// import { createContext, useContext, useReducer } from "react";

// const UsersContext = createContext(null);
// const UsersDispatchContext = createContext(null);

// function UsersReducer(users, action) {
//   switch (action.type) {
//     case "add": {
//       return [...users, action.payload];
//     }
//     case "delete": {
//       return users.filter((s) => s.id !== action.payload);
//     }
//     case "edit": {
//       return users.map((note) =>
//         note.id === action.payload
//           ? { ...note, completed: !note.completed }
//           : note
//       );
//     }
//     default:
//       throw new Error("unknown action" + action.type);
//   }
// }

// export function UsersReducerProvider({ children }) {
//   const [users, dispatch] = useReducer(UsersReducer, []);
//   return (
//     <UsersContext.Provider value={users}>
//       <UsersDispatchContext.Provider value={dispatch}>
//         {children}
//       </UsersDispatchContext.Provider>
//     </UsersContext.Provider>
//   );
// }

// export function useUsers() {
//   return useContext(UsersContext);
// }

// export function useUsersDispatch() {
//   return useContext(UsersDispatchContext);
// }
