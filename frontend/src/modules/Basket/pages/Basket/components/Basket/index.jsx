import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import formatPrice from "~/services/formatPrice";
// import Web3Context from "~/contexts/web3";

import connect from "./connect";
import useStyles from "./styles";

// async function wers(web3) {
//   const accounts = await web3.eth.getAccounts();
//   const contract = web3.eth.Contract([
//     {
//       constant: false,
//       inputs: [
//         {
//           name: "_myInt",
//           type: "uint256"
//         }
//       ],
//       name: "setTheInt",
//       outputs: [],
//       payable: false,
//       stateMutability: "nonpayable",
//       type: "function"
//     },
//     {
//       constant: true,
//       inputs: [],
//       name: "getTheInt",
//       outputs: [
//         {
//           name: "",
//           type: "uint256"
//         }
//       ],
//       payable: false,
//       stateMutability: "view",
//       type: "function"
//     }
//   ]);

//   const auth = await contract
//     .deploy({
//       data: "0x7fb17410fd61fedc608b75f3c9ef39dcbb19f124"
//     })
//     .send({
//       from: accounts[0],
//       gas: 6721975,
//       gasPrice: "20000000000"
//     });
//   console.log("auth == ", auth);
// }
const Basket = ({ totalPrice, isEmptyBasket }) => {
  const classes = useStyles();
  // const web3 = useContext(Web3Context);

  return (
    <div className={classes.container}>
      {isEmptyBasket && (
        <p className={classes.hint}>
          Your basket is empty. Choose any <Link to="/">pizza</Link>
        </p>
      )}
      {!isEmptyBasket && (
        <p className={classes.totalPrice}>
          Total Price: <b>{formatPrice(totalPrice)}</b>
        </p>
      )}
    </div>
  );
};

Basket.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default connect(Basket);
