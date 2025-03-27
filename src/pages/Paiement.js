import CardInfos from '../composants/CardInfos';
import Recap from '../composants/Recap';

function Paiement() {

    return (
        
        <div>
         <div class="header">
            <img src="/MclaRent.png" alt="MclaRent" width={"250px"}/>
            <h1>Paiement</h1>
            <div class="user">
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
            <Recap/>
        </div>
            
        </div>

    );
  }
  
  export default Paiement;