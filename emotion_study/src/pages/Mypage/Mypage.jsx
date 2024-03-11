/**@jsxImportSource @emotion/react */
import * as S from "./style";
import { useRef, useState } from "react";

function Mypage(props) {
    const [ preview, setPreview ] = useState("");
    const imgFileRef = useRef();

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();
        
        fileReader.onload = (e) => {
            setPreview(e.target.result)
        };
        
        if(e.target.files.length === 0){
            return;
        }
        fileReader.readAsDataURL(e.target.files[0])

    }

    return (
        <div css={S.layout}>
            <div css={S.profileHeader}>

                <h1 css={S.title}>마이페이지</h1>
                <div css={S.profileImg} onClick={() => imgFileRef.current.click()}>
                    <img src={preview} alt="" />
                    <input style={{display: "none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange} />
                </div>
                <div css={S.nicknameLayout}>
                    <input css={S.nickname} type="text" maxLength={20} />
                </div>
            </div>
            <div css={S.prifileInputLayout}>
                <div css={S.inputBox}>
                    <input css={S.prifileInput} id="name" type="text" placeholder=" "/>
                    <label htmlFor="name">성명</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.prifileInput} id="name" type="text" placeholder=" "/>
                    <label htmlFor="bitrh">성명</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.prifileInput} id="phone" type="text" placeholder=" "/>
                    <label htmlFor="phone">성명</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.prifileInput} id="name" type="text" placeholder=" "/>
                    <label htmlFor="name">성명</label>
                </div>
            </div>
            <div css={S.buttonLayout}>
                <button css={S.profileButton}>수정하기</button>
            </div>
        </div>
    );
}

export default Mypage;