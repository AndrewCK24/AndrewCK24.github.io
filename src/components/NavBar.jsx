import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as BurgerIcon } from "../icons/burger_menu.svg";

import handleNavItemClick from "../modules/handleNavItemClick";

const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: 100vh;
    width: 60%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  };
`;

const NavItem = styled.button`
  background: none;
  font-size: 1rem;
  border: none;
  margin-right: 1rem;
  color: var(--primary-white);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  };
  &.toggled {
    text-shadow: 0 0 0.5rem var(--primary-white);
    font-weight: 700;
  };
  @media screen and (max-width: 600px) {
    display: none;
    font-size: 2rem;
    padding: 0.75rem;
  };
`;

// TODO: Fix the burger icon
const Burger = styled(NavItem)`
  display: none;
  width: 3rem;
  align-items: center;
  justify-content: center;
  svg {
    height: 2.5rem;
    width: 2.5rem;
    stroke: var(--primary-blue);
  };
`;

const NavBar = props => {
  const { vh, currentIndex } = props;
  return (
    <Container>
      <Burger>
        <BurgerIcon />
      </Burger>
      <NavItem
        onClick={() => handleNavItemClick(0, vh)}
        className={currentIndex === 0 ? "toggled" : ""}
      >
        Home
      </NavItem>
      <NavItem
        onClick={() => handleNavItemClick(1, vh)}
        className={currentIndex === 1 ? "toggled" : ""}
      >
        About
      </NavItem>
      <NavItem
        onClick={() => handleNavItemClick(2, vh)}
        className={currentIndex === 2 ? "toggled" : ""}
      >
        Works
      </NavItem>
      <NavItem
        onClick={() => handleNavItemClick(3, vh)}
        className={currentIndex === 3 ? "toggled" : ""}
      >
        Contact
      </NavItem>
    </Container>
  );
};

export default NavBar;
