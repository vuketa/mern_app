import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h4>&copy; {new Date().getFullYear()}
      <span> DrinkStore</span></h4>
      <h4>All rights reserved</h4>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--clr-grey-4);
  text-align: center;
  height: 5rem;
  h4 {
    color: var(--clr-white);
    margin: 2px;
    font-weight: 400;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }


`

export default Footer
