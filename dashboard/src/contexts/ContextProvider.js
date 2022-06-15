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
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initalState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    // update the local storage so the same color theme is active
    setThemeSettings(false);
    // this helps us call the event for our onClick in themesettings, the onClick  calls the setMode function
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    // update the local storage so the same color is active
    setThemeSettings(false);
    // this calls an string for our onClick in themesettings, no need to do an "event.target.value". will show up as undefined otherwise
  };


  const handleClick = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);

// our context api here is going to help keep track of the state of the navbar to see if it should be currently open or closed
// the contextprovider contains a children property and then we can return something or start delecaring state. inside contextprovider we usually return the state context(in this case the active menu)
// we export usetstate(statecontext) so we can bring the context of our active menu in this case to our other components, in this case our sidebar. we need to also wrap our context provider around our index.js <app> and import it

// we use isclicked and setisclicked to check whether or not the icons are going to open and perform their functions on the navbar and that goes together with the handleclick function. we take the object that is initalstate and spread it so that we can check each individual item if its been clicked
// the screensize use state is to check the window of the screen and if it reaches a certain size, we can hide the navbar. this is useful for mobile viewing
