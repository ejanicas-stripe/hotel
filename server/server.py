from flask import Flask, jsonify
import stripe
import os

app = Flask(__name__)
stripe.api_key = os.environ.get('STRIPE_SK_TEST')
stripe.api_version = '2020-08-27'

# Set your secret key. Remember to switch to your live secret key in production.
# See your keys here: https://dashboard.stripe.com/apikeys
customer = stripe.Customer.create()

@app.route('/secret')
def secret():
  intent = stripe.SetupIntent.create(
    customer=customer['id'],
    payment_method_types=['card'],
  )
  return jsonify(client_secret=intent.client_secret)
