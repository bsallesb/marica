import styled from 'styled-components';

export const Section = styled.div`
    h5 {
        color: rgb(45, 103, 127);
        font-weight: bold;
    }

    p {
        color: #6c757d !important;
    }

    img {
        width: 350px;
        height: 196.875px;
        width: 100%;
        border-radius: 5px 5px 0px 0px;
    }
`;

export const Pill = styled.span`
    margin: 0px 12px 15px 0px;
    border-radius: 15px;
    font-size: 12px;
    padding: 2px 20px 2px 20px;
`;

export const BorderCard = styled.div`
    border-radius: 5px;
`;

export const Cover = styled.div`
    width: 100%;
    height: 250px;
    background-size: cover;
    border-radius: 5px 5px 0px 0px;
`;
