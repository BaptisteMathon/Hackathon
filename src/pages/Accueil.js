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

        <div class="search-border">
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
        </div>

        <div class="filters">
            <div>
                <img src="/euros.png" width={"25px"}/>
                <p>Prix</p>
            </div>
            <div>
                <img src="/marque.png" width={"25px"}/>
                <p>Marque</p>
            </div>
            <div>
                <img src="/car.png" width={"25px"}/>
                <p>Modèle</p>
            </div>
            <div>
                <img src="/fuel.png" width={"25px"}/>
                <p>Carburant</p>
            </div>
            <div>
                <img src="/gearbox.png" width={"25px"}/>
                <p>Boîte de vitesse</p>
            </div>
            <div>
                <img src="/door.png" width={"25px"}/>
                <p>Nombre de portes</p>
            </div>
            <div>
                <img src="/movie.png" width={"25px"}/>
                <p>Univers</p>
            </div>
            <div>
                <img src="/hbo.png" width={"25px"}/>
                <p>Franchise</p>
            </div>
            <span class="filter">
                <img src="/filter.png" width={"25px"}/>
                <p>Filtres</p>
            </span>
        </div>

        <Cars/>
    </div>
  );
}

export default Accueil;
