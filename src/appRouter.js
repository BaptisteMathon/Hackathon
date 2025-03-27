import Accueil from "./pages/Accueil";
import DescriptifVoiture from "./pages/DescriptifVoiture";
import Profil from "./pages/Profil";
import Authentification from "./pages/Authentification";
import Paiement from "./pages/Paiement";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const AppRouter = () => {
    return (
        <div>
            <Router>
                    <Routes>
                        <Route path="/" element={<Accueil />} />
                        <Route path="/detailCar/:carId" element={<DescriptifVoiture/>}/>
                        <Route path="/paiement/:carId" element={<Paiement />} />
                        <Route path="/profil" element={<Profil />} />
                        <Route path="/auth" element={<Authentification />} />
                    </Routes>
            </Router>
        </div>
    );
};


export default AppRouter;