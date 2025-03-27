import React, { useState } from 'react';
import './CardInfos.css';

const PaiementForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
  
    return (
      <div className="payment-container">
        <div className="form-header">
          <h2>Paiement</h2>
          <img src="/Visa.png" alt="Visa" className="visa-logo" />
        </div>
        <hr className="separator" />
        <form className="payment-form">
          <div className="payment-fields">
            <div className="input-group">
              <label htmlFor="cardNumber">Numéro de carte</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>
            <div className="input-group half-width">
              <label htmlFor="expiryDate">Date d'expiration</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                maxLength="5"
                required
              />
            </div>
            <div className="input-group half-width">
              <label htmlFor="cvv">Cryptogramme</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-button">Réserver</button>
        </form>
      </div>
    );
  };
  

export default PaiementForm;