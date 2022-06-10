import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
// the context api

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
// these are to seethe state of the things we're keeping track of
export const ContextProvider = ({ children }) => {

const [activeMenu , setActiveMenu] = useState(true)

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu}}  >

{children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext)

// our context api here is going to help keep track of the state of the navbar to see if it should be currently open or closed
// the contextprovider contains a children property and then we can return something or start delecaring state. inside contextprovider we usually return the state context(in this case the active menu)
// we export usetstate(statecontext) so we can bring the context of our active menu in this case to our other components, in this case our sidebar. we need to also wrap our context provider around our index.js <app> and import it