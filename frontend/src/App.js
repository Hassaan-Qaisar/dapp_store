import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import './App.css';
import config from './config.json'
import dapp from './abis.json'

import { Navigation } from './components/Navigation';

function App() {
  const [account, setAccount] = useState(null)
  return (
    <div >
      <Navigation account={account} setAccount={setAccount}  />
      
    </div>
  );
}

export default App;
