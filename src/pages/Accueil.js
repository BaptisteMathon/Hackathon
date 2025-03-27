import Cars from '../composants/cars';
import './Accueil.css';

function Accueil() {
  return (
    <div>
        <div class="header">
            <img src="/MclaRent.png" alt="MclaRent" width={"250px"}/>
            <h1>Véhicules</h1>
            <div class="user">
              <img src="/menu.png" alt="menu" width={"30px"} class="user-menu"/>
              <img src="/user.png" alt="user" width={"30px"} class="user-user"/>
            </div>
        </div>

        <Cars/>
    </div>
  );
}

export default Accueil;
