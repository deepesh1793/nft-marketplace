import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WalletContextProvider } from './WalletContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <WalletContextProvider>
      <App />
    </WalletContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);