import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {HomePageLazy} from "./pages/HomePage/HomePageLazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {useTheme} from "./theme/ThemeContext/useTheme";


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <button onClick={toggleTheme}>Change theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>


        </div>
    );
};

