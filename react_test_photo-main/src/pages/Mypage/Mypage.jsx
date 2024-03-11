/** @jsxImportSource @emotion/react */
import React, { useEffect, useMemo, useRef, useState } from "react";
import WideButton from "../../components/WideButton/WideButton";
import { useInput } from "../../hooks/useInput";
import * as S from "./style";
import defaultProfile from "../../assets/images/profile/default.jpeg"


/**
 * 
 * 1. 이미지 클릭시 이미지 변경가능해야함.
 * 2. 수정하기 버튼 클릭시 localStorage에 key: user value: JSON데이터
 *  {
 *      nickname: "테스트계정",
 *      namd: "김준일",
 *      birthday: "1994-09-07",
 *      imgUrl: ""
 *  }
 *  저장되어야하고 페이지 로드시 불러와야함.
 * 3. RootHeader의 프로필 이미지도 변경되어야함.
 */
function Mypage(props) {
    let [ nicknameValue, handleNicknameOnChange, setNickname ] = useInput();
    let [ nameValue, handleNameOnChange, setName ] = useInput();
    let [ birthdayValue, handleBirthdayOnChange, setBirthday ] = useInput();
    let [ profileUrl, setProfileUrl ] = useState(defaultProfile);
    const imgFileRef = useRef();
    
    
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if(storedUser) {
            setProfileUrl(storedUser.imgurl);
            setNickname(storedUser.nickname);
            setName(storedUser.name);
            setBirthday(storedUser.birthday);
        }
    }, []);

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            setProfileUrl(e.target.result)
        };
        if(e.target.files.length === 0){
            return;
        }
        fileReader.readAsDataURL(e.target.files[0])
    }

    const handleSetMypage = () => {
        localStorage.setItem(
            `user`,
            JSON.stringify({
                nickname: nicknameValue,
                name: nameValue,
                birthday: birthdayValue,
                imgurl: profileUrl
            })
        );
    }
    return (
        <div css={S.layout}>
            <div css={S.imageBox} onClick={() => imgFileRef.current.click()}>
                <img src={profileUrl} alt="" />
                <input style={{display: "none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange} />
            </div>
            
            <input css={S.inputBox} type="text" placeholder="닉네임" value={nicknameValue} onChange={handleNicknameOnChange}/>
            <input css={S.inputBox} type="text" placeholder="이름" value={nameValue} onChange={handleNameOnChange}/>
            <input css={S.inputBox} type="text" placeholder="생년월일" value={birthdayValue} onChange={handleBirthdayOnChange}/>
            <WideButton text={"수정하기"} onClick={handleSetMypage}/>
        </div>
    );
}

export default Mypage;