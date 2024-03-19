/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { menuState } from "../../atoms/menuAtoms";

function RootLayout({ children }) {
    const [ show, setShow ] = useRecoilState(menuState);

    const handelBackgroungClick = (e) => {
        e.stopPropagation() ;
        setShow(() => true);
    }
    return (
        <>
            <div css={s.background}></div>
            <div css={s.layout} onClick={handelBackgroungClick}>
                {children}
            </div>
        </>
    );
}

export default RootLayout;