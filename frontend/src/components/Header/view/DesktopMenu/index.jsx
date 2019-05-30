import React from "react";
import PropTypes from "prop-types";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const DesktopMenu = ({ anchorEl, isMenuOpen, handleMenuClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

DesktopMenu.propTypes = {
  anchorEl: PropTypes.any,
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired
};

export default DesktopMenu;
