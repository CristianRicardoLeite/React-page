import styled from "styled-components";
import Background from "./assets/bg image.svg";

export const Container = styled.div`

    background: url('${Background}');
    background-size: cover; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const Image = styled.img`

`;

export const ContainerItems = styled.div`
    width: 414px;
    height: 100vh;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    display: flex;
    flex-direction: column;
`;

export const H1 = styled.h1`
    margin: 60px auto;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
`;

export const InputLabel = styled.label`
    margin-left: 60px ;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;

`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    margin: 0 36px;
    margin-bottom: 34px ;
    padding: 15px 25px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin: 10px auto;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    &:hover{ opacity: .8 ;}
    &:active{ opacity: .5 ;}
`;

export const User = styled.li`
    width: 342px;
    height: 58px;
    margin: 15px auto;
    padding: 15px 25px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        &:hover {opacity: 0.8; }
        &:active{ opacity: .5 ;}
    }

`;