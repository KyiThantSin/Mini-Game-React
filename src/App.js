import { Container } from 'react-bootstrap';
import './App.css';
import Board from './component/Board';
import {createContext, useState} from "react";
import Switch from "react-switch";

function App() {
  const [theme, setTheme] = useState("light")

  const ThemeContext = createContext(null);

  const toggleTheme = () => {
    setTheme((curr)=> curr === "light" ? "dark" : "light" )
  }

  return (
      
        <ThemeContext.Provider value={{theme,toggleTheme}}>
          <div id={theme}>
              <Container>
                <Switch onChange={toggleTheme} 
                      checked={theme === "dark"}
                      className="mt-2"
                      onColor="#F8F9F9"
                      onHandleColor='#F4D03F'
                      offHandleColor='#F4D03F'
                      handleDiameter={30}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.1)"
                      height={20}
                      width={48}
                      />
              </Container>
              <Board />
          </div>
        </ThemeContext.Provider>
    
    );
}

export default App;
