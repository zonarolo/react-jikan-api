import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Jikan} from "./pages/Jikan/Jikan";
import {Menu} from "./shared/components/Menu/Menu";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme/theme';
import { GlobalStyles } from './styles/theme/global';
import {ThemeContext} from "./shared/contexts/Theme/ThemeContext";
import {Footer} from "./shared/components/Footer/Footer";


function App() {

  const [theme, setTheme] = useState("Dark Mode");

  return (
    <div className="container-fluid justify-content-center my-4 u-font-size-16">
      <ThemeContext.Provider value={[theme, setTheme]}>
        <ThemeProvider theme={theme === "Dark Mode" ? darkTheme : lightTheme}>
          <Router>
            <Menu />
            <GlobalStyles />
            <Switch>
              <Route path="/animes">
                <Jikan />
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
