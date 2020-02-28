import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <NavbarBrand href="/">{siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <div className="nav-link">
                <Link to="/lwc" activeClassName="active">
                  LWC
                </Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="nav-link">
                <Link to="/aura" activeClassName="active">
                  AURA
                </Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="nav-link">
                <Link to="/integration" activeClassName="active">
                  Integration
                </Link>
              </div>
            </NavItem>
            <NavItem>
              <div className="nav-link">
                <Link to="/einstein" activeClassName="active">
                  Einstein
                </Link>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
