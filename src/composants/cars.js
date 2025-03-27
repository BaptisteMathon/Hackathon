import React, {useState, useEffect} from 'react';
import './cars.css';

function AllCars(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("https://hackathon-api-chi.vercel.app/allCars")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("result", result);
                    setIsLoaded(true);
                    setCars(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Erreur: {error.message}</div>
    } else if (!isLoaded){
        return <div>Chargement...</div>
    } else {
        return (
            <div class="cars">
                {cars.map(car => (
                    <a href={`/detailCar/${car._id}`}>
                        <img src={car.photo} alt={car.nameCar} width={"250px"}/>
                        <h2>{car.nameCar}</h2>
                        <p>{car.city}, France</p>
                        <p>{car.price}€/jour</p>
                    </a>
                ))}
            </div>
        )
    }
}

export default AllCars;