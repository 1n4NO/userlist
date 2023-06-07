import { styled } from 'styled-components'

export const CardBg = styled.div`
    background-color: #f2f2f2;
    color: #41186a;
    margin: 20px 0;
    padding: 25px 25px 100px 25px;
    position: relative;
`

export const UserName = styled.h1`
    color: #1a092a;
    font-size: 1.4rem;
`

export const UserDetails = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
`

export const DeleteCover = styled.div`
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 7px;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.1);
    color: #e74d4d;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    transition: all 0.5s;
    transform-origin: 0;
    user-select: none;
    width: 100%;
`

export const DeleteBg = styled.div`
    align-items: center;
    background-color: #e33333;
    border-radius: 7px;
    bottom: 25px;
    box-shadow: 1px 1px 12px rgba(0,0,0,0.1);
    color: #f2f2f2;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    perspective: 2000px;
    position: absolute;
    right: 25px;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    user-select: none;
    width: calc(100% - 50px);
    &:hover ${DeleteCover} {
        transform: rotatey(-80deg);
        transition: all 0.5s;
      }
`

export const ComfirmDelete = styled.p`
    font-weight: bold;
`