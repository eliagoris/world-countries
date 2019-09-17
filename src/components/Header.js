import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  height: 70px;
  border-bottom: 2px solid #f8f8f9;
  line-height: 70px;
`

const Title = styled.h1`
  margin: 0;
  padding-left: 20px;
  font-size: 1.5em;
  color: hsla(200, 7%, 1%, 1);
`

const Header = () => (
  <StyledHeader>
    <Title>Countries</Title>
  </StyledHeader>
)

export default Header
