/** @jsxImportSource @emotion/react */
import { useQueryClient } from "react-query";
import * as s from "./style";

function Mypage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");


    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.imgBox}>
                    <div css={s.profileImg}>
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                </div>
                <div css={s.infoBox}>
                    <div css={s.infoText}>사용자이름: {principalData.data.username}</div>
                    <div css={s.infoText}>이름: {principalData.data.name}</div>
                    <div css={s.emailBox}>
                        <div css={s.infoText}>이메일: {principalData.data.email}</div>
                        {
                            principalData.data.authorities.filter(auth => auth.authority === "ROLE_USER").length === 0
                            ?
                            <button css={s.infoButton}>인증하기</button>
                            :
                            <>체크</>

                        }
                        
                    </div>
                    <div>
                        <button>정보 수정</button>
                        <button>비밀번호 수정</button>
                    </div>
                </div>
            </div>
            <div css={s.bottom}>

            </div>
        </div>
    );
}

export default Mypage;