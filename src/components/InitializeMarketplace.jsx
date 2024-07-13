import React, { useState } from 'react';

function InitializeMarketplace({ program }) {
  const [name, setName] = useState('');
  const [fee, setFee] = useState(0);

  const handleInitialize = async () => {
    try {
      await program.methods.initialize(name, fee)
        .accounts({
          admin: program.provider.wallet.publicKey,
          // Add other required accounts here
        })
        .rpc();
      alert('Marketplace initialized successfully!');
    } catch (error) {
      console.error('Error initializing marketplace:', error);
    }
  };

  return (
    <div className="initialize-marketplace">
      <h2>Initialize Marketplace (Admin Only)</h2>
      <input
        type="text"
        placeholder="Marketplace Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Fee"
        value={fee}
        onChange={(e) => setFee(parseInt(e.target.value))}
      />
      <button onClick={handleInitialize}>Initialize</button>
    </div>
  );
}

export default InitializeMarketplace;