import { NavLink } from 'react-router-dom';
import { FC } from 'react';

interface NavLinkType {
    navLink: string;
    navLinkTitle: string;
}

const NavigationLink: FC<NavLinkType> = ({ navLinkTitle, navLink }) => (
  <NavLink
    className="navigation__link"
    to={navLink}
  >
    {navLinkTitle}
  </NavLink>
);

export default NavLink;
