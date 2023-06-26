import { createContext, useState } from "react";
export const initialState = {
    themes: {
        light:{
          navBackground: "radial-gradient(circle at top left, #e1e8f7, #81a7e3)",
          footBackground: "radial-gradient(circle at top left, #b7c9f1, #104497)",
          cardBackground: "radial-gradient(circle at top right, #b7d9f78a, white)",
          homeBackground:"linear-gradient(to left top, #aebbf9, #c0c7f9, #d0d3f9, #dfe0f9, #ededf9)",
          color: "rgb(0,0,0)",
          inverted: "invert(0)"
        }, 
        dark:{
          navBackground:"linear-gradient(to left top, #103874, #495c95, #7783b7, #a4acdb, #d2d7ff)",
          footBackground:"linear-gradient(to left top, #020928, #1e2c57, #3e4f8b, #6075c2, #859dfd)",
          cardBackground:"linear-gradient(to left top, #b3c3fb, #cad1fc, #dedffc, #f0effd, #ffffff)",
          homeBackground:"linear-gradient(to left top, #595959, #7f7f7f, #a6a6a6, #d0d0d0, #fbfbfb)",
          backgroundButton: "rbga(255,255,255,.3)",
          color:"rgb(255,255,255)",
          inverted: "invert(1)"
        }} ,
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialState.themes.light)  
    const handleTheme = () =>{
      setTheme((curr) => (curr === initialState.themes.light ? initialState.themes.dark : initialState.themes.light ))}
  
  return (
    <ContextGlobal.Provider value={{theme, handleTheme}}>
    {children}
    </ContextGlobal.Provider>
  )
  }