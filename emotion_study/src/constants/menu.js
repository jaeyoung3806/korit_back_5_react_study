import ImegeEx from "../pages/ImageEx/ImegeEx";
import Mypage from "../pages/Mypage/Mypage";
import ImegeEx2 from "../pages/ImageEx2/ImageEx2";
import ImegeEx3 from "../pages/ImageEx3/ImageEx3";
import BoardEx from "../pages/BoardEx/BoardEx";
import BoardWrite from "../pages/BoardWrite/BoardWrite";
import BoardList from "../pages/BoardList/BoardList";
export const MENUS = [
    {
        id: 1,
        path: "/image/ex",
        name: "마이페이지",
        element: <Mypage />
    },
    {
        id: 2,
        path: "/board",
        name: "게시글",
        element: <>게시글</>
    },
    {
        id: 3,
        path: "/notice",
        name: "공지사항",
        element: <>공지사항</>
    },
    {
        id: 4,
        path: "/image/ex",
        name: "이미지 불러오기",
        element: <ImegeEx />
    },
    {
        id: 5,
        path: "/image/ex2",
        name: "다중업로드",
        element: <ImegeEx2 />
    },
    {
        id: 6,
        path: "/image/ex3",
        name: "이미지 여러개 불러오기",
        element: <ImegeEx3 />
    },
    {
        id: 7,
        path: "/board/write",
        name: "게시글 작성",
        element: <BoardWrite />
    },
    {
        id: 8,
        path: "/board/list",
        params: {
            page: 1
        },
        name: "게시글 목록",
        element: <BoardList />
    }
];