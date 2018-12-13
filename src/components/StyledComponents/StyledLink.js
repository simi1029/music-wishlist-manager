import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;

    &:hover,&.active{
        color: #00cc99;
    };
`;

export default StyledLink;