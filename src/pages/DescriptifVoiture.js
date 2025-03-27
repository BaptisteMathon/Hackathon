import {useParams} from "react-router-dom";
import CarsById from "../composants/carsById";

function Descriptif() {
    const {carId} = useParams();
    console.log("idCar", carId);

    return (
        <div>
            <h1>Descriptif Voiture</h1>

            <nav>
                <a href="/">Accueil</a>
                <a href="/detailCar">Descriptif Voiture</a>
                <a href="/profil">Profil</a>
                <a href="/auth">Authentification</a>
                
            </nav>

            <CarsById idCar={carId}/>
        </div>

    );
  }
  
  export default Descriptif;
  