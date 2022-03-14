import styled from 'styled-components';

export const MaricaBackground = styled.div`
    background-size: cover;
    height: 70vh;
    position: relative;
    overflow: hidden;
    background-attachment: fixed;

    &::after {
        content: '';
        position: absolute;
        background-image: linear-gradient(
            rgba(245, 245, 245, 0) 0%,
            rgba(245, 245, 245) 100%
        );
        height: 100px;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const Card = styled.div`
    margin-top: -150px;

    img {
        max-width: 100%;
        height: auto;
    }
`;
