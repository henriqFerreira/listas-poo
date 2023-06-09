import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ListaClientes from "./pages/ListaClientes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ListaProdutos from './pages/ListaProdutos';
import ListaPets from './pages/ListaPets';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
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