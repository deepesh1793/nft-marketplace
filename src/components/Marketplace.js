// src/components/Marketplace.js
import React, { useEffect, useState } from 'react';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';

const Marketplace = () => {
    const [marketplace, setMarketplace] = useState(null);
    const [listings, setListings] = useState([]);
    const wallet = useAnchorWallet();
    const { connection } = useConnection();

    useEffect(() => {
        if (wallet && connection) {
            const provider = getProvider(wallet);
            const program = getProgram(provider);
            setMarketplace(program);
            fetchListings(program);
        }
    }, [wallet, connection]);

    const fetchListings = async (program) => {
        try {
            const accounts = await program.account.listing.all();
            setListings(accounts);
        } catch (error) {
            console.error("Failed to fetch listings", error);
        }
    };

    const handleListNFT = async (mintAddress, price) => {
        try {
            const provider = getProvider(wallet);
            const program = getProgram(provider);

            await program.methods.list(new BN(price))
    .accounts({
        maker: wallet.publicKey,
        marketplace: marketplace.publicKey,
        makerMint: new PublicKey(mintAddress),
        // ... other required accounts
    })
    .signers([])
    .rpc();

            fetchListings(program);
        } catch (error) {
            console.error("Failed to list NFT", error);
        }
    };

    const handlePurchase = async (listing) => {
        try {
            const provider = getProvider(wallet);
            const program = getProgram(provider);

            await program.rpc.purchase({
                accounts: {
                    taker: wallet.publicKey,
                    maker: listing.account.maker,
                    // ... other required accounts
                },
                signers: []
            });

            fetchListings(program);
        } catch (error) {
            console.error("Failed to purchase NFT", error);
        }
    };

    return (
        <div>
            <h1>Marketplace</h1>
            {listings.map((listing, index) => (
                <div key={index}>
                    <p>Maker: {listing.account.maker.toBase58()}</p>
                    <p>Price: {listing.account.price.toString()}</p>
                    <button onClick={() => handlePurchase(listing)}>Purchase</button>
                </div>
            ))}
        </div>
    );
};

export default Marketplace;
