<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#stripe-react-template)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Overview](#overview)

## Stripe React Template

![Imgur](https://i.imgur.com/tpRHV4R.png)

The purpose of this application is to act as a quick boostrap to build an application on top of, showcasing the power of the Stripe API. This template integrates with Stripe Elements and allows the user to complete a simple checkout process with a card.

### Built With
This template is very lightweight but still makes use of a couple libraries. It currently uses React.js as the frontend and Node.js in the backend. We also integrated with Stripe Elements to handle all the heavy lifting with accepting sensitive payment information.

This template currently uses React class components.

* [Stripe Elements](https://stripe.com/docs/stripe-js/react)
* [React.js](https://reactjs.org/docs/getting-started.html)
* [Node.js](https://nodejs.org/en/docs/)

<!-- GETTING STARTED -->
## Getting Started

There are a few steps that are required for set up in order to get this application up and running locally. You may already have most of these installed, if you do please feel free to skip over those sections.

### Prerequisites

**NPM**

- This project uses npm as the package manager.  If you do not have npm you can install by following this link [here](https://www.npmjs.com/get-npm).

**Node.js**

- We rely on node to run our application as well as our set up script. For information on installation please refer to this link [here](https://nodejs.org/en/download/).

**Stripe API Keys**

- Lastly, please be sure to have both your publishable test key and secret test key on hand!

### Installation

1. Clone the repo
```sh
git clone https://github.com/carycheng/merchant-store.git
```
2. CD into the root directory of the project and install NPM packages. The below command runs npm install in both root and client directories
```sh
npm run install:all
```
3. Add Stripe Secret Key from your account into /config/keys.js
```
module.exports = {
    STRIPE_SK: 'REPLACE_STRIPE_SECRET_KEY'
}
```
4. Add Stripe Public Key from your account into /client/src/config/keys.js
```
module.exports = {
    STRIPE_PK: 'REPLACE_STRIPE_PUBLIC_KEY'
}
```
5. Start the Application
```sh
npm run dev
```
<!-- Overview -->
## Overview
Below is a quick overview of each page and what its purpose

- Use test cards to create a charge
![Imgur](https://i.imgur.com/tpRHV4R.png)

- Backend makes a call to the [PaymentIntents API](https://stripe.com/docs/api/payment_intents) to complete the transaction
![Imgur](https://i.imgur.com/rKJeaK3.png)
