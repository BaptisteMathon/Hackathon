import React from 'react';
import {useState, useEffect} from 'react';
import './Recap.css';

function InfosRecap({idCar}) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [car, setCar] = useState({});

    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

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
        }, [idCar]);

    useEffect(() => {
        if (car.price) {
            const prices = car.price * 2
            setPrice(prices);
            setTotal(prices + 25);
        }
            
        }, [car])

    if(error){
        return <div>Erreur: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Chargement ...</div>
    } else {

    return (
        <div className="card">
          <img src={car.photo} alt={car.nameCar} width={"100%"} className="card-image" />
          <div className="card-content">
            <p className="price-details">Détails du prix</p>
            <div className="price-info">
              <span>{car.price}€ x 2 jours</span>
              <span className="price-right">{price}€</span>
            </div>
            <div className="price-info">
              <span>Frais de service</span>
              <span className="price-right">25€</span>
            </div>
            <hr className="separator" />
            <div className="price-info total">
              <span>Total EUR</span>
              <span className="price-right">{total}€</span>
            </div>
          </div>
        </div>
      );
    }
  };
  

export default InfosRecap;