import { Outlet } from "react-router-dom";
import Navbar from "./componentes/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}