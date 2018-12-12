import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.signout ? "red" : "black" };
    background: none;
    border: none;
    padding: 0;
    maring: none;
`;

export { Button };