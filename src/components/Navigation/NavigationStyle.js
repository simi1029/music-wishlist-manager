import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
`;
const LogoDiv = styled.div`
    margin-left: 1rem;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 1 rem;
`;

const NavDiv = styled.div`
    margin: 0;
    padding: 0;
`;

const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const NavItem = styled.li`
    padding: 0 0.5rem;
`;

const Spacer = styled.div`
    flex: 1;
`;

export { LogoLink, LogoDiv, Nav, NavDiv, NavList, NavItem, Spacer };