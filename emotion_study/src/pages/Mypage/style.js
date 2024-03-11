import { css } from "@emotion/react";

export const  layout= css`
    padding: 100px 30px 0px;
`;
export const profileHeader = css`
    box-sizing: border-box;
    margin: 0px auto 20px;
    border: 1px solid #dbdbdb;
    width: 700px;
    padding: 30px;
`;
export const title = css`
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`;

export const profileImg = css`
    margin: 0px auto 20px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    cursor: pointer;
    overflow: hidden;
    & > img{
        width: 100%;
    }
`;
export const nicknameLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    
`;
export const nickname = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid #dbdbdb;
    padding: 5px 10px;
    text-align: center;
    width: 200px;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    &:focus{
        border-bottom: 2px solid #bbb;
        background-color: #fafafa;
    }
`;
export const prifileInputLayout = css`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0px auto 20px;
    border: 1px solid #dbdbdb;
    width: 700px;
    padding: 10px;
`;
export const inputBox = css`
    position: relative;
    margin-bottom: 10px;

`;
export const prifileInput = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 335px;
    padding: 20px 20px 10px;
    font-size: 16px;
    &:nth-last-of-type(3n), &:nth-last-of-type(4n) {
        margin: 0;
    }

    &:focus {
        outline: 2px solid #5dd6ff;
    }
    &+label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        color: #333;
    }
    &:focus + label, &:not(:placeholder-shown) + label {
        top: 13px;
        left:23 px;
        font-size: 12px;
    }
    
`;
export const buttonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
 `;
export const profileButton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    height: 50px;
    padding: 10px 20px;
    width: 700px    ;
    background-color: white;
    font-size: 12px;

    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee  ;
    }
`;