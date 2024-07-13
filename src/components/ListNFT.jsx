import React, { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { BN } from '@project-serum/anchor';

function ListNFT({ program }) {
    const [mintAddress, setMintAddress] = useState('');
    const [price, setPrice] = useState(0);

    const handleList = async () => {
        try {
            await program.methods.list(new BN(price))
                .accounts({
                    maker: program.provider.wallet.publicKey,
                    makerMint: new PublicKey(mintAddress),
                    // Add other required accounts here
                })
                .rpc();
            alert('NFT listed successfully!');
        } catch (error) {
            console.error('Error listing NFT:', error);
        }
    };

    // ... rest of the component
}

export default ListNFT;