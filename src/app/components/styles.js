import { styled } from 'styled-components';

export const CardBg = styled.div`
    background-color: #f2f2f2;
    color: #41186a;
    margin: 20px 0;
    padding: 25px 25px 100px 25px;
    position: relative;
`;

export const UserName = styled.h1`
    font-size: 1.4rem;
`;

export const UserEmail = styled.h3`
    font-size: 1.2rem;
`;

export const UserPhone = styled.h3`
    font-size: 1.2rem;
`;

export const DeleteCover = styled.div`
    top: 0;
    position: absolute;
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    color: #e74d4d;
`;

export const DeleteBg = styled.div`
    width: calc(100% - 50px);
    position: absolute;
    right: 25px;
    bottom: 25px;
    border-radius: 7px;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.1);
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background-color: #e33333;
    color: #f2f2f2;
    &:hover ${DeleteCover} {
        transition: all 0.5s;
        transform: rotatey(-80deg);
      }
`;

export const ComfirmDelete = styled.p`
    font-weight: bold;
`;