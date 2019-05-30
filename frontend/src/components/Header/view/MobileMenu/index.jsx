import React from "react";
import PropTypes from "prop-types";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
      <MenuItem>
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
