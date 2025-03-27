import React, {useState, useEffect} from 'react';
import './carsById.css';


function CarById({idCar}){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [car, setCar] = useState({});

    const [debut, setDebut] = useState("");
    const [fin, setFin] = useState("");

    const [day, setDay] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    console.log("idCar", idCar);

    useEffect(() => {
        fetch(`https://hackathon-api-chi.vercel.app/car/${idCar}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCar(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    useEffect(() => {
        if(debut && fin){
            const start = new Date(debut);
            const end = new Date(fin);

            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            setDay(diffDays);

            const prices = diffDays * car.price
            setPrice(prices);
            setTotal(prices + 25);
        }
    }, [debut, fin])

    if(error){
        return <div>Erreur: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Chargement ...</div>
    } else {
        return (
            <div>
                <h1 class="h1-car-name">{car.nameCar}</h1>

                <div class="carIdDetail">
                    <div class="div-img-description">
                        <img src={car.photo} alt={car.nameCar} width={"100%"}/>
                        <div class="description">
                            <p>{car.description}</p>
                        </div>
                    </div>
                    <div class="div-detail-booking">
                        <p class="price-day"><span>{car.price}€ </span>/ jour</p>
                        <div class="booking">
                            <div class="debut">
                                <p>Début</p>
                                <input type="date" value={debut} onChange={(e) => setDebut(e.target.value)}/>
                            </div>
                            <div class="fin">
                                <p>Fin</p>
                                <input type="date" value={fin} onChange={(e) => setFin(e.target.value)}/>
                            </div>
                        </div>
                        <div class="price-total-day">
                            <p class="underline">{car.price}€ X {day} jours</p>
                            <p>{price}€</p>
                        </div>
                        <div class="frais-service">
                            <p class="underline">Frais de service</p>
                            <p>25€</p>
                        </div>

                        <p class="total">Total : <span>{total}€</span></p>

                        <button class="book-button">Réserver</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarById;