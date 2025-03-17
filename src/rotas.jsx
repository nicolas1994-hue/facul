import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";


function Rotas() {

    return <BrowserRouter>
        <Routes>

            <Route path="/documentos/documento-requerido/consultar-certificado-digital" element={<App />} />
            


        </Routes>
    </BrowserRouter>

}
export default Rotas;