import styled from 'styled-components';

export const MainHeader = styled.div`
    background-color: rgb(45, 103, 127);

    li {
        list-style-type: none;
        color: #fff;
    }

    a,
    p {
        color: #fff;
        text-decoration: none;
    }

    button {
        font-size: 18px;
        margin-right: 10px;
    }
`;

export const Wrapper = styled.div`
    min-width: 30px;
`;
