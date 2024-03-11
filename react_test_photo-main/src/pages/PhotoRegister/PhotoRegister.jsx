/** @jsxImportSource @emotion/react */
import * as S from "./style";
import WideButton from "../../components/WideButton/WideButton";
import { useEffect, useRef, useState } from "react";


/**
 *  1. 사진 불러오기 버튼을 클릭 후 5개 이상의 이미지를 불러올 수 있어야함.
 *  2. PromiseAll을 사용하여 이미지를 순서대로 불러와야함.
 *  3. 불러오기가 완료되면 "이미지를 저장하시겠습니까?" 라는 확인 취소 메세지 창이 떠야함.
 *  4. 확인 클릭시 localStorage에 key: photo, value: JSON 데이터
 *      [
 *          {
 *              id: 1,
 *              imageUrl: ""
 *          },
 *          {
 *              id: 2,
 *              imageUrl: ""
 *          }
 *      ]
 *      형식으로 저장되어야함.
 *  5. 취소시 저정되면 안됨.
 */

function PhotoRegister() {
    const imgFileRef = useRef();
    const [ imageUrl, setImageUrl ] = useState([]);

        const useConfirm = (message = "이미지를 저장하시겠습니까?", onConfirm, onCancle) => {
            if (!onConfirm || typeof onConfirm !==  "function") {
                return;
            }
            if (onCancle && typeof onCancle !== "function") {
                return;
            }
            const confirmAction = () => {
                if(window.confirm(message)) {
                    onConfirm();
                } else {
                    onCancle();
                }
            };
            return confirmAction;
        };
        let promises = [];
        let uploadImages = {};

        promises = {};
        const uploadConfirm = () => {
            
        };
        
    const cancleConfirm = () => alert("취소했습니다.");
    const confirmUpload = useConfirm(
        "등록하시겠습니까?",
        uploadConfirm,
        cancleConfirm
        );
    return (
        
        <div css={S.layout}>
            <h1 css={S.title}>사진 등록하기</h1>
            <input type="file" style={{display: "none"}} multiple={true} ref={imgFileRef} onChange={confirmUpload}/>
            <WideButton text={"사진 불러오기"} onClick={() => imgFileRef.current.click()}/>
        </div>
    );
}

export default PhotoRegister;