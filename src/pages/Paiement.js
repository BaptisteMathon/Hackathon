// import CardInfos from '../composants/CardInfos';
import CardInfos from '../composants/CardInfos';
import Recap from '../composants/Recap';
import {useParams} from "react-router-dom";
import './Paiement.css';

function Paiement() {

    const {carId} = useParams();

    return (
        
        <div>
         <div class="header">
         <a href="/"><img src="/MclaRent.png" alt="MclaRent" width={"250px"}/></a>
            <h1>Paiement</h1>
            <div class="user" onClick={() => {window.location.href = "/auth"}}>
              <img src="/menu.png" alt="menu" width={"30px"} class="user-menu"/>
              <img src="/user.png" alt="user" width={"30px"} class="user-user"/>
            </div>
        </div>

        <div>
            <p>Demande de réservation</p>
            <p>Dates</p>
            <p>27 mars - 28 mars</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <CardInfos/>
            <Recap idCar={carId}/>
        </div>
            
        </div>

    );
  }
  
  export default Paiement;