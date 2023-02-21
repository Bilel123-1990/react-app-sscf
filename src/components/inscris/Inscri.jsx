import React from 'react'
import { useState } from "react";


const Inscri = () => {
    const [showForm, setShowForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
          
  const handleClick = () => {
    setShowForm(true);
  };

  const handlePaymentClick = () => {
    setShowPaymentForm(true);
  };

  return (
    <div>
      {!showForm && (
        <button onClick={handleClick}>Inscris-Vous</button>
      )}
      {showForm && (
        <form>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
          <button onClick={handlePaymentClick}>Suivant</button>
        </form>
      )}
      {showPaymentForm && (
        <form>
          <input type="text" placeholder="Numéro de carte" />
          <input type="text" placeholder="Date d'expiration" />
          <input type="text" placeholder="CVV" />
          <button>Soumettre</button>
        </form>
      )}
    </div>
  );
};

export default Inscri;

   