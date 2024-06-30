# DAPP Store

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Introduction

DAPP Store is a decentralized e-commerce platform where users can purchase products using cryptocurrency by connecting their MetaMask wallet. This project combines the convenience of online shopping with the security and transparency of blockchain technology.

## Project Structure

The repository is organized into the following folders:

- `frontend`: Contains the React frontend of the application.
- `contracts`: Contains the Solidity smart contract files.
- `test`: Contains test cases for the smart contracts.
- `script`: Contains the deployment script for the local server.

## Features

- Decentralized e-commerce platform
- Purchase products using cryptocurrency
- Connect MetaMask wallet
- Secure transactions with blockchain technology

## Technologies

- **Frontend**: React
- **Smart Contracts**: Solidity
- **Blockchain**: Ethereum
- **Wallet**: MetaMask
- **Library**: ether.js

## Installation

To set up and run the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- MetaMask extension installed in your browser
- Ethereum wallet with some test Ether (e.g., from a testnet faucet)

### Smart Contract Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Hassaan-Qaisar/dapp_store
    cd dapp_store
    ```

2. Navigate to the `contracts` directory and install dependencies:
    ```bash
    cd contracts
    npm install
    ```
    
### Frontend Setup

1. Navigate to the `frontend` directory, install dependencies, and start the React frontend:
    ```bash
    cd ../frontend
    npm install
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Connect your MetaMask wallet to the application.
3. Browse products and make purchases using your cryptocurrency.

## Testing

1. Navigate to the `test` directory and run the tests:
    ```bash
    cd ../test
    npx hardhat test
    ```

## Deployment

1. Navigate to the `script` directory and run the deployment script:
    ```bash
    cd ../script
    npx hardhat node
    ```

## Contributing

Contributions are welcome! If you would like to contribute to this repository, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

