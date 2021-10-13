# How to run this demo

1. Set your enviroment variables `STRIPE_SK_TEST` and `REACT_APP_STRIPE_PK_TEST`:
```
export STRIPE_SK_TEST="sk_test_abcd"
export REACT_APP_STRIPE_PK_TEST="pk_test_abcd"
```

2. Open a terminal tab for your server on the `server` folder
3. Install the dependencies in the virtual environment by running:
```
source bin/activate
pip install -r requirements.txt
```

4. Run the server:
```
flask run
```

5. Open a terminal tab for your client on the `client` folder
6. Install React Stripe.js and the Stripe.js loader from the npm public registry:
```
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

7. Run the client:
```
npm start
```