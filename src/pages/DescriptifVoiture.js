import {useParams} from "react-router-dom";

function Descriptif() {
    const {carId} = useParams();

    return (
        <div>
            <h1>Descriptif Voiture</h1>

            <nav>
                <a href="/">Accueil</a>
                <a href="/detailCar">Descriptif Voiture</a>
                <a href="/profil">Profil</a>
                <a href="/auth">Authentification</a>
            </nav>

            <p>Id de la voiture : {carId}</p>
        </div>

    );
  }
  
  export default Descriptif;
  