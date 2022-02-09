import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleSection = styled.div`
    a,
    li {
        font-size: 28px;
        font-weight: bold;
        text-decoration: none;
        color: rgb(51, 51, 51);
    }
`;

export const TitleArrow = styled(Link)`
    color: rgb(51, 51, 51);
`;
