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
  NavLink,
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
              {/* <NavLink href="/lwc">LWC</NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink href="/aura" activeClassName="active">
                AURA
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/integration" activeClassName="active">
                Integration
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/einstein" activeClassName="active">
                Einstein
              </NavLink>
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
