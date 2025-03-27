import React from 'react';
import './Recap.css';

const InfosRecap = () => {
    return (
        <div className="card">
          <img src="/MclaRent.png" alt="car" className="card-image" />
          <div className="card-content">
            <p className="price-details">Détails du prix</p>
            <div className="price-info">
              <span>150€ x 4 jours</span>
              <span className="price-right">600€</span>
            </div>
            <div className="price-info">
              <span>Frais de service</span>
              <span className="price-right">25€</span>
            </div>
            <hr className="separator" />
            <div className="price-info total">
              <span>Total (EUR)</span>
              <span className="price-right">625€</span>
            </div>
          </div>
        </div>
      );
   
  };
  

export default InfosRecap;