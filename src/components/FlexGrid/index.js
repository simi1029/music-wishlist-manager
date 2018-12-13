import styled from 'styled-components';

const FlexGrid = styled.div`
    display: flex;

    @media (max-width:400px) {
        display: block;
    }
`;

const FlexColumn = styled.div`
    flex: 1;
`;

export { FlexGrid, FlexColumn };