import { useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { brand, light, lightdark } from '../styles/colors.js'
import { largeScreen, mobile } from '../styles/media-queries.js'

const Brand = styled.h1`
  color: ${brand};
  font-family: 'Dancing Script', cursive;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: ${largeScreen};
  margin: 0 auto;
  padding: 15px;
`
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-grow: 4;
  justify-content: flex-end;
  gap: 30px;
  ${mobile} {
    display: none;
  }
`
const NavItems = styled.li`
  a {
    color: ${brand};
    font-weight: 600;
  }
`
const Toggler = styled.span`
  ${mobile} {
    width: 2rem;
    height: 2rem;
    z-index: 999;
    position: fixed;
    right: 2rem;
    top: 2rem;
    border-radius: 99px;
    display: block;
    &:before,
    &:after {
      position: absolute;
      content: '';
      height: 0.5rem;
      background: ${light};
      border-radius: 99px;
      transform: scaleY(0.85);
      transition: all 0.2s;
    }

    &:before {
      width: 1.75rem;
      top: 0.375rem;
      right: 0.125rem;
      border-radius: 50% 50% 0 0;
    }

    &:after {
      width: 1.25rem;
      top: 1.125rem;
      right: 0.125rem;
      border-radius: 0 0 50% 50%;
    }
    .open {
      &:before,
      &:after {
        top: 50%;
        right: 50%;
        width: 1.5rem;
        height: 0.25rem;
        border-radius: 99px;
        background: ${lightdark};
      }
      &:after {
        transform: translate(50%, -50%) rotate(-45deg);
      }
      &:before {
        transform: translate(50%, -50%) rotate(45deg);
      }
    }
  }
`

const Header: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const OpenSideNav = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <header>
      <Nav>
        <Link to="/">
          <Brand>The Cozy Store</Brand>
        </Link>
        <Toggler onClick={OpenSideNav} />
        <Ul>
          <NavItems>
            <Link to="/profile">Profile</Link>
          </NavItems>
        </Ul>
      </Nav>
    </header>
  )
}

export default Header
