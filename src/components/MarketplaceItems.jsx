import React, { useState, useEffect } from 'react';

function MarketplaceItems({ program }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch listed items from the program
        // This is a placeholder and needs to be implemented based on your contract structure
        const fetchItems = async () => {
            // const listedItems = await program.account.listing.all();
            // setItems(listedItems);
        };
        fetchItems();
    }, [program]);

    const handlePurchase = async (item) => {
        try {
            await program.methods.purchase()
                .accounts({
                    taker: program.provider.wallet.publicKey,
                    maker: item.maker,
                    // Add other required accounts here
                })
                .rpc();
            alert('NFT purchased successfully!');
        } catch (error) {
            console.error('Error purchasing NFT:', error);
        }
    };

    const handleDelist = async (item) => {
        try {
            await program.methods.delist()
                .accounts({
                    maker: program.provider.wallet.publicKey,
                    // Add other required accounts here
                })
                .rpc();
            alert('NFT delisted successfully!');
        } catch (error) {
            console.error('Error delisting NFT:', error);
        }
    };

    return (
        <div className="marketplace-items">
            <h2>Marketplace Items</h2>
            {items.map((item, index) => (
                <div key={index} className="item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>Price: {item.price} SOL</p>
                    <button onClick={() => handlePurchase(item)}>Purchase</button>
                    {item.maker.equals(program.provider.wallet.publicKey) && (
                        <button onClick={() => handleDelist(item)}>Delist</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default MarketplaceItems;