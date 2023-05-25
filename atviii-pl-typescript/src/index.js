import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ListaClientes from './pages/ListaClientes';
import ListaProdutos from './pages/ListaProdutos';
import ListaPets from './pages/ListaPets';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={ <App /> }>
                    <Route index element={ <ListaClientes /> } />
                    <Route path='/produtos' element={ <ListaProdutos /> } />
                    <Route path='/pets' element={ <ListaPets /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
