import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalPizza from "@material-ui/icons/LocalPizza";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

const MobileMenu = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  pizzasCounter
}) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/" onClick={handleMobileMenuClose}>
        <IconButton color="inherit">
          <Badge badgeContent={pizzasCounter} color="secondary">
            <LocalPizza />
          </Badge>
        </IconButton>
        <p>Pizza</p>
      </MenuItem>
      <MenuItem component={Link} to="/basket" onClick={handleMobileMenuClose}>
        <IconButton color="inherit">
          <Badge badgeContent={pizzasCounter} color="secondary">
            <ShoppingBasket />
          </Badge>
        </IconButton>
        <p>Basket</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};

MobileMenu.propTypes = {
  mobileMoreAnchorEl: PropTypes.any,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  handleMobileMenuClose: PropTypes.func.isRequired,
  handleProfileMenuOpen: PropTypes.func.isRequired,
  pizzasCounter: PropTypes.number.isRequired
};

export default MobileMenu;
