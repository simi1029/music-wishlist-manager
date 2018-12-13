import React from 'react';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

import { LogoLink, LogoDiv, Nav, NavDiv, NavList, NavItem, Spacer } from './NavigationStyle';
import { StyledLink, Header } from '../StyledComponents';

const Navigation = () => (
    <Header>
        <Nav>
            <LogoDiv>
                <LogoLink to={ROUTES.LANDING}>MUSIC MANAGER</LogoLink>
            </LogoDiv>
            <Spacer />
            <NavDiv>
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
                </AuthUserContext.Consumer>
            </NavDiv>
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
    <NavList>
        <NavItem>
            <StyledLink to={ROUTES.SIGN_IN}>Sign In</StyledLink>
        </NavItem>
    </NavList>
);

export default Navigation;