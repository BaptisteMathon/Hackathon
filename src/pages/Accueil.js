import Cars from '../composants/cars';
import './Accueil.css';

function Accueil() {
  return (
    <div>
        <div class="header">
            <a href="/"><img src="/MclaRent.png" alt="MclaRent" width={"250px"}/></a>
            <h1>Véhicules</h1>
            <div class="user">
              <img src="/menu.png" alt="menu" width={"30px"} class="user-menu"/>
              <img src="/user.png" alt="user" width={"30px"} class="user-user"/>
            </div>
        </div>

        <div class="search">
            <div class="search-ville">
                <p>Ville</p>
                <input type="text" placeholder='Rechercher une ville'/>
            </div>
            <div class="search-debut">
                <p>Début</p>
                <input type="date" placeholder='Date de début'/>
            </div>
            <div class="search-fin">
                <p>Fin</p>
                <input type="date" placeholder='Date de fin'/>
            </div>
            <div class="search-button">
                <img src="/loop.png" alt="Rechercher"/>
            </div>
        </div>

        <Cars/>
    </div>
  );
}

export default Accueil;
