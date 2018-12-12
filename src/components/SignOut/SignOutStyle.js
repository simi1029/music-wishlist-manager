import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.signout ? "red" : "black" };
    background: none;
    border: none;
    padding: 0;
    maring: none;
    cursor: pointer;

    &:hover{
        color: #00cc99;
    }
`;

export { Button };