import styled from 'styled-components';

export const BannerSection = styled.div`
    background-color: rgb(45, 103, 127);
    color: #fff;
    position: relative;
    overflow: hidden;

    h2 {
        font-size: 20px;
    }

    img {
        z-index: 1;
    }
`;

export const Background = styled.section`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    border-top: 600px solid rgb(255, 255, 255);
    border-left: 380px solid transparent;
    height: 0px;
    width: 500px;
    z-index: 0;
`;

export const SmallTitle = styled.h1`
    font-size: 30px;
    font-weight: bold;
`;

export const LargeTitle = styled.h1`
    font-size: 65px;
    font-weight: bold;
`;
