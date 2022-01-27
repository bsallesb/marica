import styled from "styled-components";

export const BannerSection = styled.div`

    background-color: rgb(45, 103, 127);
    color: #fff;

    h1 {
        font-size: 65px;
        font-weight: bold;
    }

    h2 {
        font-size: 20px;
    }
`;

export const Background = styled.section`

position: absolute;
top: 0px;
right: 0px;
border-top: 600px solid rgb(255, 255, 255);
border-left: 300px solid transparent;
height: 0px;
width: 500px;
z-index: 0;
`;
