import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";


function Rotas() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/documentos/documento-requerido/consultar-certificado-digital" replace />} />

            <Route path="/documentos/documento-requerido/consultar-certificado-digital" element={<App />} />



        </Routes>
    </BrowserRouter>

}
export default Rotas;