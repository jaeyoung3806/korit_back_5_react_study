import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    width: 100%;
    height: 90%;
    color: white;
`;

export const title = css`
    cursor: default;
`;

export const imageBox = css`
    box-sizing: border-box;
    margin-bottom: 30px;
    border: 1px solid #666666;
    width: 80px;
    height: 80px;
    overflow: hidden;

    & > img {
        height: 100%;
        width: 100%;
    }
`;