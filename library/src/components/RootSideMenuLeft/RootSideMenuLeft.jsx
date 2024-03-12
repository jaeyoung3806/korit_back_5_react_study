/** @jsxImportSource @emotion/react */
import { HiMenu } from "react-icons/hi";
import * as s from "./style";
import { useRecoilState } from "recoil";
import { menuState } from "../../atoms/menuAtoms";
import { Link } from "react-router-dom";

function RootSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);

    const handleCloseMenuClick = () => {
        setShow(() => false);
    }

    return (
        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseMenuClick}> 
                    <HiMenu />
                </button>
            </div>

            <div css={s.profile}>
                <Link css={s.menuLink}>도서 검색</Link>
            </div>

            <div css={s.menuList}>

            </div>
        </div>
    );
}

export default RootSideMenuLeft;