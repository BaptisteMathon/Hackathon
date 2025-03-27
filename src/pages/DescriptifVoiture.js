import {useParams} from "react-router-dom";
import CarsById from "../composants/carsById";

function Descriptif() {
    const {carId} = useParams();
    console.log("idCar", carId);

    return (
        <div>
            <div class="header">
                <a href="/"><img src="/MclaRent.png" alt="MclaRent" width={"250px"}/></a>
                <div class="user">
                <img src="/menu.png" alt="menu" width={"30px"} class="user-menu"/>
                <img src="/user.png" alt="user" width={"30px"} class="user-user"/>
                </div>
            </div>

            <CarsById idCar={carId}/>
        </div>

    );
  }
  
  export default Descriptif;
  