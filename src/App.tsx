import React, { Suspense } from "react";
import './index.scss';
import { Routes } from "react-router";
import { Route } from "react-router";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;