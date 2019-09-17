import React from "react"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  position: sticky;
  height: 70px;
  border-bottom: 2px solid #f8f8f9;
  line-height: 70px;
`

const Title = styled.h1`
  margin: 0;
  padding: 0 2em 0 1em;
  border-right: 2px solid #f8f8f9;
  font-size: 1.5em;
  color: #1b5e20;
`

const StyledNavLink = styled(NavLink)`
  padding: 0.5em;
  margin: 0 1em;
  border-bottom: 2px solid transparent;
  color: #363636;
  cursor: pointer;
  transition: color 0.2s linear, opacity .2s linear;

  &.active,
  &:hover {
    opacity: .8
    color: #1b5e20;
  }
`

const Navigation = styled.nav`
  flex: 1 auto;
  padding: 0 2em;
`

const StyledLink = () => (
  <StyledNavLink
    as={styled(Link)`
      margin: 0;
      color: #1b5e20;
    `}
    to="/"
  >
    Countries
  </StyledNavLink>
)

const Header = () => (
  <StyledHeader>
    <Title>
      <StyledLink />
    </Title>
    <Navigation>
      <StyledNavLink to="/" exact>
        Home
      </StyledNavLink>
      <StyledNavLink to="/countries" exact>
        Countries list
      </StyledNavLink>
    </Navigation>
  </StyledHeader>
)

export default Header
