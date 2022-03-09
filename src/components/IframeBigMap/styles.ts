import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LocationPoint = styled.button`
    transform: translate(-50%, -20px);
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
`;

export const Title = styled(Link)`
    margin-bottom: -80px;
    z-index: 1;
    position: absolute;
`;

export const CardMarker = styled.div`
    width: 400px;
    position: absolute;
    bottom: 75px;
    transform: translateX(-50%);

    &:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 20px 20px 0;
        border-color: #ffffff transparent;
        display: block;
        width: 0;
        z-index: 1;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Wrapper = styled.div`
    position: relative;
`;
