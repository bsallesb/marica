import styled from 'styled-components';

export const Wrapper = styled.div`
    div.overflow-x {
        overflow-x: scroll;
    }

    @media screen and (max-width: 767px) {
        div.overflow-sm-x {
            flex-wrap: nowrap;
        }
    }
`;
