import {useParams} from "react-router-dom";
import CarsById from "../composants/carsById";
import { useEffect } from "react";

function Descriptif() {
    const {carId} = useParams();

    useEffect(() => {
        document.title = "Flash MclaRent - Descriptif voiture";
    },)

    return (
        <div>

            <div class="header">
                <a href="/"><img src="/MclaRent.png" alt="MclaRent" width={"250px"}/></a>
                <div class="user" onClick={() => {window.location.href = "/auth"}}>
                <img src="/menu.png" alt="menu" width={"30px"} class="user-menu"/>
                <img src="/user.png" alt="user" width={"30px"} class="user-user"/>
                </div>
            </div>

            <CarsById idCar={carId}/>
        </div>

    );
  }
  
  export default Descriptif;
  