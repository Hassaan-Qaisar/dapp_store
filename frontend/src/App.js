import { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import config from "./config.json";
import dapp from "./abis.json";

import { Navigation } from "./components/Navigation";
import Section from "./components/Section";

function App() {
  const [account, setAccount] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [toys, setToys] = useState(null);
  const [item, setItem] = useState({});
  const [toggle, setToggle] = useState(false);

  const togglePop = (item) => {
    setItem(item);
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />
      <h2>Dapp Store Best Sellers</h2>

      {electronics && clothing && toys && (
        <>
          <Section
            title={"Clothing & Jewelry"}
            items={clothing}
            togglePop={togglePop}
          />
          <Section
            title={"Electronics & Gadgets"}
            items={electronics}
            togglePop={togglePop}
          />
          <Section title={"Toys & Gaming"} items={toys} togglePop={togglePop} />
        </>
      )}
    </div>
  );
}

export default App;
