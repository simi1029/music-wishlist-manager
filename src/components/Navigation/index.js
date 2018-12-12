import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

import { Header, LogoLink, LogoDiv, StyledLink, Nav, NavList, NavItem, Spacer } from './NavigationStyle';

const Navigation = () => (
    <Header>
        <Nav>
            <LogoDiv>
                <LogoLink to={ROUTES.LANDING}>MUSIC MANAGER</LogoLink>
            </LogoDiv>
            <Spacer />
            <div>
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
                </AuthUserContext.Consumer>
            </div>
        </Nav>
    </Header>
);

const NavigationAuth = () => (
    <NavList>
        <NavItem>
            <StyledLink to={ROUTES.HOME}>Home</StyledLink>
        </NavItem>
        <NavItem>
            <StyledLink to={ROUTES.ACCOUNT}>Account</StyledLink>
        </NavItem>
        <NavItem>
            <StyledLink to={ROUTES.ADMIN}>Admin</StyledLink>
        </NavItem>
        <NavItem>
            <SignOutButton />
        </NavItem>
    </NavList>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;