import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    top: 0;
    left: 0;
    width: 100%;
    height: 42px;
    background: #6699ff;
`;

const LogoLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
`;
const LogoDiv = styled.div`
    margin-left: 1rem;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover,&.active{
        color: #00cc99;
    };
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 1 rem;
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

export { Header, LogoLink, LogoDiv, StyledLink, Nav, NavList, NavItem, Spacer };