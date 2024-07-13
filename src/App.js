import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { getProvider, getProgram } from './utils/anchor';

import InitializeMarketplace from './components/InitializeMarketplace';
import ListNFT from './components/ListNFT';
import MarketplaceItems from './components/MarketplaceItems';

function App() {
  const [program, setProgram] = useState(null);
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    if (publicKey) {
      const provider = getProvider({ publicKey, signTransaction, signAllTransactions }, connection);
      const program = getProgram(provider);
      setProgram(program);
    }
  }, [publicKey, connection, signTransaction, signAllTransactions]);

  return (
    <div className="App">
      <header>
        <h1>NFT Marketplace</h1>
        <WalletMultiButton />
      </header>
      <main>
        {publicKey ? (
          <>
            <InitializeMarketplace program={program} />
            <ListNFT program={program} />
            <MarketplaceItems program={program} />
          </>
        ) : (
          <p>Please connect your wallet to use the marketplace.</p>
        )}
      </main>
    </div>
  );
}

export default App;