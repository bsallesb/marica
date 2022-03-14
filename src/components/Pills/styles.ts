import styled from 'styled-components';

export const Wrapper = styled.div`
    ul.overflow-x {
        overflow-x: scroll;
    }

    @media screen and (max-width: 767px) {
        ul.overflow-sm-x {
            flex-wrap: nowrap;
        }
    }
`;
