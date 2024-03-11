import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import SideBar from './components/SideBar/SideBar';
import SideBarTop from './components/SideBarTop/SideBarTop';
import RootLayout from './components/RoodLayout/RootLayout';
import Mypage from './pages/Mypage/Mypage';
import { MENUS } from './constants/menu';

function App() {
  return (
    <>
      <Reset />
      <SideBarTop />
      <SideBar />
      <RootLayout>
        <Routes>
          {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element} />)}
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
