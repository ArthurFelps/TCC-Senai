import { Routes, Route, Link } from "react-router-dom";
import App from "./App";

import Suplementos from "./components/Global/Suplementos";
import Roupas from "./components/Global/Roupas";
import Marcas from "./components/Global/Marcas";
import Top12 from "./components/Global/Top12";
import Whey from "./components/Global/Whey";
import Cwhey from "./components/Global/Cwhey";
import Croupa from "./components/Global/Croupa";
import CADitens from "./components/Global/CADItens/CADitens";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/suplementos" element={<Suplementos/>}/>
            <Route path="/roupas" element={<Roupas/>}/>
            <Route path="/marcas" element={<Marcas/>}/>
            <Route path="/top12" element={<Top12/>}/>
            <Route path="/whey" element={<Whey/>}/>
            <Route path="/suplementos/cwhey" element={<Cwhey/>}/>
            <Route path="/roupas/croupa" element={<Croupa/>}/>
            <Route path="/caditens" element={<CADitens/>}/>
        </Routes>
    );
}