/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtoms";
import { FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { principalState } from "../../atoms/principalAtom";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import instance from "../../apis/utils/instance";


function RootHeader() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin, setLogin ] = useState(false);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery")
    

    useEffect(() => {
        const principalQueryState = queryClient.getQueryState("principalQuery");
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status])

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.invalidateQueries("principalQuery");
    }

    const handleOpenMenuClick = () => {
        setShow(() => true);
    }

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenMenuClick}>
                <HiMenu />
            </button>
            {
                !isLogin  
                ? <Link css={s.account} to={"/auth/signin"}>
                    <FiUser />
                </Link>
                : 
                <div css={s.accountItems}>
                    <button css={s.logout} onClick={handleLogoutClick}>
                        <FiLogOut />
                    </button>
                    <Link css={s.account} to={"/account/mypage"}>
                        <FiUser />
                    </Link>
                </div>
            }
        </div>
    );
}

export default RootHeader;