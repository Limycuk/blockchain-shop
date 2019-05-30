import React, { useEffect, useState } from "react";
import Web3 from "web3";

import Web3Context from "~/contexts/web3";

const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState();

  useEffect(() => {
    if (typeof web3 !== "undefined") {
      setWeb3(new Web3(web3.currentProvider));
    } else {
      setWeb3(
        new Web3(new Web3.providers.HttpProvider("http://localhost:8646"))
      );
    }
  }, []); // eslint-disable-line

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
};

export default Web3Provider;
