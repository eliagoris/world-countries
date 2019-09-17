import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

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
  padding: 0 1em;
  border-right: 2px solid #f8f8f9;
  font-size: 1.5em;
  color: #004cff;
`

const StyledNavLink = styled(NavLink)`
  padding: 0.5em;
  margin: 0 1em;
  border-bottom: 2px solid transparent;
  color: #363636;
  cursor: pointer;

  &.active {
    border-color: #004cff;
  }
`

const Navigation = styled.nav`
  flex: 1 auto;
  padding: 0 2em;
`

const Header = () => (
  <StyledHeader>
    <Title>Countries</Title>
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
