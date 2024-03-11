import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    top: ${isShow ? "0px" : "-80px"};
    
    right: 0px;
    z-index: 3;
    border-right: 1px solid #dbdbdb;
    width: 50%;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: white;
    box-shadow: 3px 3px 3px 3px #00000022;

`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    
    bottom: -15px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 50px;
    height: 15px;
    background-color: white;
    cursor: pointer;
    &:hovor {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;

export const menuList = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* transform: translateY(-50%) ; */
    
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    width: 200px;
    height: 50px;
    margin: 0px 10px;

    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(1) {
        border-top: 1px solid #dbdbdb;
    }
    &:hover {
        background-color: #eee;
    }
    &:active{
        background-color: #bdbdbd;
    }
`;