import styled from 'styled-components'

export const MovieMainItem = styled.div`
    width: 223px;
    margin:  12px 0;
    position: relative;
    @media (max-width: 880px) {
        width: 160px;
    }
`;
export const Title = styled.h3`
    width: 100%;
    color: #fff;
    margin: 0;
    @media (max-width: 880px) {
        font-size: 16px;
    }
`;
export const VoteAverage = styled.div`
    width: 60px;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 0.4rem;
    justify-content: center;
    background: #3bb33b;
    display: flex;
    padding: 8px 6px;
    font-size: 13px;
    font-weight: 900;
    color: #fff;
    @media (max-width: 880px) {
        width: 52px;
        padding: 6px 0px;
    }
`;