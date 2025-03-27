import CardInfos from '../composants/CardInfos';
import Recap from '../composants/Recap';

import {useParams} from "react-router-dom";

function Paiement() {

    const {carId} = useParams();
    
    return (
        
        <div>
        <p>Id de la voiture : {carId}</p>
         <div class="header">
            <img src="/MclaRent.png" alt="MclaRent" width={"250px"}/>
            <h1>Paiement</h1>
            <div class="user">
              <img src="/menu.png" alt="menu" width={"30px"} class="user-menu"/>
              <img src="/user.png" alt="user" width={"30px"} class="user-user"/>
            </div>
        </div>
            <nav>
                <a href="/">Accueil</a>
                <a href="/detailCar">Descriptif Voiture</a>
                <a href="/profil">Profil</a>
                <a href="/auth">Authentification</a>
                <a href='/paiement'>Paiement</a>
            </nav>

            <div>
                <p>Demande de réservation</p>
                <p>Dates</p>
                <p>27 mars - 28 mars</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <CardInfos/>
                <Recap/>
            </div>
            
        </div>

    );
  }
  
  export default Paiement;