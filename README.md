# NFT Marketplace Frontend

This repository contains the frontend code for an NFT marketplace application built on Solana blockchain.

## Overview

This frontend interacts with a backend Solana program (`anchor_marketplace`) deployed on a Solana cluster (e.g., Devnet). It allows users to connect their Solana wallets, initialize the marketplace, list NFTs for sale, and browse available NFTs.

## Features

- **Wallet Integration**: Users can connect their Solana wallets using @solana/wallet-adapter-react.
- **Marketplace Initialization**: Admin users can initialize the marketplace with a name and fee.
- **NFT Listing**: Users can list their NFTs for sale in the marketplace.
- **Browse Marketplace**: View and interact with NFTs listed for sale.

## Technologies Used

- React
- @solana/wallet-adapter-react: Solana wallet integration
- @project-serum/anchor: Solana program interaction
- Webpack, Babel: Build tools
- Tailwind CSS: Styling

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nft-marketplace-frontend
2. Install dependencies:

   ```bash
   npm install  # or yarn install
   ```
3. Running Locally:
   ```bash
   npm run start
   ```
