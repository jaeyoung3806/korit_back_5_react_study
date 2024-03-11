/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as S from "./style";
import defaultImg from "../../assets/images/profile/default.jpeg"
import Mypage from "../../pages/Mypage/Mypage";
import { useEffect, useRef, useState } from "react";

function RootHeader() {
    let [ profileUrl, setProfileUrl ] = useState(defaultImg);
    const [ myPage, setMypage] = useState([]);
    const imgFileRef = useRef();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if(storedUser) {
            setProfileUrl(storedUser.imgurl);
        }
    }, []);

    return (
        <div css={S.layout}>
            <Link css={S.titleLink} to={"/"}>
                <h1>사진첩 어플</h1>
            </Link>
            <Link css={S.mypageLink} to={"/mypage"}>
                <img src={profileUrl} alt="" />
                <input style={{display: "none"}} type="file" ref={imgFileRef} onChange={Mypage.handleImgFileChange} />
            </Link>
        </div>
    );
}


export default RootHeader;