import styled from 'styled-components';

export const Container = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #6f42c1;
    color: #FFF;
    position: fixed;
    top: 0;
    left: 0;

    svg {
        position: absolute;
        top: 20px;
        right: 40px;
        width: 40px;
        height: 40px;
        background: #17a2b8;
        padding: 5px;
        border-radius: 6px;
    }
`;
