import React, {useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import SetupForm from './SetupForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_TEST, {
  betas: ['payment_element_beta_2']
});

function App() {
  const [clientSecret, setClientSecret] = useState("")
  
  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:5000/secret');
      const {client_secret: clientSecretResponse} = await response.json();
      setClientSecret(clientSecretResponse)
      console.log(clientSecretResponse)
    };
    
    fetchData();
  }, []);
 
  if (clientSecret === "") {
    return 'Loading...'
  }
  
  const options = {
    clientSecret: clientSecret,
  };
 
  return (
    <Elements stripe={stripePromise} options={options}>
      <SetupForm />
    </Elements>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
