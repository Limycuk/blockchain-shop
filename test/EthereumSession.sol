pragma solidity >=0.5.0 <0.7.0;

contract EthereumSession {
  uint myInt;

  function setTheInt(uint _myInt) public {
    myInt = _myInt;
  }

  function getTheInt() public view returns(uint) {
    return myInt;
  }
}